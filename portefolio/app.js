function toggleDark() {
    document.querySelectorAll(".w3-white").forEach((element) => {
        element.classList.toggle("w3-black")
    })
    document.querySelectorAll(".w3-light-grey").forEach((element) => {
        element.classList.toggle("w3-dark-grey")
    })
}

function loadLang(lang) {
    addCookie("lang", lang)
    fetch("./lang/template.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#main").innerHTML = data;
            fetchLang(lang)
            fetchSchool(lang)
            fetchWork(lang)
            fetchSkills(lang)
            fetchInfo(lang)
            fetchPersonalPicture(lang)
            fetchPersonalData(lang)
        });
}

function fetchSkills(lang) {
    fetch('./lang/soft-skills/' + lang + '.json')
        .then(res => res.json())
        .then(res => {
            let skills = document.querySelector('#soft-skills');
            skills.innerHTML = `<skill-title logo="asterisk">` + res.name + `</skill-title>`
            res.values.forEach(elt => {
                skills.innerHTML += `<social-skill name="` + elt + `"></social-skill>`
            })
        })
}

function fetchSchool(lang) {
    fetch('./lang/school/' + lang + '.json')
        .then(res => res.json())
        .then(res => {
            let school = document.querySelector('#school-history');
            school.innerHTML = `<div class="w3-container w3-card w3-white" style="transition: 0.2s">
                                 <h2 class="w3-text-grey w3-padding-16">
                                   <i class="fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>` + res.name + `
                                 </h2>
                                 <div id="school-cursus"></div>
                               </div>`
            let history = document.querySelector('#school-cursus');
            res.values.forEach(elt => {
                let end = elt.end == null ? '' : 'end="' + elt.end + '"'
                history.innerHTML += `<work-item job="` + elt.name + `" company="` + elt.school + `" begin="` + elt.begin + `" ` + end + `></work-item>`
            })
        })
}

function fetchWork(lang) {
    fetch('./lang/work/' + lang + '.json')
        .then(res => res.json())
        .then(res => {
            let work = document.querySelector('#work-history');
            work.innerHTML = `<div class="w3-container w3-card w3-white w3-margin-bottom" style="transition: 0.2s">
                                <h2 class="w3-text-grey w3-padding-16">
                                  <i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>` + res.name + `
                                </h2>
                                <div id="work-cursus"></div>
                              </div>`
            let history = document.querySelector('#work-cursus');
            res.values.forEach(elt => {
                let end = elt.end == null ? '' : 'end="' + elt.end + '"'
                let content = workContent(elt.activity)
                history.innerHTML += `<work-item job="` + elt.name + `" company="` + elt.work + `" begin="` + elt.begin + `" ` + end + `>` + content + `</work-item>`
            })
        })
}

function workContent(activities) {
    if (activities.length === 1) {
        return activities[0]
    }
    let content = "<ul>"
    activities.forEach(activity => content += `<li>` + activity + `</li>`)
    content += "</ul>"
    return content
}

function fetchLang(lang) {
    fetch('./lang/lang.json')
        .then(res => res.json())
        .then(res => {
            let language = document.querySelector('#language-skill');
            language.innerHTML = `<skill-title logo="globe">` + res.lang[lang] + `</skill-title>`
            res.value.forEach(elt => {
                language.innerHTML += `<language-skill img="` + elt.key + `" lang="` + elt.lang[lang] + `" percent="` + elt.percent + `"></language-skill>`
            })
        })
}

function fetchInfo(lang) {
    fetch('./lang/global/' + lang + '.json')
        .then(res => res.json())
        .then(res => {
            let it = document.querySelector('#it-skills');
            it.innerHTML = `<all-it-skill>` + res.info + `</all-it-skill>`
        })
}

function fetchPersonalPicture(lang) {
    fetch('./lang/global/' + lang + '.json')
        .then(res => res.json())
        .then(res => {
            let it = document.querySelector('#personal-picture');
            it.innerHTML = `<personal-picture src="./img/profile.png" name="` + res.name + `"></personal-picture>`
        })
}

function fetchPersonalData(lang) {
    fetch('./lang/global/' + lang + '.json')
        .then(res => res.json())
        .then(res => {
            let it = document.querySelector('#personal-data');
            it.innerHTML = `<personal-data job="` + res.job + `"
                                           living-place="Metz, FR"
                                           birth="` + res.birth + `"
                                           mail="mariia.kokot.pro@gmail.com"
                                           tel="+33 6.22.11.31.75"
                                           linkedin="mariia-kokot-951361189"></personal-data>`
        })
}


/**
 * Get the value of a cookie
 * Source: https://gist.github.com/wpsmith/6cf23551dd140fb72ae7
 * @param  {String} name  The name of the cookie
 * @return {String}       The cookie value
 */
function addCookie(name, value) {
    document.cookie = `${name}=${value};`;
}

/**
 * Get the value of a cookie
 * Source: https://gist.github.com/wpsmith/6cf23551dd140fb72ae7
 * @param  {String} name  The name of the cookie
 * @return {String}       The cookie value
 */
function getCookie(name) {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}