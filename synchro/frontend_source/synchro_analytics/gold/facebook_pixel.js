(function() {
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '495265410669440');
fbq('track', 'PageView', {
  property: 'Synchro-Gold'
});
  
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