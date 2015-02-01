var app = angular.module('requirementsApp');

app.controller('CreateRequirementController', function ($scope) {
  
  $scope.newRequirement = {};
  $scope.newRequirement.desc = '';
  $scope.newRequirement.itemNum = '';
  $scope.newRequirement.order = 0;
  $scope.newRequirement.award = '';
  $scope.newRequirement.isAward = false;
  $scope.newRequirement.type = '';
  
});