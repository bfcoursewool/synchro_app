$(document).ready(function() {  

  var cart, testProduct; 
  var cartDeferred = $.Deferred(); 

  // shopClient is instantiated & initialized in shopify_credentials.js
  shopClient.createCart()
    .then(function(newCart) {
      cartDeferred.resolve(newCart); 
    });

  cartDeferred.done(function(theCart) {
    cart = theCart;
    
    $('.checkout-link').click(function(event) {
      event.preventDefault();
      var productId = $(this).closest('.product-option').attr('data-product-id');
      var quantity = $(this).closest('.product-option').attr('data-quantity'); 

      shopClient.fetchProduct(productId)
        .then(function(product) {
          cart.addVariants({
            variant: product.variants[0], 
            quantity: quantity
          })
            .then(function() {
              window.location.href = cart.checkoutUrl; 
            });
        });
    });
  });
});  
