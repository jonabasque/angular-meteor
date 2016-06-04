import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './liquidPoll.html';
import { name as PartidosList } from '../partidosList/partidosList';

class LiquidPoll {}

const name = 'liquidPoll';

// create a module
export default angular.module( name, [ angularMeteor, PartidosList, uiRouter ])
  .component(name, {
    template,
    controllerAs: name,
    controller: LiquidPoll
});
