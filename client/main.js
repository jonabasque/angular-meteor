import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('liquidpoll', [ angularMeteor ])
	.controller('PartidosListCtrl', ['$scope', function($scope) {

		$scope.helpers({
			partidos() {
				return Partidos.find({});
			}

    		});
	}]);


