'use strict';

angular.module('portfolioApp')
  .controller('ProjectsCtrl', ['$scope', '$timeout', 'Projects',
    function ($scope, $timeout, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.searchExtended = false;

    $scope.extendSearch = function () {
      $scope.searchExtended = !$scope.searchExtended;
    };

    $scope.buildClass = function (project) {
      return project.size;
    };

    $scope.projectFilter = undefined;

    $scope.setFilter = function(filterType){
      if($scope.projectFilter !== filterType){
        $scope.projectFilter = filterType;
      }
      else{
        $scope.projectFilter = undefined;
      }
    };

    $scope.projects = Projects.get();
    $scope.addItem = function () {
      $timeout(function(){
        $scope.projects.push({"name": "fucker", "type": "desktop", "size": "11"});
        $scope.addItem();
      }, 5000);
    }

    $scope.addItem();


    // console.log($scope.projects);

  }]);
