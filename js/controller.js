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


    $http.get('../json/all_images.json').success(function (data) {
        $scope.all_images = data;
    });

    $http.get('../json/images.json').success(function (data) {
        $scope.images = data;
    });

    //$http.get('../json/websites.json').success(function (data) {
    //    $scope.websites = data;
    //});

    $scope.websites = [
        {
            title: "Photography",
            web_preview: "../imgs/site_images/site1.png",
            url_: "http://sriman.site1.draft2code.com/"
        },
        {
            title: "Tattoo Artist",
            web_preview: "../imgs/site_images/site2.png",
            url_: "http://sriman.site2.draft2code.com/"
        },
        {
            title: "AngularJS With Parallax",
            web_preview: "../imgs/site_images/site3.png",
            url_: "http://sriman.site3.draft2code.com/"
        }
    ];

    //console.log(angular.toJson($scope.websites));

}]);





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





