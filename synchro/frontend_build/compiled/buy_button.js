$(function() {  

  shopClient = ShopifyBuy.buildClient({
    apiKey: 'da520c849fcb55b4e8b27cfec590c45c',
    domain: 'synchro.myshopify.com', 
    appId: '6'
  });

}); 
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
        product: {
          'transition': 'opacity 0.3s ease',
          'opacity': '1',
          ':hover': {
            'opacity': '.5'
          }
        }
      }
    },
    modalProduct: {
      contents: {
        quantityInput: false,
        button: true,
        description: true
      }, 
      order: [
        'img',
        'title',
        'price',
        'options',
        'description',
        'button'
      ],
      styles: {
        button: {
          'align': 'right',
          'font-weight': 'bold',
          'background-color': '#3090d9',
          ':hover': {
            'background-color': '#2c84c8'
          }
        },
        description: {
          'height': '500px',
          'overflow-y': 'hidden',
          'overflow-x': 'hidden',
          ':hover': {
            'overflow-y': 'scroll'
          }
        }
      }
    }
  };
  var options = {
    product: {
      iframe: false,
      templates: {
        title: '',
        variantTitle: '',
        price: ''
      },
      contents: {
        options: false,
        variantTitle: true,
        price: true,
        quantityInput: false        
      },
      text: {
        button: 'Add To Cart',
        outOfStock: 'Out of Stock',
        unavailable: 'Unavailable'
      },
      events: {
        'addVariantToCart': function(product) {
          //console.log(product);
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
          var getLocation = function(href) {
            var l = document.createElement("a");
            l.href = href;
            return l;
          };
          var checkoutParsed = getLocation(cart.model.checkoutUrl);
          var cartString = encodeURI(checkoutParsed.pathname + checkoutParsed.search);
          // Weirdly, sometimes the cartString is lacking a leading /... 
          if(cartString.substring(0, 1) != '/') {
            cartString = '/' + cartString;
          }
          var payload = {
            'km_ident': kissIdentity,
            'cart_string': cartString
          };
          $.ajax({
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            url: '/api/km_idents',
            data: JSON.stringify(payload),
            success: function() {}
          }); 
          _kmq.push(['record', 'started purchase', {}]);
          ga('ec:setAction','checkout', {
            'step': 1,
          });
          ga('send', 'event', 'EnhancedEcommerce', 'Initiated Checkout', 'initiated checkout');
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

  var purchaseItems = $('.purchase__item');
  var productId, variantId;
  $.each(purchaseItems, function(index, item) {
    productId = parseInt($(item).attr('data-product-id'));
    variantId = parseInt($(item).attr('data-variant-id'));
    node = $(item).attr('data-node');

    options.product.templates.title = $(item).find('.template-title').html();
    options.product.templates.variantTitle = $(item).find('.template-variantTitle').html();
    options.product.templates.price = $(item).find('.template-price').html();

    ui.createComponent('product', {
      id: productId,
      variantId: variantId,
      node: document.getElementById(node),
      options: options
    });
  });

  ui.createComponent('productSet', {
    id: 205866309,
    node: document.getElementById('synchro-product-set'),
    options: productSetOptions
  });

}); 