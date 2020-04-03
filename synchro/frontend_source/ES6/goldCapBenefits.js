import EventsBase from './events_base';
import ScrollMagic from 'scrollmagic';

export default class GoldCapBenefits {

  constructor() {
    this._controller = new ScrollMagic.Controller()
    $(() => {
      let triggerElement = $('.pin-trigger')
      if(triggerElement.length == 0) { return }
      let scene = new ScrollMagic.Scene({ triggerElement: '.pin-trigger', duration: 2000})
                      .setPin('.pinned-section')
                      .addTo(this._controller)
                      .on('progress', (e) => {
                        if(e.progress > 0 && e.progress <= .2) {
                          // copy0 & no-icon active
                          this.removeActives()
                          this.removeVisited()
                          $('.benefits-slider__copy0').addClass('active')
                        } else if(e.progress > .2 && e.progress <= .4) {
                          // copy1 & icon1 active
                          this.removeActives()
                          this.removeVisited()
                          $('.benefits-slider__copy1').addClass('active')
                          $('.benefits-slider__icon1').addClass('active')
                        } else if(e.progress > .4 && e.progress <= .6) {
                          // copy2 & icon2 active
                          this.removeActives()
                          this.removeVisited()
                          $('.benefits-slider__copy2').addClass('active')
                          $('.benefits-slider__icon1').addClass('visited')
                          $('.benefits-slider__icon2').addClass('active')
                        } else if(e.progress > .6 && e.progress <= .8) {
                          // copy3 & icon3 active
                          this.removeActives()
                          this.removeVisited()
                          $('.benefits-slider__copy3').addClass('active')
                          $('.benefits-slider__icon1').addClass('visited')
                          $('.benefits-slider__icon2').addClass('visited')
                          $('.benefits-slider__icon3').addClass('active')
                        } else if(e.progress > .8 && e.progress <= 1) {
                          // copy 4 & icon4 active
                          this.removeActives()
                          this.removeVisited()
                          $('.benefits-slider__copy4').addClass('active')
                          $('.benefits-slider__icon1').addClass('visited')
                          $('.benefits-slider__icon2').addClass('visited')
                          $('.benefits-slider__icon3').addClass('visited')
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
  removeVisited() {
    $('.visited').each((index, element) => {
      $(element).removeClass('visited')
    })
  }
}
