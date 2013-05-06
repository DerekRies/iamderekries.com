/*jslint white: false */
'use strict';

angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.likesOne = [
      'Physics',
      'Astronomy',
      'Skateboarding',
      'Programming',
      'Javascript',
      'Cinder',
      'C++',
      'HTML5',
      'Python',
      'Angular.js',
      'Yeoman',
      'Bootstrap',
      'Hacking',
      'Wireshark',
      'nmap',
      'Google App Engine',
      'Khan Academy',
      'Coursera',
      'Udacity',
      'Engineering',
      'Automation'
    ];

    $scope.likesTwo = [
      'Web Apps',
      'Data Visualizations',
      'Games',
      'Simulations',
      'Native Apps',
      'Tools',
      'Bots'
    ];

    $scope.something = function (thing) {
        console.log(thing);
      };

  });
