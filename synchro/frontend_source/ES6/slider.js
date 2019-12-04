import slick from 'slick-carousel';

export default (selector) => {
  if($(selector).length) {
    $(selector).slick({
      dots: true,
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 14000,
      arrows: false
    });
    $(selector).on('afterChange', (event, slick, currentSlide, nextSlide) => {
      let speed = $(slick.$slides[currentSlide]).find('.slide').data('time')
      $(selector).slick('slickSetOption', 'autoplaySpeed', speed)
    })
  }
}