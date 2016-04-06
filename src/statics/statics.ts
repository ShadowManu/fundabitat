'use strict';

import * as angular from 'angular';
import {Home} from './home';
import {About} from './about';

export const NAME: string = 'fd.statics';
export const DEPS: string[] = [
  'ngMaterial',
  'ui.router',
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
    template: "<about></about>"
  });

}])

// Directives
.directive('home', Home)
.directive('about', About);
