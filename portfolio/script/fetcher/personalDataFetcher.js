function fetchPersonalData(lang) {
    fetch('./i18n/global/' + lang + '.json')
        .catch(res => {
            if (!res.ok && lang !== 'en') {
                fetchPersonalData('en')
            }
        })
        .then(res => res.json())
        .then(res => {
            let picture = document.querySelector('#personal-picture');
            picture.innerHTML = `<personal-picture src="../resources/profile.png" name="` + res.name + `"></personal-picture>`

            let data = document.querySelector('#personal-data');
            data.innerHTML = `<personal-data job="` + res.job + `"
                                           living-place="Metz, FR"
                                           birth="` + res.birth + `"
                                           mail="mariia.kokot.pro@gmail.com"
                                           tel="+33 6.22.11.31.75"
                                           linkedin="mariia-kokot-951361189"></personal-data>`
            toggleDarkForShadow(data)
        })
}