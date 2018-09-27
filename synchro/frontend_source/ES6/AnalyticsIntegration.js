'use strict';

import EventsBase from './events_base';

class AnalyticsIntegration extends EventsBase {

  constructor() {
    super();
    this.has_fired = false;
  }

  events() {
    return {
      'click .purchase__item > a': 'handleClick'
    }
  }

  handleClick(target, e) {
    console.log("Clicked!");
    if(!this.has_fired) {
      console.log("Preventing default...");
      e.preventDefault()
      let queryParams = this.parseQueryString(window.location.search.substring(1))
      if('gclid' in queryParams) {
        console.log("We got an AdWords click!")
        this.has_fired = true
        $(target).trigger('click');
      }      
    } else {
      window.location.href = $(target).find('a').attr('href');
    }

  }

  saveGCLID(gclidParams) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: '/api/adwords_idents',
        data: JSON.stringify(gclidParams),
        success: () => resolve()
      });
    })
  }

  parseQueryString(queryString) {
    let params = {}, queries, temp, i, l;
    // Split into key/value pairs
    queries = queryString.split("&");
    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
    return params;
  }

}

export default AnalyticsIntegration