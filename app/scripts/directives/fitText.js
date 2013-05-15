'use strict';

angular.module('portfolioApp')
  .directive('fitText', [function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        console.log($(element.parent()).width());
      }
    };
  }]);
