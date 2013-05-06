'use strict';

describe('Directive: rotator', function () {
  beforeEach(module('portfolioApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<rotator></rotator>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the rotator directive');
  }));
});
