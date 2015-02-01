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
  
  it('should have a newRequirement.desc property, type string, empty', function() {
    expect(scope.newRequirement.desc).toBeDefined();
    expect(scope.newRequirement.desc).toBeEmptyString();
  });
  
  it('should have a newRequirement.itemNum property, type string, empty', function () {
    expect(scope.newRequirement.itemNum).toBeDefined();
    expect(scope.newRequirement.itemNum).toBeEmptyString();
  });
  
  it('should have a newRequirement.order property, type integer, 0', function () {
    expect(scope.newRequirement.order).toBeDefined();
    expect(scope.newRequirement.order).toBeWholeNumber();
    expect(scope.newRequirement.order).toBe(0);
  });
  
  it('should have a newRequirement.award property, type string, empty', function() {
    expect(scope.newRequirement.award).toBeDefined();
    expect(scope.newRequirement.award).toBeEmptyString();
  });
  
  it('should have a newRequirement.isAward property, type boolean, false', function () {
    expect(scope.newRequirement.isAward).toBeDefined();
    expect(scope.newRequirement.isAward).toBeFalse();
  });
  
  it('should have a newRequirement.type property, type string, empty', function () {
    expect(scope.newRequirement.type).toBeDefined();
    expect(scope.newRequirement.type).toBeEmptyString();
  });
});