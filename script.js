const btn = document.querySelector(".button-share")
const btnView = document.querySelector(".rede-social")

btn.addEventListener("click", function() {
    btnView.classList.toggle("none")
})