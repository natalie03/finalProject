'use strict';

angular.module('finalProjectApp')
  .controller('CreateprofileCtrl', function ($scope, $location, Auth, $http) {

  $scope.currentUser = Auth.getCurrentUser();

  $scope.addVendor = function(vendor){
    var vendorProfile={
      user: $scope.currentUser._id,
      name: vendor.name,
      accType: "vendor",
      website:vendor.website,
      info: vendor.info,
      address: vendor.address,
      csas: [],
      active:true
    }

    $http.post('api/profiles', vendorProfile);
    $location.path('/');

  };
  $scope.addCust = function(customer){
    var customerProfile={
      user: $scope.currentUser._id,
      name: customer.name,
      accType: "consumer",
      info: customer.info,
      website:"",
      address: "",
      csas: [],
      active:true
    }
    $http.post('api/profiles', customerProfile);
    $location.path('/');

  };




  });
