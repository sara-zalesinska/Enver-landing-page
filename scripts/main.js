import '../styles/main.scss';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';


const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    breakpoints: {
        768: {
            // slidesPerView: 3,
            // spaceBetween: 20,

        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
  });

