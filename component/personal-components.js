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
    this.innerHTML = `
          <img id="user-picture" src="` + src + `" style="width:100%;opacity:0.7;padding:7px;background-color:rgba(0,150,136,0.15)" alt="Avatar">
          <div class="w3-right w3-text-teal">
            <h2 style="font-weight:bold; font-size:35px; padding-right: 10px">` + name + `</h2>
          </div>
        </div>`
  }
}

customElements.define('personal-data', PersonalDataComponent);
customElements.define('personal-picture', PersonalPictureComponent);