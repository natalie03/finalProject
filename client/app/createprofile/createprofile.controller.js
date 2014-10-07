'use strict';

angular.module('finalProjectApp')
  .controller('CreateprofileCtrl', function ($scope, $location, Auth, $http, mainSvc, $route) {
    $scope.editCollapse = true;
    $scope.csaCollapse = true;
    $scope.shareCollapse = true;

  $scope.currentUser = Auth.getCurrentUser();

  mainSvc.getProfs().then(function(data){
    $scope.profs = data.data;
    for (var i = 0; i < $scope.profs.length; i++) {
      if($scope.profs[i].user._id ===$scope.currentUser._id){
        $scope.cup=$scope.profs[i];
      }

    }

  });


  mainSvc.getCSAs().success(function(data){
    $scope.csas = data;
    $scope.myCsas = [];
    $scope.purchasedCsas = [];
    for (var i = 0; i < $scope.csas.length; i++) {
      if($scope.csas[i].user === $scope.currentUser._id){
        $scope.myCsas.push($scope.csas[i]);
      }

    }



  });

  $scope.addVendor = function(vendor){
    var vendorProfile={
      user: $scope.currentUser._id,
      email: $scope.currentUser.email,
      name: $scope.currentUser.name,
      phoneNum: vendor.phoneNum,
      category: vendor.category,
      accType: "vendor",
      website:vendor.website,
      info: vendor.info,
      address: vendor.address,
      csas: [],
      active:true
    }

    $http.post('api/profiles', vendorProfile);
    $location.path('/');

  };


  $scope.addCust = function(customer){
    var customerProfile={
      user: $scope.currentUser._id,
      email: $scope.currentUser.email,
      name: $scope.currentUser.name,
      phoneNum:customer.phoneNum,
      accType: "consumer",
      category: "",
      info: customer.info,
      website:"",
      address: customer.address,
      csas: [],
      active:true
    }
    $http.post('api/profiles', customerProfile);
    $location.path('/');

  };
  $scope.addBox = function(box){
    var csaBox={
      user: $scope.currentUser._id,
      name: box.name,
      desc: box.desc,
      season: box.season,
      price: box.price,
      frequency: box.frequency,
      pulocation: box.pulocation,
      purchasers: [],
      shares: box.shares,
      payment: box.payment,
      active:true
    }

    $http.post('api/csas', csaBox);
    $route.reload();

  };
  $scope.removeBox = function(id){
    $http.delete('api/csas/' + id);
    $route.reload();
  };
  $scope.editBox = function(csaBox){
    $http.put('api/csas/' + csaBox._id, csaBox);
    $route.reload();
  };
  $scope.editPro = function(cup){
    $http.put('api/profiles/' + cup._id, cup);
    $route.reload();

  };

  $scope.exportTable = function(index){
    var tableId = "dataTable-" + index;
    var $rows = ($("#" + tableId)).find('tr:has(td)');

    var colDelim = '","';
    var rowDelim = '"\r\n"';
    var tmpColDelim = String.fromCharCode(11);
    var tmpRowDelim = String.fromCharCode(0);
    var csv = '"' + $rows.map(function (i, row) {
                var $row = $(row),
                    $cols = $row.find('td');

                return $cols.map(function (j, col) {
                    var $col = $(col),
                        text = $col.text();

                    return text.replace('"', '""'); // escape double quotes

                }).get().join(tmpColDelim);

            }).get().join(tmpRowDelim)
                .split(tmpRowDelim).join(rowDelim)
                .split(tmpColDelim).join(colDelim) + '"';


    window.open('data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
  };


  });
