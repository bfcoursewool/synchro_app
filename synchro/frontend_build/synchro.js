!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var r=n(119),i=o(r),a=n(115),c=o(a),u=n(117),l=o(u),s=n(118),d=o(s),f=n(120),p=o(f),h=(new i.default,new d.default),y=new l.default,v=new c.default(h.KMPromise),m=new p.default;$(document).ready(function(){m.startEffect(),v.init().then(function(){y.bindEvents(),h.bindEvents()})})},60:function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&c.return&&c.return()}finally{if(r)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=function(){function t(){n(this,t),this._specialSelectors={window:window,document:document},this.bindEvents()}return r(t,[{key:"bindEvents",value:function(){var t=this,e=!0,n=!1,r=void 0;try{for(var i,a=function(){var e=o(i.value,2),n=e[0],r=e[1],a=n.split(" "),c=o(a,2),u=c[0],l=c[1];$.inArray(l,Object.keys(t._specialSelectors))>=0&&(l=t._specialSelectors[l]),$(l).on(u,function(e){return t[r](e.currentTarget,e)})},c=Object.entries(this.events())[Symbol.iterator]();!(e=(i=c.next()).done);e=!0)a()}catch(t){n=!0,r=t}finally{try{!e&&c.return&&c.return()}finally{if(n)throw r}}}}]),t}();e.default=i},115:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&c.return&&c.return()}finally{if(r)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=n(116),l=o(u),s=function(){function t(e){i(this,t),this._KMPromise=e,this._ui=ShopifyBuy.UI.init(l.default)}return c(t,[{key:"productOptions",value:function(t){return{product:{iframe:!1,templates:{title:"",variantTitle:"",price:""},contents:{options:!1,variantTitle:!0,price:!0,quantityInput:!1},text:{button:"Add To Cart",outOfStock:"Out of Stock",unavailable:"Unavailable"},events:{addVariantToCart:function(t){}}},cart:{text:{notice:"Shipping and discount codes are added at checkout.",button:"Checkout",total:"Total"},styles:{button:{"background-color":"#3090d9",":hover":{"background-color":"#2c84c8"}}},events:{openCheckout:function(e){var n=function(t){var e=document.createElement("a");return e.href=t,e},o=n(e.model.checkoutUrl),r=encodeURI(o.pathname+o.search);"/"!=r.substring(0,1)&&(r="/"+r);var i={km_ident:t,cart_string:r};$.ajax({type:"POST",dataType:"json",contentType:"application/json",url:"/api/km_idents",data:JSON.stringify(i),success:function(){}}),_kmq.push(["record","started purchase",{}]),ga("ec:setAction","checkout",{step:1}),ga("send","event","EnhancedEcommerce","Initiated Checkout","initiated checkout"),window.location.href=e.model.checkoutUrl}}},toggle:{styles:{toggle:{"background-color":"#3090d9",":hover":{"background-color":"#2c84c8"}}}}}}},{key:"productSetOptions",value:function(){return{product:{isButton:!0,buttonDestination:"modal",contents:{options:!1,button:!1},text:{button:"Add To Cart",outOfStock:"Out of Stock",unavailable:"Unavailable"},styles:{product:{transition:"opacity 0.3s ease",opacity:"1",":hover":{opacity:".5"}}}},modalProduct:{contents:{quantityInput:!1,button:!0,description:!0},order:["img","title","price","options","description","button"],styles:{button:{align:"right","font-weight":"bold","background-color":"#3090d9",":hover":{"background-color":"#2c84c8"}},description:{height:"500px","overflow-y":"hidden","overflow-x":"hidden",":hover":{"overflow-y":"scroll"}}}}}}},{key:"init",value:function(){var t=this;return new Promise(function(e,n){t._KMPromise.then(function(n){var o=[].concat(r(t.insertItems(n)),r(t.insertCollection()));Promise.all(o).then(function(){return e()})})})}},{key:"insertItems",value:function(t){var e=this,n=$(".purchase__item"),o=void 0,r=void 0,i=void 0,c=this.productOptions(t),u=[],l=!0,s=!1,d=void 0;try{for(var f,p=function(){var t=a(f.value,2),n=(t[0],t[1]);o=parseInt($(n).attr("data-product-id")),r=parseInt($(n).attr("data-variant-id")),i=$(n).attr("data-node"),u.push(new Promise(function(t,a){c.product.templates.title=$(n).find(".template-title").html(),c.product.templates.variantTitle=$(n).find(".template-variantTitle").html(),c.product.templates.price=$(n).find(".template-price").html(),e._ui.createComponent("product",{id:o,variantId:r,node:document.getElementById(i),options:c}).then(function(){return t("done")})}))},h=Object.entries(n)[Symbol.iterator]();!(l=(f=h.next()).done);l=!0)p()}catch(t){s=!0,d=t}finally{try{!l&&h.return&&h.return()}finally{if(s)throw d}}return u}},{key:"insertCollection",value:function(){var t=this,e=$(".synchro-collection"),n=e.attr("data-collection-id");return new Promise(function(e,o){t._ui.createComponent("productSet",{id:n,node:document.getElementById("synchro-product-set"),options:t.productSetOptions()}).then(function(){return e("done")})})}}]),t}();e.default=s},116:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=ShopifyBuy.buildClient({apiKey:"da520c849fcb55b4e8b27cfec590c45c",domain:"synchro.myshopify.com",appId:"6"});e.default=n},117:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=n(60),l=o(u),s=function(t){function e(){return r(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return a(e,t),c(e,[{key:"events",value:function(){return{"click .shopify-buy__btn":"fireFBQ"}}},{key:"fireFBQ",value:function(t){var e=$(t).closest(".shopify-buy-frame").find(".shopify-buy__product__actual-price").html();e=e.replace(/\$/g,""),e=e.match(/(.*)\.[0-9][0-9]/);var n=$(t).closest(".shopify-buy-frame").find(".shopify-buy__product__title").html()+$(t).closest(".shopify-buy-frame").find(".shopify-buy__product__variant-title").html(),o=$(t).closest(".purchase").attr("data-fb-property");fbq("track","AddToCart",{property:o,content_name:n,value:e,currency:"USD"})}}]),e}(l.default);e.default=s},118:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=n(60),l=o(u),s=function(t){function e(){r(this,e);var t=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return _kmq.push(["identify","anonymous"]),t.KMPromise=new Promise(function(t,e){_kmq.push(function(){t(KM.i())})}),t.gaNames={GLD01:{name:"Synchro Gold - One Bottle (16oz)",variant:"One Bottle (16oz)"},GLD02:{name:"Synchro Gold - Two Bottles",variant:"Two Bottles"},GLD03:{name:"Synchro Gold - Four Bottles",variant:"Four Bottles"},GEN01:{name:"Synchro Genesis - One Bag (454g)",variant:"One Bag (12 Servings)"},GEN02:{name:"Synchro Genesis - 2 Bags",variant:"Two Pack"},GEN03:{name:"Synchro Genesis - 5 Bags",variant:"Five Pack"}},t}return a(e,t),c(e,[{key:"events",value:function(){return{"click .shopify-buy__btn":"fireKM"}}},{key:"fireKM",value:function(t){var e=$(t).closest(".shopify-buy-frame").find(".shopify-buy__product__actual-price").html();e=e.replace(/\$/g,""),e=e.match(/(.*)\.[0-9][0-9]/);var n=$(t).closest(".shopify-buy-frame").find(".pID").html();_kmq.push(["record","added to cart",{"Added Product Name":this.gaNames[n].name,"Added Product Price":e[0],"Added Product Quantity":1,"Added Product SKU":n,"Added Product Variant":this.gaNames[n].variant}]),ga("ec:addProduct",{id:n,name:this.gaNames[n].name,variant:this.gaNames[n].variant,price:e[0],category:"Nutritional",quantity:1}),ga("ec:setAction","add"),ga("send","event","EnhancedEcommerce","Added to Cart","add to cart")}}]),e}(l.default);e.default=s},119:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=n(60),s=o(l),d=function(t){function e(){i(this,e);var t=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return(new WOW).init(),t._appendthis="<div class='modal-overlay js-modal-close'></div>",t}return c(e,t),u(e,[{key:"events",value:function(){return r({"click .main-navigation__mobile":"toggleNav","click .main-navigation__item":"toggleNav","click .vjs-big-play-button":"hideBenefitsText",'click a[href*="#"]:not([href="#"])':"parallaxScroll","scroll window":"navMenuTransition","click a[data-modal-id]":"openModal","click .js-modal-close":"closeModal","keyup window":"closeModal","click .modal-overlay":"closeModal"},"click .vjs-big-play-button","hideBenefitsText")}},{key:"toggleNav",value:function(){$(".main-navigation").is(".expanded")?$(".main-navigation").removeClass("expanded"):$(".main-navigation").addClass("expanded")}},{key:"hideBenefitsText",value:function(){0===$(this).closest("#popup-video").length&&$(".gold-atf__uvp").addClass("hidden")}},{key:"parallaxScroll",value:function(t){if(location.pathname.replace(/^\//,"")==t.pathname.replace(/^\//,"")&&location.hostname==t.hostname){var e=$(t.hash);if(e=e.length?e:$("[name="+t.hash.slice(1)+"]"),e.length){var n=document.documentElement.scrollTop||document.body.scrollTop;return $("html, body").animate({scrollTop:e.offset().top+n},1e3),!1}}}},{key:"navMenuTransition",value:function(){var t=$(".main-header"),e=document.documentElement.scrollTop||document.body.scrollTop,n=100;e>n&&!t.is(".floated")?t.addClass("floated"):e<n&&t.is(".floated")&&t.removeClass("floated")}},{key:"openModal",value:function(t,e){e.preventDefault(),videojs("my-video").play(),$("body").append(this._appendthis),$(".modal-overlay").fadeTo(500,.7);var n=$(t).attr("data-modal-id");$("#"+n).fadeIn($(t).data())}},{key:"closeModal",value:function(t,e){27==e.which&&(videojs("my-video").pause(),$(".modal-box, .modal-overlay").fadeOut(500,function(){$(".modal-overlay").remove()}))}}]),e}(s.default);e.default=d},120:function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=function(){function t(){n(this,t),this._colors=[[62,35,255],[60,255,60],[255,35,98],[45,175,230],[255,0,255],[255,128,0]],this._step=0,this._colorIndices=[0,1,2,3],this._gradientSpeed=.002,this.updateGradient=this.updateGradient.bind(this)}return o(t,[{key:"updateGradient",value:function(){var t=this._colors[this._colorIndices[0]],e=this._colors[this._colorIndices[1]],n=this._colors[this._colorIndices[2]],o=this._colors[this._colorIndices[3]],r=1-this._step,i=Math.round(r*t[0]+this._step*e[0]),a=Math.round(r*t[1]+this._step*e[1]),c=Math.round(r*t[2]+this._step*e[2]),u="rgb("+i+","+a+","+c+")",l=Math.round(r*n[0]+this._step*o[0]),s=Math.round(r*n[1]+this._step*o[1]),d=Math.round(r*n[2]+this._step*o[2]),f="rgb("+l+","+s+","+d+")";$("#gradient").css({background:"-webkit-gradient(linear, left top, right top, from("+u+"), to("+f+"))"}).css({background:"-moz-linear-gradient(left, "+u+" 0%, "+f+" 100%)"}),this._step+=this._gradientSpeed,this._step>=1&&(this._step%=1,this._colorIndices[0]=this._colorIndices[1],this._colorIndices[2]=this._colorIndices[3],this._colorIndices[1]=(this._colorIndices[1]+Math.floor(1+Math.random()*(this._colors.length-1)))%this._colors.length,this._colorIndices[3]=(this._colorIndices[3]+Math.floor(1+Math.random()*(this._colors.length-1)))%this._colors.length)}},{key:"startEffect",value:function(){$("#gradient")&&setInterval(this.updateGradient,10)}}]),t}();e.default=r}});
//# sourceMappingURL=synchro.js.map