import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('liquidpoll', [ angularMeteor ])
	.component('partidosList', {
		templateUrl: 'client/partials/partidosList.html',
    		controllerAs: 'partList',
		controller($scope, $reactive) {
      			'ngInject';
      			$reactive(this).attach($scope);
			this.helpers({
				partidos() {
          				return Partidos.find({});
				}
      			});

    		}

  	});
