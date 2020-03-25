import EventsBase from './events_base';
import ScrollMagic from 'scrollmagic';

export default class GoldCapBenefits {
  
  constructor() {
    this._controller = new ScrollMagic.Controller()
    $(() => {
      let scene = new ScrollMagic.Scene({ triggerElement: '.benefits-slider__content', duration: 2300})
                      .setPin('.benefits-slider__content')
                      .addTo(this._controller)
      new ScrollMagic.Scene({ 
            triggerElement: '.benefits-slider__copy1', 
            triggerHook: 0.9, // show, when scrolled 10% into view
            duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50, // move trigger to center of element
          })
          .setClassToggle('.benefits-slider__copy1', 'active')
          .addTo(this._controller)
      new ScrollMagic.Scene({ 
            triggerElement: '.benefits-slider__copy2', 
            triggerHook: 0.9, // show, when scrolled 10% into view
            duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
          })
          .setClassToggle('.benefits-slider__copy2', 'active')
          .addTo(this._controller)
      new ScrollMagic.Scene({ 
            triggerElement: '.benefits-slider__copy3', 
            triggerHook: 0.9, // show, when scrolled 10% into view
            duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
          })
          .setClassToggle('.benefits-slider__copy3', 'active')
          .addTo(this._controller)
      new ScrollMagic.Scene({ 
            triggerElement: '.benefits-slider__copy4',
            triggerHook: 0.9, // show, when scrolled 10% into view
            duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element 
          })
          .setClassToggle('.benefits-slider__copy4', 'active')
          .addTo(this._controller)


      new ScrollMagic.Scene({ 
            triggerElement: '.benefits-slider__copy1', 
            triggerHook: 0.9, // show, when scrolled 10% into view
            duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50, // move trigger to center of element
          })
          .setClassToggle('.benefits-slider__icon1', 'active')
          .addTo(this._controller)
      new ScrollMagic.Scene({ 
            triggerElement: '.benefits-slider__copy2', 
            triggerHook: 0.9, // show, when scrolled 10% into view
            duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
          })
          .setClassToggle('.benefits-slider__icon2', 'active')
          .addTo(this._controller)
      new ScrollMagic.Scene({ 
            triggerElement: '.benefits-slider__copy3', 
            triggerHook: 0.9, // show, when scrolled 10% into view
            duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
          })
          .setClassToggle('.benefits-slider__icon3', 'active')
          .addTo(this._controller)
      new ScrollMagic.Scene({ 
            triggerElement: '.benefits-slider__copy4',
            triggerHook: 0.9, // show, when scrolled 10% into view
            duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element 
          })
          .setClassToggle('.benefits-slider__icon4', 'active')
          .addTo(this._controller)
    })
  }
}