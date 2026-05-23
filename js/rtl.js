document.addEventListener("DOMContentLoaded", () => {
    const rtlBtn = document.getElementById("rtl-toggle");
    const navbar = document.querySelector(".navbar");
    const navContainer = document.querySelector(".navbar .nav-container");
    const logo = document.querySelector(".navbar .logo");
    const navLinks = document.querySelector(".navbar .nav-links");

    function goHome() {
        window.location.href = "index.html";
    }

    document.querySelectorAll(".navbar .logo, .footer-logo").forEach((logoElement) => {
        logoElement.setAttribute("role", "link");
        logoElement.setAttribute("tabindex", "0");
        logoElement.setAttribute("aria-label", "Go to home page");
        logoElement.addEventListener("click", goHome);
        logoElement.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                goHome();
            }
        });
    });

    function setDirection(isRtl) {
        document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
        document.body.classList.toggle("rtl", isRtl);
        localStorage.setItem("direction", isRtl ? "rtl" : "ltr");
    }

    setDirection(localStorage.getItem("direction") === "rtl");

    if (rtlBtn) {
        rtlBtn.addEventListener("click", () => {
            setDirection(!document.body.classList.contains("rtl"));
        });
    }

    if (navbar && navContainer && logo && navLinks && !document.getElementById("nav-menu-toggle")) {
        const menuBtn = document.createElement("button");
        menuBtn.id = "nav-menu-toggle";
        menuBtn.className = "nav-menu-toggle";
        menuBtn.type = "button";
        menuBtn.setAttribute("aria-label", "Toggle navigation menu");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

        logo.insertAdjacentElement("afterend", menuBtn);

        function closeMenu() {
            navbar.classList.remove("menu-open");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }

        menuBtn.addEventListener("click", () => {
            const isOpen = navbar.classList.toggle("menu-open");
            menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
            menuBtn.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 1180) closeMenu();
        });
    }
});
