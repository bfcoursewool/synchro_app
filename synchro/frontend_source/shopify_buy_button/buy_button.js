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
          var payload = {
            'km_ident': kissIdentity,
            'cart_string': checkoutParsed.pathname + checkoutParsed.search
          };
          $.ajax({
            type: 'POST',
            url: '/api/km_idents',
            data: JSON.stringify(payload),
            success: function() {},
            dataType: 'json'            
          });
          //_kmq.push(['alias', cart.model.id, kissIdentity]); 
          //_kmq.push(['record', 'started purchase', {}]);
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

  options.product.templates.title = '<div class="pID">GLD01</div><h1 class="shopify-buy__product__title">ONE BOTTLE (16 SERVINGS)</h1>';
  options.product.templates.variantTitle = '<h2 class="shopify-buy__product__variant-title">TWO WEEK SUPPLY</h2>';
  options.product.templates.price = '<div class="shopify-buy__product__price"><span class=shopify-buy__product__actual-price>$28.97</span></div>';
  ui.createComponent('product', {
    id: 374830964,
    variantId: 979745780,
    node: document.getElementById('gold-option-one'),
    options: options
  });

  options.product.templates.title = '<div class="pID">GLD02</div><h1 class="shopify-buy__product__title">TWO BOTTLES</h1>';
  options.product.templates.variantTitle = '<h2 class="shopify-buy__product__variant-title">ONE MONTH SUPPLY</h2>';
  options.product.templates.price = '<div class="shopify-buy__product__price"><span style="text-decoration: line-through;">$57.94 </span><span class=shopify-buy__product__actual-price>$54.97 (5% OFF) </span></div>';
  ui.createComponent('product', {
    id: 374830964,
    variantId: 979770088,
    node: document.getElementById('gold-option-two'),
    options: options
  });

  options.product.templates.title = '<div class="pID">GLD03</div><h1 class="shopify-buy__product__title">FOUR BOTTLES</h1>';
  options.product.templates.variantTitle = '<h2 class="shopify-buy__product__variant-title">TWO MONTH SUPPLY</h2>';
  options.product.templates.price = '<div class="shopify-buy__product__price"><span style="background-color: yellow"><span style="text-decoration: line-through;">$115.88 </span><span class=shopify-buy__product__actual-price>$103.97 (BEST VALUE - 10% OFF)</span></span></div>';
  ui.createComponent('product', {
    id: 374830964,
    variantId: 979770380,
    node: document.getElementById('gold-option-three'),
    options: options
  }); 

  ui.createComponent('productSet', {
    id: 205866309,
    node: document.getElementById('synchro-product-set'),
    options: productSetOptions
  });

}); 