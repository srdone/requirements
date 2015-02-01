var app = angular.module('requirementsApp');

app.controller('CreateRequirementController', function ($scope) {
  
  $scope.newRequirement = {};
  $scope.newRequirement.desc = '';
  
});