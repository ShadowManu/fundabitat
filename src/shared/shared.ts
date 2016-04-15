'use strict';

import * as angular from 'angular';

import {Navbar} from './navbar/navbar';

export const NAME: string = 'fd.shared';
export const DEPS: string[] = [
  'ngMaterial',
  'ui.router',
];

// Register Module
angular.module(NAME, DEPS)

// Directives
.directive('navbar', Navbar);
