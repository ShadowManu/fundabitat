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

    controllerAs: 'ar',
    templateUrl: 'statics/areas.html'
  };
}

export class AreasCtrl {

  public areas: any = [
    "Etnoeducación",
    "Recuperación de técnicas constructivas tradicionales",
    "Generación y evaluación de Tecnologías Alternativas y Apropiadas",
    "Ensayo de materiales",
    "Saneamiento Básico ambiental",
    "Manejo integrado de Patrimonios –natural y cultural-",
    "Manifestaciones Rupestres",
    "Implementación de proyectos demostrativos",
    "Asistencia técnica a comunidades, ONG’s, OGs y privadas, para la identificación, preparación y evaluación de proyectos."
    ]

}