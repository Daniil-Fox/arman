
window.addEventListener('DOMContentLoaded', () => {
  const preloader = document.querySelector('.preloader')
  const video = preloader.querySelector('video')
  video.play()
  preloader.style.opacity = '0'

  setTimeout(() => {
    preloader.remove()
  }, 1500)
})
