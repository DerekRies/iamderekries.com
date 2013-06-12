'use strict';

angular.module('portfolioApp')
  .controller('SingleProjectCtrl', ['$scope','$routeParams', 'Projects', '$location', '$rootScope',
    function ($scope, $routeParams, Projects, $location, $rootScope) {

    $scope.currentPicture = 0;

    $scope.nextPicture = function () {
      if($scope.currentPicture >= $scope.project.media.length - 1){
        $scope.currentPicture = 0;
      }
      else{
        $scope.currentPicture++;
      }
    };

    $scope.prevPicture = function () {
      if($scope.currentPicture <= 0){
        $scope.currentPicture = $scope.project.media.length - 1;
      }
      else{
        $scope.currentPicture--;
      }
    };

    $scope.project = Projects.getByName($routeParams.projectId);

    // $scope.project = {
    //   title: $routeParams.projectId,
    //   subtitle: $routeParams.projectId + '\'s project subtitle goes here'
    // };

  }]);
