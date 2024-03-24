
window.addEventListener('DOMContentLoaded', () => {
  var images = document.images;
  let images_total_count = images.length
  let images_loaded_count = 0
  const preloader = document.querySelector('.preloader')
  const video = preloader.querySelector('video')
  video.play()

  for(let i = 0; i < images_total_count; i++){
    let image_clone = new Image()
    image_clone.onload = image_loaded
    image_clone.onerror = image_loaded
    image_clone.src = images[i].src
  }
  function image_loaded(){
    images_loaded_count++

    if(images_loaded_count >= images_total_count){
      preloader.style.opacity = '0'

      setTimeout(() => {
        preloader.remove()
      }, 1500)
    }
  }

})
