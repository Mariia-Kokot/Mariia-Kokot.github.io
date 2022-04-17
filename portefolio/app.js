function toggleDark() {
    document.querySelectorAll(".w3-white").forEach((element) => {
        element.classList.toggle("w3-black")
    })
    document.querySelectorAll(".w3-light-grey").forEach((element) => {
        element.classList.toggle("w3-dark-grey")
    })
}

function loadLang(lang) {
    fetch("./lang/"+lang+".html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#main").innerHTML = data;
        });
}
