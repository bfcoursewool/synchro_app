'use strict';

import EventsBase from '../events_base';

export default class FaceBookPixel extends EventsBase {
  constructor() {
    super();
  }

  events() {
    return {
      'click .shopify-buy__btn': 'fireFBQ'
    }
  }

  fireFBQ(target) {
    let price = $(target).closest('.shopify-buy-frame').find('.shopify-buy__product__actual-price').html();
    price = price.replace(/\$/g, ''); 
    price = price.match(/(.*)\.[0-9][0-9]/); 
    let contentName = $(target).closest('.shopify-buy-frame').find('.shopify-buy__product__title').html() + $(target).closest('.shopify-buy-frame').find('.shopify-buy__product__variant-title').html();
    let property = $(target).closest('.purchase').attr('data-fb-property');

    fbq('track', 'AddToCart', {
      property: property,
      content_name: contentName,
      value: price,
      currency: 'USD'
    });
  }
}

