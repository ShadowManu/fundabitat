'use strict';

import * as angular from 'angular';

import {Root} from './root/root';

import {Home} from './home';

import {About} from './about/about';
import {Relations} from './about/relations';

import {Areas} from './areas';

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
  
  .state('root', {
    url: '/',
    template: '<root></root>'
  })

  .state('landing', {
    url: '/landing',
    template: '<home></home>'
  })

  .state('root.about', {
    url: '/nosotros',
    template: '<about></about>'
  })

  .state('root.about.relations', {
    url: '/relaciones',
    template: "<about-relations></about-relations>"
  })

  .state('root.areas', {
    url: 'areas',
    template: '<areas></areas>'
  })

  ;

}])

// Directives
  
.directive('root', Root)
.directive('home', Home)

.directive('about', About)
.directive('aboutRelations', Relations)

.directive('areas', Areas);
