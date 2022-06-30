

const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItem = document.querySelectorAll(".dropdown__link");

dropdownValue.onclick = function() {
    dropdownList.classList.add("dropdown__list_active");
    return false;
}

dropdownItem.forEach((el) => {
    el.onclick = function() {
        dropdownValue.textContent = el.textContent;
        dropdownList.classList.remove("dropdown__list_active");
        return false;
    }
})