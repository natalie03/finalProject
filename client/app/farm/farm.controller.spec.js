'use strict';

describe('Controller: FarmCtrl', function () {

  // load the controller's module
  beforeEach(module('finalProjectApp'));

  var FarmCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FarmCtrl = $controller('FarmCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
