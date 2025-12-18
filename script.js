const Opennavbar = document.querySelector(".logo")
const Fermenavbar = document.querySelector(".fermer")
const Menu = document.querySelector(".menu")

const PositionMenu = Menu.getBoundingClientRect().left


Opennavbar.addEventListener("click", () =>{
    if(PositionMenu <0){
        Menu.classList.add("monter")
    }
})