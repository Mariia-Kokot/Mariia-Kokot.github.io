class PersonalDataComponent extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({mode: 'open'})
    this.shadow.innerHTML = `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
                <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i><span id="user-job"></span></p>
                <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i><span id="user-home"></span></p>
                <p><i class="fa fa-user fa-fw w3-margin-right w3-large w3-text-teal"></i><span id="user-birth"></span></p>
                <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i><span id="user-mail"></span></p>
                <p><i class="fa fa-linkedin fa-fw w3-margin-right w3-large w3-text-teal"></i><span id="user-linkedin"></span></p>
                <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i><span id="user-tel"></span></p>`

  }

  connectedCallback() {
    const mail = this.getAttribute("mail"),
      linkedin = this.getAttribute("linkedin")
    this.shadow.querySelector("#user-job").innerHTML = this.getAttribute("job")
    this.shadow.querySelector("#user-home").innerHTML = this.getAttribute("living-place")
    this.shadow.querySelector("#user-birth").innerHTML = this.getAttribute("birth")
    this.shadow.querySelector("#user-mail").innerHTML = `<a href="mailto:` + mail + `" target="_blank">` + mail + `</a>`
    this.shadow.querySelector("#user-tel").innerHTML = this.getAttribute("tel")
    this.shadow.querySelector("#user-linkedin").innerHTML = `<a href="https://www.linkedin.com/in/` + linkedin + `/" target="_blank">` + linkedin + `</a>`
  }
}

class PersonalPictureComponent extends HTMLElement {
  connectedCallback() {
    const src = this.getAttribute("src"),
      name = this.getAttribute("name")
    this.innerHTML = `<style>
          #user-picture {
            transition: 0.5s;
            filter: blur(5px);
          }
          #user-picture:hover {
            filter: blur(0);
          }
          .darker {
            transition: 0.5s;
            border-radius: 5000px;
            font-size: 35px;
            padding: 10px;
            margin: 5px;
            cursor: pointer;
            width: 55px;
            height: 55px;
          }
          .darker:hover {
            background-color: white;
          }
        </style>
        <div class="w3-display-container">
          <img class="w3-padding" id="user-picture" src="` + src + `" style="width:100%;opacity: 0.7;" alt="Avatar">
          <div onclick="toggleDark()" class="w3-display-topleft w3-container darker fa fa-sun-o fa-fw w3-margin-right w3-text-black">
          </div>
          <div class="w3-display-bottomright w3-container w3-text-black">
            <h2 style="font-weight:bold; font-size:35px">` + name + `</h2>
          </div>
        </div>`
  }
}

customElements.define('personal-data', PersonalDataComponent);
customElements.define('personal-picture', PersonalPictureComponent);