class HeaderComponent extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({mode: 'open'})
        this.shadow.innerHTML = `
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
                <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <style>
                  #background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: url("resources/wallpaper.png");
                    background-size: cover;
                    filter: blur(5px);
                    height: 130px;
                    opacity: 0.85;
                  }
                </style>
                <header class="header w3-container w3-black w3-center w3-margin-bottom">
                  <div id="background"></div>
                  <div id="parent-div" class="w3-display-container">
                    <div class="w3-display-topleft" style="font-size:30px; font-weight:bold">
                      <img src="resources/Mariia_Logo.png" height="50" alt="logo" style="filter: brightness(90%);"/>
                    </div>
                    <div class="w3-display-middle">
                      <img src="resources/profile.png" height="100" alt="logo" style="border-radius: 200%"/>
                      <div>Mariia KOKOT</div>
                    </div>
                    <a class="w3-display-topright w3-btn w3-teal" style="filter: brightness(90%);" href="portfolio">Portfolio</a>
                    <p style="height:100px"></p>
                  </div>
                </header>`
    }
}

customElements.define('header-component', HeaderComponent);