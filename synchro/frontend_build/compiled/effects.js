$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  var maxScroll = 100;

  $(window).scroll(function() {
    var navbar = $('.main-header');
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    console.log(maxScroll);

    if(scrollTop > maxScroll && !navbar.is('.floated')) {
      navbar.addClass('floated');
      console.log('Floating'); 
    } else if(scrollTop < maxScroll && navbar.is('.floated')) {
      navbar.removeClass('floated'); 
      console.log('unfloated!')
    }
  })
});
