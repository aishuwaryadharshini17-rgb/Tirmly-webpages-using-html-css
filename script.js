console.log("JS Connected Successfully");
const slides = document.querySelectorAll(".hero-slide");
const next = document.querySelector(".hero-next");
const prev = document.querySelector(".hero-prev");

let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

next.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});

prev.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

/* Auto Slide */
setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 5000);

const learnBtn = document.getElementById("learnBtn");
const moreInfo = document.getElementById("moreInfo");

learnBtn.addEventListener("click", function () {

    if (moreInfo.style.display === "block") {
        moreInfo.style.display = "none";
        learnBtn.textContent = "Learn More";
    } else {
        moreInfo.style.display = "block";
        learnBtn.textContent = "Show Less";
    }

});

