'use strict';

angular.module('finalProjectApp')
  .controller('VendorsCtrl', function ($scope, $http, $routeParams, mainSvc) {


    mainSvc.getProfs().success(function(data){

        var farmProfiles = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].accType === 'vendor'){
              console.log("vendor");
              farmProfiles.push(data[i]);
              console.log(farmProfiles);
            }
        }
      $scope.farmProfiles =farmProfiles;
    });

    mainSvc.singleProf($routeParams.id).then(function(response){
      $scope.singleProfile = response.data;

    });





  });
