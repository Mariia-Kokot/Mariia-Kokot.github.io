class HeaderComponent extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({mode: 'open'})
        this.shadow.innerHTML = `
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
                <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <style>
                  .logo {
                    filter: brightness(90%);
                    opacity: 1;
                  }
                  .flag {
                    display: list-item;
                    list-style: none;
                    transition: 0.5s;
                  }
                  .flag:hover {
                    opacity: 0.75;
                    cursor: pointer;
                  }
                  .darker {
                    border-radius: 5px;
                    padding: 5px;
                    transition: 0.5s;
                    font-size: 35px;
                    cursor: pointer;
                    width: 45px;
                    height: 45px;
                  }
                  .darker:hover {
                    background-color: #00665d;
                  }
                </style>
                <header class="w3-container w3-teal w3-center w3-margin-bottom">
                  <div class="w3-display-container">
                    <div class="w3-display-left">
                      <img src="img/Mariia_Logo.png" height="50" class="logo w3-display-left"/>
                    </div>
                    <div class="w3-display-right">
                      <div class="w3-dropdown-hover">
                        <button class="w3-btn w3-teal"><img src="img/translate.png" height="30"></button>
                        <div class="w3-dropdown-content w3-border w3-bar-block" style="right: 0">
                          <a class="flag" onclick="loadLang('en')"><img src="img/flags/GB.png" alt="fr"/>English</a>
                          <a class="flag" onclick="loadLang('ru')"><img src="img/flags/RU.png" alt="fr"/>Russian</a>
                          <a class="flag" onclick="loadLang('fr')"><img src="img/flags/FR.png" alt="fr" />French</a>
                        </div>
                      </div>
                      
                    </div>
                    <p style="height: 20px"></p>
                  </div>
                </header>`
    }
}

customElements.define('header-component', HeaderComponent);