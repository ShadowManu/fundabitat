'use strict';

import { IDirective, IService } from "angular-extras";

export function DirectiveLoader(mod: any, components: Function[]) {
  components.forEach((comp: IDirective) => {
    
    // Load Directive
    mod.directive(comp.dirName, comp);
    
    // Load Route Configuration (if available)
    if (comp.route) mod.config(comp.route);
  });
}

export function ServiceLoader(mod: any, services: Function[]) {
  services.forEach((serv: IService) => {
    
    // Load Service
    mod.service(serv.serviceName, serv);
  });
}