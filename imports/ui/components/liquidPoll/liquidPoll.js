import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './liquidPoll.html';
import { name as PartidosList } from '../partidosList/partidosList';

class LiquidPoll {}

const name = 'liquidPoll';

// create a module
export default angular.module( name, [ angularMeteor, PartidosList ])
  .component(name, {
    template,
    controllerAs: name,
    controller: LiquidPoll
});
