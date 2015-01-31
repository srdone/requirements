var app = angular.module('requirementsApp', []);

app.controller('newReqCtrl', function ($scope) {
  
  var requirements = [];
  var currentPrereqs = [];
  
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
    requirements.push(req);
    clearForm();
  };
  
  var addNewPrereq = function (req) {
    currentPrereqs.push(req);
  };
  
  $scope.requirementList = requirements;
  $scope.currentPrereqs = currentPrereqs;
  $scope.addNewPrereq = addNewPrereq;
  $scope.addNewRequirement = addNewRequirement;

});