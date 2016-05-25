'use strict';

import { Directive, RouteConfig } from "../../shared/angular/decorators";

import './home.css!';

export const NAME = 'Home';

@RouteConfig({
  name: NAME,
  url: '/inicio'
})
@Directive(NAME, {
  templateUrl: 'statics/home/home.html'
})
export class HomeComponent {

  static $inject: string[] = ['$state'];

  constructor($state) {
    (<any> window).stateDebug = $state;
  }
}

