angular.module('app').controller('DatePickerExample', function ($scope) {

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  

  });