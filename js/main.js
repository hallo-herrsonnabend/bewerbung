$(document).ready(function(){
    //$(".slider").hover(function(){
    //    $('.wrapper').stop().animate({'margin-top': '280px'}, 800);
    //}, function(){
    //    $('.wrapper').stop().animate({'margin-top': '0px'}, 800);
    //});
    
    
    var sliderHeight
    $( window).resize(function(){
        sliderHeight=$('.slider').height();
    });
    
    
    
    
    $(".slider").on('mouseenter', function(){
        $('.wrapper').stop().animate({marginTop : (sliderHeight)-'320'}, 800);
    } );
    
    $(".wrapper").on('mouseenter', function(){
        $('.wrapper').stop().animate({'margin-top': '0px'}, 800);
    } );
    
  
    
    
    // Blur effect
  
    // Nav Change Class
    
    
    var num = 50; //number of pixels before modifying styles
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });



    
  
  //ScrollTO
  
  $(function() {
  $('a[href*=#]:not([href=#])').click(function(e) {
      e.preventDefault();
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


    
});

// active Nav





// Timeline
(function() {
  $(document).ready(function() {
    var timelineAnimate;
    timelineAnimate = function(elem) {
      return $(".timeline.animated .timeline-row").each(function(i) {
        var bottom_of_object, bottom_of_window;
        bottom_of_object = $(this).position().top + $(this).outerHeight();
        bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
          return $(this).addClass("active");
        }
      });
    };
    timelineAnimate();
    return $(window).scroll(function() {
      return timelineAnimate();
    });
  });

}).call(this);


// FONTS


var MTIProjectId='376f272e-9a67-4c10-b8fe-809f0f02213c';
 (function() {
        var mtiTracking = document.createElement('script');
        mtiTracking.type='text/javascript';
        mtiTracking.async='true';
        mtiTracking.src=('https:'==document.location.protocol?'https:':'http:')+'//fast.fonts.net/t/trackingCode.js';
        (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild( mtiTracking );
   })();