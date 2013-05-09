'use strict';

angular.module('portfolioApp')
  .directive('rotator', ['$timeout', function ($timeout) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        items: '=',
        duration: '@',
        fudge: '@',
        width: '@'
      },
      template: '<div class="rotator-parent">' +
                '<div class="rotator-component top">Test</div>' +
                '<div class="rotator-component mid">Test</div>' +
                '<div class="rotator-component btm">Test</div>' +
                '</div>',
      link: function postLink(scope, element, attrs) {
        var top,
            mid,
            btm,
            prev,
            el = $(element);
        scope.r = 3;
        console.log(scope.width);
        $(element.children()[0]).html(scope.items[0].text);
        $(element.children()[1]).html(scope.items[1].text);
        $(element.children()[2]).html(scope.items[2].text);
        element.css('width', scope.width + 'px');

        var rotate = function(){
            $timeout(function(){
              top = el.find('.top');
              mid = el.find('.mid');
              btm = el.find('.btm');
              top.removeClass('top').addClass('btm');
              mid.removeClass('mid').addClass('top');
              btm.removeClass('btm').addClass('mid');
              top.html(scope.items[scope.r].text);
              prev =  (scope.r - 1) >= 0 ? scope.r - 1 : scope.items.length - 1;
              console.log(scope.items[prev]);
              element.css('width', scope.items[prev].width + 'px');
              scope.r = (scope.r >= scope.items.length - 1) ? 0 : scope.r + 1;
              rotate();
            }, scope.duration);
          };

        rotate();
      }
    };
  }]);
