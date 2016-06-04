import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './partidosList.html';

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

export default angular.module(name, [angularMeteor])
	.component(name, {
		template,
		controllerAs: name,
		controller: PartidosList
	});
