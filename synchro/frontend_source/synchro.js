'use strict';

import LPEffects from './ES6/effects';
import BuyButton from './ES6/ShopifyBuyButton/buy_button';

const lpEffectsObj = new LPEffects();
const buyButtonObj = new BuyButton();

$(document).ready(() => {
  buyButtonObj.insertItems();
  buyButtonObj.insertCollection(); 
})