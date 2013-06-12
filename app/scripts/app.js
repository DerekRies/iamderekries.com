'use strict';

angular.module('portfolioApp', ['ngMobile', 'angular-carousel'])
  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

      $locationProvider.html5Mode(false).hashPrefix('!');

      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/projects', {
          templateUrl: 'views/projects.html',
          controller: 'ProjectsCtrl'
        })
        .when('/projects/:projectId', {
          templateUrl: 'views/singleproject.html',
          controller: 'SingleProjectCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/404', {
          templateUrl: 'views/404.html',
          controller: '404Ctrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }])
  .run(['$rootScope',function($rootScope) {

      // $(document).keydown(function(e){
      //   console.log(e.keyCode);
      //   // $rootScope.$broadcast('nextProject', {})
      // });
    }]);
