

let xhr = new XMLHttpRequest();

xhr.open('GET','https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function () { 
    if (xhr.readyState === xhr.DONE) {
        let response = JSON.parse(xhr.responseText);
        let question = document.querySelector('.poll__title');
        let answers =  document.querySelector('.poll__answers');

        question.innerHTML = response.data.title;
        for (let i = 0; i < response.data.answers.length; i++) {
            let data = document.createElement('button');

            data.classList.add('poll__answer');
            data.innerHTML = response.data.answers[i];
            answers.appendChild(data);
            data.addEventListener('click', () => alert('Спасибо ваш голос засчитан'));
        };
    }
};