import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './partidoAdd.html';

class PartidoAdd {}

const name = 'partidoAdd';

// create a module
export default angular.module( name, [angularMeteor])
  .component(name, {
    template,
    controllerAs: name,
    controller: PartidoAdd
});
