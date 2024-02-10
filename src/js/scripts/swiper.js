// Подключение свайпера
import Swiper, {
  Autoplay,
  Navigation,
  Pagination,
} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

const heroSwiper = new Swiper('.hero-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
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