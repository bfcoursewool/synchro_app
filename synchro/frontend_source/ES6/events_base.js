let entries = require('object.entries');

export default class EventsBase {
  constructor() {
    this._specialSelectors = {
      'window': window,
      'document': document
    }
    this.bindEvents();
  }

  bindEvents() {
    for(let [key, value] of entries(this.events())) {
      let [event, selector] = key.split(' '); 
      if($.inArray(selector, Object.keys(this._specialSelectors)) >= 0) {
        selector = this._specialSelectors[selector];
      }
      $(selector).on(event, (e) => this[value](e.currentTarget, e))
    }
  }
}