let pageTitle = document.title.toLowerCase().split(" ")

let title, home, about, contact, logo, navImg, ctaImg;

title = pageTitle[pageTitle.length - 1]

let directory = title == 'homepage' ? './' : '../'







if(title.includes('homepage')){
    home = `${directory}index.html`
    about = `${directory}pages/about.html`
    contact = `${directory}pages/contact.html`
    logo = `${directory}assets/logo.svg`
    navImg = `${directory}assets/bg-pattern-about-1-mobile-nav-1.svg`
    ctaImg = `${directory}assets/bg-pattern-home-6-about-5.svg`
} 
if(title.includes(`about`) || title.includes(`contact`)) {
    home = `${directory}index.html`
    about = `./about.html`
    contact = `./contact.html`
    logo = `${directory}assets/logo.svg`
    navImg = `${directory}assets/bg-pattern-about-1-mobile-nav-1.svg`
    ctaImg = `${directory}assets/bg-pattern-home-6-about-5.svg`
}

const pageInfo = {
    home,
    about,
    contact,
    logo,
    navImg,
    ctaImg,
    title
}

console.log(`
    Project structure:
    index.html
    -pages
    --about.html
    --contact.html

    Therefore:
    Whilst on homepage, targetting about:
    ./pages/about.html

    Otherwise:
    if we are in:
    -pages
    --about.html
    
    Whilst on about, targetting index:
    ../index.html

    main focus is on ./ and ../
`)

console.log(`
    Page title: ${title}
    Page dir: ${directory}
    pageInfoObject below:
`)
console.log(pageInfo)

export default pageInfo

