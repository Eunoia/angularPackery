'use strict';

angular.module('angularPackeryApp')
  .directive('packer', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	typeof attrs;
        element.text('this is the packer directive');
      }
    };
  });
