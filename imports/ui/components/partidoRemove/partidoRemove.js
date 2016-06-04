import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './partidoRemove.html';
import { Partidos } from '../../../api/partidos';

class PartidoRemove {
  remove() {
    if (this.partido) {
      Partidos.remove(this.partido._id);
      console.log('remove partido');
    }
  }
}

const name = 'partidoRemove';

// create a module
export default angular.module(name, [ angularMeteor ])
  .component(name, {
    template,
    bindings: {
      partido: '<'
    },
    controllerAs: name,
    controller: PartidoRemove
});
