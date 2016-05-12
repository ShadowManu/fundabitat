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
    { name: 'UCV', link: 'http://www.ucv.ve/', image: "/src/assets/images/relations/UCV.png" },
    { name: 'UJMV', link: 'http://ujmv.edu/', image: "/src/assets/images/relations/ujmv.jpg" },
    { name: 'USB', link: 'http://www.usb.ve/', image: "/src/assets/images/relations/USB.png" },
    { name: 'FUNDACIÓN TAMAYO', link: "http://www.fundaciontamayo.org.ve/", image: "/src/assets/images/relations/FT.jpg" },
    { name: 'INGEOLAN', link: "http://www.ingeolan.com/", image: "/src/assets/images/relations/INGEOLAN.png" },
  ];

  public internationals: any = [
    { name: 'OEA', link: 'http://www.oas.org/es/', image: "/src/assets/images/relations/OEA.png" },
    { name: 'UNESCO', link: 'http://es.unesco.org/',
      image: "/src/assets/images/relations/unesco.gif" },
    { name: 'PNUD', link: 'http://www.pnud.org.ve/',
      image: "/src/assets/images/relations/Logo_PNUD_Venezuela.png" },
    { name: 'FAO', link: 'http://www.fao.org/home/es/',
      image: "/src/assets/images/relations/FAO.jpg" },
    { name: 'OTCA', link: 'http://www.otca.info/',
      image: "/src/assets/images/relations/otca.png" },
    { name: 'CRATerre/EAG', link: 'http://craterre.org/', image: "/src/assets/images/relations/Craterre.png" }
  ];

  public members: any = [
    { name: 'UNAMAZ', link: 'http://www.unamaz.org/site/index.php',
      image: "/src/assets/images/relations/UNAMAZ.png" },
    { name: 'IFRAO/UNESCO', link: 'http://www.ifrao.com/ifrao/',
      image: "/src/assets/images/relations/IFRAO.png" }
  ]
}
