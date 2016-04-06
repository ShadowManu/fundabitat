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

export const NAME = 'fd';
export const DEPS = [
  'ngMaterial',
  'fd.routes',
  'fd.statics'
];

// Application Setup
angular.module(NAME, DEPS);