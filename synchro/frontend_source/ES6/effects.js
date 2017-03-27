import EventsBase from './events_base';

export default class LPEffects extends EventsBase {
  constructor() {
    super();
    new WOW().init();

    this._appendthis =  ("<div class='modal-overlay js-modal-close'></div>");
  }

  events() {
    return {
      'click .main-navigation__mobile': 'toggleNav',
      'click .main-navigation__item': 'toggleNav',
      'click .vjs-big-play-button': 'hideBenefitsText',
      'click a[href*="#"]:not([href="#"])': 'parallaxScroll',
      'scroll window': 'navMenuTransition',
      'click a[data-modal-id]': 'openModal',
      'click .js-modal-close': 'closeModal',
      'keyup window': 'closeModal',
      'click .modal-overlay': 'closeModal',
      'click .vjs-big-play-button': 'hideBenefitsText'
    }
  }

  toggleNav() {
    if($('.main-navigation').is('.expanded')) {
      $('.main-navigation').removeClass('expanded');
    } else {
      $('.main-navigation').addClass('expanded'); 
    }
  }

  hideBenefitsText() {
    if($(this).closest('#popup-video').length === 0) {
      $('.gold-atf__uvp').addClass('hidden');
    }
  }

  parallaxScroll(clickTarget) {
    if (location.pathname.replace(/^\//,'') == clickTarget.pathname.replace(/^\//,'') && location.hostname == clickTarget.hostname) {
      var target = $(clickTarget.hash);
      target = target.length ? target : $('[name=' + clickTarget.hash.slice(1) +']');
      if (target.length) {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        $('html, body').animate({
          scrollTop: target.offset().top + scrollTop
        }, 1000);
        return false;
      }
    }
  }

  navMenuTransition() {
    let navbar = $('.main-header');
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let maxScroll = 100; 

    if(scrollTop > maxScroll && !navbar.is('.floated')) {
      navbar.addClass('floated');
    } else if(scrollTop < maxScroll && navbar.is('.floated')) {
      navbar.removeClass('floated');
    }
  }

  openModal(target, e) {
    e.preventDefault();
    videojs('my-video').play();
    $("body").append(this._appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(target).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(target).data());
  }

  closeModal(target, e) {
    if(e.which != 27) return;
    videojs('my-video').pause();
    $(".modal-box, .modal-overlay").fadeOut(500, function() {
      $(".modal-overlay").remove();
    });
  }
}