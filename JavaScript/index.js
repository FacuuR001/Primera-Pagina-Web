const botonLike = document.getElementById('increment');
const contadorLike = document.getElementById('contador');

const mostrarMenu = document.getElementById('mostrar-menu');
const EsconderMenu = document.getElementById('esconder-menu');
const menu = document.querySelector('.menu-principal');

let clicked = false;

botonLike.addEventListener("click", () => {
    if (!clicked) {
        clicked = true;
        contadorLike.textContent++;
    } else {
        clicked = false;
        contadorLike.textContent--;
    }
});

let clickMenu = true;

mostrarMenu.addEventListener("click", () => {
        if (clickMenu == true) {
            menu.style.display = "block";
            menu.style.right = "0"
            menu.style.animation = "mostrar .8s";
            clickMenu = false
        }
});

EsconderMenu.addEventListener("click", () => {
    if (clickMenu == false) {
        menu.style.display = "none"
        clickMenu = true;
    }
});