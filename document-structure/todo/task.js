

const tasksInput = document.getElementById("task__input");
const tasksList = document.querySelector(".tasks__list");

tasksInput.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
        const inputValue = tasksInput.value;
        if (inputValue !== "") {
            tasksList.insertAdjacentHTML ("afterBegin",`
                <div class="task">
                    <div class="task__title">
                        ${inputValue}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                </div>
            `);
        }
        tasksInput.value = "";
    }
});

tasksList.onclick = function(e) {
    const target = e.target;
    if (target.classList.contains("task__remove")) {
        target.parentElement.remove();
    }
}