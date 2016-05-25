'use strict';

import * as angular from 'angular';

import { DirectiveLoader } from '../shared/angular/loader';

import { AboutComponent } from './about/about';
import { AreasComponent } from './areas'
import { LandingComponent } from './landing/landing';
import { ProgramsComponent } from './programs';
import { RelationsComponent } from './about/relations';
import { RootComponent } from './root/root';
import { TeamComponent } from './about/team';

export const NAME: string = 'fd.statics';
export const DEPS: string[] = [
  'ngMaterial',
  'ui.router'
];

// Register Module
export let module = angular.module(NAME, DEPS);

// Load Components
DirectiveLoader(module, [
  AboutComponent,
  AreasComponent,
  LandingComponent,
  ProgramsComponent,
  RelationsComponent,
  RootComponent,
  TeamComponent
]);

// Default location configuration
module.config(['$urlRouterProvider', function($urlRouterProvider: any): void {
  $urlRouterProvider.otherwise('/landing');
}]);

