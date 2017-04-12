'use strict';

import LPEffects from './ES6/effects';
import BuyButton from './ES6/ShopifyBuyButton/buy_button';
import FaceBookPixel from './ES6/analytics/facebook_pixel';
import Kissmetrics from './ES6/analytics/kissmetrics'; 
import GradientEffect from './ES6/gradient_effect';
import SVGLoader from './ES6/d3experiments/svg_loader';

const lpEffectsObj = new LPEffects();
const KMObj = new Kissmetrics(); 
const fbPixelObj = new FaceBookPixel(); 
const buyButtonObj = new BuyButton(KMObj.KMPromise);
const gradientObj = new GradientEffect(); 
const svgObj = new SVGLoader();

$(document).ready(() => {
  gradientObj.startEffect();

  buyButtonObj.init().then(() => {
    fbPixelObj.bindEvents();
    KMObj.bindEvents();
  });
})