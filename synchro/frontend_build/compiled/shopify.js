(function() {

  var shopClient
  , cart
  , testProduct; 

  shopClient = ShopifyBuy.buildClient({
    apiKey: 'da520c849fcb55b4e8b27cfec590c45c',
    domain: 'synchro.myshopify.com', 
    appId: '6'
  });

  shopClient.fetchProduct(374830964)
    .then(function(product) {
      shopClient.createCart().then(function(newCart) {
        cart = newCart;

        cart.addVariants({
          variant: product.selectedVariant,
          quantity: 1
        });

        document.getElementById('checkoutLink').href = cart.checkoutUrl;
      });
    })
    .catch(function() {
      console.log('request failed'); 
    }); 
})();