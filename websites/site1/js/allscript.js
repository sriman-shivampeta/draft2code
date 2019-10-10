
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
    if ($(this).scrollTop()>690)
     {
      $().fadeIn();
     }
    else
     {
      $().fadeOut(0);
     }

 });


//Refresh To Top Of the Page

$(document).ready(function(){
    $(this).scrollTop(0);

    
});


//Navigation On Click slide Show



