'use strict';

import EventsBase from '../events_base';

export default class FaceBookPixel extends EventsBase {
  constructor() {
    super();
  }

  events() {
    return {
      'click .shopify-buy__btn': 'fireFBQ',
      'click a': 'test'
    }
  }

  test(e) {
    console.log(e);
    console.log("blahblah");
  }

  fireFBQ(target) {
    let price = $(target).closest('.shopify-buy-frame').find('.shopify-buy__product__actual-price').html();
    price = price.replace(/\$/g, ''); 
    price = price.match(/(.*)\.[0-9][0-9]/); 
    let contentName = $(target).closest('.shopify-buy-frame').find('.shopify-buy__product__title').html() + $(target).closest('.shopify-buy-frame').find('.shopify-buy__product__variant-title').html();
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
  }
}

