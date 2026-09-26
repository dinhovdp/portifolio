// Controle do menu hambúrguer (index.html e success.html)
const menuToggle = document.querySelector('#menu-toggle')
const menuLinks = document.querySelectorAll('.menu-list a')

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (menuToggle) menuToggle.checked = false
  })
})
