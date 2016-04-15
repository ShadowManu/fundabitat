'use strict';

import 'statics/areas.css!';

export function Areas(): any {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    bindToController: {},

    require: '',
    link: function(): any {},
    controller: AreasCtrl,

    controllerAs: 'a',
    templateUrl: 'statics/areas.html'
  };
}

export class AreasCtrl {

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
      name: "Manejo integrado de Patrimonios –natural y cultural-",
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
      name: "Asistencia técnica a comunidades, ONG’s, OGs y privadas, para la identificación, preparación y evaluación" +
      " de proyectos.", image: "/src/assets/images/areas/Asistencia.png"
    }
  ]

}