'use strict';

describe('Controller: 404Ctrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var 404Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    404Ctrl = $controller('404Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
