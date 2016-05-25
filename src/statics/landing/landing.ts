'use strict';

import { Directive, RouteConfig } from "../../shared/angular/decorators";

import './landing.css!';

export const NAME = 'Landing';

@RouteConfig(NAME)
@Directive(NAME, {
  templateUrl: 'statics/landing/landing.html'
})
export class LandingComponent {

  static $inject: string[] = ['$state'];

  constructor($state) {
    (<any> window).stateDebug = $state;
  }
}

