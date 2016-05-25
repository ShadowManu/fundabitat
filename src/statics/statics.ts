'use strict';

import * as angular from 'angular';

import { DirectiveLoader } from '../shared/angular/loader';

// Load Directives
import {About} from './about/about';

import {Relations} from './about/relations';
import {Team} from './about/team';
import {Areas} from './areas';
import {Programs} from './programs';

import { RootComponent } from './root/root';
import { LandingComponent } from './landing/landing';

export const NAME: string = 'fd.statics';
export const DEPS: string[] = [
  'ngMaterial',
  'ui.router'
];


// Register Module
export let module = angular.module(NAME, DEPS);

// Load Components
DirectiveLoader(module, [
  RootComponent,
  LandingComponent
]);

// Routes
module.config(['$stateProvider', '$urlRouterProvider', function($stateProvider: any, $urlRouterProvider: any): any {

  // Home is default view
  $urlRouterProvider.otherwise('/landing');

  $stateProvider

  .state('Root.About', {
    url: '/nosotros',
    template: '<about></about>'
  })

  .state('Root.Relations', {
    url: '/nosotros/relaciones',
    template: "<about-relations></about-relations>"
  })

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
.directive('about', About)
.directive('aboutRelations', Relations)
.directive('aboutTeam', Team)
.directive('areas', Areas)
.directive('programs', Programs);

