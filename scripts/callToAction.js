import pageInfo from './pageInfo.js'

const callToAction = document.createElement('section')
callToAction.classList.add('call-to-action__pre-footer')
document.body.append(callToAction)
callToAction.innerHTML = `
    <h1 class="section-heading">Contact call to action</h1>
    <div class="text-container">
        <h2>Ready to get started?</h2>
        <a href="${pageInfo.contact}" class="button primary dark">
            contact us
        </a>
    </div>
    <div class="bg-img-container">
        <img src="${pageInfo.ctaImg}" alt="abstract background illustration">
    </div>
`