

const reveal = Array.from(document.querySelectorAll(".reveal"));

function isVisible(el) {
    const {top, bottom} = el.getBoundingClientRect();

    if (bottom < 0) {
        return false;
    }
    if (top > window.innerHeight) {
        return false;
    }
    return true;
}

document.addEventListener("scroll", () => {
    reveal.forEach((el) => {
        if (isVisible(el) === true) {
            isVisible(el);
            el.classList.add("reveal_active");
        } else {
            el.classList.remove("reveal_active");
        }
    });
});