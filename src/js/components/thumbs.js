const thumbs = document.querySelectorAll('.first-slide__thumb')
const thumbsContent = document.querySelectorAll('.first-slide__content')

thumbs.forEach(t => {
  t.addEventListener('mouseenter', e => {
    clearActive()
    const dataset = t.dataset.num
    document.querySelector(`.first-slide__content[data-slide-content="${dataset}"]`).classList.add('active')
    t.classList.add('active')
  })
})
function clearActive() {
  thumbsContent.forEach(t => t.classList.remove('active'))
  thumbs.forEach(t => t.classList.remove('active'))
}
