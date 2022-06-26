
window.onload = function() {
    const clickCount = document.getElementById("clicker__counter");
    const image = document.getElementById("cookie");
    image.onclick = function() {
        clickCount.textContent ++;
        if (clickCount.textContent % 2 !== 0) {
            image.width = 150;
        } else {
            image.width = 200;
        }
    }
}