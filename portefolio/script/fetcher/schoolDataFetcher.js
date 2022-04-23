function fetchSchool(lang) {
    fetch('./i18n/school/' + lang + '.json')
        .catch(res => {
            if (!res.ok && lang !== 'en') {
                fetchSchool('en')
            }
        })
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