import EventsBase from './events_base';
import ScrollMagic from 'scrollmagic';

export default class GoldCapBenefits {
  
  constructor() {
    this._controller = new ScrollMagic.Controller()
    $(() => {
      let scene = new ScrollMagic.Scene({ triggerElement: '.pin-trigger', duration: 2300})
                      .setPin('.pinned-section')
                      .addTo(this._controller)
                      .on('progress', (e) => {
                        if(e.progress > 0 && e.progress <= .25) {
                          // copy1 & icon1 active
                          this.removeActives()
                          $('.benefits-slider__copy1').addClass('active')
                          $('.benefits-slider__icon1').addClass('active')
                        } else if(e.progress > .25 && e.progress <= .5) {
                          // copy2 & icon2 active
                          this.removeActives()
                          $('.benefits-slider__copy2').addClass('active')
                          $('.benefits-slider__icon2').addClass('active')
                        } else if(e.progress > .5 && e.progress <= .75) {
                          // copy3 & icon3 active
                          this.removeActives()
                          $('.benefits-slider__copy3').addClass('active')
                          $('.benefits-slider__icon3').addClass('active')
                        } else if(e.progress > .75 && e.progress <= 1) {
                          // copy 4 & icon4 active
                          this.removeActives()
                          $('.benefits-slider__copy4').addClass('active')
                          $('.benefits-slider__icon4').addClass('active')
                        }
                      })
    })
  }

  removeActives() {
    $('.active').each((index, element) => {
      $(element).removeClass('active')
    })
  }
}