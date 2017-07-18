(function($){

  // hooking to DOM ready event
  $(document).ready(function(){

    // Click handler for menu main hamburger
    $('.hamburger-menu,.hamburger-close').click(function(){
      $('#main--menu').toggleClass('open')
      $('#sidebar').removeClass('opened');
    });

    // Click handler for category hamburger
    $('.hamburger-menu_category,.hamburger-close-category').click(function(){
      $('#sidebar').toggleClass('opened')
      $('#main--menu').removeClass('open');
    });
    $('.return-to-top').click(function() {
      $('body,html').animate({
        scrollTop : 0
      },1000);
    });
    if($(window).height() >= $(document).height()*0.75){
      $('.return-to-top').hide();
    }
  });
  // scroll arrow
  $(window).scroll(function() {
    var dHeight;
    var sHeight;
    dHeight=($(document).height()*0.75);
    sHeight=(($(this).height())+($(this).scrollTop()));
    if (sHeight <= dHeight) {
      $('.return-to-top').hide();
    } else {
      $('.return-to-top').show();
    }

  });
})(jQuery);
