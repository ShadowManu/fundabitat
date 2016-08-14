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
      image: "/src/assets/images/areas/etnoeducacion.png"
    },
    {
      name: "Recuperación de técnicas constructivas tradicionales",
      image: "/src/assets/images/areas/recuperacion.png"
    },
    {
      name: "Generación y evaluación de Tecnologías Alternativas y Apropiadas",
      image: "/src/assets/images/areas/generacion.png"
    },
    {
      name: "Ensayo de materiales",
      image: "/src/assets/images/areas/ensayo.png"
    },
    {
      name: "Saneamiento Básico ambiental",
      image: "/src/assets/images/areas/saneamiento.png"
    },
    {
      name: "Manejo integrado de Patrimonios",
      image: "/src/assets/images/areas/manejo.png"
    },
    {
      name: "Manifestaciones Rupestres",
      image: "/src/assets/images/areas/manifestaciones.png"
    },
    {
      name: "Implementación de proyectos demostrativos",
      image: "/src/assets/images/areas/implementacion.png"
    },
    {
      name: "Asistencia técnica a comunidades y organizaciones",
      image: "/src/assets/images/areas/asistencia.png"
    }
  ]
}