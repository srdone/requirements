describe('CreateRequirementController', function() {
  var scope, controller;
  beforeEach(function () {
    module('requirementsApp')
  });
  
  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    
    controller = $controller('CreateRequirementController', {
        '$scope': scope
    });
    
  }));
  
  it('should have a newRequirement.desc property', function() {
    expect(scope.newRequirement.desc).toBeDefined();
  });
});