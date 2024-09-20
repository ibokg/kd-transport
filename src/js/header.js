const $header = document.querySelector('.js-header')
const $hamburger = document.querySelector('.js-hamburger')
const $hamburgerIcon = document.querySelector('.js-hamburger-icon')
const $sidenav = document.querySelector('.js-sidenav')
const $body = document.querySelector('body')

if ($hamburger) {
  $hamburger.addEventListener('click', () => {
    $header.classList.toggle('l-header--fixed-mobile')
    $sidenav.classList.toggle('c-sidenav--show')
    $hamburgerIcon.classList.toggle('c-hamburger__icon--close')
    $body.classList.toggle('h-overflow-hidden')
    $body.classList.toggle('h-overflow-hidden--mobile')
  })
}
