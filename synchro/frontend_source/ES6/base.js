export default class Base {
  constructor() {
    this._specialSelectors = {
      'window': window,
      'document': document
    }
    this.bindEvents();
  }

  bindEvents() {
    for(let [key, value] of Object.entries(this.events())) {
      let [event, selector] = key.split(' '); 
      if($.inArray(selector, Object.keys(this._specialSelectors)) >= 0) {
        selector = this._specialSelectors[selector];
      }
      $(selector).on(event, (e) => this[value](e.currentTarget))
    }
  }
}