'use strict';

import { IDirective } from "angular-extras";

export function DirectiveLoader(mod: any, components: Function[]) {
  components.forEach((comp: IDirective) => {
    
    // Load Directive
    mod.directive(comp.dirName, comp);
    
    // Load Route Configuration (if available)
    if (comp.route) mod.config(comp.route);
  })
}
