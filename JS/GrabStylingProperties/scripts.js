const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor);

const getBGcolor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

/* var color = getBGcolor(red);

red.addEventListener("mouseenter",() => {
    center.style.background = color;
}); */

const setBGcolor = (colorElement, color) => {
    return colorElement.addEventListener("mouseenter",() => {
        center.style.background = color;
    })
};

setBGcolor(pink, getBGcolor(pink));
setBGcolor(red, getBGcolor(red));
setBGcolor(cyan, getBGcolor(cyan));
setBGcolor(violet, getBGcolor(violet));
setBGcolor(orange, getBGcolor(orange));