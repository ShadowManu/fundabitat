'use strict';

import * as angular from 'angular';

import { DirectiveLoader } from '../shared/angular/loader';

import { AboutComponent } from './about/main/about';
import { AreasComponent } from './areas/areas'
import { HomeComponent } from './home/home';
import { ProgramsComponent } from './programs/programs';
import { RelationsComponent } from './about/relations/relations';
import { RootComponent } from './root/root';
import { TeamComponent } from './about/team/team';

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
  HomeComponent,
  ProgramsComponent,
  RelationsComponent,
  RootComponent,
  TeamComponent
]);

// Default location configuration
module.config(['$urlRouterProvider', function($urlRouterProvider: any): void {
  $urlRouterProvider.otherwise('/inicio');
}]);

