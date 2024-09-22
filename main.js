import './src/scss/main.scss'
import './src/js/header'
import Splide from '@splidejs/splide'

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.js-main-slider')) {
    new Splide('.js-main-slider', {
      pagination: true,
      arrows: false,
      type: 'fade',
      autoplay: true,
    }).mount()
  }
})
