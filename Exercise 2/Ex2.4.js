function highlight() {
    var els = document.getElementsByTagName("strong");
    for (var i = 0; i < els.length; i++) {
        els[i].style.color = "red";
    }
}

function returnNormal() {
    var els = document.getElementsByTagName("strong");
    for (var i = 0; i < els.length; i++) {
        els[i].style.color = "black";
    }
}
document.getElementById('highlightLink').addEventListener('mouseover', highlight);
document.getElementById('highlightLink').addEventListener('mouseout', returnNormal);