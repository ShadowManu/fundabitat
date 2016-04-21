'use strict';

import 'statics/programs.css!';

export function Programs(): any {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    bindToController: {},

    require: '',
    link: function(): any {},
    controller: ProgramsCtrl,

    controllerAs: 'p',
    templateUrl: 'statics/programs.html'
  };
}

export class ProgramsCtrl {

  public static $inject: string[] = [];

  constructor() {

  }

}