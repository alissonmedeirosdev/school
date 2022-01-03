const btnOpen = document.querySelector('.btn-open')
const btnClose = document.querySelector('.btn-close')
const menu = document.querySelector('header .menu')
const header = document.querySelector('header')
const headerHeight = header.offsetHeight

window.addEventListener('scroll', event => {
  console.log('oii')
  if (window.scrollY >= headerHeight) {
    //scroll is greater than header height
    header.classList.add('scroll')
  } else {
    // less than header height
    header.classList.remove('scroll')
  }
})

btnOpen.addEventListener('click', () => {
  menu.classList.add('active')
})

btnClose.addEventListener('click', () => {
  menu.classList.remove('active')
})
