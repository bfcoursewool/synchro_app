!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(120),i=o(r),a=n(116),s=o(a),l=n(118),c=o(l),u=n(119),f=o(u),d=n(87),p=o(d),y=n(124),v=o(y),h=n(126),g=o(h),m=n(125),b=o(m),w=n(122),_=o(w),k=(n(121),n(123)),O=o(k),T=(new i.default,new f.default),j=new c.default,x=new s.default(T.KMPromise),S=new p.default;new v.default,new g.default,new b.default,(0,_.default)(".slides"),(0,O.default)(),$(document).ready(function(){S.startEffect(),x.init().then(function(){j.bindEvents(),T.bindEvents()})})},41:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(){n(this,e),this._specialSelectors={window:window,document:document},this.bindEvents()}return r(e,[{key:"bindEvents",value:function(){var e=this,t=!0,n=!1,r=void 0;try{for(var i,a=function(){var t=o(i.value,2),n=t[0],r=t[1],a=n.split(" "),s=o(a,2),l=s[0],c=s[1];$.inArray(c,Object.keys(e._specialSelectors))>=0&&(c=e._specialSelectors[c]),$(c).on(l,function(t){return e[r](t.currentTarget,t)})},s=Object.entries(this.events())[Symbol.iterator]();!(t=(i=s.next()).done);t=!0)a()}catch(e){n=!0,r=e}finally{try{!t&&s.return&&s.return()}finally{if(n)throw r}}}}]),e}();t.default=i},87:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.GradientBase=void 0;var s=function(){function e(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(41),u=o(c),f=t.GradientBase=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._colors=[[161,96,181],[64,147,218],[0,0,255],[180,0,180]],e._step=0,e._colorIndices=[0,1,2,3],e.upperBound,e.lowerBound=!1,e._gradientSpeed=.002,e._gradientAngle=-30,e._lastMouseX=0,e._lastMouseY=0,e}return a(t,e),l(t,[{key:"getNextColors",value:function(){var e=this._colors[this._colorIndices[0]],t=this._colors[this._colorIndices[1]],n=this._colors[this._colorIndices[2]],o=this._colors[this._colorIndices[3]],r=1-this._step,i=Math.round(r*e[0]+this._step*t[0]),a=Math.round(r*e[1]+this._step*t[1]),s=Math.round(r*e[2]+this._step*t[2]),l="rgb("+i+","+a+","+s+")",c=Math.round(r*n[0]+this._step*o[0]),u=Math.round(r*n[1]+this._step*o[1]),f=Math.round(r*n[2]+this._step*o[2]),d="rgb("+c+","+u+","+f+")";return[l,d]}},{key:"nextStep",value:function(){this._step+=this._gradientSpeed,(this._step>=1||this._step<=0)&&(this._gradientSpeed*=-1,this._step>=1&&(this.upperBound=!0),this._step<=0&&(this.lowerBound=!0))}},{key:"getColorSequence",value:function(){for(var e=[],t=[],n=void 0,o=void 0,r=void 0,i=void 0;!this.upperBound&&!this.lowerBound;){var a=this.getNextColors(),l=s(a,2);r=l[0],i=l[1],n=this.rgb2hex(r),o=this.rgb2hex(i),e.push(n),t.push(o),this.nextStep()}return[e,t]}},{key:"rgb2hex",value:function(e){return e=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i),e&&4===e.length?"#"+("0"+parseInt(e[1],10).toString(16)).slice(-2)+("0"+parseInt(e[2],10).toString(16)).slice(-2)+("0"+parseInt(e[3],10).toString(16)).slice(-2):""}}]),t}(u.default),d=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.updateGradient=e.updateGradient.bind(e),e}return a(t,e),l(t,[{key:"events",value:function(){return{}}},{key:"updateGradient",value:function(){var e=this,t=this.getNextColors(),n=s(t,2),o=n[0],r=n[1];$.each($("[id^=gradient-]"),function(t,n){$(n).css({background:"-webkit-linear-gradient("+e._gradientAngle+"deg, "+o+", "+r+")"}).css({background:"-moz-linear-gradient("+e._gradientAngle+"deg, left, "+o+" 0%, "+r+" 100%)"})}),this.nextStep()}},{key:"changeGradientParams",value:function(e,t){var n=t.pageX-this.lastMouseX,o=t.pageY-this.lastMouseY,r=n/screen.width;o/screen.height,270*r&&(this._gradientAngle<=-90?this._gradientAngle=180:this._gradientAngle>=180&&(this._gradientAngle=0),this._gradientAngle+=270*r),this.lastMouseX=t.pageX,this.lastMouseY=t.pageY}},{key:"startEffect",value:function(){$("[id^=gradient-]")&&setInterval(this.updateGradient,10)}}]),t}(f);t.default=d},116:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(117),c=o(l),u=function(){function e(t){i(this,e),this._KMPromise=t,this._ui=ShopifyBuy.UI.init(c.default)}return s(e,[{key:"productOptions",value:function(e){return{product:{iframe:!1,templates:{title:"",variantTitle:"",price:""},contents:{options:!1,variantTitle:!0,price:!0,quantityInput:!1},text:{button:"Add To Cart",outOfStock:"Out of Stock",unavailable:"Unavailable"},events:{addVariantToCart:function(e){}}},cart:{text:{notice:"Shipping and discount codes are added at checkout.",button:"Checkout",total:"Total"},styles:{button:{"background-color":"#3090d9",":hover":{"background-color":"#2c84c8"}}},events:{openCheckout:function(t){var n=function(e){var t=document.createElement("a");return t.href=e,t},o=n(t.model.checkoutUrl),r=encodeURI(o.pathname+o.search);"/"!=r.substring(0,1)&&(r="/"+r);var i={km_ident:e,cart_string:r};$.ajax({type:"POST",dataType:"json",contentType:"application/json",url:"/api/km_idents",data:JSON.stringify(i),success:function(){}}),_kmq.push(["record","started purchase",{}]),ga("ec:setAction","checkout",{step:1}),ga("send","event","EnhancedEcommerce","Initiated Checkout","initiated checkout"),window.location.href=t.model.checkoutUrl}}},toggle:{styles:{toggle:{"background-color":"#3090d9",":hover":{"background-color":"#2c84c8"}}}}}}},{key:"productSetOptions",value:function(){return{product:{isButton:!0,buttonDestination:"modal",contents:{options:!1,button:!1},text:{button:"Add To Cart",outOfStock:"Out of Stock",unavailable:"Unavailable"},styles:{product:{transition:"opacity 0.3s ease",opacity:"1",":hover":{opacity:".5"}}}},modalProduct:{contents:{quantityInput:!1,button:!0,description:!0},order:["img","title","price","options","description","button"],styles:{button:{align:"right","font-weight":"bold","background-color":"#3090d9",":hover":{"background-color":"#2c84c8"}},description:{height:"500px","overflow-y":"hidden","overflow-x":"hidden",":hover":{"overflow-y":"scroll"}}}}}}},{key:"init",value:function(){var e=this;return new Promise(function(t,n){e._KMPromise.then(function(n){var o=[].concat(r(e.insertItems(n)),r(e.insertCollection()));Promise.all(o).then(function(){return t()})})})}},{key:"insertItems",value:function(e){var t=this,n=$(".purchase__item"),o=void 0,r=void 0,i=void 0,s=this.productOptions(e),l=[],c=!0,u=!1,f=void 0;try{for(var d,p=function(){var e=a(d.value,2),n=(e[0],e[1]);o=parseInt($(n).attr("data-product-id")),r=parseInt($(n).attr("data-variant-id")),i=$(n).attr("data-node"),l.push(new Promise(function(e,a){s.product.templates.title=$(n).find(".template-title").html(),s.product.templates.variantTitle=$(n).find(".template-variantTitle").html(),s.product.templates.price=$(n).find(".template-price").html(),t._ui.createComponent("product",{id:o,variantId:r,node:document.getElementById(i),options:s}).then(function(){return e("done")})}))},y=Object.entries(n)[Symbol.iterator]();!(c=(d=y.next()).done);c=!0)p()}catch(e){u=!0,f=e}finally{try{!c&&y.return&&y.return()}finally{if(u)throw f}}return l}},{key:"insertCollection",value:function(){var e=this,t=$(".synchro-collection"),n=t.attr("data-collection-id");return new Promise(function(t,o){e._ui.createComponent("productSet",{id:n,node:document.getElementById("synchro-product-set"),options:e.productSetOptions()}).then(function(){return t("done")})})}}]),e}();t.default=u},117:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=ShopifyBuy.buildClient({apiKey:"da520c849fcb55b4e8b27cfec590c45c",domain:"synchro.myshopify.com",appId:"6"});t.default=n},118:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(41),c=o(l),u=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return a(t,e),s(t,[{key:"events",value:function(){return{"click .shopify-buy__btn":"fireFBQ"}}},{key:"fireFBQ",value:function(e){var t=$(e).closest(".shopify-buy-frame").find(".shopify-buy__product__actual-price").html();t=t.replace(/\$/g,""),t=t.match(/(.*)\.[0-9][0-9]/);var n=$(e).closest(".shopify-buy-frame").find(".shopify-buy__product__title").html()+$(e).closest(".shopify-buy-frame").find(".shopify-buy__product__variant-title").html(),o=$(e).closest(".purchase").attr("data-fb-property");fbq("track","AddToCart",{property:o,content_name:n,value:t,currency:"USD"})}}]),t}(c.default);t.default=u},119:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(41),c=o(l),u=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return _kmq.push(["identify","anonymous"]),e.KMPromise=new Promise(function(e,t){_kmq.push(function(){e(KM.i())})}),e.gaNames={GLD01:{name:"Synchro Gold - One Bottle (16oz)",variant:"One Bottle (16oz)"},GLD02:{name:"Synchro Gold - Two Bottles",variant:"Two Bottles"},GLD03:{name:"Synchro Gold - Four Bottles",variant:"Four Bottles"},GEN01:{name:"Synchro Genesis - One Bag (454g)",variant:"One Bag (12 Servings)"},GEN02:{name:"Synchro Genesis - 2 Bags",variant:"Two Pack"},GEN03:{name:"Synchro Genesis - 5 Bags",variant:"Five Pack"}},e}return a(t,e),s(t,[{key:"events",value:function(){return{"click .shopify-buy__btn":"fireKM"}}},{key:"fireKM",value:function(e){var t=$(e).closest(".shopify-buy-frame").find(".shopify-buy__product__actual-price").html();t=t.replace(/\$/g,""),t=t.match(/(.*)\.[0-9][0-9]/);var n=$(e).closest(".shopify-buy-frame").find(".pID").html();_kmq.push(["record","added to cart",{"Added Product Name":this.gaNames[n].name,"Added Product Price":t[0],"Added Product Quantity":1,"Added Product SKU":n,"Added Product Variant":this.gaNames[n].variant}]),ga("ec:addProduct",{id:n,name:this.gaNames[n].name,variant:this.gaNames[n].variant,price:t[0],category:"Nutritional",quantity:1}),ga("ec:setAction","add"),ga("send","event","EnhancedEcommerce","Added to Cart","add to cart")}}]),t}(c.default);t.default=u},120:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(41),u=o(c),f=function(e){function t(){i(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return(new WOW).init(),e._lastScroll=0,$(".parallax")&&(e._initialParallaxBackgroundPosition=$(".parallax").css("background-position-y")),e._appendthis="<div class='modal-overlay js-modal-close'></div>",e}return s(t,e),l(t,[{key:"events",value:function(){return r({"click .main-navigation__mobile":"toggleNav","click .main-navigation__item":"toggleNav","click .vjs-big-play-button":"hideBenefitsText",'click a[href*="#"]:not([href="#"])':"parallaxScroll","scroll window":"navMenuTransition","click a[data-modal-id]":"openModal","click .js-modal-close":"closeModal","keyup window":"closeModal","click .modal-overlay":"closeModal"},"click .vjs-big-play-button","hideBenefitsText")}},{key:"toggleNav",value:function(){$(".main-navigation").is(".expanded")?$(".main-navigation").removeClass("expanded"):$(".main-navigation").addClass("expanded")}},{key:"hideBenefitsText",value:function(){0===$(this).closest("#popup-video").length&&$(".gold-atf__uvp").addClass("hidden")}},{key:"parallaxScroll",value:function(e){if(location.pathname.replace(/^\//,"")==e.pathname.replace(/^\//,"")&&location.hostname==e.hostname){var t=$(e.hash);if(t=t.length?t:$("[name="+e.hash.slice(1)+"]"),t.length){var n=document.documentElement.scrollTop||document.body.scrollTop;return $("html, body").animate({scrollTop:t.offset().top+n},1e3),!1}}}},{key:"parallaxBackgroundScroll",value:function(){if($(".parallax")){var e=$(window).scrollTop(),t=e-this._lastScroll,n=parseInt($(".parallax").css("background-position-y"),10),o=n-t/2;o>0&&(o=0),$(".parallax").css("background-position-y",o+"px"),this._lastScroll=e}}},{key:"navMenuTransition",value:function(){var e=$(".main-header"),t=document.documentElement.scrollTop||document.body.scrollTop,n=100,o=$(".main-header").attr("data-header-transition");"background"==o&&(n=$(".main-banner__background").height()-$(".main-header").outerHeight());var r=$(".main-header>.gradient-layer");t>n&&!e.is(".floated")?(e.addClass("floated"),r&&r.addClass("show")):t<n&&e.is(".floated")&&(e.removeClass("floated"),r&&r.removeClass("show")),this.parallaxBackgroundScroll()}},{key:"openModal",value:function(e,t){t.preventDefault(),videojs("my-video").play(),$("body").append(this._appendthis),$(".modal-overlay").fadeTo(500,.7);var n=$(e).attr("data-modal-id");$("#"+n).fadeIn($(e).data())}},{key:"closeModal",value:function(e,t){27==t.which&&(videojs("my-video").pause(),$(".modal-box, .modal-overlay").fadeOut(500,function(){$(".modal-overlay").remove()}))}}]),t}(u.default);t.default=f},121:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://storage.googleapis.com/synchro-assets/gold/susan/test.jpg",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".bg-full-width";$("<img/>").attr({src:e}).on("load",function(){$(this).remove(),$(t).css({opacity:0,"background-image":"url("+e+")"}).animate({opacity:1},1e3)})};t.loadHeroImg=n},122:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return $(e).slick({dots:!0,infinite:!0,speed:300,autoplay:!0,autoplaySpeed:3e3,arrows:!1})}},123:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(310),i=o(r);t.default=function(){window.sr=(0,i.default)({duration:1e3,scale:1,viewFactor:.6}),sr.reveal(".atf",{delay:1e3,distance:0,afterReveal:function(){$(".atf .p--header").addClass("animate-in"),setTimeout(function(){$(".atf .down-arrow").addClass("animate-in")},1e3)}}),sr.reveal(".atf.p--header",{delay:2e3,distance:0}),sr.reveal(".atf.down-arrow",{delay:3e3,distance:"-20px"}),sr.reveal(".gold-benefits .gold-benefits__item",{viewFactor:.9,delay:50,distance:"40px",scale:.9},100),sr.reveal(".intro-copy-animate",{scale:1},250),sr.reveal(".intro-image-animate",{scale:1,delay:1e3}),sr.reveal(".technology-animate",250),sr.reveal(".gold-ingredients__icon",{scale:.9},250),sr.reveal(".tab h6",{beforeReveal:function(e){$(e).siblings(".tab-register").animate({width:"90%"},750),setTimeout(function(){return a(e)},0)}},250),sr.reveal(".purchase--item-animate-first",{scale:.9,afterReveal:a}),sr.reveal(".purchase--item-animate-second",{scale:.9,delay:250,afterReveal:a}),sr.reveal(".premium--content--wrapper.purchase--item--img",{scale:1.2,afterReveal:a}),sr.reveal(".premium-animate-img",{scale:1.2,afterReveal:a}),sr.reveal(".premium-animate",{scale:1.2,discount:0,delay:1e3,afterReveal:function(e){setTimeout(function(){$(".false-background--inner").animate({bottom:"0"},500,function(){$(".bar--wrapper").addClass("shine-animate-on")})},600),setTimeout(function(){return $(".discount").addClass("animate-in")},250),a(e)}},190),sr.reveal(".faq-animate-1",{viewFactor:1}),sr.reveal(".faq-animate-2",{viewFactor:1}),sr.reveal(".faq-animate-3",{viewFactor:1}),sr.reveal(".faq-animate-4",{viewFactor:1}),sr.reveal(".faq-animate-5",{viewFactor:1}),sr.reveal(".faq-animate-6",{viewFactor:1}),sr.reveal(".faq-animate-7",{viewFactor:1}),sr.reveal(".faq-animate-8",{viewFactor:1}),sr.reveal(".faq-animate-9",{viewFactor:1}),sr.reveal(".faq-animate-10",{viewFactor:1}),sr.reveal(".faq-animate-11",{viewFactor:1}),sr.reveal(".faq-animate-12",{viewFactor:1}),sr.reveal(".faq-animate-13",{viewFactor:1}),sr.reveal(".faq-animate-14",{viewFactor:1}),sr.reveal(".faq-animate-15",{viewFactor:1}),sr.reveal(".faq-animate-16",{viewFactor:1}),sr.reveal(".faq-animate-17",{viewFactor:1}),sr.reveal(".faq-animate-18",{viewFactor:1})};var a=function(e){return e.removeAttribute("style")}},124:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(87),u=o(c),f=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.svgElements=$("svg.external"),e.gradientLayers={},e._gradientSpeed=.04,e._promises=[],e._cognosEffectsMethods={"anti-inflammatory-actual":"antiInflammatoryDrawing","flow-actual":"flowDrawing","nutrient-delivery-actual":"nutrientDrawing"},$.each(e.svgElements,function(t,n){e._promises.push(e.loadSVG($(n).attr("data-src"),$(n).attr("id"),$(n).attr("data-stroke")))}),Promise.all(e._promises).then(function(t){var n=!0,o=!1,r=void 0;try{for(var i,a=Object.entries(t)[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var l=s(i.value,2),c=(l[0],l[1]);c in e._cognosEffectsMethods&&e[e._cognosEffectsMethods[c]](c)}}catch(e){o=!0,r=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw r}}}),e.updateGradient=e.updateGradient.bind(e),setInterval(e.updateGradient,10),e}return a(t,e),l(t,[{key:"loadSVG",value:function(e,t,n){var o=this;return new Promise(function(r,i){d3.xml(e,function(e,i){if(e)throw e;var a=document.getElementById(t),s=d3.select(a),l=d3.select(i.getElementsByTagName("svg")[0]);"gradient"==n&&o.applyGradientMask(l,t),l.attr("id",t+"-actual"),s.attr("viewBox",l.attr("viewBox")),s.node().appendChild(l.node()),r(l.attr("id"))})})}},{key:"updateGradient",value:function(){var e=this.getNextColors(),t=s(e,2),n=t[0],o=t[1],r=this.rgb2hex(n),i=this.rgb2hex(o),a=!0,l=!1,c=void 0;try{for(var u,f=Object.entries(this.gradientLayers)[Symbol.iterator]();!(a=(u=f.next()).done);a=!0){var d=s(u.value,2),p=(d[0],d[1]);p.select(".start").attr("stop-color",r),p.select(".end").attr("stop-color",i)}}catch(e){l=!0,c=e}finally{try{!a&&f.return&&f.return()}finally{if(l)throw c}}this.nextStep()}},{key:"applyGradientMask",value:function(e,t){this.initGradient(e,t);var n=e.selectAll("g");n.each(function(){d3.select(this).select("path").style("stroke","url(#"+t+"-gradient)")})}},{key:"initGradient",value:function(e,t){var n=e.append("defs");this.gradientLayers[t]=n.append("linearGradient").attr("id",t+"-gradient").attr("x1","0%").attr("x2","100%").attr("y1","0%").attr("y2","100%"),this.gradientLayers[t].append("stop").attr("class","start").attr("offset","0%").attr("stop-color","#4093DA").attr("stop-opacity",1),this.gradientLayers[t].append("stop").attr("class","end").attr("offset","100%").attr("stop-color","#A160B5").attr("stop-opacity",1)}},{key:"antiInflammatoryDrawing",value:function(e){}},{key:"flowDrawing",value:function(e){var t={duration:100,start:"autostart",type:"sync",reverseStack:!0},n=new Vivus(e,t,function(){n.reset().play()})}},{key:"nutrientDrawing",value:function(e){var t=new Vivus(e,{duration:200},function(){t.finish()})}}]),t}(u.default);t.default=f},125:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(41),c=o(l),u=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return a(t,e),s(t,[{key:"events",value:function(){return{"click .tab":"onClick"}}},{key:"onClick",value:function(e){var t=f(e),n=t.tabId,o=t.tabName;d(n),p(n,o)}}]),t}(c.default);t.default=u;var f=function(e){return{tabId:e.getAttribute("data-tabs"),tabName:e.getAttribute("id")}},d=function(e){$(".tab-pane[data-tabs="+e+"]").finish().fadeOut(1e3,function(){return $(void 0).removeClass("active")}),$(".tab[data-tabs="+e+"]").removeClass("active")},p=function(e,t){$(".tab-pane[data-tabs="+e+'][id="'+t+'"]').finish().delay(1e3).fadeIn(1e3,function(){return $(void 0).addClass("active")}),$(".tab[data-tabs="+e+'][id="'+t+'"]').addClass("active")}},126:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(41),u=o(c),f=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.toggleIds={},n}return a(t,e),l(t,[{key:"events",value:function(){return{"click [data-toggle-id]":"toggleContentById"}}},{key:"isToggleOpen",value:function(e){var t=this.toggleIds[e];return"boolean"!=typeof t&&this.setToggleId(e,!1),this.toggleIds[e]}},{key:"toggleContentById",value:function(e){console.log("cats");var t=e.getAttribute("data-toggle-id");this.isToggleOpen(t)?this.closeToggle(t):this.openToggle(t)}},{key:"closeToggle",value:function(e){this.closeToggleContent(e),this.setToggleId(e,!1),this.rotateToggleOff(e)}},{key:"openToggle",value:function(e){this.closeAllOtherToggles(e),this.openToggleContent(e),this.setToggleId(e,!0),this.rotateToggleOn(e)}},{key:"openToggleContent",value:function(e){var t=this.getContentSelector(e);$(t).closest(".extended-content").addClass("open"),setTimeout(function(){return $(t).slideDown(1e3)},0)}},{key:"closeToggleContent",value:function(e){var t=this.getContentSelector(e);$(t).slideUp(1e3,function(){return $(t).closest(".extended-content").removeClass("open")})}},{key:"closeAllOtherToggles",value:function(e){var t=this;Object.entries(this.toggleIds).filter(function(t){var n=s(t,2),o=n[0];return n[1],o!==e}).forEach(function(e){var n=s(e,2),o=n[0],r=n[1];r&&t.closeToggle(o)})}},{key:"rotateToggleOn",value:function(e){var t=this.getToggleSelector(e);$(t).addClass("opened")}},{key:"rotateToggleOff",value:function(e){var t=this.getToggleSelector(e);$(t).removeClass("opened")}},{key:"setToggleId",value:function(e,t){this.toggleIds[e]=t}},{key:"getContentSelector",value:function(e){return"[data-toggle-content='"+e+"']"}},{key:"getToggleSelector",value:function(e){return"[data-toggle-id='"+e+"']"}}]),t}(u.default);t.default=f},310:function(e,t,n){var o;!function(){"use strict";function r(e){return"undefined"==typeof this||Object.getPrototypeOf(this)!==r.prototype?new r(e):(E=this,E.version="3.3.6",E.tools=new S,E.isSupported()?(E.tools.extend(E.defaults,e||{}),E.defaults.container=i(E.defaults),E.store={elements:{},containers:[]},E.sequences={},E.history=[],E.uid=0,E.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),E)}function i(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(E.tools.isNode(e.container))return e.container;console.log('ScrollReveal: invalid container "'+e.container+'" provided.'),console.log("ScrollReveal: falling back to default container.")}return E.defaults.container}function a(e,t){return"string"==typeof e?Array.prototype.slice.call(t.querySelectorAll(e)):E.tools.isNode(e)?[e]:E.tools.isNodeList(e)?Array.prototype.slice.call(e):[]}function s(){return++E.uid}function l(e,t,n){t.container&&(t.container=n),e.config?e.config=E.tools.extendClone(e.config,t):e.config=E.tools.extendClone(E.defaults,t),"top"===e.config.origin||"bottom"===e.config.origin?e.config.axis="Y":e.config.axis="X"}function c(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",
e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!==t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=u(e,0),e.styles.transition.delayed=u(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",f(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",f(e)}function u(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function f(e){var t,n=e.config,o=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(o.initial+=" translate"+n.axis+"("+t+")",o.target+=" translate"+n.axis+"(0)"),n.scale&&(o.initial+=" scale("+n.scale+")",o.target+=" scale(1)"),n.rotate.x&&(o.initial+=" rotateX("+n.rotate.x+"deg)",o.target+=" rotateX(0)"),n.rotate.y&&(o.initial+=" rotateY("+n.rotate.y+"deg)",o.target+=" rotateY(0)"),n.rotate.z&&(o.initial+=" rotateZ("+n.rotate.z+"deg)",o.target+=" rotateZ(0)"),o.initial+="; opacity: "+n.opacity+";",o.target+="; opacity: "+e.styles.computed.opacity+";"}function d(e){var t=e.config.container;t&&E.store.containers.indexOf(t)===-1&&E.store.containers.push(e.config.container),E.store.elements[e.id]=e}function p(e,t,n){var o={target:e,config:t,interval:n};E.history.push(o)}function y(){if(E.isSupported()){g();for(var e=0;e<E.store.containers.length;e++)E.store.containers[e].addEventListener("scroll",v),E.store.containers[e].addEventListener("resize",v);E.initialized||(window.addEventListener("scroll",v),window.addEventListener("resize",v),E.initialized=!0)}return E}function v(){$(g)}function h(){var e,t,n,o;E.tools.forOwn(E.sequences,function(r){o=E.sequences[r],e=!1;for(var i=0;i<o.elemIds.length;i++)n=o.elemIds[i],t=E.store.elements[n],x(t)&&!e&&(e=!0);o.active=e})}function g(){var e,t;h(),E.tools.forOwn(E.store.elements,function(n){t=E.store.elements[n],e=_(t),w(t)?(t.config.beforeReveal(t.domEl),e?t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.delayed):t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.instant),b("reveal",t,e),t.revealing=!0,t.seen=!0,t.sequence&&m(t,e)):k(t)&&(t.config.beforeReset(t.domEl),t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.initial+t.styles.transition.instant),b("reset",t),t.revealing=!1)})}function m(e,t){var n=0,o=0,r=E.sequences[e.sequence.id];r.blocked=!0,t&&"onload"===e.config.useDelay&&(o=e.config.delay),e.sequence.timer&&(n=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer)),e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){r.blocked=!1,e.sequence.timer=null,v()},Math.abs(r.interval)+o-n)}function b(e,t,n){var o=0,r=0,i="after";switch(e){case"reveal":r=t.config.duration,n&&(r+=t.config.delay),i+="Reveal";break;case"reset":r=t.config.duration,i+="Reset"}t.timer&&(o=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[i](t.domEl),t.timer=null},r-o)}function w(e){if(e.sequence){var t=E.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return x(e)&&!e.revealing&&!e.disabled}function _(e){var t=e.config.useDelay;return"always"===t||"onload"===t&&!E.initialized||"once"===t&&!e.seen}function k(e){if(e.sequence){var t=E.sequences[e.sequence.id];return!t.active&&e.config.reset&&e.revealing&&!e.disabled}return!x(e)&&e.config.reset&&e.revealing&&!e.disabled}function O(e){return{width:e.clientWidth,height:e.clientHeight}}function T(e){if(e&&e!==window.document.documentElement){var t=j(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function j(e){var t=0,n=0,o=e.offsetHeight,r=e.offsetWidth;do isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent;while(e);return{top:t,left:n,height:o,width:r}}function x(e){function t(){var t=c+s*a,n=u+l*a,o=f-s*a,p=d-l*a,y=i.y+e.config.viewOffset.top,v=i.x+e.config.viewOffset.left,h=i.y-e.config.viewOffset.bottom+r.height,g=i.x-e.config.viewOffset.right+r.width;return t<h&&o>y&&n<g&&p>v}function n(){return"fixed"===window.getComputedStyle(e.domEl).position}var o=j(e.domEl),r=O(e.config.container),i=T(e.config.container),a=e.config.viewFactor,s=o.height,l=o.width,c=o.top,u=o.left,f=c+s,d=u+l;return t()||n()}function S(){}var E,$;r.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},r.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},r.prototype.reveal=function(e,t,n,o){var r,u,f,v,h,g;if(void 0!==t&&"number"==typeof t?(n=t,t={}):void 0!==t&&null!==t||(t={}),r=i(t),u=a(e,r),!u.length)return console.log('ScrollReveal: reveal on "'+e+'" failed, no elements found.'),E;n&&"number"==typeof n&&(g=s(),h=E.sequences[g]={id:g,interval:n,elemIds:[],active:!1});for(var m=0;m<u.length;m++)v=u[m].getAttribute("data-sr-id"),v?f=E.store.elements[v]:(f={id:s(),domEl:u[m],seen:!1,revealing:!1},f.domEl.setAttribute("data-sr-id",f.id)),h&&(f.sequence={id:h.id,index:h.elemIds.length},h.elemIds.push(f.id)),l(f,t,r),c(f),d(f),E.tools.isMobile()&&!f.config.mobile||!E.isSupported()?(f.domEl.setAttribute("style",f.styles.inline),f.disabled=!0):f.revealing||f.domEl.setAttribute("style",f.styles.inline+f.styles.transform.initial);return!o&&E.isSupported()&&(p(e,t,n),E.initTimeout&&window.clearTimeout(E.initTimeout),E.initTimeout=window.setTimeout(y,0)),E},r.prototype.sync=function(){if(E.history.length&&E.isSupported()){for(var e=0;e<E.history.length;e++){var t=E.history[e];E.reveal(t.target,t.config,t.interval,!0)}y()}else console.log("ScrollReveal: sync failed, no reveals found.");return E},S.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},S.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},S.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&n.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},S.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},S.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},S.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},S.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},$=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},o=function(){return r}.call(t,n,t,e),!(void 0!==o&&(e.exports=o))}()}});
//# sourceMappingURL=synchro.js.map