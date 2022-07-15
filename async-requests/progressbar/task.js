


let progressBar = document.getElementById("progress");

xhr = new XMLHttpRequest();
xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");

xhr.upload.onprogress = function (e) {
    if (e.lengthComputable) {
        progressBar.max = e.total;
        progressBar.value = e.loaded;
    }
}
xhr.upload.onloadstart = function (e) {
        progressBar.value = 0;
}
xhr.upload.onloadend = function (e) {
    progressBar.value = e.loaded;
}

xhr.send(null);