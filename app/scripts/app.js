'use strict';

angular.module('portfolioApp', [])
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
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);
