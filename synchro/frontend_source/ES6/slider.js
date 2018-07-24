import slick from 'slick-carousel';

export default (selector) => {
  if($(selector).length) {
    $(selector).slick({
      dots: true,
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false
    });
  }
}