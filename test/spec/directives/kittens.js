'use strict';

describe('Directive: kittens', function () {

  // load the directive's module
  beforeEach(module('angularPackeryApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<kittens></kittens>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the kittens directive');
  }));
});
