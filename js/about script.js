const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

/* Load saved theme */

let savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
    icon.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

/* Toggle theme */

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        icon.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme","dark");
    }
    else{
        icon.innerHTML = '<i class="fa-solid fa-moon"></i>';
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




