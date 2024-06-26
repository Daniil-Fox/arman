const tabs = document.querySelectorAll('.info-thumb')
const tabsContent = document.querySelectorAll('.second-slide__slider')
const closeBtn = document.querySelector('.second-slide__close')

closeBtn.addEventListener('click', () => {
  clearActive()
  // closeBtn.style.opacity = '0'
  // closeBtn.style.pointerEvents = 'none'

  closeBtn.classList.remove('active')
})


tabs.forEach(t => {
  t.addEventListener('click', () => {
    const dataset = t.dataset.infoTab
    clearActive()
    document.querySelector(`.second-slide__slider[data-info-content="${dataset}"]`)?.classList.add('active')
    t.classList.add('active')
    // closeBtn.style.opacity = '1'
    // closeBtn.style.pointerEvents = 'unset'
    // if(window.matchMedia('(max-width: 1024px)').matches){
    //   closeBtn.classList.add('active')
    // }
  })
})


function clearActive(){
  tabs.forEach(t => t.classList.remove('active'))
  tabsContent.forEach(t => t.classList.remove('active'))
}
