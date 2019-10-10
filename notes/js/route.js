draft.config(['$routeProvider', '$locationProvider', (function ($routeProvider, $locationProvider) {

    $routeProvider

    //    .when('/', {
    //    templateUrl: 'pages/works.html',
    //    controller: 'TabController'
    //})

    .when('/lightbox_', {
        templateUrl: '../all/imagelightbox/lightbox.html',
        controller: 'lightboxCtrl'
    })

    .when('/popup_image', {
        templateUrl: '../all/popup_image/popup_image.html',
        controller: 'popupImageCtrl'
    })

    .when('/image_gallery', {
        templateUrl: '../all/image_gallery/image_gallery.html',
        controller: 'GalCtrl'
    })

    .when('/mdba', {
        templateUrl: '../all/mdbusingAng/mdba.html',
        controller: 'mdbaCtrl'
    })

    .when('/pgwithfilter', {
        templateUrl: '../all/pgwithfilter/pgwithfilter.html',
        controller: 'pgwithfilterCtrl'
    })

    .when('/apiud', {
        templateUrl: '../all/AngPhpIUD/apiud.html',
        controller: 'apiudCtrl'
    })

    .when('/ctmlaburobo', {
        templateUrl: '../all/ctmLabuRobo/ctmlaburobo.html',
        controller: 'ctmlaburoboCtrl'
    })

    .when('/isuUsingmDbPhp', {
        templateUrl: '../all/isuUsingmDbPhp/isuUsingmDbPhp.html',
        controller: 'isuUsingmDbPhpCtrl'
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