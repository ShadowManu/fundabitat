'use strict';

import { Directive, Inject, RouteConfig } from "../../shared/angular/decorators";
import { HeaderService } from "../header/header";
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
@Inject(['HeaderService'])
export class RootComponent {
  
  title: string;
  
  constructor(private Title: HeaderService) {
    Title.getTitleEvents().subscribe((title) => {
        this.title = title;
    });
  }
}
