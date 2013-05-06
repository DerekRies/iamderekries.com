'use strict';

angular.module('portfolioApp')
  .directive('rotator', ['$timeout', function ($timeout) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        items: '=',
        duration: '@',
        fudge: '@'
      },
      template: '<div class="rotator-component"><div>{{items[r]}}</div></div>',
      link: function postLink(scope, element, attrs) {
        var rotate = function(){
            scope.r = Math.floor(Math.random() * scope.items.length);
            $timeout(function(){
                rotate();
              }, scope.duration);
          };

        rotate();
      }
    };
  }]);
