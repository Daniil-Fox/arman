const tabs = document.querySelectorAll('.info-thumb')
const tabsContent = document.querySelectorAll('.second-slide__slider')
const closeBtn = document.querySelector('.second-slide__close')

closeBtn.addEventListener('click', () => {
  clearActive()
  closeBtn.style.opacity = '0'
  closeBtn.style.pointerEvents = 'none'
})


if(window.matchMedia('(min-width: 1025px)').matches){
  tabsContent[0].classList.add('active')
  tabs[0].classList.add('active')

}
tabs.forEach(t => {
  t.addEventListener('click', () => {
    const dataset = t.dataset.infoTab
    clearActive()
    document.querySelector(`.second-slide__slider[data-info-content="${dataset}"]`)?.classList.add('active')
    t.classList.add('active')
    closeBtn.style.opacity = '1'
    closeBtn.style.pointerEvents = 'unset'
  })
})


function clearActive(){
  tabs.forEach(t => t.classList.remove('active'))
  tabsContent.forEach(t => t.classList.remove('active'))
}
