'use strict';

import { Directive, RouteConfig } from "../../shared/angular/decorators";

import './root.css!';

export const NAME = 'Root';

@RouteConfig({
  name: NAME,
  url: '',
  abstract: true
})
@Directive(NAME, {
  templateUrl: 'statics/root/root.html'
})
export class RootComponent { }
