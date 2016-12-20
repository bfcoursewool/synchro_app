// I'm sorry, God. Please forgive my sins. 
var kissIdentity;

(function() {

jQuery(document).ready(function($){
  //custom code for passing kmid on cross-domain <a href> links
  setTimeout(function(){  

    _kmq.push(['identify', 'anonymous']);
    _kmq.push(function() {
      kissIdentity = KM.i(); 
    });

    $('.shopify-buy__btn').click(function() {
      var price = $(this).parent().find('.shopify-buy__product__actual-price').html();
      price = price.replace(/\$/g, ''); 
      var contentName = $(this).parent().find('.shopify-buy__product__title').html() + $(this).parent().find('.shopify-buy__product__variant-title').html();

      _kmq.push(['record', 'added to cart', {
        'Added Product Name': contentName,
        'Added Product Price': price,
        'Added Product Quantity': 1,
        'Added Product SKU': 'GLD01',
        'Added Product Variant': 'coming soon'
      }]); 
    });
  }, 2500);

}); 

})(); 