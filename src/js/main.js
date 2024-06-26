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
  if(window.matchMedia("(min-width: 1025px)").matches){
    video.src = './cover.mp4'
  } else {
    video.src = './cover-mob.mp4'
  }
  video.play();
})


const cursorRounded = document.querySelector('.rounded');
const cursorPointed = document.querySelector('.pointed');


const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;


}

window.addEventListener('mousemove', moveCursor)

// document.cookie = 'visited=123'

// function getCookie(){
//   return document.cookie
// }
// if (getCookie('visited') == 1) {
//   console.log('Последующие разы');
// } else {
//   console.log('Первый раз');
// }
