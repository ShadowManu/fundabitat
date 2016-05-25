'use strict';

import { IDirective } from "angular-extras";

export function DirectiveLoader(mod: any, components: IDirective[]) {
  components.forEach((comp: IDirective) => {
    
    // Load Directive
    mod.directive(IDirective.name, IDirective);
    
    // Load Route Configuration (if available)
    if (comp.route) mod.config(comp.route);
  })
}
