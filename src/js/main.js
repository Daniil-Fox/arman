import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


const firstSlideSlides = document.querySelectorAll('.first-slide__content')

firstSlideSlides.forEach(f => {
  const btn = f.querySelector('.first-slide__btn')
  const cover = f.querySelector('.first-slide__cover')
  btn.addEventListener('mouseenter', () => {
    cover.style.width = '71rem'
    f.classList.add('active-text')
  })
  btn.addEventListener('mouseleave', () => {
    cover.style.width = null
    f.classList.remove('active-text')
  })
})

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


