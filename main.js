// These are functions to solve an issue
function fontfix() {
    var movtext = document.getElementsByTagName("marquee");
    var ptext = document.getElementsByTagName("p");
    movtext.style.fontSize = ptext.style.fontSize;
}
// This is where the functions begin
function hidetxt() {
    var more = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (more.style.display === "inline") {
        btnText.style.backgroundImage = "url(uparrow.svg)";
        more.style.display = "none";
    } else {
        btnText.style.backgroundImage = "url(darrow.svg)";
        more.style.display = "inline";
    }
}