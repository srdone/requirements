describe('CreateRequirementController', function() {
  var scope, createController;
  
  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    
    createController = function () {
      return $controller('CreateRequirementController', {
        '$scope': scope
      });
    };
  }));
  
  it('should have a newRequirementDesc property', function() {
    expect(scope.newRequirementDesc).toBeDefined();
  });
});