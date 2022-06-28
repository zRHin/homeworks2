

let menuLink = document.querySelectorAll(".menu__link");

menuLink.forEach((link) => {
    link.onclick = function() {
        const parent = link.parentElement;
        if (parent.querySelector(".menu_sub")) {
            parent.querySelector(".menu_sub").classList.add("menu_active");
            return false;
        }
    }
});