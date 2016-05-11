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
    { name: 'UCV', description: 'Universidad Central de Venezuela', image: "/src/assets/images/relations/UCV.png" },
    { name: 'UJMV', description: 'Universidad José María Vargas', image: "/src/assets/images/relations/ujmv.jpg" },
    { name: 'USB', description: 'Universidad Simón Bolívar', image: "/src/assets/images/relations/USB.png" },
    { name: 'FUNDACIÓN TAMAYO', image: "/src/assets/images/relations/FT.jpg" },
    { name: 'INGEOLAN', image: "/src/assets/images/relations/INGEOLAN.png" },
  ];

  public internationals: any = [
    { name: 'OEA', description: 'Organización de Estados Americanos', image: "/src/assets/images/relations/OEA.png" },
    { name: 'UNESCO', description: 'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura',
      image: "/src/assets/images/relations/unesco.gif" },
    { name: 'PNUD', description: 'Programa de las Naciones Unidas para el Desarrollo',
      image: "/src/assets/images/relations/Logo_PNUD_Venezuela.png" },
    { name: 'FAO', description: 'Organización de las Naciones Unidas para la Agricultura y la Alimentación',
      image: "/src/assets/images/relations/FAO.jpg" },
    { name: 'OTCA', description: 'Organización del Tratado de Cooperación Amazónica',
      image: "/src/assets/images/relations/otca.png" },
    { name: 'CRATerre/EAG', description: 'Centre International de Construction en Terre/Ecole d´Architecture de' +
    ' Grenoble (Francia)', image: "/src/assets/images/relations/Craterre.png" }
  ];

  public members: any = [
    { name: 'UNAMAZ', description: 'Asociación de Universidades Amazónicas',
      image: "/src/assets/images/relations/UNAMAZ.png" },
    { name: 'IFRAO/UNESCO', description: 'International Federation of Rock Art Organizations',
      image: "/src/assets/images/relations/IFRAO.png" }
  ]
}
