'use strict';

angular.module('finalProjectApp')
  .controller('CreateprofileCtrl', function ($scope, $location, Auth, $http, mainSvc) {

  $scope.currentUser = Auth.getCurrentUser();

  mainSvc.getProfs().then(function(data){
    $scope.profs = data.data;
    console.log($scope.profs);
    for (var i = 0; i < $scope.profs.length; i++) {
      console.log("profs" + $scope.profs[i].user._id);
      console.log("current user " + $scope.currentUser._id);
      if($scope.profs[i].user._id ===$scope.currentUser._id){
        console.log("match");
        $scope.cup=$scope.profs[i];
      }

    }


  });

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
