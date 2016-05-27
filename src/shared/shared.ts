'use strict';

import * as angular from 'angular';

import { DirectiveLoader } from './angular/loader';

import { NavbarComponent } from './navbar/navbar';

export const NAME: string = 'fd.shared';
export const DEPS: string[] = [
  'ngMaterial',
  'ui.router',
];

// Register Module
export let module = angular.module(NAME, DEPS);

// Load Components
DirectiveLoader(module, [
  NavbarComponent
]);
