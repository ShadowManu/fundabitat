'use strict';

import { Directive, Inject,RouteConfig } from '../../../shared/angular/decorators';
import { HeaderService } from "../../header/header";
import './relations.css!';

export const NAME = 'Root.Relations';

@RouteConfig({
  name: NAME,
  url: '/nosotros/relaciones',
  template: '<about-relations></about-relations>'
})
@Directive('aboutRelations', {
  templateUrl: 'statics/about/relations/relations.html'
})
@Inject(['HeaderService'])
export class RelationsComponent {
  
  constructor(private Header: HeaderService) {
    this.Header.setTitle('Relaciones');
  }

  public nationals: any = [
    { name: 'UCV', link: 'http://www.ucv.ve/', image: "/src/assets/images/relations/ucv.png" },
    { name: 'UJMV', link: 'http://ujmv.edu/', image: "/src/assets/images/relations/ujmv.jpg" },
    { name: 'USB', link: 'http://www.usb.ve/', image: "/src/assets/images/relations/usb.png" },
    { name: 'FUNDACIÓN TAMAYO', link: "http://www.fundaciontamayo.org.ve/", image: "/src/assets/images/relations/ft.jpg" },
    { name: 'INGEOLAN', link: "http://www.ingeolan.com/", image: "/src/assets/images/relations/ingeolan.png" },
  ];

  public internationals: any = [
    { name: 'OEA', link: 'http://www.oas.org/es/', image: "/src/assets/images/relations/oea.png" },
    { name: 'UNESCO', link: 'http://es.unesco.org/',
      image: "/src/assets/images/relations/unesco.gif" },
    { name: 'PNUD', link: 'http://www.pnud.org.ve/',
      image: "/src/assets/images/relations/pnud-vzla.png" },
    { name: 'FAO', link: 'http://www.fao.org/home/es/',
      image: "/src/assets/images/relations/fao.jpg" },
    { name: 'OTCA', link: 'http://www.otca.info/',
      image: "/src/assets/images/relations/otca.png" },
    { name: 'CRATerre/EAG', link: 'http://craterre.org/', image: "/src/assets/images/relations/craterre.png" }
  ];

  public members: any = [
    { name: 'UNAMAZ', link: 'http://www.unamaz.org/site/index.php',
      image: "/src/assets/images/relations/unamaz.png" },
    { name: 'IFRAO/UNESCO', link: 'http://www.ifrao.com/ifrao/',
      image: "/src/assets/images/relations/ifrao.png" }
  ]
}
