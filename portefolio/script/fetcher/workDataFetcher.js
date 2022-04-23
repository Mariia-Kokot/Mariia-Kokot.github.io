function fetchWork(lang) {
    fetch('./i18n/work/' + lang + '.json')
        .catch(res => {
            if (!res.ok && lang !== 'en') {
                fetchWork('en')
            }
        })
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
                let content = function workContent(activities) {
                    if (activities.length === 1) {
                        return activities[0]
                    }
                    let content = "<ul>"
                    activities.forEach(activity => content += `<li>` + activity + `</li>`)
                    content += "</ul>"
                    return content
                }(elt.activity)
                history.innerHTML += `<work-item job="` + elt.name + `" company="` + elt.work + `" begin="` + elt.begin + `" ` + end + `>` + content + `</work-item>`
            })
        })
}