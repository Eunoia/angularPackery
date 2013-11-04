'use strict';

describe('Directive: packer', function () {

  // load the directive's module
  beforeEach(module('angularPackeryApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<packer></packer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the packer directive');
  }));
});
