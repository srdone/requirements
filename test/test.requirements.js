describe('The requirements object', function () {

  var requirement = new Requirement();
  var requirement1 = new Requirement('Attend 3 campouts', '1a', 0, 'Tenderfoot', false, 'requirememt');
  var requirement2 = new Requirement('Cook one meal', '2', 1, 'Tenderfoot', false, 'requirement');

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

  it('should have an object map of prerequisites', function () {
    expect(requirement._prereqs).toBeObject();
  });

  it('should have a generateId function', function () {
    expect(requirement.generateId).toBeFunction();
  });

  it('should have an addPrereq function', function () {
    expect(requirement.addPrereq).toBeFunction();
  });

  it('should have a removePrereq function', function () {
    expect(requirement.removePrereq).toBeFunction();
  });

  it('should have a getPrereqs function', function () {
    expect(requirement.getPrereqs).toBeFunction();
  });

  describe('The generateID function', function () {
    it('should generate an id by combining the award and itemNum, separated by a dash and save it into the id property', function () {
      expect(requirement1.id).toEqual('Tenderfoot-1a');
    });
  });

  describe('The addPrereq function', function () {

    beforeEach(function () {
      requirement1.addPrereq(requirement2);
    });

    afterEach(function () {
      requirement1._prereqs = {};
    });

    it('should take a requirement object and add it to the requirement map', function () {
      expect(requirement1._prereqs[requirement2.id]).toEqual(requirement2);
    });

  });

  describe('The removePrereq function', function () {

    beforeEach(function () {
      requirement1.addPrereq(requirement2);
      requirement1.removePrereq(requirement2);
    });

    afterEach(function () {
      requirement1._prereqs = {};
    });

    it('should take a requirement object and remove it from the _prereqs map', function () {
      expect(requirement1._prereqs).toEqual({});
    });

  });

  it('should have a prereqsComplete function', function () {
    expect(requirement.prereqsComplete).toBeFunction();
  });

  describe('The prereqsCompete function', function () {

    var reqA = new Requirement('Requirement A', 'a', 0, 'award', false, 'requirement');
    var reqA1 = new Requirement('Requirement A1', 'a1', 0, 'award', false, 'requirement');
    var reqA2 = new Requirement('Requirement A2', 'a2', 0, 'award', false, 'requirement');

    reqA.addPrereq(reqA1);
    reqA.addPrereq(reqA2);

    it('should return true when given a reqsCompleted array that contains all ids for the prereqs for this requirement', function () {
      var reqsCompleted = [reqA1.id, reqA2.id];
      expect(reqA.prereqsComplete(reqsCompleted)).toBeTrue();
    });

  });

});
