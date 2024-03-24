import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


const secondSlide = document.querySelector('.second-slide')

if(window.matchMedia('(max-width: 1024px)').matches){
  document.querySelector('.main-slider__container').addEventListener('scroll', () => {
    const rect = secondSlide.getBoundingClientRect()
    if(rect.y <= window.scrollY){
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })
}

var video =  document.querySelector('.first-slide__video video');
window.addEventListener('DOMContentLoaded', () => {
  video.play();
})
