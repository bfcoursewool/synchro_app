
const loadHeroImg = (
    src = 'https://storage.googleapis.com/synchro-assets/gold/susan/test.jpg',
    selector = '.bg-full-width'
  ) => {

    $('<img/>').attr({src}).on('load', function() {
       $(this).remove(); // prevent memory leaks as @benweet suggested
       $(selector)
         .css({
          'opacity': 0,
          'background-image': `url(${src})`
          })
         .animate({'opacity': 1}, 1000);
    });

  }
;

export {loadHeroImg};