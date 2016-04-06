// TODO TO BE DELETED
'use strict';

export function Navbar(): any {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    bindToController: {},

    require: '',
    link: function(): any {},
    controller: NavbarCtrl,

    controllerAs: 'a',
    templateUrl: 'statics/navbar.html'
  };
}

export class NavbarCtrl {

  public static $inject: string[] = [];

  constructor() {

  }

}