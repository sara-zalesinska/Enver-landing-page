import '../styles/main.scss';
import Swiper from 'swiper';
import 'swiper/css';

import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

