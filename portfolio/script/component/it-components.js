class ITSkillComponent extends HTMLElement {
    connectedCallback() {
        const tech = this.getAttribute("tech"),
            percent = this.getAttribute('percent')
        this.innerHTML = `<p>` + tech + `</p>
                    <div class="w3-light-grey w3-round-xlarge w3-small" style="background-color: rgba(0,150,136,0.15)!important;">
                      <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:` + percent + `%">` + percent + `%</div>
                    </div>`
    }
}

class ITsSkills extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode: 'open'})
        this.shadow.innerHTML = `
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <script src="/portfolio/script/component/components.js"></script>
      <script src="/portfolio/script/component/it-components.js"></script>
      <skill-title logo="desktop"><slot></slot></skill-title>
      <it-skill tech="Office 365" percent="80"></it-skill>
      <it-skill tech="Trello" percent="60"></it-skill>
      <it-skill tech="SDL Trados" percent="60"></it-skill>
      <it-skill tech="Subtitle Edit" percent="80"></it-skill>
      <it-skill tech="Ooona Tools" percent="70"></it-skill>`
    }
}

customElements.define('it-skill', ITSkillComponent);
customElements.define('all-it-skill', ITsSkills);