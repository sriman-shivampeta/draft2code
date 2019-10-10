var app = angular.module('firstApp', ['ngRoute', 'ui.bootstrap', 'typer', 'ngMessages']);

// configure our routes
app.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController',
        })

        // route for the work page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        // route for the work page
        .when('/about1', {
            templateUrl: 'pages/about1.html',
            controller: 'about1Ctrl'
        })

        // route for the about page
        .when('/works', {
            templateUrl: 'pages/works.html',
            controller: 'worksController'
        })


        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });


});

// create the controller and inject Angular's $scope
app.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
	
	/*GoogleAnalyticsObject*/

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-90903940-1', 'auto');
  ga('send', 'pageview');


/*GoogleAnalyticsObject*/

});
app.controller('homeCtrl', function ($scope) {
    // Pretty simple huh?
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

});

app.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an aboutController.';

    $scope.showbio = true;
    $scope.showskills = false;
    $scope.showexp = false;

    $scope.bio = function () {
        $scope.showbio = true;
        $scope.showskills = false;
        $scope.showexp = false;
    }
    $scope.skills = function () {
        $scope.showbio = false;
        $scope.showskills = true;
        $scope.showexp = false;
    }
    $scope.exp = function () {
        $scope.showbio = false;
        $scope.showskills = false;
        $scope.showexp = true;
    }

    $scope.states = {};
    $scope.items = [{
        id: 'item1',
        title: 'Home'
    }, {
        id: 'item2',
        title: 'Public Rooms'
    }, {
        id: 'item3',
        title: 'My Rooms'
    }];

});

app.controller('about1Ctrl', function () {
    $(document).ready(function () {
        $('.html').animate({ width: '98%' }, 2500);
        $('.css').animate({ width: '95%' }, 2500);
        $('.bootstrap').animate({ width: '90%' }, 2500);
        $('.jquery').animate({ width: '80%' }, 2500);
        $('.javascript').animate({ width: '88%' }, 2500);
        $('.angularjs').animate({ width: '70%' }, 2500);
        $('.dw').animate({ width: '90%' }, 2500);
        $('.ps').animate({ width: '85%' }, 2500);
        $('.il').animate({ width: '89%' }, 2500);
    });

});

app.controller('worksController', function ($scope) {
    $scope.message = 'Look! I am an works page script.';
});

app.controller('designs', function ($scope) {
    $scope.works = [
        { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(1).jpg', url: '../imgs/gallery/1(1).jpg' },
        { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(4).jpg', url: '../imgs/gallery/1(4).jpg' },
        { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(5).jpg', url: '../imgs/gallery/1(5).jpg' },
        { website: 2, name: 'Html', thumbnail: '../imgs/gallery/site2.jpg', url: '../websites/site2/index.html' },
        { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(2).jpg', url: '../imgs/gallery/1(2).jpg' },
        { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(3).jpg', url: '../imgs/gallery/1(3).jpg' },
        { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(6).jpg', url: '../imgs/gallery/1(6).jpg' },
        { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(7).jpg', url: '../imgs/gallery/1(7).jpg' },
        { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(8).jpg', url: '../imgs/gallery/1(8).jpg' },
        { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(9).jpg', url: '../imgs/gallery/1(9).jpg' },
        { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(10).jpg', url: '../imgs/gallery/1(10).jpg' },
        { website: 2, name: 'Parallax', thumbnail: '../imgs/gallery/site1.jpg', url: '../websites/site1/index.html' },
        { website: 2, name: 'Angular', thumbnail: '../imgs/gallery/site3.jpg', url: '../websites/site3/index.html' }
    ];



});



app.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

app.controller('cntrl', function ($scope, $http) {
    $scope.obj = { 'idisable': false };
    $scope.btnName = "Submit";

    $scope.insertdata = function () {
        var request = $http({
            method: "post",
            url: "insert.php",
            data: {
                name: $scope.name,
                email: $scope.email,
                mess: $scope.mess,
                mob: $scope.mob,
            }
        })
        .success(function (id, name, email, mess, mob) {
            $scope.msg = "Thankyou for your Message...";
            $scope.displayStud();
        });
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

    $scope.editStud = function (studid, studname) {
        $scope.id = studid;
        $scope.name = studname;
        $scope.btnName = "Update";
        $scope.obj.idisable = true;
        $scope.displayStud();
    }
});



app.controller('worksCrtl', function ($scope) {
    $scope.message = 'Hello from worksCtrl';
    $scope.gallery = 'pages/gallery.html';
});

app.controller('galleryCrtl', function ($scope, $http) {
    var images;

    var url = "../content.json";
    $http.get(url).success(function (response) {
        $scope.images = response;
    });
    $scope.propertyName = '';   //it will display by default in reverse order type something like this "$scope.propertyName = 'id';"
    $scope.images = images;
    $scope.reverse = true;
    $scope.message = 'Text from GalleryCtrl';

    $scope.sortBy = function (propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
    };

})(window.angular);



app.controller('magicCtrl', function ($scope) {
    setTimeout(function () {
        $('.one').addClass('magictime swashIn');
    }, 100);

    setTimeout(function () {
        $('.two').addClass('magictime swashIn');
    }, 400);

    setTimeout(function () {
        $('.three').addClass('magictime swashIn');
    }, 200);

    setTimeout(function () {
        $('.four').addClass('magictime swashIn');
    }, 600);

    setTimeout(function () {
        $('.five').addClass('magictime swashIn');
    }, 300);

    setTimeout(function () {
        $('.six').addClass('magictime swashIn');
    }, 500);

    setTimeout(function () {
        $('.seven').addClass('magictime swashIn');
    }, 700);

    setTimeout(function () {
        $('.sw').addClass('magictime swashIn');
    });
});


