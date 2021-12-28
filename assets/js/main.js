const btnOpen = document.querySelector('.btn-open')
const btnClose = document.querySelector('.btn-close')
const menu = document.querySelector('header .menu')

btnOpen.addEventListener('click', () => {
  menu.classList.add('active')
})

btnClose.addEventListener('click', () => {
  menu.classList.remove('active')
})
