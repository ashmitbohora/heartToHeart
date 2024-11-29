const handClicker = document.querySelector(".fa-hand-pointer");
const envelopeCard = document.querySelector(".envelopeCard");

if (handClicker && envelopeCard) {
    handClicker.addEventListener("click", () => {
        envelopeCard.classList.toggle("active");
    });
}


const menu = document.querySelector(".fa-bars");
const xMark = document.querySelector(".fa-xmark");
const navMobile = document.querySelector(".navMobile");
const links = document.querySelectorAll(".navMobile .more a");

if (menu && xMark && navMobile) {
    menu.addEventListener("click", () => {
        navMobile.classList.toggle("hidden");
    });

    xMark.addEventListener("click", () => {
        navMobile.classList.add("hidden");
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            navMobile.classList.add("hidden");
        });
    });
}