'use strict';

import * as angular from 'angular';
import {Home} from './home';

import {About} from './about/about';
import {Relations} from './about/relations';

import {Areas} from './areas';

import {Programs} from './programs';

export const NAME: string = 'fd.statics';
export const DEPS: string[] = [
  'ngMaterial',
  'ui.router'
];

// Register Module
angular.module(NAME, DEPS)

// Routes
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider: any, $urlRouterProvider: any): any {

  // Home is default view
  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    template: '<home></home>'
  })

  .state('about', {
    url: '/nosotros',
    template: '<about></about>'
  })

  .state('about.relations', {
    url: '/relaciones',
    template: "<about-relations></about-relations>"
  })

  .state('areas', {
    url: '/areas',
    template: '<areas></areas>'
  })

    .state('programs', {
      url: '/programas',
      template: '<programs></programs>'
    })

  ;

}])

// Directives
.directive('home', Home)

.directive('about', About)
.directive('aboutRelations', Relations)

.directive('areas', Areas)

.directive('programs', Programs);

