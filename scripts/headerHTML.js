import pageInfo from './pageInfo.js'


let headerBlock = `
    <div class="header-inner-width-container ${pageInfo.title}">
      <div class="logo-container">
        <img src="${pageInfo.logo}" alt="my team logo">
      </div>
      <div class="nav-burger-button" data-clicked="false">
        <div class="nav-button-line"></div>
        <div class="nav-button-line"></div>
        <div class="nav-button-line"></div>
      </div>
      <nav class="header-nav">
        <div class="link-container">
          <a href="${pageInfo.home}">home</a>
          <a href="${pageInfo.about}">about</a>
        </div>
        <a href="${pageInfo.contact}" class="button primary light">
          contact us
        </a>
        <div class="img-container">
          <img src="${pageInfo.navImg}" alt="abstract
          navbar decoration image, circle with lines going through it on top-left">
        </div>
      </nav>
      <div class="backdrop"></div>
    </div>
`

export default headerBlock








