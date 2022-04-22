class ProjectItemComponent extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({mode: 'open'})
    this.shadow.innerHTML = `
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
                <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <style>
                  img {
                    max-height: 20px;
                  }
                  .button {
                    transition: 0.5s;
                    border-radius: 5000px;
                    font-size: 35px;
                    padding: 10px;
                    margin: 5px;
                    cursor: pointer;
                    width: 55px;
                    height: 55px;
                  }
                  .button:hover {
                    background-color: #f1f1f1;
                  }
                  .button:active {
                    transition: 0.5ms ease-in;
                    background-color: #e1e1e1;
                  }
                  .invisible {
                    display: none;
                  }
                  .visible {
                    display: block;
                  }
                  #title-container {
                    display: flex;
                    justify-content: space-between;
                  }
                  #project-main {
                    display: flex;
                    align-items: center;
                  }
                </style>
                <div class="w3-container">
                  <div id="title-container">
                    <div id="project-main">
                      <h5 class="w3-opacity w3-margin-right"><b id="project-title"></b></h5>&nbsp;
                      <span id="language-from-to"></span>
                    </div>
                    <i class="fa fa-chevron-up fa-fw w3-margin-right w3-xxlarge w3-text-teal button"></i>
                  </div>
                  <p class="invisible" id="project-text">
                    <slot></slot>
                    <p class="invisible" id="resource"></p>
                  </p>
                  <hr>
                </div>`
  }

  connectedCallback() {
    this.addEvent()
    const from = this.getAttribute("from"), to = this.getAttribute("to")
    this.shadow.querySelector("#project-title").innerHTML = this.getAttribute("project-title")
    if (from != null && to != null) {
      this.shadow.querySelector("#language-from-to").innerHTML = `
           <img src="./lang/img/flags/` + from + `.png" alt="lang-from"/>
           <i class="fa fa-arrow-right fa-fw w3-large w3-text-teal"></i>
           <img src="./lang/img/flags/` + to + `.png" alt="lang-to"/>`
    }

    this.shadow.querySelector("#resource").innerHTML = `<a href="`+this.getAttribute("original")+`" target="_blank">`+ this.seeOriginal() +`</a>`
  }

  seeOriginal() {
    if (document.documentElement.lang === "fr") {
      return "Voir l'article' original"
    } else if (document.documentElement.lang === "ru") {
      return "Посмотреть исходную статью"
    }
    return "See the original article"
  }

  addEvent() {
    this.shadow.querySelector("#title-container").addEventListener('click', () => {
      this.shadow.querySelector("#project-text").classList.toggle("visible")
      this.shadow.querySelector("#resource").classList.toggle("visible")
      this.shadow.querySelector(".fa-chevron-up").classList.toggle("fa-chevron-down")
    })
  }
}

customElements.define('project-item', ProjectItemComponent);