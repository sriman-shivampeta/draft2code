

// create the module and name it scotchApp
var app = angular.module('sample', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'textAngular']);

// configure our routes
app.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('//', {
            templateUrl: 'index.html',
            controller: 'mainController'
        })

        // route for the home page
        .when('/home', {
            templateUrl: 'index.html',
            controller: 'mainController'
        })
        
        // route for the home page
        .when('/projects', {
            templateUrl: 'index.html',
            controller: 'mainController'
        })

        // route for the home page
        .when('/contact', {
            templateUrl: 'index.html',
            controller: 'mainController'
        })

    
        // route for the about page
    .otherwise({redirectTo: '/'});
});


// create the controller and inject Angular's $scope

//MainControls

app.service('anchorSmoothScroll', function () {

    this.scrollTo = function (eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 50);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };

});

app.run(function ($rootScope, $location, $anchorScroll, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {
        $location.hash($routeParams.scrollTo);
        $anchorScroll();
    });
})


app.directive('bsActiveLink', ['$location', function ($location) {
    return {
        restrict: 'A', //use as attribute 
        replace: false,
        link: function (scope, elem) {
            //after the route has changed
            scope.$on("$routeChangeSuccess", function () {
                var hrefs = ['/#' + $location.path(),
                             '#' + $location.path(), //html5: false
                             $location.path()]; //html5: true
                angular.forEach(elem.find('a'), function (a) {
                    a = angular.element(a);
                    if (-1 !== hrefs.indexOf(a.attr('href'))) {
                        a.parent().addClass('active');
                    } else {
                        a.parent().removeClass('active');
                    };
                });
            });
        }
    }
}]);

app.controller('mainController', function ($scope, $location, anchorSmoothScroll, $window) {

    $scope.gotoElement = function (eID) {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('');

        // call $anchorScroll()
        anchorSmoothScroll.scrollTo(eID);

    };

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };


    //allscripts

    $scope.collections = [{
        product_name: 'Product with Variants',
        rate: '$199.99',
        add_to_cart: 'Add to cart',
        more_details: 'More Details'
    }, {
        product_name: 'Product with Variants1',
        rate: '$200.99',
        add_to_cart: 'Add to cart',
        more_details: 'More Details'
    }, {
        product_name: 'Product with Variants2',
        rate: '$120.99',
        add_to_cart: 'Add to cart',
        more_details: 'More Details'
    }, {
        product_name: 'Product with Variants3',
        rate: '$420.99',
        add_to_cart: 'Add to cart',
        more_details: 'More Details'
    }];
	
   

    $window.onload = function () {

        //alert("Angularjs call function on page load");

        $(window).scroll(function () {

            var $box = $('.box');
            if ($(this).scrollTop() > 10) {
                $box.addClass('box_show');
            }
            else {
                $box.removeClass('box_show');
            }


            var $nav_brand = $('brand_img1');
            if ($(this).scrollTop() > 896) {
                $nav_brand.addClass('scrolled');
            }
            else {
                $nav_brand.removeClass('scrolled');
            }

            var $nav = $('nav');
            if ($(this).scrollTop() > 896) {
                $nav.addClass('scrolled');
            }
            else {
                $nav.removeClass('scrolled');
            }
        });
        
    };



    
    

  
});

