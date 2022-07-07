

const hasTooltip = document.querySelectorAll(".has-tooltip");

hasTooltip.forEach((el) => {
    el.onclick = function() {
        let tooltip = document.querySelector(".tooltip");
        if (!document.contains(tooltip)) {
            el.insertAdjacentHTML("afterEnd",'<div class="tooltip">Текст подсказки</div>');
            let tooltip = document.querySelector(".tooltip");
            tooltip.textContent = el.title;
            tooltip.classList.add("tooltip_active");
        } else {
            tooltip.remove();
        }
        return false;
    }
});