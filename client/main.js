import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as PartidosList } from '../imports/ui/components/partidosList/partidosList';

angular.module('liquidpoll', [ angularMeteor, PartidosList ]);
