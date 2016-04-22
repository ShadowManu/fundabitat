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
        state: 'root.about',
        childs: [
          { name: 'Nuestro equipo', state: 'root.team' },
          { name: 'Relaciones', state: 'root.relations' },
        ]
      },
      {
        name: 'Áreas Temáticas',
        state: 'root.areas'
      },
      {
        name: 'Programas',
        state: 'Facilitadores en Escuela Activa'
      },
    ]

  }

}