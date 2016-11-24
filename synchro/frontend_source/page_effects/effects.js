$(function() {
  // Smooth scroll for nav menu anchor links
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

  // Pin main header/nav menu to the top of the browser window when scrolling, and unpin it when at the top
  var maxScroll = 100;

  $(window).scroll(function() {
    var navbar = $('.main-header');
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if(scrollTop > maxScroll && !navbar.is('.floated')) {
      navbar.addClass('floated');
    } else if(scrollTop < maxScroll && navbar.is('.floated')) {
      navbar.removeClass('floated'); 
    }
  });
});
