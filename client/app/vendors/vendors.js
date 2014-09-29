'use strict';

angular.module('finalProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/vendors', {
        templateUrl: 'app/vendors/vendors.html',
        controller: 'VendorsCtrl'
      })
      .when('/vendors/:id', {
        templateUrl:'app/vendors/vendorProf.html',
        constroller: 'VendorsCtrl'
      });
  });
