'use strict';

import * as angular from 'angular';

import config from './app-config';

// Global Styles
import 'angular-material/angular-material.css!';
import 'shared/common.css!'
import 'app.css!';

// Global Libraries
import 'angular-material';
import 'angular-ui-router';

// Application Modules
import 'statics/statics';
import 'shared/shared';

export const NAME = 'fd';
export const DEPS = [
  'ngMaterial',
  'fd.statics',
  'fd.shared'
];

// Application Setup
angular.module(NAME, DEPS)
.config(config);
