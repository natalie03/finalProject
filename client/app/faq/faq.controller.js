'use strict';

angular.module('finalProjectApp')
  .controller('FaqCtrl', function ($scope) {
    $scope.faqs = [{
      quest: "First Question?",
      answ:"THE ANSWER"
    },
    {
      quest: "Another Question?",
      answ:"ANOTHER ANSWER"
    },
    {
      quest: "Another Question?",
      answ:"ANOTHER ANSWER"
    },
    {
      quest: "Another Question?",
      answ:"ANOTHER ANSWER"
    },
    {
      quest: "Another Question?",
      answ:"ANOTHER ANSWER"
    }];
  });
