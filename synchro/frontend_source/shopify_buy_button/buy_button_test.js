$(document).ready(function() {

  // shopClient is instantiated & initialized in shopify_credentials.js
  var ui = ShopifyBuy.UI.init(shopClient); 
  var productSetOptions = {
    product: {
      isButton: true,
      buttonDestination: 'modal',
      contents: {
        options: false,
        button: false
      },
      text: {
        button: 'Add To Cart',
        outOfStock: 'Out of Stock',
        unavailable: 'Unavailable'
      },
      styles: {
        button: {
          'font-weight': 'bold',
          'background-color': '#3090d9',
          ':hover': {
            'background-color': '#2c84c8'
          }
        },
        product: {
          'transition': 'opacity 0.3s ease',
          'opacity': '1',
          ':hover': {
            'opacity': '.5'
          }
        }
      }
    }
  };
  var options = {
    product: {
      text: {
        button: 'Add To Cart',
        outOfStock: 'Out of Stock',
        unavailable: 'Unavailable'
      },
      styles: {
        button: {
          'font-weight': 'bold',
          'background-color': '#3090d9',
          ':hover': {
            'background-color': '#2c84c8'
          }
        }
      }
    },
    cart: {
      text: {
        notice: 'Shipping and discount codes are added at checkout.',
        button: 'Checkout',
        total: 'Total'
      },
      styles: {
        button: {
          'background-color': '#3090d9',
          ':hover': {
            'background-color': '#2c84c8'
          }
        }
      },
      events: {
        'openCheckout': function(cart) {
          window.location.href = cart.model.checkoutUrl;
        }
      }
    },
    toggle: {
      styles: {
        toggle: {
          'background-color': '#3090d9',
          ':hover': {
            'background-color': '#2c84c8'
          }
        }
      }
    }
  };

  ui.createComponent('product', {
    id: 378141356,
    node: document.getElementById('gold-two-pack'),
    options: options
  });

  ui.createComponent('product', {
    id: 457279420,
    node: document.getElementById('gold-four-pack'),
    options: options
  });

  ui.createComponent('product', {
    id: 5811620421,
    node: document.getElementById('gold-six-pack'),
    options: options
  }); 

  ui.createComponent('productSet', {
    id: 205866309,
    node: document.getElementById('synchro-product-set'),
    options: productSetOptions
  });

}); 