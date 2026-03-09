console.log("JS Connected Successfully");
document.addEventListener("DOMContentLoaded", function () {

    console.log("JS Connected Successfully");

    /* ================= HERO SLIDER ================= */
const heroSlides = document.querySelectorAll(".hero-slide");

let heroCurrent = 0;

function showHeroSlide(index) {
    heroSlides.forEach(slide => slide.classList.remove("active"));
    heroSlides[index].classList.add("active");
}

// Auto Slide Only (No arrows)
setInterval(() => {
    heroCurrent = (heroCurrent + 1) % heroSlides.length;
    showHeroSlide(heroCurrent);
}, 5000);

    /* ================= LEARN MORE TOGGLE ================= */



    /* ================= Featured ================= */

document.addEventListener("DOMContentLoaded", function(){

    const buttons = document.querySelectorAll(".filter-buttons button");
    const boxes = document.querySelectorAll(".image-box");

        button.addEventListener("click", function(){

            const filter = this.getAttribute("data-filter");

            // hide all
            boxes.forEach(box => {
                box.style.display = "none";
            });

            // show selected
            boxes.forEach(box => {
                if(box.classList.contains(filter)){
                    box.style.display = "block";
                }
            });

        });

    });

});



    /* ================= SMOOTH SCROLL ================= */


    /* ================= SERVICE SLIDER ================= */

    const serviceSlides = document.querySelectorAll(".service-slide");
    const serviceNext = document.querySelector(".service-next");
    const servicePrev = document.querySelector(".service-prev");

    let serviceCurrent = 0;

    function showServiceSlide(index) {
        serviceSlides.forEach(slide => slide.classList.remove("active"));
        serviceSlides[index].classList.add("active");
    }

    if (serviceNext && servicePrev) {
        serviceNext.addEventListener("click", function () {
            serviceCurrent = (serviceCurrent + 1) % serviceSlides.length;
            showServiceSlide(serviceCurrent);
        });

        servicePrev.addEventListener("click", function () {
            serviceCurrent = (serviceCurrent - 1 + serviceSlides.length) % serviceSlides.length;
            showServiceSlide(serviceCurrent);
        });

        setInterval(function () {
            serviceCurrent = (serviceCurrent + 1) % serviceSlides.length;
            showServiceSlide(serviceCurrent);
        }, 4000);
    }


    /* ================= PAGE TOGGLE ================= */

    window.goHome = function () {
        document.getElementById("home-page").style.display = "block";
        document.getElementById("about-page").style.display = "none";
    };

    window.showAbout = function () {
        document.getElementById("home-page").style.display = "none";
        document.getElementById("about-page").style.display = "block";
    };


    /* ================= GALLERY FILTER ================= */

    const buttons = document.querySelectorAll(".filter-buttons button");
    const boxes = document.querySelectorAll(".image-box");

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filter = this.getAttribute("data-filter");

            boxes.forEach(box => {
                box.classList.remove("show");

                if (box.classList.contains(filter)) {
                    box.classList.add("show");
                }
            });
        });
    });

/* ================= Team SLIDER ================= */

const wrapper = document.querySelector(".team-wrapper");
const cards = document.querySelectorAll(".team-card");
const next = document.querySelector(".right");
const prev = document.querySelector(".left");

let index = 0;
const cardsToShow = 3;
const totalCards = cards.length;

next.addEventListener("click", () => {
    if (index < totalCards - cardsToShow) {
        index += cardsToShow;
        wrapper.style.transform = `translateX(-${index * (100 / cardsToShow)}%)`;
    }
});

prev.addEventListener("click", () => {
    if (index > 0) {
        index -= cardsToShow;
        wrapper.style.transform = `translateX(-${index * (100 / cardsToShow)}%)`;
    }
});
/* ================= read moreSession ================= */

document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".read-btn");

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {

      const content = this.nextElementSibling;

      if (content.style.display === "block") {
        content.style.display = "none";
        this.textContent = "Read More";
      } else {
        content.style.display = "block";
        this.textContent = "Read Less";
      }

    });
  });

});



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