(function() {
  'use strict';

  angular.module('MyApp').controller('MainController', MainController);
 MainController.$inject = ['TeanantSevice', '$rootScope','$scope','$location','$state'];

  function MainController(TeanantSevice,$rootScope,$scope,$location,$state) {
    var vm = this;
    vm.allTenants = [];

    $scope.layout = 'list';
$rootScope.absUrl = $location.absUrl();

 console.log($rootScope.absUrl);

loadData();
function loadData(){
  loadConfigData();
  
}

function loadConfigData(){
  TeanantSevice.GetAllTenantsData()
  .then(function (tenantData) {
      vm.allTenants = tenantData;
      console.log(vm.allTenants);
  });
}

};
})();

