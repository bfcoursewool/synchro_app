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
  },
  'GEN01': {
    'name': 'Synchro Genesis - One Bag (454g)',
    'variant': 'One Bag (12 Servings)'
  }, 
  'GEN02': {
    'name': 'Synchro Genesis - 2 Bags',
    'variant': 'Two Pack'
  }, 
  'GEN03': {
    'name': 'Synchro Genesis - 5 Bags',
    'variant': 'Five Pack'
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
      var price = $(this).closest('.shopify-buy-frame').find('.shopify-buy__product__actual-price').html();
      price = price.replace(/\$/g, ''); 
      price = price.match(/(.*)\.[0-9][0-9]/); 
      var SKU = $(this).closest('.shopify-buy-frame').find('.pID').html(); 

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