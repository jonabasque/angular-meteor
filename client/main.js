import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('liquidpoll', [ angularMeteor ])
	.controller('PartidosListCtrl', ['$scope', function($scope) {

		$scope.partidos = [{
			'name': 'Partido Popular',
			'description': 'Enfermos e hijos de puta.'
    			}, {
      			'name': 'Partido Socialista Obrero Español',
      			'description': 'Estafadores hijos de puta.'
    			}, {
      			'name': 'Unidos Podemos',
      			'description': 'Posibles hijos de puta'
			}, {
			'name': 'Ciudadamos',
			'description': 'Liberales hijos de puta'	
			}
		];

	}]);


