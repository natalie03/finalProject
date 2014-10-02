'use strict';

angular.module('finalProjectApp')
  .controller('VendorsCtrl', function ($scope, $http, $routeParams, mainSvc) {

  mainSvc.getCSAs().success(function(responseData){
    console.log(responseData);
    $scope.csaData = responseData;
    $scope.vendCsas = [];
    for (var i = 0; i < $scope.csaData.length; i++) {
      console.log("here are the id comps");
      console.log($scope.csaData[i].user);
      console.log($scope.singleProfile.user);
      if($scope.csaData[i].user === $scope.singleProfile.user){
        $scope.vendCsas.push($scope.csaData[i]);
      }

    }
  });


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

    mainSvc.singleProf($routeParams.id).success(function(response){
      $scope.singleProfile = response;
    });







  });
