
var draft = angular.module('draft', ['ngRoute', 'ngAnimate', 'ngSanitize']);

draft.controller('MainCtrl', function ($scope, $location, $route) {
    $scope.activePath = null;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.activePath = $location.path();
        console.log($location.path());
    });
    
});


draft.controller('TabController',['$scope','$http', function ($scope,$http) {

    this.tab = 1;

    this.selectTab = function (setTab) {
        this.tab = setTab;
    };
    this.isSelected = function (checkTab) {
        return this.tab === checkTab;
    };


    $http.get('../json/images.json').success(function (data) {
        $scope.images = data;
    });

    $http.get('../json/websites.json').success(function (data) {
        $scope.websites = data;
    });

    //console.log(angular.toJson($scope.websites));

}]);



draft.controller('SkillsCtrl', function ($scope) {

    this.tab = 1;

    this.selectTab = function (setTab) {
        this.tab = setTab;
    };
    this.isSelected = function (checkTab) {
        return this.tab === checkTab;
    };
});

draft.controller('SkillsImgCtrl', function ($scope) {

    $scope.skill_img = [
{
    skill_title: 'Vector Design',
    skill_img_preview: '../imgs/about/illustration.png',
},
{
    skill_title: 'Web Development',
    skill_img_preview: '../imgs/about/webdevelopment.png',
},
{
    skill_title: 'Responsive',
    skill_img_preview: '../imgs/about/responsive.png',
},
{
    skill_title: 'PSD to Web Code',
    skill_img_preview: '../imgs/about/psdtoweb.png',
},
    ];

});

draft.controller('startCtrl', function ($scope) {
    // Pretty simple huh?
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

});

draft.controller('mdbaCtrl', function ($scope, $window) {
    $scope.OpenmdbaWindow = function () {
        $window.open("../all/mdbusingAng/example/index.html", "popup", "width=700,height=500,left=150,top=150");
    }

    $scope.OpenmdbaPhp = function () {
        $window.open("../all/mdbusingAng/example2/index.html", "popup", "width=700,height=500,left=150,top=150");
    }
});

draft.controller('apiudCtrl', function ($scope, $window) {
    $scope.AngPhpIUDWindow = function () {
        $window.open("../all/AngPhpIUD/example/index.html", "popup", "width=120000,height=500,left=10,top=10");
    }
    $scope.MyParallax = function () {
        $window.open("../site/my_parallax/index.html", "popup", "width=1500,height=800,left=0,top=50");
    }
});

draft.controller('isuUsingmDbPhpCtrl', function ($scope, $window) {
    $scope.isuUsingmDbPhp = function () {
        $window.open("../all/isuUsingmDbPhp/example/index.php", "popup", "width=1000,height=500,left=10,top=10");
    }
});


draft.controller('pgwithfilterCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.mess = "Message from pg";

    this.tab = 1;

    this.selectTab = function (setTab) {
        this.tab = setTab;
    };
    this.isSelected = function (checkTab) {
        return this.tab === checkTab;
    };


    $http.get('../json/all_pgwithfilters_json.json').success(function (data) {
        $scope.pgwithfilters_json = data;
    });

    //$http.get('../json/pgwithfilter_images.json').success(function (data) {
    //    $scope.pgwithfilter_images = data;
    //});

    //$http.get('../json/pgwithfilter_websites.json').success(function (data) {
    //    $scope.pgwithfilter_websites = data;
    //});

    //console.log(angular.toJson($scope.websites));

}]);


