'use strict';

angular.module('finalProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/createprofile', {
        templateUrl: 'app/createprofile/createprofile.html',
        controller: 'CreateprofileCtrl'
      })
      .when('/profile', {
        templateUrl: 'app/createprofile/myprofile.html',
        controller: 'CreateprofileCtrl'
      });
  });
