(function() {
// Dynamic Add To Cart Fires for Facebook Pixel 
jQuery(document).ready(function($){

  setTimeout(function() {
    $('.shopify-buy__btn').click(function() {
      var price = $(this).parent().find('.shopify-buy__product__actual-price').html();
      var contentName = $(this).parent().find('.shopify-buy__product__title').html() + $(this).parent().find('.shopify-buy__product__variant-title').html();

      fbq('track', 'AddToCart', {
        property: 'Synchro-Gold',
        content_name: contentName,
        value: price,
        currency: 'USD'
      });
    });
  }, 3000);
});

})();
// I'm sorry, God. Please forgive my sins. 
var kissIdentity;

(function() {

// TODO -- O GOD REFACTOR ME
var gaNames = {
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
  }
};

jQuery(document).ready(function($){
  //custom code for passing kmid on cross-domain <a href> links
  setTimeout(function(){  

    _kmq.push(['identify', 'anonymous']);
    _kmq.push(function() {
      kissIdentity = KM.i(); 
    });

    $('.shopify-buy__btn').click(function() {
      var price = $(this).closest('.shopify-buy__product').find('.shopify-buy__product__actual-price').html();
      price = price.replace(/\$/g, ''); 
      price = price.match(/(.*)\.[0-9][0-9]/); 
      var SKU = $(this).closest('.shopify-buy__product').find('.pID').html(); 

      _kmq.push(['record', 'added to cart', {
        'Added Product Name': gaNames[SKU].name,
        'Added Product Price': price[0],
        'Added Product Quantity': 1,
        'Added Product SKU': SKU,
        'Added Product Variant': gaNames[SKU].variant
      }]); 

      ga('ec:addProduct', { 
        'id': SKU,
        'name': gaNames[SKU].name,
        'variant': gaNames[SKU].variant,
        'price': price[0],
        'category': 'Nutritional',
        'quantity': 1
      });
      ga('ec:setAction', 'add');
      ga('send', 'event', 'EnhancedEcommerce', 'Added to Cart', 'add to cart');
    });
  }, 3000);

}); 

})(); 