const directors = [
    {
        name: "Nikita Marks",
        message: '“It always amazes me how much talent there is in every corner of the globe.”',
        title: "Founder & CEO",
        imageName: "nikita"
    },
    {
        name: "Christian Duncan",
        message: '“Distributed teams required unique processes. You need to approach work in a new way.”',
        title: "Co-founder & COO",
        imageName: "christian"
    },
    {
        name: "Cruz Hamer",
        message: `“Technology is at the forefront of enabling distributed teams. That's where we come in.”`,
        title: "Co-founder & CTO",
        imageName: "cruz"
    },
    {
        name: "Drake Heaton",
        message: `“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”`,
        title: "Business Development Lead",
        imageName: "drake"
    },
    {
        name: "Griffin Wise",
        message: `“Unique perspectives shape unique products, which is what you need to survive these days.”`,
        title: "Lead Marketing",
        imageName: "griffin"
    },
    {
        name: "Aden Allan",
        message: `“Empowered teams create truly amazing products. Set the north star and let them follow it.”`,
        title: "Head of Talent",
        imageName: "aden"
    },
]

const directorsGrid = document.querySelector('.directors-grid')

directors.forEach(director => {
    let name = director.name
    let message = director.message
    let title = director.title
    let imageName = director.imageName

    const article = document.createElement('article')
    article.classList.add('director-card')
    article.innerHTML = `
        <div class="director-card__front">
            <img src="../assets/avatar-${imageName}.jpg" alt="self portrait photograph
            of ${name}">
            <h3>
                ${name}
            </h3>
            <p class="body-2">
                ${title}
            </p>
        </div>
        <div class="director-card__back">
            <h3>
                ${name}
            </h3>
            <p class="body-2">
                ${message}
            </p>
            <div class="social-icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path fill="#FFF" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9
                    2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1
                    0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17
                    17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8
                    1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                    <path
                    fill="#FFF" d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0
                    0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0
                    0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0
                    011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0
                    01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0
                    01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94
                    13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025
                    10.025 0 0024 2.557z"/>
                </svg>
            </div>
        </div>
        <div class="director-card__button">
            <span></span>
            <span></span>
        </div>
    `
    directorsGrid.append(article)
})


const buttons = [...document.querySelectorAll('.director-card__button')]
const directorBackCards = [...document.querySelectorAll('.director-card__back')]
const directorFrontCards = [...document.querySelectorAll('.director-card__front')]


buttons.forEach((button, index) => {
    let activeClass = 'active'

    button.addEventListener('click', () => {
        button.classList.toggle(activeClass)
        directorBackCards[index].classList.toggle(activeClass)
        directorFrontCards[index].classList.toggle(activeClass)
    })
})

