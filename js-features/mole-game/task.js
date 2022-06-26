

let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let hole = document.getElementsByClassName("hole");

for (idx = 1; idx < hole.length; idx++) {
    function holes(i) {
        let clicker = document.getElementById(`hole${i}`);
        return clicker;
    }
    let hole = holes(idx);
    hole.onclick = function() {
        if (hole.className.includes("hole_has-mole")) {
            dead.textContent ++;
        } else {
            lost.textContent ++;
        }
        if (dead.textContent == 10) {
            alert("Вы победили!");
            lost.textContent = 0;
            dead.textContent = 0;
        }
        if (lost.textContent == 5) {
            alert("Вы проиграли!");
            lost.textContent = 0;
            dead.textContent = 0;
        }
    }
}