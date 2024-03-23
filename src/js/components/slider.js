import Swiper from 'swiper';
import  { Navigation, Pagination, Mousewheel } from 'swiper/modules'
Swiper.use([Navigation, Pagination, Mousewheel]);
const menu = ['О компании', 'Сферы деятельности', 'Услуги']
const mainSlider = new Swiper('.main-slider__container', {
  modules: [Mousewheel],
  slidesPerView: 1,
  direction: 'vertical',
  speed: 1000,
  spaceBetween: 100,
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

});

mainSlider.on('slideChange', (swiper) => {
  console.log('asdasds');
  if(mainSlider.activeIndex != 0){
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
})
