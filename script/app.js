const TOGGLER = document.querySelector(".toggler");
const NAV_LINKS = document.querySelector(".nav-links");

TOGGLER.addEventListener("click", () => {
    NAV_LINKS.classList.toggle("show-nav");
})
