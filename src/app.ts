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
.config(['$mdThemingProvider', function($mdThemingProvider) {
  
  $mdThemingProvider.theme('default')
    .primaryPalette('orange')
    .accentPalette('light-green');
}]);

