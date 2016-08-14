'use strict';

import { Directive, Inject, RouteConfig } from '../../../shared/angular/decorators';
import { HeaderService } from "../../header/header";
import './team.css!';

export const NAME = "Root.Team";

@RouteConfig({
  name: NAME,
  url: '/nosotros/equipo',
  template: '<about-team></about-team>'
})
@Directive('aboutTeam', {
  templateUrl: 'statics/about/team/team.html'
})
@Inject(['HeaderService'])
export class TeamComponent {

  constructor(private Header: HeaderService) {
    this.Header.setTitle('Nuestro Equipo');
  }
  
  public members:any = [
    {
      name: 'Ruby De Valencia',
      description: 'Arquitecto Paisajista. Especialista en Tecnologías Apropiadas y Apropiables. Co-fundadora y ' +
      'Directora del ANAR',
      photo: '/src/assets/images/team/ruby-de-valencia.png'

    },
    {
      name: 'José Gregorio Camacho-Uzcategui',
      description: 'Abogado Mercantil, Co-fundador y Asesor legal de FUNDABITAT',
      photo: '/src/assets/images/team/jose-camacho.jpg'
    },
    {
      name: 'Mira Kugelmann',
      description: 'Licenciada en Educación integral. Coordinadora de Idiomas y Directora de CEGAVEN',
      photo: '/src/assets/images/team/mira-kugelmann.png'
    },
    {
      name: 'Luis Müller Peruga',
      description: 'Diseñador Gráfico y Comunicador Visual',
      photo: '/src/assets/images/team/luis-muller.png'
    },
    {
      name: 'Paola Valencia',
      description: 'Artista Plástico y Comunicadora Visual',
      photo: '/src/assets/images/team/paola-valencia.png'
    },
    {
      name: 'Victor Hernández Turupial',
      description: 'Fotógrafo con interés en Ecología y Patrimonio Cultural',
      photo: '/src/assets/images/team/victor-hernandez.png'
    },
  ]
}
