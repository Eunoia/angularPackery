'use strict';

angular.module('angularPackeryApp')
	.controller('MainCtrl', function ($scope,Kittengenerator, $q) {
		$scope.loading = false;
		$scope.myPagingFunction = function(){
			if($scope.loading){ return; }
			$scope.loading = true;
			console.log('generating kittens');

			Kittengenerator.generate($('.kittens')).then(function(){
				$scope.loading = false;
			})
		};
	});
