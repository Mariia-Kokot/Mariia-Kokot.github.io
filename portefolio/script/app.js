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
    fetch("./i18n/template.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#main").innerHTML = data;
            fetchPersonalData(lang)
            fetchLanguage(lang)
            fetchSoftSkills(lang)
            fetchITSkills(lang)
            fetchWork(lang)
            fetchSchool(lang)
        });
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