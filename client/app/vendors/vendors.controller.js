'use strict';

angular.module('finalProjectApp')
  .controller('VendorsCtrl', function ($scope, $route, $http, Auth, $routeParams, mainSvc) {

  $scope.currentUser = Auth.getCurrentUser();
  $scope.isLoggedIn = Auth.isLoggedIn;


  mainSvc.singleProf($routeParams.id).success(function(response){
    $scope.singleProfile = response;
    mainSvc.getCSAs().success(function(responseData){
      $scope.csaData = responseData;
      $scope.vendCsas = [];

      for (var i = 0; i < $scope.csaData.length; i++) {
        if($scope.csaData[i].user === $scope.singleProfile.user){
          $scope.vendCsas.push($scope.csaData[i]);
        }

      }

    });
  });


  mainSvc.getProfs().then(function(data){
    $scope.profs = data.data;
    for (var i = 0; i < $scope.profs.length; i++) {
      if($scope.profs[i].user._id ===$scope.currentUser._id){
        $scope.cup=$scope.profs[i];
      }
    }
  });

  $scope.purchase = function(csaBox, purchaser){
    for (var i = 0; i < csaBox.purchasers.length; i++) {
      if(csaBox.purchasers[i].id === $scope.currentUser._id){
        $scope.matched = true;
        console.log("match");
      }
    };

    if($scope.matched === true){
      $scope.purchased = "false";
      $scope.alreadyPurchased = csaBox._id;
    }else{
    var purchaser = {
      name: $scope.cup.name,
      id: $scope.currentUser._id,
      email: $scope.cup.email,
      phoneNum: $scope.cup.phoneNum,
      location:$scope.cup.address,
      paid: false
    };
    console.log("putting")

    $http.put('api/csas/csabox/' + csaBox._id, purchaser);
    $scope.purchased= csaBox._id;
    $scope.alreadyPurchsed = "false";
    };

  };

    mainSvc.getProfs().success(function(data){
        var farmProfiles = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].accType === 'vendor'){
              farmProfiles.push(data[i]);
              $scope.isVendor = true;
            } else {
              $scope.isVendor = false;
            }
        }
      $scope.farmProfiles =farmProfiles;
    });







  });
