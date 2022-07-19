

const hasTooltip = document.querySelectorAll(".has-tooltip");

hasTooltip.forEach((el) => {
    el.onclick = function() {
        let tooltip = document.querySelector(".tooltip");
        if (!document.contains(tooltip)) {
            const position = el.getBoundingClientRect();
            el.insertAdjacentHTML("afterEnd", `<div class="tooltip" style="left: ${position.left}px; top: ${position.top + 20}px">Текст подсказки</div>`);
            let tooltip = document.querySelector(".tooltip");
            tooltip.textContent = el.title;
            tooltip.classList.add("tooltip_active");
        } else {
            let actTooltip = document.querySelector(".tooltip_active");
            if (actTooltip.textContent !== el.title) {
                tooltip.remove();
                const position = el.getBoundingClientRect();
                el.insertAdjacentHTML("afterEnd", `<div class="tooltip" style="left: ${position.left}px; top: ${position.top + 20}px">Текст подсказки</div>`);
                let tooltipN = document.querySelector(".tooltip");           
                tooltipN.textContent = el.title;
                tooltipN.classList.add("tooltip_active");
            } else {
                tooltip.remove();
            }
        }
        return false;
    }
});