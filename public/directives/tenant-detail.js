(function () {
    'use strict';

/*angular.
  module('MyApp').
  component('tenantDetail', {
    templateUrl: 'partials/tenant-detail.template.html'
  });*/

angular.module("MyApp")
.directive("tenantDetail", function() {
  return {
    restrict: "E",
    scope: true,
    templateUrl:'partials/tenant-detail.template.html'
  };
});

  })();