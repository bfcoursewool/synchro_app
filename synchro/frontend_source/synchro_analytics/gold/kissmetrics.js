(function() {

jQuery(document).ready(function($){
  //custom code for passing kmid on cross-domain <a href> links
  setTimeout(function(){  
    /*
     * TODO -- Check if this is at all necessary... 
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
    */ 

    _kmq.push(['identify', 'anonymous']);
    //_kmq.push(['trackClick', '.shopify-buy__btn', 'added to cart', {'URL': 'goldlptest.com'}]);

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
  }, 1500);

}); 

})(); 