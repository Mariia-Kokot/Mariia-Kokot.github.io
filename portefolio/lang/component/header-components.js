class HeaderComponent extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({mode: 'open'})
        this.shadow.innerHTML = `
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
                <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <style>
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
                      <div onclick="toggleDark();
                                    this.classList.toggle('w3-text-white'); 
                                    this.classList.toggle('w3-text-black');" 
                           class="w3-display-left darker fa fa-lightbulb-o fa-fw w3-text-black"></div>
                    </div>
                    <div class="w3-display-right">
                      <a class="w3-margin-right" href="index.html"><img src="./img/flags/FR.png" alt="fr"/></a>
                      <a class="w3-margin-right" href="indexRussian.html"><img src="./img/flags/RU.png" alt="ru"/></a>
                      <a class="w3-margin-right" href="indexEnglish.html"><img src="./img/flags/GB.png" alt="en"/></a>
                    </div>
                    <p style="height: 20px"></p>
                  </div>
                </header>`
    }
}

customElements.define('header-component', HeaderComponent);