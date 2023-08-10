 new Swiper('.image-slider', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  grabCursor: true,
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".image-slider"
  },
 loop: true,

  autoplay: {
    delay: 2000,
    stoponlastslide: false,
 }
});

