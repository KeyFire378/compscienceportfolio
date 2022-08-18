function hidetxt() {
    var more = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (more.style.display === "inline") {
        btnText.innerHTML = " \_/ ";
        more.style.display = "none";
    } else {
        btnText.innerHTML = " /-\ ";
        more.style.display = "inline";
    }
}