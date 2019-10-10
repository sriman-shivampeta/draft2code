draft.controller('lightboxCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.lightbox_images =
        [
            {
                title: "1",
                img_preview: "../../imgs/pic/1.jpg",
                img_link: "../../imgs/pic/1.jpg"
            },
            {
                title: "2",
                img_preview: "../../imgs/pic/2.jpg",
                img_link: "../../imgs/pic/2.jpg"
            },
            {
                title: "3",
                img_preview: "../../imgs/pic/3.jpg",
                img_link: "../../imgs/pic/3.jpg"
            },
            {
                title: "4",
                img_preview: "../../imgs/pic/4.jpg",
                img_link: "../../imgs/pic/4.jpg"
            },
        ];

    //console.log(angular.toJson($scope.images));

}]);