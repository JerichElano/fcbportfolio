let menu = document.querySelector('#menuIcon');
let navLinks = document.querySelector('.navLinks');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navLinks.classList.toggle('open');
}