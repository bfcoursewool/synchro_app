// TODO -- Fix the heinousness of this mess. Please. 

$(function() {

  // Controls modal stuff for the popup video (Popup VIDeo!)
  var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    videojs('my-video').play();
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
    
    
  $(".js-modal-close, .modal-overlay").click(function() {
    videojs('my-video').pause();
    $(".modal-box, .modal-overlay").fadeOut(500, function() {
      $(".modal-overlay").remove();
    });
  });

  $('.vjs-big-play-button').click(function() {
    if($(this).closest('#popup-video').length === 0) {
      $('.main-banner__uvp').addClass('hidden');
    }
  });

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
    if($(window).width() < 991) {
      toggleNav();      
    }
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
  // If data-header-transition is set to "background", then we initiate the transition effect once the header has
  // reached the bottom of the background image. 
  var scrollAtBannerBackgroundBottom = $('.main-header').attr('data-header-transition');
  var maxScroll = 100;
  if(scrollAtBannerBackgroundBottom == 'background') {
    maxScroll = $('.main-banner__background').height() - $('.main-header').outerHeight();
  } 

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
