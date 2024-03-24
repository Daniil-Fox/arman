
const burgerBtn = document.querySelectorAll('[data-burger-btn]')
const mainSlides = document.querySelectorAll('.main-slider__container>.swiper-wrapper>.swiper-slide')
burgerBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    const menu = document.querySelector('.menu')
    const menuItems = menu.querySelectorAll('.nav__link')
    const text = document.querySelector('.header__menu span')
    const menuContainer = menu.querySelector('.menu__container')

    menuContainer.addEventListener('mouseenter', e => {
      e.stopPropagation()
    })


    let isActive = menu.classList.toggle('active')
    let isDark = document.body.classList.contains('dark')
    let wasDark = !isDark
    let flag = false
    for(let i = 0; i < mainSlides.length; i++){
      if(mainSlides[i].classList.contains('swiper-slide-active') && i == 0){
        flag = true
        break
      }
    }
    if(!flag){
      if(isDark && isActive){
        document.body.classList.remove('dark')
      } else if(wasDark && !isActive){
        document.body.classList.add('dark')
      }
    }

    burgerBtn.forEach(b => { b.setAttribute('disabled', '')})

    text.style.transform = 'rotate(90deg) translateY(-20vw)'

    setTimeout(() => {
      text.textContent = isActive ? 'Закрыть' : 'Меню'
      text.style.transform = null
      burgerBtn.forEach(b => { b.removeAttribute('disabled')})
    }, 500)

    const contentDefault = menu.querySelector(`[data-menu-content="default"]`)
    const contentSphere = menu.querySelector('[data-menu-content="sphere"]')
    menuItems.forEach(link => {


      link.addEventListener('mouseenter', e => {
        e.stopPropagation()
        menuItems.forEach(it => {
          it.classList.add('disable')
        })

        if(link.dataset.menuExtra == "sphere"){
          contentDefault.style.opacity = 0

          setTimeout(() => {
            contentDefault.style.display = 'none'
          }, 300)

          setTimeout(() => {
            contentSphere.style.display = 'block'
          }, 305)

          setTimeout(() => {
            contentSphere.style.opacity = '1'
          }, 310)
        }
        e.currentTarget.classList.remove('disable')
      })

      link.addEventListener('mouseleave', e => {
        if(!link.dataset.menuExtra){
          menuItems.forEach(it => {
            it.classList.remove('disable')
          })
          contentSphere.style.opacity = 0

          setTimeout(() => {
            contentSphere.style.display = 'none'
          }, 300)

          setTimeout(() => {
            contentDefault.style.display = 'flex'
          }, 305)

          setTimeout(() => {
            contentDefault.style.opacity = '1'
          }, 310)
        }
      })
    })


    menuContainer.addEventListener('mouseleave', e => {
      menuItems.forEach(it => {
        it.classList.remove('disable')
      })
      contentSphere.style.opacity = 0

          setTimeout(() => {
            contentSphere.style.display = 'none'
          }, 300)

          setTimeout(() => {
            contentDefault.style.display = 'flex'
          }, 305)

          setTimeout(() => {
            contentDefault.style.opacity = '1'
          }, 310)
    })

  })
})
