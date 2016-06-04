import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './partidosList.html';

import { Partidos } from '../../../api/partidos';
import { name as PartidoAdd } from '../partidoAdd/partidoAdd';
import { name as PartidoRemove } from '../partidoRemove/partidoRemove';

class PartidosList {
	constructor($scope, $reactive) {
		'ngInject';
		$reactive(this).attach($scope);
		this.helpers({
			partidos() {
				return Partidos.find({});

      			}

    		});
	}
}

const name = 'partidosList';

// create a module

export default angular.module(name, [angularMeteor, PartidoAdd, PartidoRemove])
	.component(name, {
		template,
		controllerAs: name,
		controller: PartidosList
	});
