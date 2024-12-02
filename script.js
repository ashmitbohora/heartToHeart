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






const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");
const imageSlider = document.querySelector(".sliderContainer");
let imageIndex = 0;
const images = document.querySelectorAll(".sliderContainerImage");

function sliderUpdate(){
    const imageWidth = images[0].clientWidth;
    imageSlider.scrollTo({
        left: imageIndex * imageWidth,
        behavior: "smooth",
    });
}

leftArrow.addEventListener("click", () => {

    if (imageIndex > 0){
        imageIndex--;
    } else {
        imageIndex = images.length - 1;
    }
    sliderUpdate()
});

rightArrow.addEventListener("click", () => {

    if (imageIndex < images.length - 1) {
        imageIndex++;
    } else {
        imageIndex = 0; 
    }
    sliderUpdate();
});
