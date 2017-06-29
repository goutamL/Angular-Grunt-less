(function() {
  'use strict';

angular.module('MyApp').controller('TenantMediaController', TenantMediaController);
TenantMediaController.$inject = ['TeanantSevice', '$rootScope','$scope','$location','$stateParams','$state'];

function TenantMediaController(TeanantSevice,$rootScope,$scope,$location,$stateParams,$state) {
    var vm = this;
    vm.selTenant = {};
    $scope.tenantAgencyInfo  = {};

    vm.tab = 1;
    vm.setTab = function(newTab){
      vm.tab = newTab;
    };
    vm.isSet = function(tabNum){
      return vm.tab === tabNum;
    };

    vm.pid = $stateParams.id;
    console.log(vm.pid);

    loadData();
    function loadData(){
      loadTenantData();
      $state.go(".desfirecard");
    }

    function loadTenantData(){
      TeanantSevice.GetTenantsData(vm.pid)
      .then(function (tenantData) {
          vm.selTenant = tenantData;
          $scope.tenantAgencyInfo = tenantData.agencyInformation[0];
          console.log($scope.tenantAgencyInfo);
      });
    }

    vm.updateTenantMedia = function(){
      console.log($scope.tenantAgencyInfo);

      TeanantSevice.UpdateTenantMedia(vm.pid,$scope.tenantAgencyInfo)
      .then(function (res) {
          console.log(res);
          $state.go("home");
      });
      
    }

};
})();

