'use strict';

import { Directive, RouteConfig } from "../../shared/angular/decorators";

import './retam.css!';

export const NAME = 'Retam';

@RouteConfig({
  name: NAME,
  url: '/retam'
})
@Directive(NAME, {
  templateUrl: 'statics/retam/retam.html'
})
export class RetamComponent {

  static $inject: string[] = ['$state'];

  constructor($state) {
    (<any> window).stateDebug = $state;
  }
}

