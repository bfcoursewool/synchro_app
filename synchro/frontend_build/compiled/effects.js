$(function() {
  
  new WOW().init();

  var toggleNav = function() {
    if($('.main-navigation').is('.expanded')) {
      $('.main-navigation').removeClass('expanded');
    } else {
      $('.main-navigation').addClass('expanded'); 
    }
  };

  // Make hamburger nav work
  $('.main-navigation__mobile').click(function() {
    toggleNav();
  }); 

  // Close Nav menu when an option is clicked
  $('.main-navigation__item').click(function() {
    toggleNav(); 
  });

  // Smooth scroll for nav menu anchor links
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        $('html, body').animate({
          scrollTop: target.offset().top + scrollTop
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
