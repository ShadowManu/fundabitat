'use strict';

import './root.css!'

export function Root(): any {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    bindToController: {},

    require: '',
    link: function(): any {},
    controller: RootCtrl,

    controllerAs: 'n',
    templateUrl: 'statics/root/root.html'
  };
}

export class RootCtrl {
  public static $inject: string[] = [];
  constructor() { }
}
