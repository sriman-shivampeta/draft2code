var app = angular.module('d2c', ['ui.bootstrap']);

app.controller('MainCtrl', function ($scope) {
    $scope.name = 'World';


    $(document).ready(function () {
        $(".icon").click(function () {
            $(".mobilenav").toggle("puff");
            $(".top-menu").toggleClass("top-animate");
            $(".mid-menu").toggleClass("mid-animate");
            $(".bottom-menu").toggleClass("bottom-animate");
        });

        $('.mobilenav li a').on("click", function () {
            $('.mobilenav').toggle("puff");
            $(".top-menu").toggleClass("top-animate");
            $(".mid-menu").toggleClass("mid-animate");
            $(".bottom-menu").toggleClass("bottom-animate");
        });
    });


    
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


    $(".nav a").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);


    $scope.works = [
     { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(1).jpg', url: '../imgs/gallery/1(1).jpg' },
     { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(4).jpg', url: '../imgs/gallery/1(4).jpg' },
     { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(5).jpg', url: '../imgs/gallery/1(5).jpg' },
     { website: 2, name: 'Website', thumbnail: '../imgs/gallery/site2.jpg', url: '../websites/site2/index.html' },
     { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(2).jpg', url: '../imgs/gallery/1(2).jpg' },
     { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(3).jpg', url: '../imgs/gallery/1(3).jpg' },
     { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(6).jpg', url: '../imgs/gallery/1(6).jpg' },
     { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(7).jpg', url: '../imgs/gallery/1(7).jpg' },
     { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(8).jpg', url: '../imgs/gallery/1(8).jpg' },
     { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(9).jpg', url: '../imgs/gallery/1(9).jpg' },
     { graphic: 1, name: 'Illustrator', thumbnail: '../imgs/gallery/1(10).jpg', url: '../imgs/gallery/1(10).jpg' },
     { website: 2, name: 'Website', thumbnail: '../imgs/gallery/site1.jpg', url: '../websites/site1/index.html' }
    ];


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


    AOS.init();
});
