//Penny Herrera
function showAlert() {
    alert("Hello, world!");
}

function makeTextBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function adjustStyle() {
    var textArea = document.getElementById("textInput");
    var fancy = document.getElementById("fancyShmancy");
    var boring = document.getElementById("boringBetty");

    if (fancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
    else if (boring.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function moo() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value;
    text = text.toUpperCase();
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim() + " -Moo";
    }

    textArea.value = sentences.join(". ");
}
