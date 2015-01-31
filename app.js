var app = angular.module('requirementsApp', []);

app.controller('newReqCtrl', function ($scope) {

  var fb = new Firebase('https://fc-requirements.firebaseio.com/');
  var requirements = [];
  var currentPrereqs = [];
  
  (function init () {
    var convertToArray = function (obj) {
      var arr = [];
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          arr.push(obj[key]);
        }
      }
    };
  
    fb.once('value', function (snapshot) {
      if(snapshot.val()) {
        requirements = convertToArray(snapshot)
      } else {
        requirements = [];
      };
    });
  }());
  
  var clearForm = function () {
    $scope.newRequirement.desc = null;
    $scope.newRequirement.itemNum = null;
    $scope.newRequirement.order = null;
    $scope.newRequirement.award = null;
    $scope.newRequirement.isAward = null;
    $scope.newRequirement.type = null;
  };
  
  var addNewRequirement = function () {
    var req = new Requirement($scope.newRequirement.desc,
                              $scope.newRequirement.itemNum,
                              $scope.newRequirement.order,
                              $scope.newRequirement.award,
                              $scope.newRequirement.isAward,
                              $scope.newRequirement.type)
    for (var i = 0; i < currentPrereqs.length; i++) {
      req.addPrereq(currentPrereqs[i]); 
    }
    var seed = {};
    seed[req.id] = req;
    fb.set(requirements.reduce(function (previous, current) {
      previous[current.id] = current;
      return previous;  
    }, seed), function(e) {
      if (e) {
        alert('Failed to save. See error log.')
        console.log(e);
      } else {
        console.log('successfully added ' + req);
        //only push onto requirements array if we were successful in posting it
        requirements.push(req);
        clearForm();
      }
    });
  };
  
  var addNewPrereq = function (req) {
    currentPrereqs.push(req);
  };
  
  $scope.requirementList = requirements;
  $scope.currentPrereqs = currentPrereqs;
  $scope.addNewPrereq = addNewPrereq;
  $scope.addNewRequirement = addNewRequirement;

});