'use strict';

angular.module('finalProjectApp')
  .service('dataSvc', function ($scope,$location,Auth) {


  var addVen = function(vendor){
    var vendorProfile={
      user: Auth.getCurrentUser(),
      name: vendor.name,
      accType: "vendor",
      info: vendor.info,
      address: vendor.address,
      csas: [],
      active:true
    }

    $http.post('api/profiles', vendorProfile);

  };

  var addCus = function(customer){
    var customerProfile={
      user: Auth.getCurrentUser(),
      name: customer.name,
      accType: "consumer",
      info: customer.info,
      address: "",
      csas: [],
      active:true
    }
    $http.post('api/profiles', customerProfile);
  };

  return{
    addVen: addVen,
    addCus: addCus
  }





  });
