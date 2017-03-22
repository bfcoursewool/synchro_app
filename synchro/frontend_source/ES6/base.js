export default class Base {
  constructor() {
    this._specialSelectors = {
      'window': window,
      'document': document
    }
    this.bindEvents();
  }

  bindEvents() {
    let that = this;
    $.each(this.events(), function(key, value) {
      let [event, selector] = key.split(' '); 
      if($.inArray(selector, Object.keys(that._specialSelectors)) >= 0) {
        selector = that._specialSelectors[selector];
      }
      $(selector).on(event, function() {
        that[value](this);
      });
    });
  }
}