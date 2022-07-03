

const fontSizeBtn = document.querySelectorAll(".font-size");
const control = document.querySelector(".book__control");
const book = document.getElementById("book");

fontSizeBtn.forEach((el) => {    
    el.onclick = function() {
        fontSizeBtn.forEach((el) => el.classList.remove("font-size_active"));
        book.classList.remove("book_fs-big");
        book.classList.remove("book_fs-small");
        if (el.classList.contains("font-size_big")) {
            el.classList.add("font-size_active");
            book.classList.add("book_fs-big");
        }
        if (el.classList.contains("font-size_small")) {
            el.classList.add("font-size_active");
            book.classList.add("book_fs-small");
        }
        if (!el.classList.contains("font-size_small") && !el.classList.contains("font-size_big")) {
            el.classList.add("font-size_active");
        }
        return false;
    }
});