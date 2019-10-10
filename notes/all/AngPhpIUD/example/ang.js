var app = angular.module('myApp', []);

app.controller('cntrl', function ($scope, $http, $window) {
    $scope.obj = { 'idisable': false };
    $scope.btnName = "Insert";

    $window.onload = function () {
        $scope.displayStud();
        $scope.msg = "";
    };

    

    $http.get("sample.json")
    .then(function (res) {
        $scope.condata = res.data;
    });


    //$scope.names = { "names": ["Horace", "Slughorn", "Severus", "Snape"] } // category

    //$scope.names = ["Horace", "Slughorn", "Severus", "Snape"] // direct without category


    $scope.insertdata = function () {
        $http.post("insert.php", { 'id': $scope.id, 'name': $scope.name, 'email': $scope.email, 'mess': $scope.mess, 'mob': $scope.mob, 'btnName': $scope.btnName })
		.success(function () {
		    $scope.msg = "Data Inserted";
		    $scope.displayStud();
		})
    }



    $scope.displayStud = function () {
        $http.get("select.php")
		.success(function (data) {
		    $scope.data = data
		})
    }


    $scope.deleteStud = function (studid) {
        $http.post("delete.php", { 'id': studid })
		.success(function () {
		    $scope.msg = "Data Deletion successfull";
		    $scope.displayStud();
		})
    }

    $scope.editStud = function (id, name) {
        $scope.id = id;
        $scope.name = name;
        $scope.btnName = "Update";
        $scope.obj.idisable = true;
        $scope.displayStud();
    }





});


