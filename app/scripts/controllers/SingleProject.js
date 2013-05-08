'use strict';

angular.module('portfolioApp')
  .controller('SingleProjectCtrl', ['$scope','$routeParams',
    function ($scope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.project = {
      title: $routeParams.projectId,
      subtitle: $routeParams.projectId + '\'s project subtitle goes here'
    };

  }]);
