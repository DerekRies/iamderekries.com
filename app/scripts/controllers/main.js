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
      {text: 'Physics', width: 120},
      {text:'Astronomy', width:170},
      {text:'Skateboarding', width:190},
      {text:'Programming', width:190},
      {text:'Javascript', width:160},
      {text:'Cinder', width:110},
      {text:'C++', width:90},
      {text:'Math', width:100},
      {text:'HTML5', width:120},
      {text:'Python', width:120},
      {text:'Angular.js', width:150},
      {text:'Yeoman', width:135},
      {text:'Bootstrap', width:150},
      {text:'Hacking', width:130},
      {text:'nmap', width:100},
      {text:'Wireshark', width:160},
      {text:'App Engine', width:175},
      {text:'Coursera', width:130},
      {text:'Udacity', width:120},
      {text:'Engineering', width:160},
      {text:'Automation', width:160}
    ];

    $scope.likesTwo = [
      {text: 'Web Apps', width: 150},
      {text: 'Simulations', width:250},
      {text: 'Data Visualizations', width: 250},
      {text: 'Native Apps', width: 220},
      {text: 'Games', width: 120},
      {text: 'Tools', width: 100},
      {text: 'Bots', width: 100}
    ];

    $scope.something = function (thing) {
        console.log(thing);
      };

  });
