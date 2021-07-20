function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initate() {
    var style1 = document.getElementById("terminal");
    var style2 = document.getElementById("dark");

    style1.onclick = function () { swapStyleSheet("../css/main.css") };
    style2.onclick = function () { swapStyleSheet("../css/dracula.css"); }
}

window.onload = initate;