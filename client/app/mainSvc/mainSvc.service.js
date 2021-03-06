'use strict';

angular.module('finalProjectApp')
  .factory('mainSvc', function ($log, $http, $route, $routeParams) {

    var profUrl = 'api/profiles';
    var csaUrl = 'api/csas'

    var getProfs = function(){
    return  $http.get(profUrl);
    };

    var singleProf = function(id){
    return $http.get(profUrl + '/' + id);
    };

    var getCSAs = function(){
    return $http.get(csaUrl);
    };


    // var pushCSA = function (csaBox){
    //   return $http.put (csaUrl + '/' + csaBox._id, csaBox);
    // };


    return {
      getProfs:getProfs,
      singleProf:singleProf,
      getCSAs: getCSAs,
      // pushCSA: pushCSA
    }







  });
