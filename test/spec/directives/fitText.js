'use strict';

describe('Directive: fitText', function () {
  beforeEach(module('portfolioApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<fit-text></fit-text>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the fitText directive');
  }));
});
