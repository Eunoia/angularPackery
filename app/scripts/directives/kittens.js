'use strict';

angular.module('angularPackeryApp')
  .directive('kittens', function ($timeout,Kittengenerator) {
    return {
      // template: '<div class="kittens"></div>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        Kittengenerator.generate(element);
      }
    };
  });

