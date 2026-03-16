document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       FILTER BUTTONS
    ========================== */
    const buttons = document.querySelectorAll(".filter-btn");
    const images = document.querySelectorAll(".style-item");

    function showImages(category) {
        let count = 0;

        images.forEach(img => {
            if (category === "all") {
                if (img.classList.contains("all") && count < 4) {
                    img.style.display = "block";
                    count++;
                } else {
                    img.style.display = "none";
                }
            } else {
                if (img.classList.contains(category) && count < 4) {
                    img.style.display = "block";
                    count++;
                } else {
                    img.style.display = "none";
                }
            }
        });
    }

    if (buttons.length > 0 && images.length > 0) {
        buttons.forEach(button => {
            button.addEventListener("click", function () {
                buttons.forEach(btn => btn.classList.remove("active"));
                this.classList.add("active");

                if (this.classList.contains("all-btn")) showImages("all");
                if (this.classList.contains("haircut-btn")) showImages("haircuts");
                if (this.classList.contains("beard-btn")) showImages("beards");
                if (this.classList.contains("styling-btn")) showImages("styling");
                if (this.classList.contains("haircolor-btn")) showImages("haircolor");
                if (this.classList.contains("beforeafter-btn")) showImages("beforeafter");
            });
        });

        showImages("all");
    }


    /* =========================
       TESTIMONIALS
    ========================== */
    const testimonials = [
        {
            name: "Fergus",
            text: "Best haircut I’ve had in years. The barber took time to understand what I wanted and delivered perfectly.",
            img: "images/client1.jpg"
        },
        {
            name: "Olivia Martin",
            text: "Amazing service and friendly staff. I always leave looking sharp.",
            img: "images/client2.jpg"
        },
        {
            name: "Daniel Cooper",
            text: "Professional barbers and great atmosphere. Highly recommend!",
            img: "images/client3.jpg"
        },
        {
            name: "Sophia Carter",
            text: "Loved the experience. Booking was easy and the stylist was fantastic.",
            img: "images/client4.jpg"
        }
    ];

    let testimonialIndex = 0;

    const text = document.querySelector(".testimonial-text");
    const name = document.querySelector(".client-name");
    const image = document.querySelector(".client-img");
    const testimonialNext = document.querySelector(".next");
    const testimonialPrev = document.querySelector(".prev");

    function showTestimonial(i) {
        if (text) text.textContent = testimonials[i].text;
        if (name) name.textContent = testimonials[i].name;
        if (image) image.src = testimonials[i].img;
    }

    if (text && name && image) {
        showTestimonial(testimonialIndex);

        if (testimonialNext) {
            testimonialNext.addEventListener("click", function () {
                testimonialIndex++;
                if (testimonialIndex >= testimonials.length) {
                    testimonialIndex = 0;
                }
                showTestimonial(testimonialIndex);
            });
        }

        if (testimonialPrev) {
            testimonialPrev.addEventListener("click", function () {
                testimonialIndex--;
                if (testimonialIndex < 0) {
                    testimonialIndex = testimonials.length - 1;
                }
                showTestimonial(testimonialIndex);
            });
        }
    }


    /* =========================
       THEME TOGGLE
    ========================== */
    const toggleBtn = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");

    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (icon) icon.textContent = "☀️";
    }

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


    /* =========================
       SCROLL TOP BUTTON
    ========================== */
    const scrollBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", function () {
        if (scrollBtn) {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        }
    });

    if (scrollBtn) {
        scrollBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    /* =========================
       RTL / LTR SWAP
    ========================== */
    const swapBtn = document.getElementById("swapBtn");

    if (localStorage.getItem("direction") === "rtl") {
        document.body.classList.add("rtl");
    }

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


    /* =========================
       HERO SLIDER
    ========================== */
   const slides = document.querySelectorAll(".hero-slide");
const nextBtn = document.querySelector(".hero-next");
const prevBtn = document.querySelector(".hero-prev");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
});

/* Auto slide */
setInterval(() => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}, 4000);
})

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



    /* =========================
   REVEAL ANIMATION ON SCROLL
========================= */
const reveals = document.querySelectorAll(
  ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom"
);

function revealOnScroll() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



const swapBtn = document.getElementById("swap-btn");

swapBtn.addEventListener("click", () => {
    document.body.classList.toggle("rtl-mode");

    if (document.body.classList.contains("rtl-mode")) {
        document.documentElement.setAttribute("dir", "rtl");
    } else {
        document.documentElement.setAttribute("dir", "ltr");
    }
});



const rtlToggle = document.getElementById("swap-btn");

function reverseWords(text) {
    return text.trim().split(/\s+/).reverse().join(" ");
}

function reverseElement(el) {
    if (
        el.closest(".logo") ||
        el.id === "swap-btn" ||
        el.id === "theme-toggle" ||
        el.tagName === "IMG" ||
        el.tagName === "INPUT" ||
        el.tagName === "TEXTAREA" ||
        el.tagName === "SELECT" ||
        el.tagName === "OPTION"
    ) {
        return;
    }

    if (!el.dataset.originalHtml) {
        el.dataset.originalHtml = el.innerHTML;
    }

    el.childNodes.forEach(node => {
        if (node.nodeType === 3) {
            const text = node.textContent.trim();
            if (text) {
                node.textContent = reverseWords(text);
            }
        }
    });
}

function applyRTLText() {
    document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, a, button, span, label")
        .forEach(reverseElement);
}

function restoreLTRText() {
    document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, a, button, span, label")
        .forEach(el => {
            if (el.dataset.originalHtml) {
                el.innerHTML = el.dataset.originalHtml;
            }
        });
}

function applyDirection(dir) {
    document.documentElement.setAttribute("dir", dir);
    localStorage.setItem("direction", dir);

    if (dir === "rtl") {
        applyRTLText();
    } else {
        restoreLTRText();
    }
}

if (rtlToggle) {
    rtlToggle.addEventListener("click", () => {
        const currentDir = document.documentElement.getAttribute("dir") || "ltr";
        applyDirection(currentDir === "rtl" ? "ltr" : "rtl");
    });
}

window.addEventListener("DOMContentLoaded", () => {
    const savedDir = localStorage.getItem("direction") || "ltr";
    applyDirection(savedDir);
});