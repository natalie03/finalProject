'use strict';

describe('Service: dataSvc', function () {

  // load the service's module
  beforeEach(module('finalProjectApp'));

  // instantiate service
  var dataSvc;
  beforeEach(inject(function (_dataSvc_) {
    dataSvc = _dataSvc_;
  }));

  it('should do something', function () {
    expect(!!dataSvc).toBe(true);
  });

});
