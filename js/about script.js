const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

/* Load saved theme */

let savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
    icon.textContent = "☀️";
}

/* Toggle theme */

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        icon.textContent = "☀️";
        localStorage.setItem("theme","dark");
    }
    else{
        icon.textContent = "🌙";
        localStorage.setItem("theme","light");
    }

});


let scrollBtn = document.getElementById("scrollTop");

window.onscroll = function(){

    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        scrollBtn.style.display = "block";
    }
    else{
        scrollBtn.style.display = "none";
    }

};

const swapBtn = document.getElementById("swapBtn");

/* Load saved direction */

if(localStorage.getItem("direction") === "rtl"){
    document.body.classList.add("rtl");
}

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


// scroll reveal animation
const revealElements = document.querySelectorAll(
  ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom"
);

const progressBars = document.querySelectorAll(".bar-fill");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });

  progressBars.forEach((bar) => {
    const barTop = bar.getBoundingClientRect().top;
    if (barTop < windowHeight - 100) {
      bar.classList.add("animate");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);