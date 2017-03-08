(function() {
// Dynamic Add To Cart Fires for Facebook Pixel 
jQuery(document).ready(function($){

  setTimeout(function() {
    $('.shopify-buy__btn').click(function() {
      var price = $(this).parent().find('.shopify-buy__product__actual-price').html();
      price = price.replace(/\$/g, ''); 
      price = price.match(/(.*)\.[0-9][0-9]/); 
      var contentName = $(this).parent().find('.shopify-buy__product__title').html() + $(this).parent().find('.shopify-buy__product__variant-title').html();
      var property = $(this).closest('.purchase').attr('data-fb-property');

      console.log(property);
      console.log(contentName);
      console.log(price);

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