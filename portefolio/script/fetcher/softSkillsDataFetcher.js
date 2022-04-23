function fetchSoftSkills(lang) {
    fetch('./i18n/soft-skills/' + lang + '.json')
        .catch(res => {
            if (!res.ok && lang !== 'en') {
                fetchSoftSkills('en')
            }
        })
        .then(res => res.json())
        .then(res => {
            let skills = document.querySelector('#soft-skills');
            skills.innerHTML = `<skill-title logo="asterisk">` + res.name + `</skill-title>`
            res.values.forEach(elt => {
                skills.innerHTML += `<social-skill name="` + elt + `"></social-skill>`
            })
        })
}