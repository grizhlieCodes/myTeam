const formItems = [...document.querySelectorAll('.form-item.checkValidity')]
const form = document.querySelector('form')
const modal = document.querySelector('.contact-modal')
const modalMessage = document.querySelector('.modal-message')
const modalButton = document.querySelector('.modal-button')

let errorEmailMessage = "This email is incorrect"
let errorRequiredMessage = "This field is required"
let errorLengthMessage = "This field is too short"

formItems.forEach(item => {
    item.addEventListener('keyup', () => {
        checkValidity(item)
    })
})

//::Modal
let errorFreeShowModal = false
let modalFirstName
let modalMessageText

modalButton.addEventListener('click', () => {
    modal.classList.remove('active')
    
    setTimeout(() => {
        modal.classList.remove('display-true')
    },150)
})

function updateName(input){
    if(input.name == "name"){
        let nameArray = input.value.split(" ")
        modalFirstName = nameArray[0]
    }
}


function checkValidity(item, e){
    let input = item.children[0]
    let label = item.children[1]
    let span = item.children[2]
    let errMes = item.children[3]

    updateName(input)

    if (input.checkValidity() && input.value.length > 5) {
        item.classList.remove('any-error')
        errMes.classList.remove('show-error')
        span.classList.remove('error')
        errorFreeShowModal = true
    } else {
        if(input.checkValidity() && input.value.length <= 0 && e.type == "submit"){
            item.classList.add('any-error')
            errMes.classList.add('show-error')
            span.classList.add('error')
            errMes.textContent = errorRequiredMessage
            errorFreeShowModal = false
            return
        }
        if(!input.checkValidity() || input.value.length < 5){
            item.classList.add('any-error')
            errMes.classList.add('show-error')
            span.classList.add('error')
            errorFreeShowModal = false
        }
        if (input.value.length < 5) {
            errMes.textContent = errorLengthMessage
            span.classList.add('error')
            errorFreeShowModal = false
        } 
        if (!input.checkValidity() && input.name == "email" && input.value.length >= 5){
            console.log('email invalid')
            errMes.textContent = errorEmailMessage
            span.classList.add('error')
            errorFreeShowModal = false
        }
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    formItems.forEach(item => {
        checkValidity(item, e)
    })
    if(errorFreeShowModal){
        modalMessage.textContent = `Message received ${modalFirstName}! 
        We'll get back to you asap.`
        modal.classList.add('display-true')
        setTimeout(() => {
            modal.classList.add('active')
        },150)
    }
})