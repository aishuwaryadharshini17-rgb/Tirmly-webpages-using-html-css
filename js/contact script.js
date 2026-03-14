


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

scrollBtn.onclick = function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

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

const revealElements = document.querySelectorAll(
  ".reveal, .reveal-up, .reveal-left, .reveal-right"
);

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



const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});