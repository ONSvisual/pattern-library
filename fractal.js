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
fractal.set('project.title', 'Pattern');

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
