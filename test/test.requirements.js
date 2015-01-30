describe('The requirements object', function () {

  var requirement = new Requirement();
  var requirement1 = new Requirement('Attend 3 campouts', '1a', 0, 'Tenderfoot', false, 'requirememt');

  it('should be an object', function () {
    expect(requirement).toBeObject();
  });

  it('should have an id', function () {
    expect(requirement.id).toBeDefined();
    expect(requirement.id).toBeString();
  });

  it('should have a description', function () {
    expect(requirement.desc).toBeDefined();
    expect(requirement.desc).toBeString();
  });

  it('should be associated with an award', function () {
    expect(requirement.award).toBeDefined();
    expect(requirement.award).toBeString();
  });

  it('should have an item number', function () {
    expect(requirement.itemNum).toBeDefined();
    expect(requirement.itemNum).toBeString();
  });

  it('should have an order', function () {
    expect(requirement.order).toBeDefined();
    expect(requirement.order).toBeWholeNumber();
  });

  it('should have a boolean flag saying if it is an award', function () {
    expect(requirement.isAward).toBeDefined();
    expect(requirement.isAward).toBeBoolean();
  });

  it('should have a requirement type', function () {
    expect(requirement.type).toBeDefined();
    expect(requirement.type).toBeString();
  });

  it('should have an array of prerequisites', function () {
    expect(requirement.prereqs).toBeArray();
  });

  it('should have a generateId function', function () {
    expect(requirement.generateId).toBeFunction();
  });

  it('should have an addPrereq function', function () {
    expect(requirement.addPrereq).toBeFunction();
  });

  describe('The generateID function', function () {
    it('should generate an id by combining the award and itemNum, separated by a dash and save it into the id property', function () {
      expect(requirement1.id).toEqual('Tenderfoot-1a');
    });
  });

});
