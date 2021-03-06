import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './partidoAdd.html';
import { Partidos } from '../../../api/partidos';

class PartidoAdd {
  constructor() {
    this.partido = {};
  }
  submit() {
    this.partido.owner = Meteor.user()._id;
    Partidos.insert(this.partido);
    console.log('submit:', this.partido);
    this.reset();

  }
  reset() {
    this.partido = {};
  }
}

const name = 'partidoAdd';

// create a module
export default angular.module( name, [angularMeteor])
  .component(name, {
    template,
    controllerAs: name,
    controller: PartidoAdd
});
