'use strict';

import * as angular from 'angular';

// Global Styles
import 'angular-material/angular-material.css!';
import 'app.css!';

// Global Libraries
import 'angular-material';

export const NAME = "fh";
export const DEPS = [
  'ngMaterial'
];

// Application Setup
angular.module(NAME, DEPS);