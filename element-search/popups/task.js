

const main = window.modal_main;
const success = window.modal_success;
const closeMain = document.querySelector(".modal__close");
const closeSuccess = document.querySelector(".modal__close");
const btn = document.querySelector(".show-success");

main.classList.add("modal_active");

closeMain.onclick = function() {
    main.classList.remove("modal_active");
}

closeSuccess.onclick = function() {
    main.classList.remove("modal_active");
}

btn.onclick = function() {
    main.classList.remove("modal_active");
    success.classList.add("modal_active");
    const openSuccess = document.querySelector(".btn_success");
    openSuccess.onclick = function() {
        success.classList.remove("modal_active");
    }
}