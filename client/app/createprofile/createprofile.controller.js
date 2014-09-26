'use strict';

angular.module('finalProjectApp')
  .controller('CreateprofileCtrl', function ($scope, $location, dataSvc) {

  $scope.addVendor = function(vendor){
    dataSvc.addVen(vendor);
    $location.path('/');

  };
  $scope.addCust = function(customer){
    dataSvc.addCus(customer);
    $location.path('/');

  };





  });
