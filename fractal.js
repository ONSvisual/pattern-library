'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Pattern Library');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/*
* Custom status types for components
*/
fractal.components.set('statuses', {
  inDevelopment: {
    label: 'In development',
    description: 'Do not use.',
    color: '#D32F2F'
  },
  testing: {
    label: 'Testing',
    description: 'Use with caution.',
    color: '#FF9933'
  },
  ready: {
    label: 'Ready',
    description: 'Go! Go! Go!',
    color: '#0F8243'
  },
  notInUse: {
    label: 'Not in use',
    description: 'May day',
    color: '#D0D2D3'
  }
});

/*
 * Configure the web interface.
 */
 fractal.web.set('static.path', `${__dirname}/public`);
 fractal.web.set('builder.dest', 'dist');

 const theme = require('@frctl/mandelbrot')({
   nav: ['docs', 'components'],
   panels: ['notes', 'html', 'info', 'context'],
   static: {
     mount: 'theme'
   },
   styles: [
     'default',
     '/assets/css/patternlib.css', // Used for eQ Pattern Library specific styles e.g. Colour swatches
   ],
   scripts: ['/assets/scripts/bundle.js', 'default']
 });

 fractal.web.theme(theme);
