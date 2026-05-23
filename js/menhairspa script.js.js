
const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

/* Load saved theme */
let savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
    if(icon) icon.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

/* Toggle theme only if button exists */
if(toggleBtn){

    toggleBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("theme","dark");
            if(icon) icon.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }else{
            localStorage.setItem("theme","light");
            if(icon) icon.innerHTML = '<i class="fa-solid fa-moon"></i>';
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


