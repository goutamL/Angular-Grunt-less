(function() {
  'use strict';

angular.module('MyApp').controller('TenantPaymentController', TenantPaymentController);
TenantPaymentController.$inject = ['TeanantSevice', '$rootScope','$scope','$location','$stateParams'];

function TenantPaymentController(TeanantSevice,$rootScope,$scope,$location,$stateParams) {
    var vm = this;
    vm.tenantPaymentInfo  = {};

    vm.pid = $stateParams.id;
    console.log(vm.pid);

    loadData();
    function loadData(){
      loadTenantPaymentData();
    }

    function loadTenantPaymentData(){
      TeanantSevice.GetTenantsData(vm.pid)
      .then(function (tenantData) {

          vm.tenantPaymentInfo = tenantData.businessRules;
          vm.efare = tenantData.businessRules.efare;

          // vm.efare.credit = true;

          console.log(vm.tenantPaymentInfo);
          console.log(vm.tenantPaymentInfo.efare.credit);        
          
      });
    }

};
})();

