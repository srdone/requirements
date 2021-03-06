describe('The requirementService', function () {

  var requirementService, Requirement, requirement, requirement1, requirement2, reqA, reqA1, reqA2;

  beforeEach(module('requirementsApp'));

  beforeEach(inject(function(_requirementService_) {
    requirementService = _requirementService_;
    Requirement = requirementService.Requirement;
    addRequirement = requirementService.addRequirement;
    removeRequirement = requirementService.removeRequirement;
    getRequirement = requirementService.getRequirement;
    updateRequirement = requirementService.updateRequirement;
    getAllRequirements = requirementService.getAllRequirements;
    requirement = new Requirement();
    requirement1 = new Requirement('Attend 3 campouts', '1a', 0, 'Tenderfoot', false, 'requirememt');
    requirement2 = new Requirement('Cook one meal', '2', 1, 'Tenderfoot', false, 'requirement');
  }));

  describe('has a newRequirement function that', function () {
    it('should return a requirement object', function () {
      expect(requirement).toBeObject();
    });

    describe('the requirement object', function () {
    
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
        expect(requirement._prereqs).toBeArray();
      });
  
      it('should have a parentRequirement property', function () {
        expect(requirement.parentRequirement).toBeDefined();
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
          requirement1._prereqs = [];
        });

        it('should take a requirement object and add its id to the _prereqs array of this requirement', function () {
          expect(requirement1._prereqs).toContain(requirement2.id);
          expect(requirement1._prereqs.length).toBe(1);
        });

      });

      describe('The removePrereq function', function () {

        beforeEach(function () {
          requirement1.addPrereq(requirement2);
          requirement1.removePrereq(requirement2);
        });

        afterEach(function () {
          requirement1._prereqs = [];
        });

        it('should take a requirement object and remove it\'s id from the _prereqs array', function () {
          expect(requirement1._prereqs).toEqual([]);
        });

      });

      it('should have a prereqsComplete function', function () {
        expect(requirement.prereqsComplete).toBeFunction();
      });

      describe('The prereqsCompete function', function () {
    
        beforeEach(function () {
          reqA = new Requirement('Requirement A', 'a', 0, 'award', false, 'requirement');
          reqA1 = new Requirement('Requirement A1', 'a1', 0, 'award', false, 'requirement');
          reqA2 = new Requirement('Requirement A2', 'a2', 0, 'award', false, 'requirement');

          reqA.addPrereq(reqA1);
          reqA.addPrereq(reqA2);
        });

        it('should return true when given a reqsCompleted array that contains all ids for the prereqs for this requirement', function () {
          var reqsCompleted = [reqA1.id, reqA2.id];
          expect(reqA.prereqsComplete(reqsCompleted)).toBeTrue();
        });

      });
  
    });
  
  });
  
  it('should have an addRequirement function', function () {
    expect(addRequirement).toBeFunction();
  });
  
  it('should have a removeRequirement function', function () {
    expect(removeRequirement).toBeFunction();
  });
  
  it('should have a getRequirement function', function () {
    expect(getRequirement).toBeFunction();
  });
  
  it('should have an updateRequirement function', function () {
    expect(updateRequirement).toBeFunction();
  });
  
  it('should have a getAllRequirements function', function () {
    expect(getAllRequirements).toBeFunction();
  });
  
  describe('The addRequirement function takes a requirement as an argument and', function () {
    
    it('should throw an error if duplicate requirements (based on id) are attempted to be added', function () {
      var reqA = new Requirement('Requirement B', 'b', 0, 'award', false, 'requirement');
      var reqB = new Requirement('Requirement B', 'b', 0, 'award', false, 'requirement');
      addRequirement(reqA);
      e = new Error('The requirement \'' + reqA.id + '\'');
    
      expect(function  () { addRequirement(reqB);}).toThrow(e);
    });
  });
  
  describe('The getAllRequirements function', function () {
    
    beforeEach(function () {
      addRequirement(requirement1);
      addRequirement(requirement2);
    });
    
    afterEach(function() {
      removeRequirement(requirement1);
      removeRequirement(requirement2);
    });
    
    it('should return an array of all the requirements that have been added', function () {
      expect(getAllRequirements().length).toBe(2);
      expect(getAllRequirements()).toContain(requirement1);
      expect(getAllRequirements()).toContain(requirement2);
    });
    
  });
  
  describe('The removeRequirement function', function () {
    
    beforeEach(function () {
      addRequirement(requirement1);
      addRequirement(requirement2);
    });
    
    afterEach(function () {
      removeRequirement(requirement1);
      removeRequirement(requirement2);
    });
    
    it('should remove the requirement from the list of requirements', function () {
      removeRequirement(requirement2);
      
      expect(getAllRequirements().length).toBe(1);
      expect(getAllRequirements()).toContain(requirement1);
      expect(getAllRequirements()).not.toContain(requirement2);
    });
    
  });
  
  describe('The getRequirement function', function () {
  
    var receivedRequirement;
    
    beforeEach(function () {
      addRequirement(requirement1);
    });
    
    afterEach(function () {
      removeRequirement(requirement1);
    });
    
    it('should return a requirement with the supplied id', function () {
      receivedRequirement = getRequirement(requirement1.id);
      
      expect(receivedRequirement.id).toBe(requirement1.id);
    });
    
    it('should throw an error if the requirement cannot be found', function () {
      var getNonExistentRequirement = function () {
        getRequirement('-99999');
      };
      var e = new Error('The requirement id \'-99999\' does not exist');
      
      expect(getNonExistentRequirement).toThrow(e);
    });
    
  });
  
  // describe('The updateRequirement function', function () {
//     
//     beforeEach(function () {
//       addRequirement(requirement1);
//     });
//     
//     it('should update the requirement to the values defined in the passed in object', function () {
//       var updates = {'
//     });
//     
//   });
  
});
