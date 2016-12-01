(function() {

jQuery(document).ready(function($){
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

    _kmq.push(['identify', 'anonymous']);
    _kmq.push(['trackClick', '.shopify-buy__btn', 'added to cart', {'URL': 'goldlptest.com'}]);

    $('.shopify-buy__btn').click(function() {
      _kmq.push(function() {
        KM.record('added to cart');
      }); 
    });
  }, 1500);

}); 

})(); 