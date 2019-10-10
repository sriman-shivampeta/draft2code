var app = angular.module('plunker', ['ui.bootstrap']);

app.controller('MainCtrl', function ($scope) {
    $scope.name = 'World';

});

app.controller('CountryCtrl', function ($scope, $http) {

	 $scope.mesg = 'World';

$scope.login = function() {
		var request = $http({
			method : "post",
			url  : "insert.php",
			data : {
			    faname : $scope.fmname
				},
			});
		}
});

app.controller('DropdownCtrl', function ($scope) {

    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
});