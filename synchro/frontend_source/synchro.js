import 'bootstrap';
import './scss/synchro.scss';
import LPEffects from './ES6/effects';
//import BuyButton from './ES6/ShopifyBuyButton/buy_button';
import FaceBookPixel from './ES6/analytics/facebook_pixel';
import Kissmetrics from './ES6/analytics/kissmetrics'; 
import AnalyticsIntegration from './ES6/AnalyticsIntegration';
import GradientEffect from './ES6/gradient_effect';
import SVGLoader from './ES6/svg_loader';
import Toggle from './ES6/toggle';
import Tabs from './ES6/tabs';
import Slider from './ES6/slider';
import GoldCapBenefits from './ES6/goldCapBenefits';
import { loadHeroImg } from './ES6/hero_image';
// import susanEffects from './ES6/susan/effects'; "Disabling this for now so we can see if anything stops working... should be redudant."

console.log(`release_tag: ${process.env.RELEASE_TAG}`)

const lpEffectsObj = new LPEffects();
const fbPixelObj = new FaceBookPixel();
const gradientObj = new GradientEffect();
const svgObj = new SVGLoader();
const toggle = new Toggle();
const tabs = new Tabs();
const analyticsObj = new AnalyticsIntegration();
const goldCapBenefits = new GoldCapBenefits();
const slider = Slider('.slides');

//susanEffects();

$(document).ready(() => {
  gradientObj.startEffect();
})