'use strict';

import { Directive } from '../angular/decorators';

import './navbar.css!';

export const NAME = "Navbar";

interface Link {
  name: string;
  state: string;
  childs?: Link[];
}

@Directive(NAME, {
  templateUrl: 'shared/navbar/navbar.html'
})
export class NavbarComponent {

  links: Link[];

  public static $inject: string[] = [];

  constructor() {

    this.links = [
      {
        name: 'Quienes Somos', state: 'Root.About',
        childs: [
          { name: 'Nuestro equipo', state: 'Root.Team' },
          { name: 'Relaciones', state: 'Root.Relations' },
        ]
      },
      { name: 'Áreas Temáticas', state: 'Root.Areas' },
      { name: 'Programas', state: 'Root.Programs' },
      { name: 'Publicaciones', state: 'Root.Publications' }
    ];
  }
}