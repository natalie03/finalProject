'use strict';

angular.module('finalProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/faq', {
        templateUrl: 'app/faq/faq.html',
        controller: 'FaqCtrl'
      });
  });
