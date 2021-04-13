const menuButtonLines = [...document.querySelectorAll('.nav-button-line')]
const menuButton = document.querySelector('.nav-burger-button')
const headNav = document.querySelector('.header-nav')
const backdrop = document.querySelector('.backdrop')

const transitionableElements = [...menuButtonLines, headNav, backdrop]

const toggleActiveClassesOnButtonPress = () => {
    transitionableElements.forEach(el => {
        el.classList.toggle('active')
    })
}

menuButton.addEventListener('click', toggleActiveClassesOnButtonPress)
