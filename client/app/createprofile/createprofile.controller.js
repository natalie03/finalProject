'use strict';

angular.module('finalProjectApp')
  .controller('CreateprofileCtrl', function ($scope, $location, Auth, $http, mainSvc, $route) {

  $scope.currentUser = Auth.getCurrentUser();

  mainSvc.getProfs().then(function(data){
    $scope.profs = data.data;
    for (var i = 0; i < $scope.profs.length; i++) {
      if($scope.profs[i].user._id ===$scope.currentUser._id){
        $scope.cup=$scope.profs[i];
      }

    }

  });

  mainSvc.getCSAs().success(function(data){
    $scope.csas = data;
    $scope.myCsas = [];
    for (var i = 0; i < $scope.csas.length; i++) {
      if($scope.csas[i].user === $scope.currentUser._id){
        $scope.myCsas.push($scope.csas[i]);
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
  $scope.addBox = function(box){
    var csaBox={
      user: $scope.currentUser._id,
      name: box.name,
      desc: box.desc,
      season: box.season,
      price: box.price,
      frequency: box.frequency,
      pulocation: box.pulocation,
      shares: box.shares,
      payment: box.payment,
      active:true
    }

    $http.post('api/csas', csaBox);
    $route.reload();

  };
  $scope.removeBox = function(id){
    $http.delete('api/csas/' + id);
    $route.reload();
  };
  $scope.editBox = function(csaBox){
    $http.put('api/csas/' + csaBox._id, csaBox);
    $route.reload();
  };



  });
