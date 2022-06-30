

const tab = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"));

tab.forEach((el) => {
    el.onclick = function() {
        let remove = document.querySelector(".tab_active");
        let remove1 = document.querySelector(".tab__content_active");
        
        remove.classList.remove("tab_active");
        el.classList.add("tab_active");
        remove1.classList.remove("tab__content_active");
        tabContent[tab.indexOf(el)].classList.add("tab__content_active");
    }
})