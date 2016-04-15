'use strict';

interface Link {
  name: string;
  state: string;
}

export function Navbar(): any {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    bindToController: {},

    require: '',
    link: function(): any {},
    controller: NavbarCtrl,

    controllerAs: 'n',
    templateUrl: 'statics/navbar.html'
  };
}

export class NavbarCtrl {

  links: Link[];

  public static $inject: string[] = [];

  constructor() {

    this.links = [
      { name: 'Inicio', state: 'home'},
      { name: 'Nosotros', state: 'about'}
    ]

  }

}