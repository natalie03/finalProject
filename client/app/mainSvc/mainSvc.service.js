'use strict';

angular.module('finalProjectApp')
  .factory('mainSvc', function ($log, $http, $route, $routeParams) {

    var profUrl = 'api/profiles';

    var getProfs = function(){
    return  $http.get(profUrl);
    };

    var singleProf = function(id){
    return $http.get(profUrl + '/' + id);
    };


    return {
      getProfs:getProfs,
      singleProf:singleProf
    }







  });
