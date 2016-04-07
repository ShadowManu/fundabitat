'use strict';

export function Relations():any {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    bindToController: {},

    require: '',
    link: function ():any {
    },
    controller: RelationsCtrl,

    controllerAs: 'r',
    templateUrl: 'statics/about/relations.html'
  };
}

export class RelationsCtrl {
}
