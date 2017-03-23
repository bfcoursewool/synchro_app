'use strict';

import LPEffects from './ES6/effects';
import BuyButton from './ES6/ShopifyBuyButton/buy_button';
import FaceBookPixel from './ES6/analytics/facebook_pixel';
import Kissmetrics from './ES6/analytics/kissmetrics'; 

const lpEffectsObj = new LPEffects();
const KMObj = new Kissmetrics(); 
const fbPixelObj = new FaceBookPixel(); 
// TODO -- Figure out how to yield this value correctly...
const buyButtonObj = new BuyButton(KMObj.kissIdentity);

$(document).ready(() => {
  buyButtonObj.insertItems();
  buyButtonObj.insertCollection(); 

  // We have to wait a few seconds post-document ready to bind the
  // FB and Kissmetrics handlers because the shopify buy button components
  // get loaded asynchronously into iframes and this takes a moment... 
  setTimeout(() => fbPixelObj.bindEvents(), 3000); 
  setTimeout(() => KMObj.bindEvents(), 3000); 
})