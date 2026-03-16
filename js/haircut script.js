const cards = document.querySelectorAll(".haircut-card");

cards.forEach((card,i)=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";

setTimeout(()=>{
card.style.transition="0.6s";
card.style.opacity="1";
card.style.transform="translateY(0)";
}, i*200);

});

const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

/* Load saved theme */
let savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
    if(icon) icon.textContent = "☀️";
}

/* Toggle theme only if button exists */
if(toggleBtn){

    toggleBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("theme","dark");
            if(icon) icon.textContent = "☀️";
        }else{
            localStorage.setItem("theme","light");
            if(icon) icon.textContent = "🌙";
        }

    });

}



let scrollBtn = document.getElementById("scrollTop");

window.onscroll = function(){

    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        scrollBtn.style.display = "block";
    }
    else{
        scrollBtn.style.display = "none";
    }

};

scrollBtn.onclick = function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

/* Swap page direction */

if(swapBtn){
    swapBtn.addEventListener("click", function(){

        document.body.classList.toggle("rtl");

        if(document.body.classList.contains("rtl")){
            localStorage.setItem("direction","rtl");
        }else{
            localStorage.setItem("direction","ltr");
        }

    });
}

const revealElements = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(
        ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom"
    );

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        reveals.forEach(function (element) {
            const revealTop = element.getBoundingClientRect().top;

            if (revealTop < windowHeight - revealPoint) {
                element.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});