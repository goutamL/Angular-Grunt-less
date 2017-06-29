(function () {
    'use strict';

angular.module('MyApp', ['ngResource', 'ngMessages', 'ui.router']).config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];

function config($stateProvider, $urlRouterProvider,$locationProvider) {
$locationProvider.html5Mode(true);

$urlRouterProvider.otherwise('/');


$stateProvider
.state('home',{
    url: '/',
    views: {
        '': {
          templateUrl: 'views/home.html'
        },
        'nav@home': {
          templateUrl: 'layouts/nav.html'
        },
        'body@home': {
          templateUrl: 'views/partials/main-body.html',
          controller: 'MainController',
          controllerAs: 'vm'
        }
    }
})
.state('one',{
    url: '/one',
    views: {
        '': {
          templateUrl: 'views/home.html'
        },
        'nav@one': {
          templateUrl: 'layouts/nav.html'
        },
        'body@one': {
          templateUrl: 'views/partials/main-body.html',
          controller: 'MainController',
          controllerAs: 'vm'
        }
    }
})
.state('two',{
    url: '/two',
    views: {
        '': {
          templateUrl: 'views/home.html'
        },
        'nav@two': {
          templateUrl: 'layouts/nav.html'
        },
        'body@two': {
          templateUrl: 'views/partials/main-body.html',
          controller: 'MainController',
          controllerAs: 'vm'
        }
    }
})
.state('home.createtenant',{
    url: 'create',
    views: {
        '': {
          templateUrl: 'views/home.html'
        },
        'nav@home': {
          templateUrl: 'layouts/nav.html'
        },
        'body@home': {
          templateUrl: 'views/partials/tenant.create.template.html',
          controller: 'CreateTenantController',
          controllerAs: 'vm'
        }
    }
})
.state('tenant',{
    url: '/viewTenant/:id',
    views: {
        '': {
          templateUrl: 'views/tenant.html',
          controller: 'TenantController',
          controllerAs: 'vm'
        },
        'nav@tenant': {
          templateUrl: 'layouts/nav.html'
        },
        'sideNav@tenant': {
          templateUrl: 'layouts/rightNav.html'
        },
        'body@tenant': {
          templateUrl: 'views/partials/tenant.agencyInfo.template.html',
          controller:'TenantAgencyController',
          controllerAs:'vm',
        }
    }
})
.state('tenant.agencyinformation',{
    url: '/agencyInfo',
    views: {
        'body@tenant': {
          templateUrl: 'views/partials/tenant.agencyInfo.template.html' ,
          controller:'TenantAgencyController',
          controllerAs:'vm',

        }
    }
})
.state('tenant.paymentInfo',{
    url: '/paymentInfo',
    views: {
        'body@tenant': {
          templateUrl: 'views/partials/tenant.paymentInfo.template.html' ,
          controller:'TenantPaymentController',
          controllerAs:'vm',

        }
    }
})
.state('tenant.media',{
    url: '/media',
    views: {
        'body@tenant': {
          templateUrl: 'views/partials/tenant.media.template.html' ,
          controller:'TenantMediaController',
          controllerAs:'vm',

        }
    }
})
.state('tenant.media.desfirecard',{
    url: '',
    views: {
        'tab-view@tenant.media': {
          templateUrl: 'views/partials/tenant.media.desfirecard.template.html'
        }
    }
})
.state('tenant.media.desfiresticker',{
    url: '',
    views: {
        'tab-view@tenant.media': {
          templateUrl: 'views/partials/tenant.media.desfiresticker.template.html'
        }
    }
})
.state('tenant.media.magneticcard',{
    url: '',
    views: {
        'tab-view@tenant.media': {
          templateUrl: 'views/partials/tenant.media.magneticcard.template.html'
        }
    }
})
.state('tenant.media.lucccard',{
    url: '',
    views: {
        'tab-view@tenant.media': {
          templateUrl: 'views/partials/tenant.media.lucccard.template.html'
        }
    }
})
.state('tenant.media.printedbarCode',{
    url: '',
    views: {
        'tab-view@tenant.media': {
          templateUrl: 'views/partials/tenant.media.printedbarCode.template.html'
        }
    }
})
.state('tenant.fareconfiguration',{
    url: '/fareconfiguration',
    views: {
        'body@tenant': {
          templateUrl: 'views/partials/tenant.fareconfiguration.template.html'

        }
    }
})
.state('tenant.invoicelink',{
    url: '/invoicelink',
    views: {
        'body@tenant': {
          templateUrl: 'views/partials/tenant.invoicelink.template.html'

        }
    }
})
.state('tenant.fullfillment',{
    url: '/fullfillment',
    views: {
        'body@tenant': {
          templateUrl: 'views/partials/tenant.fullfillment.template.html'

        }
    }
})
.state('tenant.cardreplacement',{
    url: '/cardreplacement',
    views: {
        'body@tenant': {
          templateUrl: 'views/partials/tenant.cardreplacement.template.html'

        }
    }
})
.state('tenant.security',{
    url: '/security',
    views: {
        'body@tenant': {
          templateUrl: 'views/partials/tenant.security.template.html'

        }
    }
})
.state('tenant.miscellaneoustenantparameters',{
    url: '/miscellaneoustenantparameters',
    views: {
        'body@tenant': {
          templateUrl: 'views/partials/tenant.miscellaneoustenantparameters.template.html'

        }
    }
})
.state('tenant.modules',{
    url: '/modules',
    views: {
        'body@tenant': {
          templateUrl: 'views/partials/tenant.modules.template.html'

        }
    }
})
.state('tenant.paymentgateway',{
    url: '/paymentgateway',
    views: {
        'body@tenant': {
          templateUrl: 'views/partials/tenant.paymentgateway.template.html'

        }
    }
})
.state('tenant.passwordrules',{
    url: '/passwordrules',
    views: {
        'body@tenant': {
          templateUrl: 'views/partials/tenant.passwordrules.template.html'

        }
    }
})
.state('tenant.uploadencriptionkey',{
    url: '/uploadencriptionkey',
    views: {
        'body@tenant': {
          templateUrl: 'views/partials/tenant.uploadencriptionkey.template.html'

        }
    }
})
.state('tenant.efarepage',{
    url: '/efarepage',
    views: {
        'body@tenant': {
          templateUrl: 'views/partials/tenant.efarepage.template.html'

        }
    }
})
.state('tenant.cdtapage',{
    url: '/cdtapage',
    views: {
        'body@tenant': {
          templateUrl: 'views/partials/tenant.cdtapage.template.html'

        }
    }
});
}


})();



    