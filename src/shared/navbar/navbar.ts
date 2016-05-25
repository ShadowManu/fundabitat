'use strict';

import './navbar.css!'

interface Link {
  name: string;
  state: string;
  childs?: Link[];
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
    templateUrl: 'shared/navbar/navbar.html'
  };
}

export class NavbarCtrl {

  links: Link[];

  public static $inject: string[] = [];

  constructor() {

    this.links = [
      {
        name: 'Quienes Somos',
        state: 'Root.About',
        childs: [
          { name: 'Nuestro equipo', state: 'Root.Team' },
          { name: 'Relaciones', state: 'Root.Relations' },
        ]
      },
      {
        name: 'Áreas Temáticas',
        state: 'Root.Areas'
      },
      {
        name: 'Programas',
        state: 'Root.Programs'
      },
    ]

  }

}