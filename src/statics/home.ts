'use strict';

export function Home(): any {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    bindToController: {},

    require: '',
    link: function(): any {},
    controller: HomeCtrl,

    controllerAs: 'h',
    templateUrl: 'statics/home.html'
  };
}

export class HomeCtrl {

  public static $inject: string[] = [];

  constructor() {

  }

}