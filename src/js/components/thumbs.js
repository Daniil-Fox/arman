const thumbs = document.querySelectorAll('.first-slide__thumb')
const thumbsContent = document.querySelectorAll('.first-slide__content')

thumbs.forEach(t => {
  if(window.matchMedia('(min-width: 1025px)').matches){
    t.addEventListener('mouseenter', () => {
      setThumbsSettings(t)
    })
  } else {
    t.addEventListener('click', () => {
      setThumbsSettings(t)
    })
  }
})
function setThumbsSettings(t){
  clearActive()
  const dataset = t.dataset.num
  const content = document.querySelector(`.first-slide__content[data-slide-content="${dataset}"]`)
  content.classList.add('active')
  t.classList.add('active')
}
function clearActive() {
  thumbsContent.forEach(t => {
    t.classList.remove('active')
  })
  thumbs.forEach(t => t.classList.remove('active'))
}
