function toggleDark() {
    document.querySelectorAll(".w3-white").forEach((element) => {
        element.classList.toggle("w3-black")
    })
    document.querySelectorAll(".w3-light-grey").forEach((element) => {
        element.classList.toggle("w3-dark-grey")
    })
    document.querySelectorAll(".fa-sun-o").forEach((element) => {
        element.classList.toggle("fa-moon-o")
    })
}
