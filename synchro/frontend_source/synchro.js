'use strict';

import LPEffects from './ES6/effects';
import BuyButton from './ES6/ShopifyBuyButton/buy_button';
import FaceBookPixel from './ES6/analytics/facebook_pixel';
import Kissmetrics from './ES6/analytics/kissmetrics'; 

const lpEffectsObj = new LPEffects();
const KMObj = new Kissmetrics(); 
const fbPixelObj = new FaceBookPixel(); 
const buyButtonObj = new BuyButton(KMObj.KMPromise);

$(document).ready(() => {
  buyButtonObj.init().then(() => {
    fbPixelObj.bindEvents();
    KMObj.bindEvents();
  });
})