'use strict';

describe('Service: kittenGenerator', function () {

  // load the service's module
  beforeEach(module('angularPackeryApp'));

  // instantiate service
  var kittenGenerator;
  beforeEach(inject(function (_kittenGenerator_) {
    kittenGenerator = _kittenGenerator_;
  }));

  it('should do something', function () {
    expect(!!kittenGenerator).toBe(true);
  });

});
