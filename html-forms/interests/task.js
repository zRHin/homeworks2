

const interestCheck = document.querySelectorAll(".interest__check");

interestCheck.forEach((el) => {
    el.onclick = function() {
        const parent = el.closest(".interest");

        if (!parent.classList.contains("interests_active")) {
            const checkedBtn = parent.querySelectorAll(".interest__check");

            if (el.checked == true) {
                el.checked = true;
                checkedBtn.forEach((el) => el.checked = true);
            } else {
                el.checked = false;
                checkedBtn.forEach((el) => el.checked = false);
            }
        } else {
            if (el.checked == true) {
                el.checked = true;
            } else {
                el.checked = false;
            }
        }
    }
});