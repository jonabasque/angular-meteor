import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './partidoRemove.html';

class PartidoRemove {
  remove() {
    console.log('remove partido');
  }
}

const name = 'partidoRemove';

// create a module
export default angular.module(name, [ angularMeteor ])
  .component(name, {
    template,
    controllerAs: name,
    controller: PartidoRemove
});
