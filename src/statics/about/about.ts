'use strict';

import { Directive, RouteConfig } from '../../shared/angular/decorators';

import 'statics/about/about.css!';

export const NAME = 'Root.About';

@RouteConfig({
  name: NAME,
  url: '/nosotros',
})
@Directive(NAME, {
  templateUrl: 'statics/about/about.html'
})
export class AboutComponent { }
