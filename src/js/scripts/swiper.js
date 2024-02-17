// Подключение свайпера
// import Swiper, {
//   Autoplay,
//   Navigation,
//   Pagination,
//   Thumbs,
//   Controller,
// } from 'swiper';
// Swiper.use([Autoplay, Navigation, Pagination, Thumbs, Controller]);

const heroSwiper = new Swiper('.hero-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  // slidesPerView: 'auto',
  // loopedSlides: 1,
  // navigation: {
  //   prevEl: ".block_products__swiper-button-prev",
  //   nextEl: ".block_products__swiper-button-next",
  // },
  // pagination: {
  //   el: ".block_products__swiper-pagination",
  //   clickable: true
  // },
  // breakpoints: {
  //   1201: {
  //     slidesPerView: 4,
  //     spaceBetween: 24,
  //   },
  //   769: {
  //     spaceBetween: 20,
  //     slidesPerView: 4
  //   },
  //   577: {
  //     spaceBetween: 20,
  //     slidesPerView: 3
  //   },
  //   320: {
  //     spaceBetween: 20,
  //     slidesPerView: 1
  //   },
  // }
});

const productsSwiper = new Swiper('.products-swiper', {
  slidesPerView: 5,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    prevEl: ".products-swiper__swiper-button-prev",
    nextEl: ".products-swiper__swiper-button-next",
  },
});
const articleSwiper = new Swiper('.article-swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    prevEl: ".article-swiper__swiper-button-prev",
    nextEl: ".article-swiper__swiper-button-next",
  },
});
// 
// 
// 

var productSingleThumbSwiper = new Swiper(".product-single-thumb-swiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  direction: 'vertical',
  freeMode: false,
  watchSlidesProgress: true,
});
var productSingleSwiper = new Swiper(".product-single-swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productSingleThumbSwiper,
  },
});