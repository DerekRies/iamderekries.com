'use strict';

describe('Controller: SingleProjectCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var SingleProjectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SingleProjectCtrl = $controller('SingleProjectCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
