angular.module('app').controller('LabController', [ 
   function () { 
      var vm = this;
      
      vm.alerts = [];
      
      vm.addDanger = function() {
	      addAlert('danger','Danger!! Danger!!');
      } 
      
      vm.addWarning = function() {
	      addAlert('warning','Warning!!Warning!!')
      }
      
      vm.dismissAlert = function(index) {
	      vm.alerts.splice(index,1);
      }
      
      function addAlert(type,text) {
	      vm.alerts.push({type: type,text: text});
	  }

   } 
]);