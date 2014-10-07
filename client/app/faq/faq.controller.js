'use strict';

angular.module('finalProjectApp')
  .controller('FaqCtrl', function ($scope) {
    $scope.faqs = [
    {
      quest: "What are the risks?",
      answ:"Growers and consumers share both the risks and benefits of food production. In most CSAs, members pay up front for the whole season and the farmers do their best to provide an abundant box of produce each week. If things are slim, members are not typically reimbursed. Many times, the idea of shared risk is part of what creates a sense of community among members, and between members and the farmers. If a hailstorm takes out all the peppers, everyone is disappointed together, and together cheer on the winter squash and broccoli. Most CSA farmers feel a great sense of responsibility to their members, and when certain crops are scarce, they make sure the CSA gets served first."
    },
    {
      quest: "What comes in a CSA box?",
      answ:"Often, CSAs also include herbs, honey, eggs, dairy products and meat, in addition to conventional produce offerings. In theory a CSA can provide any product to its members, although the majority of CSA operations tend to provide produce, fruits, and various edibles. Some CSA programs also include cut flowers and various ornamental plants as part of their weekly pickup arrangement. What you receive depends on which CSA option you sign up for."
    },
    {
      quest: "How much does it cost?",
      answ:"Share prices vary from CSA to CSA. Browse our participating farms to view their CSA options and prices."
    },
    {
      quest: "How can I get involved?",
      answ:"Many farms have active volunteer programs. Browse farms to read about participating vendors and navigate to their profile to find contact information."
    }];
  });
