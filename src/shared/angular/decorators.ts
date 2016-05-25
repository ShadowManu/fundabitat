'use strict';

import * as lo from 'lodash';
import * as cc from 'change-case';

import { IDirectiveObj, IDirective, IRouteConfigObj } from 'angular-extras';

/**
 * Directive decorator factory to create simple Angular Directives
 * @param name
 * @param obj
 */
export function Directive(name: string, obj: IDirectiveObj): Function {

  // Actual Decorator
  return function(Component: Function): IDirective {

    // Directive template
    let template = {
      restrict: 'E',
      transclude: true,

      scope: {},
      bindToController: {},
      controller: Component,

      controllerAs: '$ctrl',
      templateUrl: 'statics/landing/landing.html'
    };

    // Setup given options
    let dirOpts: IDirectiveObj = <IDirectiveObj> lo.assign(template, obj);

    // Setup directive
    let Directive: IDirective = <IDirective> function() { return dirOpts };
    Directive.dirName = cc.camel(name);
    
    return Directive;
  }
}

/**
 * RouteConfig decorator factory to expand Directives
 * allowing them to carry UI-router information to be read
 * by the helper loader tool
 * @param name
 * @constructor
 */
export function RouteConfig(name: string);
export function RouteConfig(config: IRouteConfigObj)
export function RouteConfig(data: any): Function {
  
  let config: IRouteConfigObj = (typeof data == 'string') ? { name: data } : data;
  
  // Actual Decorator
  return function(Directive: IDirective): void {

    Directive.route = ['$stateProvider', function($stateProvider) {
      let paramName = cc.param(config.name);

      let name = cc.pascal(config.name);
      let url = (config.url != undefined) ? config.url : `/${paramName}`;
      let template = config.template || `<${paramName}></${paramName}>`;
      let abstract = config.abstract || false;

      $stateProvider.state({ name, url, template, abstract });
    }];
  }

}
