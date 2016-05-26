'use strict';

import { Directive, RouteConfig } from '../../../shared/angular/decorators';

import './about.css!';

export const NAME = 'Root.About';

@RouteConfig({
  name: NAME,
  url: '/nosotros',
})
@Directive(NAME, {
  templateUrl: 'statics/about/main/about.html'
})
export class AboutComponent { }
