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
  
  (function init() {
    $scope.createNewRequirement();
  });
  
  $scope.createNewRequirement = function () {
    $scope.currentRequirement = requirementService.Requirement('', '', 0, '', false, 'requirement');
  };
  
});