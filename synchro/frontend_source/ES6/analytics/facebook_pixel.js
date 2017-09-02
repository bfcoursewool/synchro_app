'use strict';

import EventsBase from '../events_base';

export default class FaceBookPixel extends EventsBase {
  constructor() {
    super();
    this.fb_fired = false;
  }

  events() {
    return {
      'click .carthook-buy-button': 'fireFBQ'
    }
  }
  
  sendPixel(target) {
    return new Promise((resolve, reject) => {
      let price = $(target).closest('.purchase__item').find('.shopify-buy__product__actual-price').html()
      price = price.replace(/\$/g, ''); 
      price = price.match(/(.*)\.[0-9][0-9]/); 
      let contentName = $(target).closest('.purchase__item').find('.shopify-buy__product__title').html() + $(target).closest('.purchase__item').find('.shopify-buy__product__variant-title').html();
      let content_ids = [$(target).closest('.purchase__item').attr('data-product-id')];
      let property = $(target).closest('.purchase').attr('data-fb-property');

      fbq('track', 'AddToCart', {
        property: property,
        content_name: contentName,
        content_ids: content_ids,
        content_type: 'product_group',
        value: price,
        currency: 'USD'
      });

      resolve();
    })
  }

  fireFBQ(target, e) {
    if(!this.fb_fired) {
      e.preventDefault();
      this.sendPixel(target).then(() => {
        this.fb_fired = true;
        $(target).trigger('click'); 
      })
    } else {
      window.location.href = $(target).find('.a--cta').attr('href');
    }
  }
}

