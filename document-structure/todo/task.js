

const tasksInput = document.getElementById("task__input");
const tasksList = document.querySelector(".tasks__list");
const addButton = document.getElementById("tasks__add");

addButton.addEventListener("click", function(event) {
    const inputValue = tasksInput.value;
    if (inputValue.trim() !== "") {
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
    event.preventDefault()
});

tasksList.onclick = function(e) {
    const target = e.target;
    if (target.classList.contains("task__remove")) {
        target.parentElement.remove();
    }
}