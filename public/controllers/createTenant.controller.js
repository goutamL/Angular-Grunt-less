(function() {
  'use strict';

angular.module('MyApp').controller('CreateTenantController', CreateTenantController);
CreateTenantController.$inject = ['TeanantSevice', '$rootScope','$scope','$location','$state'];

function CreateTenantController(TeanantSevice,$rootScope,$scope,$location,$state) {
    var vm = this;
    $scope.tenant= {};

    $rootScope.absUrl = $location.absUrl();
 console.log($rootScope.absUrl);

    vm.createTenant = function(){
      console.log(vm.tenant);

      TeanantSevice.CreateTenant(vm.tenant)
      .then(function (res) {
          console.log(res);
          $state.go("home");
      });
      
    }

};
})();

