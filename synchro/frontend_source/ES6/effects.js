import videojs from 'video.js';
import { WOW } from 'wowjs';
import EventsBase from './events_base';

export default class LPEffects extends EventsBase {
  constructor() {
    super();
    new WOW().init();

    this._lastScroll = 0;
    if($('.parallax')) {
      this._initialParallaxBackgroundPosition = $('.parallax').css('background-position-y');
    }

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
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  }

  parallaxBackgroundScroll() {
    if(!$('.parallax')) {
      return;
    }

    let scroll = $(window).scrollTop();
    let scrollDelta = scroll - this._lastScroll;
    let currentBackgroundPosition = parseInt($('.parallax').css('background-position-y'), 10);
    let newBackgroundPosition = currentBackgroundPosition - (scrollDelta / 2);

    if(newBackgroundPosition > 0) {
      newBackgroundPosition = 0;
    }

    $('.parallax').css('background-position-y', newBackgroundPosition + 'px');

    this._lastScroll = scroll;
  }

  navMenuTransition() {
    let navbar = $('.main-header');
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let maxScroll = 47;
    let scrollAtBannerBackgroundBottom = $('.main-header').attr('data-header-transition')
    if(scrollAtBannerBackgroundBottom == 'background') {
      maxScroll = $('.main-banner__background').height() - $('.main-header').outerHeight();
    }

    // TODO -- Man this is janky... Feels like the nav menu should really become its own
    // self-contained/reusable/configurable component instead of just trying to force it into
    // here and then hack it to work for all our various implementations.
    let navGradientLayer = $('.main-header>.gradient-layer');

    if(scrollTop > maxScroll && !navbar.is('.floated')) {
      navbar.addClass('floated');
      if(navGradientLayer) {
        navGradientLayer.addClass('show');
      }
    } else if(scrollTop < maxScroll && navbar.is('.floated')) {
      navbar.removeClass('floated');
      if(navGradientLayer) {
        navGradientLayer.removeClass('show');
      }
    }

    this.parallaxBackgroundScroll();
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

// Set the date we're counting down to
var countDownDate = new Date("October 10 2018 23:59:59 UTC-0700").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(distance / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
