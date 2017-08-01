let entries = require('object.entries'); 
import shopClient from './shopify_credentials';

export default class BuyButton {
  constructor(KMPromise) {
    this._KMPromise = KMPromise; 
    this._ui = ShopifyBuy.UI.init(shopClient); 
  }

  productOptions(kissIdentity) {
    return {
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
          'openCheckout': (cart) => {
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
    }
  }

  productSetOptions() {
    return {
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
    }
  }

  init() {
    return new Promise((resolve, reject) => {
      this._KMPromise.then((identString) => {
        let promises = [...this.insertItems(identString), ...this.insertCollection()];
        Promise.all(promises).then(() => resolve());
      });
    });
  }

  insertItems(kissIdentity) {
    const purchaseItems = $('.purchase__item');
    let productId, variantId, node;
    let options = this.productOptions(kissIdentity);
    let itemPromises = [];
    for(let [index, item] of entries(purchaseItems)) {
      productId = parseInt($(item).attr('data-product-id'));
      variantId = parseInt($(item).attr('data-variant-id'));
      node = $(item).attr('data-node');
      itemPromises.push(new Promise((resolve, reject) => {
        options.product.templates.title = $(item).find('.template-title').html();
        options.product.templates.variantTitle = $(item).find('.template-variantTitle').html();
        options.product.templates.price = $(item).find('.template-price').html();

        this._ui.createComponent('product', {
          id: productId,
          variantId: variantId,
          node: document.getElementById(node),
          options: options
        }).then(() => resolve('done'));
      }));
    }
    return itemPromises;
  }

  insertCollection() {
    const collection = $('.synchro-collection');
    let collectionId = collection.attr('data-collection-id');
    return new Promise((resolve, reject) => {
      this._ui.createComponent('productSet', {
        id: collectionId,
        node: document.getElementById('synchro-product-set'),
        options: this.productSetOptions()
      }).then(() => resolve('done'));
    });
  }
}
