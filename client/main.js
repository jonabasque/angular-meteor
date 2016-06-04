import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as LiquidPoll } from '../imports/ui/components/liquidPoll/liquidPoll';

angular.module('liquidpoll', [ angularMeteor, LiquidPoll ]);
