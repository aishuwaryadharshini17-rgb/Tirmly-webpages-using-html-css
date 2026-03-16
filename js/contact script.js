const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

/* Load saved theme */
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (icon) {
        icon.textContent = "☀️";
    }
}

/* Toggle theme */
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            if (icon) icon.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            if (icon) icon.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });
}

/* Scroll to top button */
let scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {
    if (scrollBtn) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    }

    revealOnScroll();
});

if (scrollBtn) {
    scrollBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}

/* RTL toggle */
const swapBtn = document.getElementById("swapBtn");

/* Load saved direction */
if (localStorage.getItem("direction") === "rtl") {
    document.body.classList.add("rtl");
}

/* Swap page direction */
if (swapBtn) {
    swapBtn.addEventListener("click", function () {
        document.body.classList.toggle("rtl");

        if (document.body.classList.contains("rtl")) {
            localStorage.setItem("direction", "rtl");
        } else {
            localStorage.setItem("direction", "ltr");
        }
    });
}

/* Reveal animation */
function revealOnScroll() {
    const revealItems = document.querySelectorAll(".reveal, .reveal-up, .reveal-left, .reveal-right");
    const windowHeight = window.innerHeight;

    revealItems.forEach(function (element) {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("load", revealOnScroll);