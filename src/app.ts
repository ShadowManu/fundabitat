'use strict';

import * as angular from 'angular';

// Global Styles
import 'angular-material/angular-material.css!';
import 'app.css!';

// Global Libraries
import 'angular-material';
import 'angular-ui-router';

// Configs
import './app-routes'

// Application Modules
import 'statics/statics';
import 'shared/shared';

export const NAME = 'fd';
export const DEPS = [
  'ngMaterial',
  'fd.routes',
  'fd.statics',
  'fd.shared'
];

// Application Setup
angular.module(NAME, DEPS)
    
// Configuring Material Theme

.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('fundabitatPalette', {
    '50': 'ffebee',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': 'E49B51', //
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'B53E3D', //
    'A700': 'd50000',
    'contrastDefaultColor': 'light',

    'contrastDarkColors': ['50', '100',
      '200', '300', '400', 'A100']
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('fundabitatPalette')
});