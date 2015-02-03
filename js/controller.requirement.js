var app = angular.module('requirementsApp');

app.controller('RequirementController', function ($scope, requirementService) {
  
  $scope.currentRequirement = {
    desc: '',
    itemNum: '',
    order: 0,
    award: '',
    isAward: false,
    type: ''
  };
  
  $scope.createNewRequirement = function () {
    requirementService.Requirement();
  };
  
});