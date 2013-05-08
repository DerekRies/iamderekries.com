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
      template: '<div class="rotator-component">{{items[r]}}</div>',
      // template: '<div class="rotator-parent"><div class="rotator-component" ng-repeat="item in items">{{item}}</div></div>',
      // template: '<div class="rotator-parent"><div class="rotator-component"><div>{{items[r]}}</div></div>'+
      //           '<div class="rotator-component"><div>{{items[r + 1]}}</div></div></div>',
      link: function postLink(scope, element, attrs) {
        scope.r = 0;
        var rotate = function(){

            $timeout(function(){
              scope.r = (scope.r >= scope.items.length - 2) ? 0 : scope.r + 1;
              rotate();
            }, scope.duration);
          };

        rotate();
      }
    };
  }]);
