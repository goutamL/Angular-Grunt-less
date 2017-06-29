(function() {
  'use strict';

angular.module('MyApp').controller('TenantAgencyController', TenantAgencyController);
TenantAgencyController.$inject = ['TeanantSevice', '$rootScope','$scope','$location','$stateParams','$state'];

function TenantAgencyController(TeanantSevice,$rootScope,$scope,$location,$stateParams,$state) {
    var vm = this;
    vm.selTenant = {};
    $scope.tenantAgencyInfo  = {};

    vm.pid = $stateParams.id;
    console.log(vm.pid);

    loadData();
    function loadData(){
      loadTenantData();
    }

    function loadTenantData(){
      TeanantSevice.GetTenantsData(vm.pid)
      .then(function (tenantData) {
          vm.selTenant = tenantData;
          $scope.tenantAgencyInfo = tenantData.agencyInformation[0];
          console.log($scope.tenantAgencyInfo);
      });
    }

    vm.updateTenantAgencyInfo = function(){
      console.log($scope.tenantAgencyInfo);
      /* $scope.AgencyInfo = {
            "agencyName":$scope.tenantAgencyInfo.agencyName,
            "fullName":$scope.tenantAgencyInfo.fullName
        };*/
      TeanantSevice.UpdateTenantAgencyInfo(vm.pid,$scope.tenantAgencyInfo)
      .then(function (res) {
          console.log(res);
          $state.go("home");
      });
      
    }

};
})();

