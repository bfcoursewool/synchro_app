export default class LPEffects {
  constructor() {
    this.registerEvents();
  }

  registerEvents() {
    let that = this;
    let specialSelectors = {
      'window': window
    }
    $.each(this.events(), function(key, value) {
      let [event, selector] = key.split(' '); 
      if(selector == 'window') {
        selector = specialSelectors[selector];
      }
      $(selector).on(event, function() {
        that[value](this)
      });
    });
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

  parallaxScroll(oldThis) {
    if (location.pathname.replace(/^\//,'') == oldThis.pathname.replace(/^\//,'') && location.hostname == oldThis.hostname) {
      var target = $(oldThis.hash);
      target = target.length ? target : $('[name=' + oldThis.hash.slice(1) +']');
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
    console.log('nav menu transition handler...'); 
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