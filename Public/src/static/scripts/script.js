const navLinks = document.querySelector(".nav-links");



/******* About-Me section *******/
const about_hamBTN = document.querySelector(".ham-menu");


about_hamBTN.addEventListener('click', () => {
    navLinks.classList.toggle("open");
})