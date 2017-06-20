'use strict';

import LPEffects from './ES6/effects';
import BuyButton from './ES6/ShopifyBuyButton/buy_button';
import FaceBookPixel from './ES6/analytics/facebook_pixel';
import Kissmetrics from './ES6/analytics/kissmetrics'; 
import GradientEffect from './ES6/gradient_effect';
import SVGLoader from './ES6/svg_loader';
import Toggle from './ES6/toggle';
import Tabs from './ES6/tabs';
import Wallop from 'wallop';

const lpEffectsObj = new LPEffects();
const KMObj = new Kissmetrics(); 
const fbPixelObj = new FaceBookPixel(); 
const buyButtonObj = new BuyButton(KMObj.KMPromise);
const gradientObj = new GradientEffect(); 
const svgObj = new SVGLoader();
const toggle = new Toggle();
const tabs = new Tabs();
const wallop = new Wallop(document.querySelector('.Wallop'));

var paginationDots = Array.prototype.slice.call(document.querySelectorAll('.Wallop-dot'));

/*
Attach click listener on the dots
*/
paginationDots.forEach(function (dotEl, index) {
  dotEl.addEventListener('click', function() {
    console.log(wallop);
    wallop.goTo(index);
  });
});

/*
Listen to wallop change and update classes
*/
wallop.on('change', function(event) {
  removeClass(document.querySelector('.Wallop-dot--current'), 'Wallop-dot--current');
  addClass(paginationDots[event.detail.currentItemIndex], 'Wallop-dot--current');
});


// Helpers
function addClass(element, className) {
  if (!element) { return; }
  element.className = element.className.replace(/\s+$/gi, '') + ' ' + className;
}

function removeClass(element, className) {
  if (!element) { return; }
  element.className = element.className.replace(className, '');
}

$(document).ready(() => {
  gradientObj.startEffect();

  buyButtonObj.init().then(() => {
    fbPixelObj.bindEvents();
    KMObj.bindEvents();
  });
})