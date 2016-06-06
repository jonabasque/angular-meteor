import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';

import template from './partidoView.html';
import { Partidos } from '../../../api/partidos';

class PartidoView {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    this.partidoId = $stateParams.partidoId;

    this.helpers({
      //TODO: Entender cuando se ejecuta partido() para disponer de los datos.
      //Parece que los helpers se cran al proncipio, por eso se ponen el el construct()
      partido() {
        return Partidos.findOne({
          _id: $stateParams.partidoId
        });
      }
    });
  }

  save() {
    console.log('Ejecutado método save de helpers')
    Partidos.update(
      {
        _id: this.partido._id
      },
      {
        $set: {
          name: this.partido.name,
          description: this.partido.description
        }
      }, (error) => {
        if (error) {
          console.log('Oops, unable to update the party...');
        } else {
          console.log('Done!');
        }
      }
    );
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
  //Estados que acepta esta vista, su url (en la cual definimos un valor variable que será 'partidoId' supongo que de this) y sui template.
  $stateProvider.state('partidoView', {
    url: '/partidos/:partidoId',
    template: '<partido-view></partido-view>',
    resolve: {
      currentUser($q){
        if (Meteor.userId() === null) {
          return $q.reject();
        } else {
          return $q.resolve();
        }
      }
    }
  });
}
