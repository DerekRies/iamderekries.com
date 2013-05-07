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
        $scope.iso.isotope({filter: '.type-'+ filterType});
      }
      else{
        $scope.projectFilter = undefined;
        $scope.iso.isotope({filter: ''})
      }
    };

    $scope.projects = Projects.get();
    $timeout(function(){
      $scope.iso = $('.projects-container').isotope({
        itemSelector: '.project-item',
        // layoutMode: 'masonry',
        masonry: {
          columnWidth: 260
        }
      });

    },1);
    // console.log($scope.projects);

  }]);
