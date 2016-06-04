import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './partidoView.html';

class PartidoView {
  constructor($stateParams) {
    'ngInject';
    this.partidoId = $stateParams.partidoId;
  }
}

const name = 'partidoView';

// create a module
export default angular.module( name, [ angularMeteor, uiRouter ])
  .component(name, {
    template,
    controllerAs: name,
    controller: PartidoView
  })
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('partidoView', {
    url: '/partidos/:partidoId',
    template: '<partido-view></partido-view>'
  });
}
