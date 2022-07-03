

setInterval(() => {
    const rotatorItem = document.querySelector(".rotator__case_active");
    const rotator = rotatorItem.parentElement;

    if (rotator.lastElementChild.textContent !== rotatorItem.textContent) {
        rotatorItem.classList.remove("rotator__case_active");
        rotatorItem.nextElementSibling.classList.add("rotator__case_active");
    } else {
        rotatorItem.classList.remove("rotator__case_active");
        rotator.firstElementChild.classList.add("rotator__case_active");
    }
}, 1000);