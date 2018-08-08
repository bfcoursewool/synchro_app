'use strict';
import EventsBase from '../events_base';

export default class Kissmetrics extends EventsBase {
  constructor() {
    super();

    _kmq.push(['identify', 'anonymous']);
    this.KMPromise = new Promise((resolve, reject) => {
      _kmq.push(() => {
        resolve(KM.i()); 
      });    
    }); 

    // TODO -- O GOD REFACTOR ME
    this.gaNames = {
      'GLD01': {
        'name': 'Synchro Gold - One Bottle (16oz)',
        'variant': 'One Bottle (16oz)'
      },
      'GLD02': {
        'name': 'Synchro Gold - Two Bottles',
        'variant': 'Two Bottles'
      }, 
      'GLD03': {
        'name': 'Synchro Gold - Four Bottles',
        'variant': 'Four Bottles'
      },
      'GEN01': {
        'name': 'Synchro Genesis - One Bag (454g)',
        'variant': 'One Bag (12 Servings)'
      }, 
      'GEN02': {
        'name': 'Synchro Genesis - 2 Bags',
        'variant': 'Two Pack'
      }, 
      'GEN03': {
        'name': 'Synchro Genesis - 5 Bags',
        'variant': 'Five Pack'
      }
    };
  }

  events() {
    return {
      'click .shopify-buy__btn': 'fireKM'
    }
  }

  fireKM(target) {
    let price = $(target).closest('.shopify-buy-frame').find('.shopify-buy__product__actual-price').html();
    price = price.replace(/\$/g, ''); 
    price = price.match(/(.*)\.[0-9][0-9]/); 
    let SKU = $(target).closest('.shopify-buy-frame').find('.pID').html(); 

    _kmq.push(['record', 'added to cart', {
      'Added Product Name': this.gaNames[SKU].name,
      'Added Product Price': price[0],
      'Added Product Quantity': 1,
      'Added Product SKU': SKU,
      'Added Product Variant': this.gaNames[SKU].variant
    }]); 

    ga('ec:addProduct', { 
      'id': SKU,
      'name': this.gaNames[SKU].name,
      'variant': this.gaNames[SKU].variant,
      'price': price[0],
      'category': 'Nutritional',
      'quantity': 1
    });
    ga('ec:setAction', 'add');
    ga('send', 'event', 'EnhancedEcommerce', 'Added to Cart', 'add to cart');
  }
}