var text_size = 0;
var timeout1, timeout2;
var text;

function start() {
    text = document.getElementById("t");
    timeout1 = window.setInterval("incr()", 1000);
}

function incr() {
    text_size += 1;
    text.innerHTML = `TEXT GROWING ... ${text_size}pt`;
    text.style.fontSize = `${text_size}pt`;
    text.style.color = "red";
    if (text_size > 50) {
        window.clearInterval(timeout1);
        timeout2 = window.setInterval("decr()", 1000);
    }
}


function decr() {
    text_size -= 1;
    text.innerHTML = `TEXT SHRINKING ... ${text_size}pt`;
    text.style.fontSize = `${text_size}pt`;
    text.style.color = "blue";
    if (text_size < 5) {
        window.clearInterval(timeout2);
        timeout1 = window.setInterval("incr()", 1000);
    }
}
