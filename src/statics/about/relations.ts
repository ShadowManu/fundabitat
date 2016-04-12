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

  public nationals: any = [
    { name: 'UCV', description: 'Universidad Central de Venezuela'},
    { name: 'UJMV', description: 'Universidad José María Vargas' },
    { name: 'USB', description: 'Universidad Simón Bolívar' },
    { name: 'FUNDACIÓN TAMAYO' },
    { name: 'INGEOLAN' },
    { name: 'IARTES'}
  ];

  public internationals: any = [
    { name: 'OEA', description: 'Organización de Estados Americanos' },
    { name: 'UNESCO', description: 'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura' },
    { name: 'PNUD', description: 'Programa de las Naciones Unidas para el Desarrollo' },
    { name: 'FAO', description: 'Organización de las Naciones Unidas para la Agricultura y la Alimentación' },
    { name: 'OTCA', description: 'Organización del Tratado de Cooperación Amazónica' },
    { name: 'CRATerre/EAG', description: 'Centre International de Construction en Terre/Ecole d´Architecture de' +
    ' Grenoble (Francia)' }
  ];

  public members: any = [
    { name: 'UNAMAZ', description: 'Asociación de Universidades Amazónicas' },
    { name: 'IFRAO/UNESCO', description: 'International Federation of Rock Art Organizations' }
  ]
}
