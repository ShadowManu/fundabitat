'use strict';

import 'statics/about/about.css!';

export function About(): any {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    bindToController: {},

    require: '',
    link: function(): any {},
    controller: AboutCtrl,

    controllerAs: 'a',
    templateUrl: 'statics/about/about.html'
  };
}

export class AboutCtrl { }
