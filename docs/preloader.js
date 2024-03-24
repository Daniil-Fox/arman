
window.addEventListener('DOMContentLoaded', () => {
  const preloader = document.querySelector('.preloader')
  preloader.style.opacity = '0'

  setTimeout(() => {
    preloader.remove()
  }, 1500)
})
