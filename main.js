// This is where the functions begin
function hidetxt(stuff, btn) {
    var more = document.getElementById(stuff);
    var btnText = document.getElementById(btn);
    if (more.style.display === "block") {
        btnText.style.backgroundImage = "url(uparrow.svg)";
        more.style.display = "none";
    } else {
        btnText.style.backgroundImage = "url(darrow.svg)";
        more.style.display = "block";
    }
}