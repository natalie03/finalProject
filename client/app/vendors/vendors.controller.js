'use strict';

angular.module('finalProjectApp')
  .controller('VendorsCtrl', function ($scope, $http, $routeParams) {

    var getProfs = function(profiles){

      $http.get('api/profiles').success(function(data){
        console.log(data);
        $scope.profiles = data;
        console.log($scope.profiles);
        $scope.farmProfiles = [];

        for (var i = 0; i < $scope.profiles.length; i++) {
            if ($scope.profiles[i].accType === 'vendor'){
              console.log("vendor");
              $scope.farmProfiles.push($scope.profiles[i]);
              console.log($scope.farmProfiles);
            }
        }
      });
    };

    getProfs();





  });
