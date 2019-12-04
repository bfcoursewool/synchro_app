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
      'click .main-navigation__hamburger': 'toggleNav',
      'click .main-navigation__item': 'toggleNav',
      'click .main-navigation__cta': 'toggleNav',
      'click .vjs-big-play-button': 'hideBenefitsText',
      'click a[href*="#"]:not([href="#"])': 'parallaxScroll',
      'scroll window': 'navMenuTransition',
      'scroll window': 'expandedNavMenuTransition',
      'click a[data-modal-id]': 'openModal',
      'click .js-modal-close': 'closeModal',
      'keyup window': 'closeModal',
      'click .modal-overlay': 'closeModal',
      'click .vjs-big-play-button': 'hideBenefitsText',
      'click .product-card__ingredients': 'toggleInfoText',  // On Keto-Bundle page  TODO -- Refactor front-end build by page somehow...
      'click .product-card__nutrition': 'toggleInfoText', // Same ^^
      'click .kcp-timeline__event-box': 'toggleTimelineText',
      'click .how-it-works__icon': 'toggleHowItWorks',
      'click .weight-loss__icon': 'toggleWeightLoss',
      'click .toggle-single-view': 'toggleSingleView', // Only ONE element is visible at one time. Use this toggle event for this element globally.
      'click .toggle-multiple-view': 'toggleMultipleView', // MULTIPLE element are visible at one time. Use this toggle event for this element globally.
      'click .purchase-2__options': 'goldCapsulePurchaseSwap',
    }
  }

  goldCapsulePurchaseSwap(target) {
    $('.purchase-2__options').each(function() { $(this).removeClass('selected') })
    $(target).addClass('selected')
    $("div[class*='option-'],p[class*='option-']").each(function() { $(this).removeClass('active') })
    $("input[class*='option-']").each(function() { $(this).prop('checked', false) })
    let targetClasses = $(target).attr('class').split(/\s+/)
    $.each(targetClasses, function(index, item) {
      if(item.includes('option-')) {
        $(`div[class*='${item}'],p[class*='${item}']`).each(function() { $(this).addClass('active') })
        $(`input[class*='${item}']`).prop('checked', true)
      }
    })
  }

  toggleMultipleView(target) {
    if($(target).is('.active')) {
      $(target).removeClass('active');
      $(target).parent().removeClass('active');
      $(target).children().removeClass('active');
      $(target).parent().siblings().removeClass('active');
      $(target).parent().siblings().find('.toggle-multiple-view').removeClass('active');
      $(target).parent().siblings().find('.toggle-multiple-view').children().removeClass('active');
    } else {
      $(target).addClass('active');
      $(target).parent().addClass('active');
      $(target).children().addClass('active');
    }
  }

  toggleSingleView(target) {
    if($(target).is('.active')) {
      $(target).removeClass('active');
      $(target).parent().removeClass('active');
      $(target).children().removeClass('active');
    } else {
      $(target).addClass('active');
      $(target).parent().addClass('active');
      $(target).children().addClass('active');
      $(target).parent().siblings().removeClass('active');
      $(target).parent().siblings().find('.toggle-single-view').removeClass('active');
      $(target).parent().siblings().find('.toggle-single-view').children().removeClass('active');
    }
  }

  toggleWeightLoss(target) {
    if($(target).is('.active')) {
      $(target).removeClass('active');
      $(target).siblings('.weight-loss__text').removeClass('active');
    } else {
      $(target).addClass('active');
      $(target).siblings('.weight-loss__text').addClass('active');
    }
  }

  toggleHowItWorks(target) {
    if($(target).is('.active')) {
      $('.how-it-works .icon-learn-more').removeClass('active');
      $('.how-it-works__text').removeClass('active');
    } else {
      $(target).addClass('active');
      $(target).siblings('.how-it-works__text').addClass('active');
    }
  }

  toggleTimelineText(target) {
    if($(target).is('.active')) {
      $(target).removeClass('active');
      $(target).siblings('div').removeClass('active');
      $(target).find('.kcp-timeline__event').removeClass('active');
    } else {
      $(target).addClass('active');
      $(target).siblings('div').addClass('active');
      $(target).find('.kcp-timeline__event').addClass('active');
    }
  }

  toggleInfoText(target) {
    if($(target).is('.active')) {
      $(target).removeClass('active');
      $(target).find('span').removeClass('active');
    } else {
      $(target).addClass('active');
      $(target).find('span').addClass('active');
    }
  }

  toggleNav() {
    if($('.main-navigation').is('.expanded')) {
      $('.main-navigation').removeClass('expanded');
      $('.main-navigation__hamburger').removeClass('expanded');
    } else {
      $('.main-navigation').addClass('expanded');
      $('.main-navigation__hamburger').addClass('expanded');
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
    let maxScroll = 100;
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

  expandedNavMenuTransition() {
    let navbar = $('.expanded-header');
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let maxScroll = 50;
    let scrollAtBannerBackgroundBottom = $('.expanded-header').attr('data-header-transition')
    if(scrollAtBannerBackgroundBottom == 'background') {
      maxScroll = $('.expanded-banner__background').height() - $('.expanded-header').outerHeight();
    }

    // TODO -- Man this is janky... Feels like the nav menu should really become its own
    // self-contained/reusable/configurable component instead of just trying to force it into
    // here and then hack it to work for all our various implementations.
    let navGradientLayer = $('.expanded-header>.gradient-layer');

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

$(".video-modal").click(function () {
  var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC + "?modestbranding=1&rel=0&cc_load_policy=1&showinfo=0&html5=1&autoplay=1";
  $(theModal + ' iframe').attr('src', videoSRCauto);
  $(theModal).on('hidden.bs.modal', function () {
    $(theModal + ' iframe').attr('src', videoSRC);
  });
});
