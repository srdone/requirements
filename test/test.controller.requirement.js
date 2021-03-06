describe('RequirementController', function() {
  var scope, controller;
  beforeEach(function () {
    module('requirementsApp')
  });
  
  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    
    controller = $controller('RequirementController', {
        '$scope': scope
    });
    
  }));
  
  it('should have a currentRequirement.desc property', function() {
    expect(scope.currentRequirement.desc).toBeDefined();
  });
  
  it('should have a currentRequirement.itemNum property', function () {
    expect(scope.currentRequirement.itemNum).toBeDefined();
  });
  
  it('should have a currentRequirement.order property', function () {
    expect(scope.currentRequirement.order).toBeDefined();
  });
  
  it('should have a currentRequirement.award property', function() {
    expect(scope.currentRequirement.award).toBeDefined();
  });
  
  it('should have a currentRequirement.isAward property', function () {
    expect(scope.currentRequirement.isAward).toBeDefined();
  });
  
  it('should have a currentRequirement.type property', function () {
    expect(scope.currentRequirement.type).toBeDefined();
  });
  
  it('should have a createNewRequirement function', function () {
    expect(scope.createNewRequirement).toBeFunction();
  });
  
  describe('The createNewRequirement function', function () {
    
    var newRequirement, requirementService;
    
    beforeEach(function () {
      inject(function(_requirementService_) {
        requirementService = _requirementService_;
      });
      spyOn(requirementService, 'Requirement');
    });
  
    it('should call the Requirement constructor function from the requirementService', function () {
      scope.createNewRequirement();
      
      expect(requirementService.Requirement).toHaveBeenCalled();
    });
    
    it('calls the requirement constructor using a blank template', function () {
      scope.createNewRequirement();
      
      expect(requirementService.Requirement).toHaveBeenCalledWith('', '', 0, '', false, 'requirement');
    });
    
    it('sets the currentRequirement to the newly created requirement', function () {
      var fakeReturn = {fake: 'fake'};
      requirementService.Requirement = jasmine.createSpy('requirementService.Requirement spy').and.returnValue(fakeReturn);
      
      scope.createNewRequirement();
      
      expect(scope.currentRequirement).toBe(fakeReturn);
    });
    
  });
    
});