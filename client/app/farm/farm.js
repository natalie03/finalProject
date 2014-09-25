'use strict';

angular.module('finalProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/farms', {
        templateUrl: 'app/farm/farm.html',
        controller: 'FarmCtrl'
      });
  });
