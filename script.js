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









// Number Counting Animation

let valueDisplays = document.querySelectorAll(".numIncreasing");
let interval = 1000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));

    let duration = Math.floor(interval / endValue);
    let counter;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counter = setInterval(function () {
                    startValue += 1;
                    valueDisplay.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                }, duration);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(valueDisplay);
});

























const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");
const imageSlider = document.querySelector(".sliderContainer");
const images = document.querySelectorAll(".sliderContainerImage");
let imageIndex = 0;

function sliderUpdate() {
    if (images.length > 0 && imageSlider) {
        const imageWidth = images[0].clientWidth;
        imageSlider.scrollTo({
            left: imageIndex * imageWidth,
            behavior: "smooth",
        });
    }
}

if (leftArrow) {
    leftArrow.addEventListener("click", () => {
        if (images.length > 0) {
            if (imageIndex > 0) {
                imageIndex--;
            } else {
                imageIndex = images.length - 1;
            }
            sliderUpdate();
        }
    });
}

if (rightArrow) {
    rightArrow.addEventListener("click", () => {
        if (images.length > 0) {
            if (imageIndex < images.length - 1) {
                imageIndex++;
            } else {
                imageIndex = 0;
            }
            sliderUpdate();
        }
    });
}












