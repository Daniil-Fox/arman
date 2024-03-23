const tabs = document.querySelectorAll('.info-thumb')
const tabsContent = document.querySelectorAll('.second-slide__slider')

tabs.forEach(t => {
  t.addEventListener('click', () => {
    const dataset = t.dataset.infoTab
    clearActive()
    document.querySelector(`.second-slide__slider[data-info-content="${dataset}"]`)?.classList.add('active')
    t.classList.add('active')
  })
})


function clearActive(){
  tabs.forEach(t => t.classList.remove('active'))
  tabsContent.forEach(t => t.classList.remove('active'))
}
