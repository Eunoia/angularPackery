'use strict';

angular.module('angularPackeryApp')
	.controller('MainCtrl', function ($scope,Kittengenerator) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		$scope.loading = false;
		$scope.myPagingFunction = function(){
			if($scope.loading){ return; }
			$scope.loading = true;
			console.log('generating kittens');
			Kittengenerator.generate($('.kittens'));
			$scope.loading = false;
		};
	});
