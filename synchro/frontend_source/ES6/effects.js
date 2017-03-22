import Base from './base';

export default class LPEffects extends Base {
  constructor() {
    super();
  }

  events() {
    return {
      'click .main-navigation__mobile': 'toggleNav',
      'click .main-navigation__item': 'toggleNav',
      'click .vjs-big-play-button': 'hideBenefitsText',
      'click a[href*="#"]:not([href="#"])': 'parallaxScroll',
      'scroll window': 'navMenuTransition'
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
    $('.main-banner__uvp').addClass('hidden');
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
}