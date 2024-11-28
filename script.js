

const handClicker = document.querySelector(".fa-hand-pointer");
const envelopeCard = document.querySelector(".envelopeCard");


handClicker.addEventListener("click", () => {


    envelopeCard.classList.toggle("active");




});


const menu = document.querySelector(".fa-bars");
const xMark = document.querySelector(".fa-xmark");
const navMobile = document.querySelector(".navMobile");



menu.addEventListener("click", () => {
    navMobile.classList.toggle("hidden");
});

xMark.addEventListener("click", () => {
    navMobile.classList.toggle("hidden");
});