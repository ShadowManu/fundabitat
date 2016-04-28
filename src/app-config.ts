/**
 * Configures the main angular application by exporting the config function to be used through `angular.config`
 */

'use strict';

import {EarthPalette, EarthIntentions, RedIntentions} from "./palettes/palettes";

/**
 * Application configuration function
 * @param $mdThemingProvider
 */
export default function($mdThemingProvider) {
  
  // Configure Material Design Palettes
  $mdThemingProvider.definePalette('earth', EarthPalette);

  $mdThemingProvider.theme('default')
  .primaryPalette('earth', EarthIntentions)
  .accentPalette('red', RedIntentions);
};
