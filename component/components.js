class LanguageComponent extends HTMLElement {
  connectedCallback() {
    const img = this.getAttribute("img"),
      lang = this.getAttribute("lang"),
      percent = this.getAttribute('percent')
    this.innerHTML = `<p><img src="../img/flags/` + img + `.png" style="width:30px" alt="Avatar"> ` + lang + `</p>
                    <div class="w3-light-grey w3-round-xlarge">
                      <div class="w3-round-xlarge w3-teal" style="height:24px;width:` + percent + `%">
                        <div class="w3-center w3-text-white">` + percent + `%</div>
                      </div>
                    </div>`
  }
}

class ITSkillComponent extends HTMLElement {
  connectedCallback() {
    const tech = this.getAttribute("tech"),
      percent = this.getAttribute('percent')
    this.innerHTML = `<p>` + tech + `</p>
                    <div class="w3-light-grey w3-round-xlarge w3-small">
                      <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:` + percent + `%">` + percent + `%</div>
                    </div>`
  }
}

class SocialSkillComponent extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name")
    this.innerHTML = `<p>` + name + `</p>`
  }
}

class TitleSkillComponent extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({mode: 'open'})
    this.shadow.innerHTML = `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
                <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <p class="w3-large w3-text-theme">
                  <b>
                    <i id="section-logo" class="fa fa-fw w3-margin-right w3-text-teal"></i>
                    <slot></slot>
                  </b>
                </p>`
  }

  connectedCallback() {
    const logo = this.getAttribute("logo")
    if (logo != null) {
      this.shadow.querySelector("#section-logo").classList.add("fa-" + logo)
    }
  }
}

class WorkComponent extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({mode: 'open'})
    this.shadow.innerHTML = `
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
                <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <div class="w3-container">
                  <h5 class="w3-opacity"><b id="work-job"></b></h5>
                  <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i><span id="job-date"></span><h6>
                  <slot></slot>
                  <hr>
                </div>`
  }

  connectedCallback() {
    const job = this.getAttribute("job"),
      company = this.getAttribute("company"),
      begin = this.getAttribute("begin")
    let end = this.getAttribute("end")
    end = (end == null) ? `<span class="w3-tag w3-teal w3-round">` + this.today() + `</span>` : end
    this.shadow.querySelector("#work-job").innerHTML = job + " / " + company
    this.shadow.querySelector("#job-date").innerHTML = begin + " / " + end
  }

  today() {
    if (document.documentElement.lang === "fr") {
      return "Aujourd'hui"
    } else if (document.documentElement.lang === "ru") {
      return "Сегодня"
    }
    return "Today"
  }
}

customElements.define('language-skill', LanguageComponent);
customElements.define('it-skill', ITSkillComponent);
customElements.define('social-skill', SocialSkillComponent);
customElements.define('work-item', WorkComponent);
customElements.define('skill-title', TitleSkillComponent);