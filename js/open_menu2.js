const hamburger = document.getElementsByClassName("hamburger")[0];
let aboveMenuElement = document.getElementById("above-menu");
// aboveMenuElement.style.displayを変数にすると、途端機能しない
// let menuStyle = aboveMenuElement.style.display;
// menuStyle = "block";

const toggleMenu = () => {
    if (aboveMenuElement.style.display == "none") {
        aboveMenuElement.style.display = "block";
        hamburger.classList.add('active');
    } else if (aboveMenuElement.style.display == "block") {
        aboveMenuElement.style.display = "none";
        hamburger.classList.remove('active');
    } else {
        aboveMenuElement.style.display = "none";
    }
}

// const switchBurgerChild = (state) => {
//     const burgerChild = hamburger.children;
//     for (let i = 0; i < burgerChild.length; i++) {
//         burgerChild[i].style.display = state;
//     }
// }

const deviceSize = 750;
const switchByWidth = (windowWidth) => {
    if (windowWidth <= deviceSize) {
        aboveMenuElement.style.display = "none";
        hamburger.style.display = "block";
    } else {
        aboveMenuElement.style.display = "block";
        hamburger.style.display = "none";
    }
}

// 下記 https://into-the-program.com/javascript-run-after-resize/ から引用
const resize = () => {
 
    let timeoutID = 0;
    let delay = 500;
    // let vw = window.innerWidth;
 
    window.addEventListener("resize", ()=>{
        clearTimeout(timeoutID);
        timeoutID = setTimeout(()=>{
 
            //ここにリサイズした後に実行したい処理を記述
            let vw = window.innerWidth;
            // vw setTimeout内が正しいようだ
            console.log(`resize -> ${vw}`);
            switchByWidth(vw);
 
        }, delay);
    }, false);
};
 
window.addEventListener('load', resize);
hamburger.addEventListener('click', toggleMenu, false);
