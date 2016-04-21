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
    '50': 'ECD6C0',
    '100': 'EACBAC',
    '200': 'E9C19A',
    '300': 'E5B789',
    '400': 'E4A668',
    '500': 'E49B51', //
    '600': 'E69442',
    '700': 'E4892E',
    '800': 'E48220',
    '900': 'E57D15',
    'A100': 'CE7474',
    'A200': 'BC5656',
    'A400': 'B53E3D', //
    'A700': 'A62929',
    'contrastDefaultColor': 'light',

    'contrastDarkColors': ['50', '100',
      '200', '300', '400', 'A100']
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('fundabitatPalette')
});