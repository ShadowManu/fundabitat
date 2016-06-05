'use strict';

import { Directive, RouteConfig } from '../../shared/angular/decorators';

import './areas.css!';

export const NAME = 'Root.Areas';

@RouteConfig(NAME)
@Directive(NAME, {
  templateUrl: 'statics/areas/areas.html'
})
export class AreasComponent {

  public areas:any = [
    {
      name: "Etnoeducación",
      image: "/src/assets/images/areas/Etnoeducación.png"
    },
    {
      name: "Recuperación de técnicas constructivas tradicionales",
      image: "/src/assets/images/areas/recuperación.png"
    },
    {
      name: "Generación y evaluación de Tecnologías Alternativas y Apropiadas",
      image: "/src/assets/images/areas/generación.png"
    },
    {
      name: "Ensayo de materiales",
      image: "/src/assets/images/areas/ensayo.png"
    },
    {
      name: "Saneamiento Básico ambiental",
      image: "/src/assets/images/areas/Saneamiento.png"
    },
    {
      name: "Manejo integrado de Patrimonios",
      image: "/src/assets/images/areas/Manejo.png"
    },
    {
      name: "Manifestaciones Rupestres",
      image: "/src/assets/images/areas/Manifestaciones.png"
    },
    {
      name: "Implementación de proyectos demostrativos",
      image: "/src/assets/images/areas/implementación.png"
    },
    {
      name: "Asistencia técnica a comunidades y organizaciones",
      image: "/src/assets/images/areas/Asistencia.png"
    }
  ]
}