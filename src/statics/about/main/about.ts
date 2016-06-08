'use strict';

import { Directive, Inject, RouteConfig } from '../../../shared/angular/decorators';
import { HeaderService } from "../../header/header";
import './about.css!';

export const NAME = 'Root.About';

@RouteConfig({
  name: NAME,
  url: '/nosotros',
})
@Directive(NAME, {
  templateUrl: 'statics/about/main/about.html'
})
@Inject(['HeaderService'])
export class AboutComponent {
  
  constructor(private Header: HeaderService) {
    this.Header.setTitle('Quienes Somos');
  }
  
}
