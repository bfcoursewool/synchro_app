(function() {
// Dynamic Add To Cart Fires for Facebook Pixel 
jQuery(document).ready(function($){

  setTimeout(function() {
    $('.shopify-buy__btn').click(function() {
      var price = $(this).closest('.shopify-buy-frame').find('.shopify-buy__product__actual-price').html();
      price = price.replace(/\$/g, ''); 
      price = price.match(/(.*)\.[0-9][0-9]/); 
      var contentName = $(this).closest('.shopify-buy-frame').find('.shopify-buy__product__title').html() + $(this).closest('.shopify-buy-frame').find('.shopify-buy__product__variant-title').html();
      var property = $(this).closest('.purchase').attr('data-fb-property');

      fbq('track', 'AddToCart', {
        property: property,
        content_name: contentName,
        value: price,
        currency: 'USD'
      });
    });
  }, 3000);
});

})();