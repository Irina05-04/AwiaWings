/*--swiper-slider---*/
new Swiper('.image-slider',{
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination:{
    el: '.swiper-pagination',

    clickable: true,
  },
  simulateTouch: false,
  touchRatio: 1,
  touchAngle: 45,
  autoHeight: true,
  slidesPerView:3,
  spaceBetween: 30,
  breakpoints:{
    320:{
      slidesPerView: 1,
      simulateTouch: true,
    },
    992:{
      slidesPerView: 3,
      simulateTouch: false,
    }
  },
});

new Swiper('.image-slider-bisness',{
  navigation:{
    nextEl: '.swiper-button-next-bisness',
    prevEl: '.swiper-button-prev-bisness'
  },
  pagination:{
    el: '.swiper-pagination-bisness',

    clickable: true,
  },
  simulateTouch: false,
  touchRatio: 1,
  touchAngle: 45,
  autoHeight: true,
  slidesPerView:3,
  spaceBetween: 30,
  breakpoints:{
    320:{
      slidesPerView: 1,
      simulateTouch: true,
    },
    992:{
      slidesPerView: 3,
      simulateTouch: false,
    }
  }
});
/*--swiper-slider---*/
new Swiper('.image-slider1',{
  navigation:{
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1'
  },
  pagination:{
    el: '.swiper-pagination1',

    clickable: true,
  },
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  autoHeight: true,
  slidesPerView: 2.2,
  spaceBetween: 60,
  breakpoints:{
    320:{
      slidesPerView: 1,
      simulateTouch: true,
    },
    992:{
      slidesPerView: 2.2,
      simulateTouch: false,
    }
  }
});

new Swiper('.image-slider-about',{
  navigation:{
    nextEl: '.swiper-button-next-about',
    prevEl: '.swiper-button-prev-about'
  },
  pagination:{
    el: '.swiper-pagination-about',

    clickable: true,
  },
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 60,
});
