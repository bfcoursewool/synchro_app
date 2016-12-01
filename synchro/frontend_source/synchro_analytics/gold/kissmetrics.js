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