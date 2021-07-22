const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navEl = document.getElementById('nav')
const navLinks = document.getElementById('navbar-links')


toggleButton.addEventListener('click', () => {
    navEl.classList.toggle('active')
    navLinks.classList.toggle('active')
})