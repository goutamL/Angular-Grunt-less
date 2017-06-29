(function() {
  'use strict';

  angular.module('MyApp').controller('TenantController', TenantController);
 TenantController.$inject = ['TeanantSevice', '$rootScope','$scope','$location','$stateParams'];

  function TenantController(TeanantSevice,$rootScope,$scope,$location,$stateParams) {
    var vm = this;

    vm.tab = 1;
    vm.setTab = function(newTab){
      vm.tab = newTab;
    };
    vm.isSet = function(tabNum){
      return vm.tab === tabNum;
    };

};
})();

