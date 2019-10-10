
//Smooth Scroll

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



//Navigation FadeIn and FadeOut

$(window).scroll(function() {    
/*   if ($(this).scrollTop()>690)
     {
      $('#nav0').fadeIn();
     }
    else
     {
      $('#nav0').fadeOut(0);
     }*/

    var desktop = window.matchMedia("screen and (min-width: 480px) and (max-width: 1600px)")
    
     if (desktop.matches)
     { // if media query matches
     if ($(this).scrollTop()>750)
     {

      $('.navbar').fadeIn();
     }
    else
     {
      $('.navbar').fadeOut(0);
     }
    }

    var mobile = window.matchMedia("screen and (min-width: 120px) and (max-width: 480px)")

     if (mobile.matches)
     { // if media query matches
     if ($(this).scrollTop()>390)
     {
      $('.navbar').fadeIn();
     }
    else
     {
      $('.navbar').fadeOut(0);
     }
    }

});



//Refresh To Top Of the Page

$(document).ready(function(){
	$('.navbar').hide();

  $(this).scrollTop(a);

   var desktop = window.matchMedia("screen and (min-width: 480px) and (max-width: 1600px)")    
     if (desktop.matches)
     {
   
    }
   var mobile = window.matchMedia("screen and (min-width: 320px) and (max-width: 480px)")    
     if (mobile.matches)
     {
     
    }

});




//Gallery hide And show

$(document).ready(function() {
  $(".fancybox-thumb").fancybox({
    prevEffect  : 'none',
    nextEffect  : 'none',
    helpers : {
      title : {
        type: 'outside'
      },
      thumbs  : {
        width : 50,
        height  : 50
      }
    }
  });
});


/*$(window).resize(function() {    

     var mql = window.matchMedia("screen (max-width: 765px)")
    if (mql.matches){ // if media query matches
      alert("Window is 765px or wider")
      }
      else
      {
    // do something else
    }
});*/