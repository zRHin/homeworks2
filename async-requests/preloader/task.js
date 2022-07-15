

let xhr = new XMLHttpRequest();
const loader = document.getElementById("loader");
const items = document.getElementById("items");

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState===4) {
        const data = JSON.parse(xhr.responseText);
        const valute = data.response.Valute;

        for (let key in valute) {
            items.insertAdjacentHTML("afterBegin", `
                <div class="item">
                    <div class="item__code">
                        ${valute[key].CharCode}
                    </div>
                    <div class="item__value">
                        ${valute[key].Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>
            `);
        }

        loader.classList.remove("loader_active");
    }
}