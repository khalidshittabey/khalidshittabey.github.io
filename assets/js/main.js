$(function () {
  $.each(document.images, function () {
    var this_image = this;
    var src = $(this_image).attr('src') || '';
    if (!src.length > 0) {
      //this_image.src = options.loading; // show loading
      var lsrc = $(this_image).attr('lsrc') || '';
      if (lsrc.length > 0) {
        var img = new Image();
        img.src = lsrc;
        $(img).load(function () {
          this_image.src = this.src;
        });
      }
    }
  });
});

jQuery(".hero-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 0,
   animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  responsiveClass: true,
  autoplayTimeout: 6000,
  smartSpeed: 800,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1024: {
      items: 1,
    },
    1366: {
      items: 1,
    },
  }
})
