/**
 * Collection of objects describing the custom palettes and color intentions to be used under Angular Material
 */

'use strict';

/**
 * Defines the primary Earth palette of the Fundabitat branding colors
 * @type Object
 */
export let EarthPalette = {
  '50': '#fff2e5',
  '100': '#ffe4c9',
  '200': '#ffd2a6',
  '300': '#ffc182',
  '400': '#ffb266',
  '500': '#ffa64c',
  '600': '#f2973d',
  '700': '#e58a2e',
  '800': '#d97d21',
  '900': '#cc7014',
  'A100': '#ffcc99',
  'A200': '#ffa64c',
  'A400': '#ff8c1a',
  'A700': '#e57e17',

  // Light text by default
  'contrastDefaultColor': 'light',

  // Dark text in light backgrounds
  'contrastDarkColors': ['50', '100', '200', '300', 'A100', 'A200']
};

/**
 * Defines the color intentions of the Earth palette
 */
export let EarthIntentions = {
  'default': '600',
  'hue-1': '300',
  'hue-2': '800',
  'hue-3': 'A100'
};

/**
 * Defines the color intentions of the red palette used as an accent color
 */
export let RedIntentions  = {
  'default': '700',
  'hue-1': '500',
  'hue-2': '900',
  'hue-3': 'A700'
};
