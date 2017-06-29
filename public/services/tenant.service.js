(function () {
    'use strict';

angular.module('MyApp').factory('TeanantSevice', TeanantSevice);

TeanantSevice.$inject = ['$http'];

    function TeanantSevice($http) {

        var service = {};

        service.GetTenantConfigData= GetTenantConfigData;
        service.GetAllTenantsData = GetAllTenantsData;
        service.CreateTenant = CreateTenant;
        service.GetTenantsData = GetTenantsData;
        service.UpdateTenantAgencyInfo  = UpdateTenantAgencyInfo;

        return service;

        function GetTenantConfigData() {
            return $http.get('http://localhost:3000/api/list').then(handleSuccess, handleError('Error getting data'));
        }
        function GetAllTenantsData() {
            return $http.get('http://localhost:3000/api/tenants').then(handleSuccess, handleError('Error getting tenants data'));
        }
        function CreateTenant(tenant) {
            return $http.post('http://localhost:3000/api/tenant',tenant).then(handleSuccess, handleError('Error getting tenants data'));
        }
        function GetTenantsData(id) {
            return $http.get('http://localhost:3000/api/tenant/'+id).then(handleSuccess, handleError('Error getting tenants data'));
        }
        function UpdateTenantAgencyInfo(id,tenantAgencyInfo) {
            return $http.put('http://localhost:3000/api/tenant/agencyinfo/'+id,tenantAgencyInfo).then(handleSuccess, handleError('Error getting updated data data'));
        }
        

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
