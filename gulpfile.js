'use strict';

const gulp         = require('gulp');
const fractal      = require('./fractal.js');
const logger       = fractal.cli.console;
const sass         = require('gulp-sass');
const sassGlob     = require('gulp-sass-glob');
const plumber      = require('gulp-plumber');
const notify       = require('gulp-notify');
const path         = require('path');

gulp.task('sass',function() {
    return gulp.src('assets/scss/**/*.scss')
    .pipe(customPlumber('Error running Sass'))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
});

gulp.task('watch', ['sass'], function() {
   gulp.watch([
        'components/**/*.scss',
        'assets/scss/**/*.scss'
        ], ['sass']);
});

function customPlumber(errTitle) {
    return plumber({
        errorHandler: notify.onError({
            title: errTitle || "Error running Gulp",
            message: "Error: <%= error.message %>",
        })
    });
}

gulp.task('fractal:start', function(){
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.url}`);
    });
});

gulp.task('default', ['fractal:start', 'sass', 'watch']);

/* Scripts */

gulp.task('scripts:clean', function() {
  return del(['public/assets/scripts']);
});

const bundleScripts = watch => {
  let cache;

  var bundler = function() {
    var b = browserify()
      .transform('rollupify', {
        config: {
          onwarn: function(message) {
            if (message.code === 'THIS_IS_UNDEFINED') {
              return;
            }

            console.error(message);
          },

          plugins: [
            nodeResolve({
              jsnext: true,
              main: true,
              preferBuiltins: false
            }),
            commonjs({
              include: 'node_modules/**',
              namedExports: {
                'node_modules/events/events.js': Object.keys(require('events'))
              }
            }),
            rollupBabel({
              plugins: ['lodash'],
              presets: ['es2015-rollup', 'stage-2'],
              babelrc: false,
              exclude: 'node_modules/!**'
            })
          ]
        },
      }),
      stream = through2.obj(function(file, enc, next) {
        // add each file to the bundle
        b.add(file.path);
        next();
      }, function(next) {
        b.bundle(function(err, src) {
          if(err) {
            throw err;
          }

          // create a new vinyl file with bundle contents
          // and push it to the stream
          stream.push(new vinyl({
            path: 'bundle.js', // this path is relative to dest path
            contents: src
          }));
          next();
        });
      });
    return stream;
  };

  return gulp.src(['./assets/js/polyfills.js', './assets/js/components.js'])
    .pipe(bundler())
    .on('error', function(err) {
      gutil.log(err.message);
      this.emit('end');
    })
    .pipe(gulp.dest('public/assets/scripts'));
};

gulp.task('scripts:bundle', () => bundleScripts(false));

/* UGLIFY of bundled scripts
    - run this after all scripts are bundled to produce a minified version
*/
gulp.task('scripts:uglify', function(done) {
  return bundleScripts(false)
    .on('error', function(err) {
      gutil.log(err.message);
      this.emit('end');
    })
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/assets/scripts'));
});
/* END UGLIFY of bundled scripts */
