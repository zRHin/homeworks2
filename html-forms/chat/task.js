

const chat = document.querySelector(".chat-widget");
const chatWidget = document.querySelector(".chat-widget__side");
const chatInput = document.getElementById("chat-widget__input");
const messages = document.querySelector('.chat-widget__messages');
const roboMessages = ['Добрый день, мы ещё не проснулись. Позвоните через 10 лет', 'Никого нет дома!',
                         'Кто здесь?'];

chatWidget.addEventListener("click", () => chat.classList.add("chat-widget_active"));

chatInput.addEventListener("change", () => {
    const inputValue = chatInput.value;
    const date = new Date;
    if (inputValue !== "") {
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
                <div class="message__text">
                ${inputValue}
                </div>
            </div>
            `;            
        messages.innerHTML += `
            <div class="message">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">
            ${roboMessages[getRandomInRange(1, roboMessages.length) - 1]}
            </div>
            </div>
            `;
    }
    chatInput.value = "";
});

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }