draft.config(['$routeProvider', '$locationProvider', (function ($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl: 'pages/works.html',
        controller: 'TabController'
    })
    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'MainCtrl'
    })
    .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'MainCtrl'
        })
        .when('/notes', {
            templateUrl: 'pages/notes.html',
            controller: 'CalciCtrl'
        })
    .otherwise({ redirectTo: '/' });
    //$locationProvider.html5Mode(true);

})]);