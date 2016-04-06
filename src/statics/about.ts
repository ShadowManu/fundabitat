'use strict';

export function About(): any {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    bindToController: {},

    require: '',
    link: function(): any {},
    controller: AboutCtrl,

    controllerAs: 'a',
    templateUrl: 'statics/about.html'
  };
}

export class AboutCtrl {

  public static $inject: string[] = [];

  constructor() {

  }

}
