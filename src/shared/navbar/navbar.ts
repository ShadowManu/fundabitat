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
        state: 'about',
        childs: [
          { name: 'Nuestro equipo', state: 'about.team' },
          { name: 'Relaciones', state: 'about.relations' },
        ]
      },
      {
        name: 'Áreas Temáticas',
        state: 'topics'
      },
      {
        name: 'Programas',
        state: 'Facilitadores en Escuela Activa'
      },
    ]

  }

}