function hello(message) {
    return message
}

console.log(hello("hello friend"));


const videos = document.querySelector("video");
const span = document.getElementById("span");
const load = document.getElementById("load");
const url = document.getElementById("search");
const btns = document.querySelectorAll("button");

function loading() {
   if(url.value) {
    videos.src = url.value
    span.innerHTML = "";
   } else {
    span.innerHTML = "impossible de faire la recherche";
   }
}

async function paste() {
    try {
        let txt = navigator.clipboard.readText();
        url.value = txt;
        span.innerHTML = "";
    } catch(err) {
        span.innerHTML = "impossible de coller depuis le presse-papier !";
    }
}

btns[1].onclick = function () {
    loading()
}

btns[0].onclick = function () {
    paste()
}