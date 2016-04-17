'use strict';

import 'statics/about/mission.css!';

export function Mission(): any {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    bindToController: {},

    require: '',
    link: function(): any {},
    controller: MissionCtrl,

    controllerAs: 'm',
    templateUrl: 'statics/about/mission.html'
  };
}

export class MissionCtrl { }
