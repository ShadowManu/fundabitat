'use strict';

import { Directive, RouteConfig } from '../../../shared/angular/decorators';

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
export class TeamComponent {

  public members:any = [
    {
      name: 'Ruby De Valencia',
      description: 'Arquitecto Paisajista. Especialista en Tecnologías Apropiadas y Apropiables. Co-fundadora y ' +
      'Directora del ANAR',
      photo: '/src/assets/images/team/Ruby-De-Valencia.png'

    },
    {
      name: 'José Gregorio Camacho-Uzcategui',
      description: 'Abogado Mercantil, Co-fundador y Asesor legal de FUNDABITAT',
      photo: '/src/assets/images/team/José-Camacho.png'
    },
    {
      name: 'Mira Kugelmann',
      description: 'Licenciada en Educación integral. Coordinadora de Idiomas y Directora de CEGAVEN',
      photo: '/src/assets/images/team/Mira-Kugelmann.png'
    },
    {
      name: 'Luis Müller Peruga',
      description: 'Diseñador Gráfico y Comunicador Visual',
      photo: '/src/assets/images/team/Luis-Müller.png'
    },
    {
      name: 'Paola Valencia',
      description: 'Artista Plástico y Comunicadora Visual',
      photo: '/src/assets/images/team/Paola-Valencia.png'
    },
    {
      name: 'Victor Hernández Turupial',
      description: 'Fotógrafo con interés en Ecología y Patrimonio Cultural',
      photo: '/src/assets/images/team/Victor-Hernández.png'
    },
  ]
}
