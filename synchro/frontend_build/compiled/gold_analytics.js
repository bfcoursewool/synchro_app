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
(function() {
var _kmq = _kmq || [];
var _kmk = _kmk || 'a1d477ea6135e5cb56c1951d70f32c7e1c9253e2';
function _kms(u){
  setTimeout(function(){
    var d = document, f = d.getElementsByTagName('script')[0],
    s = d.createElement('script');
    s.type = 'text/javascript'; s.async = true; s.src = u;
    f.parentNode.insertBefore(s, f);
  }, 1);
}
_kms('//i.kissmetrics.com/i.js');
_kms('//scripts.kissmetrics.com/' + _kmk + '.2.js');

//custom code for passing kmid on cross-domain <a href> links
setTimeout(function(){  
  var kissIdentity = KM.i(); 
  kissIdentity = encodeURIComponent(kissIdentity);
  var hrefval = ['synchrogenesis', 'synchrogold', 'digestcleanse', 'besynchro'];
  jQuery.each(hrefval, function(i, val){
    if(window.location.href.indexOf(val) == -1){
      jQuery("a[href*='"+ val +"']").each(function(){
        var $this = jQuery(this);       
        var _href = $this.attr("href");
        var delval = (_href.indexOf("?") >= 0) ? "&" : "?";
        $this.attr("href", _href + delval + 'kmi=' + kissIdentity);
      });
    }
  });
}, 500);

})(); 