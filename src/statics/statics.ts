'use strict';

import * as angular from 'angular';

import { DirectiveLoader } from '../shared/angular/loader';

// Load Directives

import {Team} from './about/team';
import {Areas} from './areas';
import {Programs} from './programs';

import { AboutComponent } from './about/about';
import { LandingComponent } from './landing/landing';
import { RelationsComponent } from './about/relations';
import { RootComponent } from './root/root';

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
  LandingComponent,
  RelationsComponent,
  RootComponent
]);

// Routes
module.config(['$stateProvider', '$urlRouterProvider', function($stateProvider: any, $urlRouterProvider: any): any {

  // Home is default view
  $urlRouterProvider.otherwise('/landing');

  $stateProvider

  .state('Root.Team', {
    url: '/nosotros/equipo',
    template: "<about-team></about-team>"
  })

  .state('Root.Areas', {
    url: '/areas',
    template: '<areas></areas>'
  })

  .state('Root.Programs', {
    url: '/programas',
    template: '<programs></programs>'
  })
  ;

}]);


// Directives

module
.directive('aboutTeam', Team)
.directive('areas', Areas)
.directive('programs', Programs);

