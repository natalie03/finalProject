'use strict';

angular.module('finalProjectApp')
  .controller('VendorsCtrl', function ($scope, $http, Auth, $routeParams, mainSvc) {

  $scope.currentUser = Auth.getCurrentUser();

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
    var purchaser = {
      name: $scope.cup.name,
      id: $scope.currentUser._id,
    };
    console.log(purchaser);

    $http.put('api/csas/csabox/' + csaBox._id, purchaser);
    $route.reload();

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
