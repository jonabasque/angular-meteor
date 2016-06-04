import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './liquidPoll.html';
import { name as PartidosList } from '../partidosList/partidosList';
import { name as Navigation } from '../navigation/navigation';

class LiquidPoll {}

const name = 'liquidPoll';

// create a module
export default angular.module( name, [ angularMeteor, PartidosList, Navigation, uiRouter ])
  .component(name, {
    template,
    controllerAs: name,
    controller: LiquidPoll
  })
  .config(config);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/liquid-poll');
}
