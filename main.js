const sliderItems = document.querySelectorAll(".slider-item");
const sliderButtons = document.querySelectorAll(".slider-button");
const smallSliderButtons = document.querySelectorAll(".slide-button-small")
let activeButtonIndex = 0;

const setUI = (newActiveButtonIndex) => {
    setButtonBorder("black");
    setSmallButtonColor("#f6e6d9")
    activeButtonIndex = newActiveButtonIndex;
    setSmallButtonColor("#9eef80")
    setButtonBorder("white");
}

const setSmallButtonColor = (color) => {
    smallSliderButtons[activeButtonIndex].style.backgroundColor = color;
}

const setButtonBorder = (color) => {
    sliderButtons[activeButtonIndex].style.borderColor = color;
}

setButtonBorder("white");
setSmallButtonColor("#9eef80")

window.addEventListener("resize", (e) => {
    console.log("Hi")
    sliderItems[activeButtonIndex].scrollIntoView();
})

for (let i = 0; i < smallSliderButtons.length; i++) {
    smallSliderButtons[i].addEventListener("click", (e) => {
        for (let j = 0; j < sliderItems.length; j++) {
            sliderItems[j].style.transform = `translateX(-${100 * i}%)`
        }
        setUI(i);
    })
}

for (let i = 0; i < sliderButtons.length; i++) {
    sliderButtons[i].addEventListener("click", (e) => {
        for (let j = 0; j < sliderItems.length; j++) {
            sliderItems[j].style.transform = `translateX(-${100 * i}%)`
        }
        setUI(i);
    })
}