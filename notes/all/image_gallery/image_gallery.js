draft.controller('GalCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.arc_images_ = [
{
    arc_title: "1",
    arc_img: "../../imgs/arc/1.jpg",
    alt: "Nature and sunrise"
},
{
    arc_title: "2",
    arc_img: "../../imgs/arc/2.jpg",
    alt: "Trolltunga, Norway"
},
{
    arc_title: "3",
    arc_img: "../../imgs/arc/3.jpg",
    alt: "Mountains and fjords"
},
{
    arc_title: "4",
    arc_img: "../../imgs/arc/4.jpg",
    alt: "Northern Lights"
}
    ];


    $scope.currentSlideMain = function () {
        openModal(); currentSlide(1);
        $scope.currentSlide++;

    };


    //console.log(angular.toJson($scope.images));

}]);

