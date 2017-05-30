!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(120),a=r(o),i=n(122),u=r(i),l=n(116),c=r(l),s=n(118),d=r(s),f=n(119),p=r(f),h=n(87),y=r(h),v=n(121),g=r(v),b=(new a.default,new p.default),m=new d.default,_=new c.default(b.KMPromise),w=new y.default;new g.default,$(document).ready(function(){new u.default,w.startEffect(),_.init().then(function(){m.bindEvents(),b.bindEvents()})})},46:function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(){function t(){n(this,t),this._specialSelectors={window:window,document:document},this.bindEvents()}return o(t,[{key:"bindEvents",value:function(){var t=this,e=!0,n=!1,o=void 0;try{for(var a,i=function(){var e=r(a.value,2),n=e[0],o=e[1],i=n.split(" "),u=r(i,2),l=u[0],c=u[1];$.inArray(c,Object.keys(t._specialSelectors))>=0&&(c=t._specialSelectors[c]),$(c).on(l,function(e){return t[o](e.currentTarget,e)})},u=Object.entries(this.events())[Symbol.iterator]();!(e=(a=u.next()).done);e=!0)i()}catch(t){n=!0,o=t}finally{try{!e&&u.return&&u.return()}finally{if(n)throw o}}}}]),t}();e.default=a},87:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.GradientBase=void 0;var u=function(){function t(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(46),s=r(c),d=e.GradientBase=function(t){function e(){o(this,e);var t=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._colors=[[161,96,181],[64,147,218],[0,0,255],[180,0,180]],t._step=0,t._colorIndices=[0,1,2,3],t.upperBound,t.lowerBound=!1,t._gradientSpeed=.002,t._gradientAngle=-30,t._lastMouseX=0,t._lastMouseY=0,t}return i(e,t),l(e,[{key:"getNextColors",value:function(){var t=this._colors[this._colorIndices[0]],e=this._colors[this._colorIndices[1]],n=this._colors[this._colorIndices[2]],r=this._colors[this._colorIndices[3]],o=1-this._step,a=Math.round(o*t[0]+this._step*e[0]),i=Math.round(o*t[1]+this._step*e[1]),u=Math.round(o*t[2]+this._step*e[2]),l="rgb("+a+","+i+","+u+")",c=Math.round(o*n[0]+this._step*r[0]),s=Math.round(o*n[1]+this._step*r[1]),d=Math.round(o*n[2]+this._step*r[2]),f="rgb("+c+","+s+","+d+")";return[l,f]}},{key:"nextStep",value:function(){this._step+=this._gradientSpeed,(this._step>=1||this._step<=0)&&(this._gradientSpeed*=-1,this._step>=1&&(this.upperBound=!0),this._step<=0&&(this.lowerBound=!0))}},{key:"getColorSequence",value:function(){for(var t=[],e=[],n=void 0,r=void 0,o=void 0,a=void 0;!this.upperBound&&!this.lowerBound;){var i=this.getNextColors(),l=u(i,2);o=l[0],a=l[1],n=this.rgb2hex(o),r=this.rgb2hex(a),t.push(n),e.push(r),this.nextStep()}return[t,e]}},{key:"rgb2hex",value:function(t){return t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i),t&&4===t.length?"#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2):""}}]),e}(s.default),f=function(t){function e(){o(this,e);var t=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.updateGradient=t.updateGradient.bind(t),t}return i(e,t),l(e,[{key:"events",value:function(){return{}}},{key:"updateGradient",value:function(){var t=this,e=this.getNextColors(),n=u(e,2),r=n[0],o=n[1];$.each($("[id^=gradient-]"),function(e,n){$(n).css({background:"-webkit-linear-gradient("+t._gradientAngle+"deg, "+r+", "+o+")"}).css({background:"-moz-linear-gradient("+t._gradientAngle+"deg, left, "+r+" 0%, "+o+" 100%)"})}),this.nextStep()}},{key:"changeGradientParams",value:function(t,e){var n=e.pageX-this.lastMouseX,r=e.pageY-this.lastMouseY,o=n/screen.width;r/screen.height,270*o&&(this._gradientAngle<=-90?this._gradientAngle=180:this._gradientAngle>=180&&(this._gradientAngle=0),this._gradientAngle+=270*o),this.lastMouseX=e.pageX,this.lastMouseY=e.pageY}},{key:"startEffect",value:function(){$("[id^=gradient-]")&&setInterval(this.updateGradient,10)}}]),e}(d);e.default=f},116:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(117),c=r(l),s=function(){function t(e){a(this,t),this._KMPromise=e,this._ui=ShopifyBuy.UI.init(c.default)}return u(t,[{key:"productOptions",value:function(t){return{product:{iframe:!1,templates:{title:"",variantTitle:"",price:""},contents:{options:!1,variantTitle:!0,price:!0,quantityInput:!1},text:{button:"Add To Cart",outOfStock:"Out of Stock",unavailable:"Unavailable"},events:{addVariantToCart:function(t){}}},cart:{text:{notice:"Shipping and discount codes are added at checkout.",button:"Checkout",total:"Total"},styles:{button:{"background-color":"#3090d9",":hover":{"background-color":"#2c84c8"}}},events:{openCheckout:function(e){var n=function(t){var e=document.createElement("a");return e.href=t,e},r=n(e.model.checkoutUrl),o=encodeURI(r.pathname+r.search);"/"!=o.substring(0,1)&&(o="/"+o);var a={km_ident:t,cart_string:o};$.ajax({type:"POST",dataType:"json",contentType:"application/json",url:"/api/km_idents",data:JSON.stringify(a),success:function(){}}),_kmq.push(["record","started purchase",{}]),ga("ec:setAction","checkout",{step:1}),ga("send","event","EnhancedEcommerce","Initiated Checkout","initiated checkout"),window.location.href=e.model.checkoutUrl}}},toggle:{styles:{toggle:{"background-color":"#3090d9",":hover":{"background-color":"#2c84c8"}}}}}}},{key:"productSetOptions",value:function(){return{product:{isButton:!0,buttonDestination:"modal",contents:{options:!1,button:!1},text:{button:"Add To Cart",outOfStock:"Out of Stock",unavailable:"Unavailable"},styles:{product:{transition:"opacity 0.3s ease",opacity:"1",":hover":{opacity:".5"}}}},modalProduct:{contents:{quantityInput:!1,button:!0,description:!0},order:["img","title","price","options","description","button"],styles:{button:{align:"right","font-weight":"bold","background-color":"#3090d9",":hover":{"background-color":"#2c84c8"}},description:{height:"500px","overflow-y":"hidden","overflow-x":"hidden",":hover":{"overflow-y":"scroll"}}}}}}},{key:"init",value:function(){var t=this;return new Promise(function(e,n){t._KMPromise.then(function(n){var r=[].concat(o(t.insertItems(n)),o(t.insertCollection()));Promise.all(r).then(function(){return e()})})})}},{key:"insertItems",value:function(t){var e=this,n=$(".purchase__item"),r=void 0,o=void 0,a=void 0,u=this.productOptions(t),l=[],c=!0,s=!1,d=void 0;try{for(var f,p=function(){var t=i(f.value,2),n=(t[0],t[1]);r=parseInt($(n).attr("data-product-id")),o=parseInt($(n).attr("data-variant-id")),a=$(n).attr("data-node"),l.push(new Promise(function(t,i){u.product.templates.title=$(n).find(".template-title").html(),u.product.templates.variantTitle=$(n).find(".template-variantTitle").html(),u.product.templates.price=$(n).find(".template-price").html(),e._ui.createComponent("product",{id:r,variantId:o,node:document.getElementById(a),options:u}).then(function(){return t("done")})}))},h=Object.entries(n)[Symbol.iterator]();!(c=(f=h.next()).done);c=!0)p()}catch(t){s=!0,d=t}finally{try{!c&&h.return&&h.return()}finally{if(s)throw d}}return l}},{key:"insertCollection",value:function(){var t=this,e=$(".synchro-collection"),n=e.attr("data-collection-id");return new Promise(function(e,r){t._ui.createComponent("productSet",{id:n,node:document.getElementById("synchro-product-set"),options:t.productSetOptions()}).then(function(){return e("done")})})}}]),t}();e.default=s},117:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=ShopifyBuy.buildClient({apiKey:"da520c849fcb55b4e8b27cfec590c45c",domain:"synchro.myshopify.com",appId:"6"});e.default=n},118:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(46),c=r(l),s=function(t){function e(){return o(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return i(e,t),u(e,[{key:"events",value:function(){return{"click .shopify-buy__btn":"fireFBQ"}}},{key:"fireFBQ",value:function(t){var e=$(t).closest(".shopify-buy-frame").find(".shopify-buy__product__actual-price").html();e=e.replace(/\$/g,""),e=e.match(/(.*)\.[0-9][0-9]/);var n=$(t).closest(".shopify-buy-frame").find(".shopify-buy__product__title").html()+$(t).closest(".shopify-buy-frame").find(".shopify-buy__product__variant-title").html(),r=$(t).closest(".purchase").attr("data-fb-property");fbq("track","AddToCart",{property:r,content_name:n,value:e,currency:"USD"})}}]),e}(c.default);e.default=s},119:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(46),c=r(l),s=function(t){function e(){o(this,e);var t=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return _kmq.push(["identify","anonymous"]),t.KMPromise=new Promise(function(t,e){_kmq.push(function(){t(KM.i())})}),t.gaNames={GLD01:{name:"Synchro Gold - One Bottle (16oz)",variant:"One Bottle (16oz)"},GLD02:{name:"Synchro Gold - Two Bottles",variant:"Two Bottles"},GLD03:{name:"Synchro Gold - Four Bottles",variant:"Four Bottles"},GEN01:{name:"Synchro Genesis - One Bag (454g)",variant:"One Bag (12 Servings)"},GEN02:{name:"Synchro Genesis - 2 Bags",variant:"Two Pack"},GEN03:{name:"Synchro Genesis - 5 Bags",variant:"Five Pack"}},t}return i(e,t),u(e,[{key:"events",value:function(){return{"click .shopify-buy__btn":"fireKM"}}},{key:"fireKM",value:function(t){var e=$(t).closest(".shopify-buy-frame").find(".shopify-buy__product__actual-price").html();e=e.replace(/\$/g,""),e=e.match(/(.*)\.[0-9][0-9]/);var n=$(t).closest(".shopify-buy-frame").find(".pID").html();_kmq.push(["record","added to cart",{"Added Product Name":this.gaNames[n].name,"Added Product Price":e[0],"Added Product Quantity":1,"Added Product SKU":n,"Added Product Variant":this.gaNames[n].variant}]),ga("ec:addProduct",{id:n,name:this.gaNames[n].name,variant:this.gaNames[n].variant,price:e[0],category:"Nutritional",quantity:1}),ga("ec:setAction","add"),ga("send","event","EnhancedEcommerce","Added to Cart","add to cart")}}]),e}(c.default);e.default=s},120:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(46),s=r(c),d=function(t){function e(){a(this,e);var t=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return(new WOW).init(),t._lastScroll=0,$(".parallax")&&(t._initialParallaxBackgroundPosition=$(".parallax").css("background-position-y")),t._appendthis="<div class='modal-overlay js-modal-close'></div>",t}return u(e,t),l(e,[{key:"events",value:function(){return o({"click .main-navigation__mobile":"toggleNav","click .main-navigation__item":"toggleNav","click .vjs-big-play-button":"hideBenefitsText",'click a[href*="#"]:not([href="#"])':"parallaxScroll","scroll window":"navMenuTransition","click a[data-modal-id]":"openModal","click .js-modal-close":"closeModal","keyup window":"closeModal","click .modal-overlay":"closeModal"},"click .vjs-big-play-button","hideBenefitsText")}},{key:"toggleNav",value:function(){$(".main-navigation").is(".expanded")?$(".main-navigation").removeClass("expanded"):$(".main-navigation").addClass("expanded")}},{key:"hideBenefitsText",value:function(){0===$(this).closest("#popup-video").length&&$(".gold-atf__uvp").addClass("hidden")}},{key:"parallaxScroll",value:function(t){if(location.pathname.replace(/^\//,"")==t.pathname.replace(/^\//,"")&&location.hostname==t.hostname){var e=$(t.hash);if(e=e.length?e:$("[name="+t.hash.slice(1)+"]"),e.length){var n=document.documentElement.scrollTop||document.body.scrollTop;return $("html, body").animate({scrollTop:e.offset().top+n},1e3),!1}}}},{key:"parallaxBackgroundScroll",value:function(){if($(".parallax")){var t=$(window).scrollTop(),e=t-this._lastScroll,n=parseInt($(".parallax").css("background-position-y"),10),r=n-e/2;r>-200&&(r=-200),$(".parallax").css("background-position-y",r+"px"),this._lastScroll=t}}},{key:"navMenuTransition",value:function(){var t=$(".main-header"),e=document.documentElement.scrollTop||document.body.scrollTop,n=100,r=$(".main-header").attr("data-header-transition");"background"==r&&(n=$(".main-banner__background").height()-$(".main-header").outerHeight());var o=$(".main-header>.gradient-layer");e>n&&!t.is(".floated")?(t.addClass("floated"),o&&o.addClass("show")):e<n&&t.is(".floated")&&(t.removeClass("floated"),o&&o.removeClass("show")),this.parallaxBackgroundScroll()}},{key:"openModal",value:function(t,e){e.preventDefault(),videojs("my-video").play(),$("body").append(this._appendthis),$(".modal-overlay").fadeTo(500,.7);var n=$(t).attr("data-modal-id");$("#"+n).fadeIn($(t).data())}},{key:"closeModal",value:function(t,e){27==e.which&&(videojs("my-video").pause(),$(".modal-box, .modal-overlay").fadeOut(500,function(){$(".modal-overlay").remove()}))}}]),e}(s.default);e.default=d},121:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(87),s=r(c),d=function(t){function e(){o(this,e);var t=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.svgElements=$("svg.external"),t.gradientLayers={},t._gradientSpeed=.04,t._promises=[],t._cognosEffectsMethods={"anti-inflammatory-actual":"antiInflammatoryDrawing","flow-actual":"flowDrawing","nutrient-delivery-actual":"nutrientDrawing"},$.each(t.svgElements,function(e,n){t._promises.push(t.loadSVG($(n).attr("data-src"),$(n).attr("id"),$(n).attr("data-stroke")))}),Promise.all(t._promises).then(function(e){var n=!0,r=!1,o=void 0;try{for(var a,i=Object.entries(e)[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var l=u(a.value,2),c=(l[0],l[1]);c in t._cognosEffectsMethods&&t[t._cognosEffectsMethods[c]](c)}}catch(t){r=!0,o=t}finally{try{!n&&i.return&&i.return()}finally{if(r)throw o}}}),t.updateGradient=t.updateGradient.bind(t),setInterval(t.updateGradient,10),t}return i(e,t),l(e,[{key:"loadSVG",value:function(t,e,n){var r=this;return new Promise(function(o,a){d3.xml(t,function(t,a){if(t)throw t;var i=document.getElementById(e),u=d3.select(i),l=d3.select(a.getElementsByTagName("svg")[0]);"gradient"==n&&r.applyGradientMask(l,e),l.attr("id",e+"-actual"),u.attr("viewBox",l.attr("viewBox")),u.node().appendChild(l.node()),o(l.attr("id"))})})}},{key:"updateGradient",value:function(){var t=this.getNextColors(),e=u(t,2),n=e[0],r=e[1],o=this.rgb2hex(n),a=this.rgb2hex(r),i=!0,l=!1,c=void 0;try{for(var s,d=Object.entries(this.gradientLayers)[Symbol.iterator]();!(i=(s=d.next()).done);i=!0){var f=u(s.value,2),p=(f[0],f[1]);p.select(".start").attr("stop-color",o),p.select(".end").attr("stop-color",a)}}catch(t){l=!0,c=t}finally{try{!i&&d.return&&d.return()}finally{if(l)throw c}}this.nextStep()}},{key:"applyGradientMask",value:function(t,e){this.initGradient(t,e);var n=t.selectAll("g");n.each(function(){d3.select(this).select("path").style("stroke","url(#"+e+"-gradient)")})}},{key:"initGradient",value:function(t,e){var n=t.append("defs");this.gradientLayers[e]=n.append("linearGradient").attr("id",e+"-gradient").attr("x1","0%").attr("x2","100%").attr("y1","0%").attr("y2","100%"),this.gradientLayers[e].append("stop").attr("class","start").attr("offset","0%").attr("stop-color","#4093DA").attr("stop-opacity",1),this.gradientLayers[e].append("stop").attr("class","end").attr("offset","100%").attr("stop-color","#A160B5").attr("stop-opacity",1)}},{key:"antiInflammatoryDrawing",value:function(t){}},{key:"flowDrawing",value:function(t){var e={duration:100,start:"autostart",type:"sync",reverseStack:!0},n=new Vivus(t,e,function(){n.reset().play()})}},{key:"nutrientDrawing",value:function(t){var e=new Vivus(t,{duration:200},function(){e.finish()})}}]),e}(s.default);e.default=d},122:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(46),c=r(l),s=function(t){function e(t){o(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.toggleIds={},n}return i(e,t),u(e,[{key:"events",value:function(){return{"click [data-toggle-id]":"toggleContentById"}}},{key:"isToggleOpen",value:function(t){var e=this.toggleIds[t];return"boolean"!=typeof e&&this.setToggleId(t,!1),this.toggleIds[t]}},{key:"toggleContentById",value:function(t){var e=t.getAttribute("data-toggle-id");this.isToggleOpen(e)?(this.closeToggle(e),this.setToggleId(e,!1)):(this.openToggle(e),this.setToggleId(e,!0))}},{key:"openToggle",value:function(t){var e=this.getContentSelector(t);$(e).slideDown()}},{key:"closeToggle",value:function(t){var e=this.getContentSelector(t);$(e).slideUp()}},{key:"setToggleId",value:function(t,e){this.toggleIds[t]=e}},{key:"getContentSelector",value:function(t){return"[data-toggle-content='"+t+"']"}}]),e}(c.default);e.default=s}});
//# sourceMappingURL=synchro.js.map