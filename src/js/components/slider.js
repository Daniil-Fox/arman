import Swiper from 'swiper';
import  { Navigation, Pagination, Mousewheel } from 'swiper/modules'
Swiper.use([Navigation, Pagination, Mousewheel]);
const menu = ['О компании', 'Сферы деятельности', 'Услуги']
// const mainSlider = new Swiper('.main-slider__container', {
//   modules: [Mousewheel],
//   slidesPerView: 1,
//   direction: 'vertical',
//   speed: 1000,
//   mousewheel: {
//     thresholdTime: 1000
//   },
//   pagination: {
//     el: '.main-slider__pagination',
//     clickable: true,
//       renderBullet: function (index, className) {
//         return `<span class="${className} slider-thumb">${menu[index]}</span>`;
//       },
//   },

// });




window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    '(min-width: 1025px)',
    '.main-slider__container',
    {
      modules: [Mousewheel],
      slidesPerView: 1,
      direction: 'vertical',
      speed: 1000,
      mousewheel: {
        thresholdTime: 1000
      },
      pagination: {
        el: '.main-slider__pagination',
        clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} slider-thumb">${menu[index]}</span>`;
          },
      },
      on: {
        'slideChange' : (swiper) => {
          if(swiper.activeIndex != 0){
            document.body.classList.add('dark')
          } else {
            document.body.classList.remove('dark')
          }
        }
      }
    }
  );
  const ssSliders = document.querySelectorAll('.second-slide__slider')
  ssSliders.forEach(el => {
    resizableSwiper('(max-width: 1024px)', el, {
      slidesPerView: 1,
      module: [Pagination],
      pagination: {
        el: '.second-slide__pagination'
      }
    })
  })
});




