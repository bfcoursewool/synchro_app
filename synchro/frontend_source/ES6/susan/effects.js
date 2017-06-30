import ScrollReveal from 'scrollreveal';


export default () => {

  // loadHeroImg();

  window.sr = ScrollReveal({
    duration: 1000,
    scale: 1,
    viewFactor: 0.6,    
  });

  // HERO
  sr.reveal('.atf', {
    delay: 1000,
    distance: 0,
    afterReveal: () => {
      $('.atf .p--header').addClass('animate-in');
      setTimeout(() => {
        $('.atf .down-arrow').addClass('animate-in');
      }, 1000)
    }
  });

  sr.reveal('.atf.p--header', {
    delay: 2000,
    distance: 0
  });

  sr.reveal('.atf.down-arrow', {
    delay: 3000,
    distance: '-20px',
  });

  // BENEFITS
  sr.reveal('.gold-benefits .gold-benefits__item', {
    viewFactor: 0.9,
    delay: 50,
    distance: '40px',
    scale: 0.9
  }, 100);

  //INTRO
  sr.reveal('.intro-copy-animate', {
    scale: 1
  }, 250);

  sr.reveal('.intro-image-animate', {
    scale: 1,
    delay: 1000
  });

  // TECHNOLOGY

  sr.reveal('.technology-animate', 250);

  sr.reveal('.gold-ingredients__icon', {
    scale: 0.9
  }, 250);

  sr.reveal('.tab h6', {
    beforeReveal: (el) => {

      $(el)
        .siblings('.tab-register')
        .animate({width: '90%'}, 750);

      setTimeout(() => removeStyles(el), 0);
      // pushing to the end of the event queue

    }
  }, 250);

  // PURCHASE OPTIONS

  sr.reveal('.purchase--item-animate-first', {
    scale: 0.9,
    afterReveal: removeStyles
  });

  sr.reveal('.purchase--item-animate-second', {
    scale: 0.9,
    delay: 250,
    afterReveal: removeStyles
  });

  // PREMIUM PURCHASE OPTIONS

  sr.reveal('.premium--content--wrapper.purchase--item--img', {
    scale: 1.2,
    afterReveal: removeStyles
  });

  sr.reveal('.premium-animate-img', {
    scale: 1.2,
    afterReveal: removeStyles
  });

  sr.reveal('.premium-animate', {
    scale: 1.2,
    discount: 0,
    delay: 1000,
    afterReveal: (el) => {

      setTimeout(() => {
        $('.false-background--inner')
          .animate(
            {'bottom': '0'},
            500,
            () => {

              $('.bar--wrapper').addClass('shine-animate-on');

            }
          )
        ;
      }, 600);

      setTimeout(() => $('.discount').addClass('animate-in'), 250);

      removeStyles(el);
    }
  }, 190);

  sr.reveal('.faq-animate-1', {viewFactor: 1});
  sr.reveal('.faq-animate-2', {viewFactor: 1});
  sr.reveal('.faq-animate-3', {viewFactor: 1});
  sr.reveal('.faq-animate-4', {viewFactor: 1});
  sr.reveal('.faq-animate-5', {viewFactor: 1});
  sr.reveal('.faq-animate-6', {viewFactor: 1});
  sr.reveal('.faq-animate-7', {viewFactor: 1});
  sr.reveal('.faq-animate-8', {viewFactor: 1});
  sr.reveal('.faq-animate-9', {viewFactor: 1});
  sr.reveal('.faq-animate-10', {viewFactor: 1});
  sr.reveal('.faq-animate-11', {viewFactor: 1});
  sr.reveal('.faq-animate-12', {viewFactor: 1});
  sr.reveal('.faq-animate-13', {viewFactor: 1});
  sr.reveal('.faq-animate-14', {viewFactor: 1});
  sr.reveal('.faq-animate-15', {viewFactor: 1});
  sr.reveal('.faq-animate-16', {viewFactor: 1});
  sr.reveal('.faq-animate-17', {viewFactor: 1});
  sr.reveal('.faq-animate-18', {viewFactor: 1});


}

const removeStyles = (el) => el.removeAttribute('style');