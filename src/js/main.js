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



const burgerBtn = document.querySelectorAll('[data-burger-btn]')

burgerBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    const menu = document.querySelector('.menu')
    const text = document.querySelector('.header__menu span')
    let isActive = menu.classList.toggle('active')
    burgerBtn.forEach(b => { b.setAttribute('disabled', '')})

    text.style.transform = 'rotate(90deg) translateY(-20vw)'

    setTimeout(() => {
      text.textContent = isActive ? 'Закрыть' : 'Меню'
      text.style.transform = null
      burgerBtn.forEach(b => { b.removeAttribute('disabled')})
    }, 500)
  })
})
