function fetchITSkills(lang) {
    fetch('./i18n/global/' + lang + '.json')
        .catch(res => {
            if (!res.ok && lang !== 'en') {
                fetchInfo('en')
            }
        })
        .then(res => res.json())
        .then(res => {
            let it = document.querySelector('#it-skills');
            it.innerHTML = `<all-it-skill>` + res.info + `</all-it-skill>`
            toggleDarkForShadow(it)
        })
}