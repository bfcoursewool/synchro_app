import EventsBase from './events_base';

$(window).scroll(function() {
  if ($(this).scrollTop() > 700) {
    $('.floating-buy-button').addClass('show-buy-button');
    $('.floating-purchase-options').addClass('show-purchase-options');
  } else {
    $('.floating-buy-button').removeClass('show-buy-button');
    $('.floating-purchase-options').removeClass('show-purchase-options');
  }
});
