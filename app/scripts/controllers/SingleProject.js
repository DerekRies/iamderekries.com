'use strict';

angular.module('portfolioApp')
  .controller('SingleProjectCtrl', ['$scope','$routeParams', 'Projects',
    function ($scope, $routeParams, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.project = Projects.getByName($routeParams.projectId);
    // $scope.project = {
    //   title: $routeParams.projectId,
    //   subtitle: $routeParams.projectId + '\'s project subtitle goes here'
    // };

  }]);
