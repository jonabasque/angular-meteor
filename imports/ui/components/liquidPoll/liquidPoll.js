import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './liquidPoll.html';
import { name as PartidosList } from '../partidosList/partidosList';
import { name as PartidoView } from '../partidoView/partidoView';
import { name as Navigation } from '../navigation/navigation';

class LiquidPoll {}

const name = 'liquidPoll';

// create a module
export default angular.module( name, [
  angularMeteor,
  PartidosList,
  PartidoView,
  Navigation,
  'accounts.ui',
  uiRouter ])
  .component(name, {
    template,
    controllerAs: name,
    controller: LiquidPoll
  })
  .config(config)
  .run(run);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}

function run($rootScope, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    if (error === 'AUTH_REQUIRED') {
      $state.go('partidos');
    }
  });
}
