'use strict';

describe('Controller: CreateprofileCtrl', function () {

  // load the controller's module
  beforeEach(module('finalProjectApp'));

  var CreateprofileCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateprofileCtrl = $controller('CreateprofileCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
