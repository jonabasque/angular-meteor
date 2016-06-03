import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('liquidpoll', [ angularMeteor ])
	.controller('PartidosListCtrl', function($scope, $reactive) {
		'ngInject';
		$reactive(this).attach($scope);
		
		this.helpers({
			partidos() {
				return Partidos.find({});
			}

    		});
	});


