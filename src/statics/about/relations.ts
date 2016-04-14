'use strict';

import 'statics/about/relations.css!';

export function Relations():any {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    bindToController: {},

    require: '',
    link: function ():any {
    },
    controller: RelationsCtrl,

    controllerAs: 'r',
    templateUrl: 'statics/about/relations.html'
  };
}

export class RelationsCtrl {

  //TODO add images' address

  public nationals: any = [
    { name: 'UCV', description: 'Universidad Central de Venezuela', image: "" },
    { name: 'UJMV', description: 'Universidad José María Vargas', image: "" },
    { name: 'USB', description: 'Universidad Simón Bolívar', image: "" },
    { name: 'FUNDACIÓN TAMAYO', image: "" },
    { name: 'INGEOLAN', image: "" },
    { name: 'IARTES', image: ""}
  ];

  public internationals: any = [
    { name: 'OEA', description: 'Organización de Estados Americanos', image: "" },
    { name: 'UNESCO', description: 'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura', image: "" },
    { name: 'PNUD', description: 'Programa de las Naciones Unidas para el Desarrollo', image: "" },
    { name: 'FAO', description: 'Organización de las Naciones Unidas para la Agricultura y la Alimentación', image: "" },
    { name: 'OTCA', description: 'Organización del Tratado de Cooperación Amazónica', image: "" },
    { name: 'CRATerre/EAG', description: 'Centre International de Construction en Terre/Ecole d´Architecture de' +
    ' Grenoble (Francia)', image: "" }
  ];

  public members: any = [
    { name: 'UNAMAZ', description: 'Asociación de Universidades Amazónicas', image: "" },
    { name: 'IFRAO/UNESCO', description: 'International Federation of Rock Art Organizations', image: "" }
  ]
}
