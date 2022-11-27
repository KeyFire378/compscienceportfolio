// This is where the functions begin
function hidetxt(stuff, btn) {
    var more = document.getElementById(stuff);
    var btnText = document.getElementById(btn);
    if (more.style.display === "block") {
        btnText.style.transform = "rotate(0deg)";
        more.style.display = "none";
    } else {
        btnText.style.transform = "rotate(180deg)";
        more.style.display = "block";
    }
    
}