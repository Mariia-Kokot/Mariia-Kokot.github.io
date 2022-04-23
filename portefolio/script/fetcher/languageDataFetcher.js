function fetchLanguage(lang) {
    fetch('./i18n/lang.json')
        .catch(res => {
            if (!res.ok && lang !== 'en') {
                fetchLanguage('en')
            }
        })
        .then(res => res.json())
        .then(res => {
            let language = document.querySelector('#language-skill');
            language.innerHTML = `<skill-title logo="globe">` + res.lang[lang] + `</skill-title>`
            res.value.forEach(elt => {
                language.innerHTML += `<language-skill img="` + elt.key + `" lang="` + elt.lang[lang] + `" percent="` + elt.percent + `"></language-skill>`
            })
        })
}