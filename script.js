function displayimage(src) {
    document.getElementById("displayArea").style.display = "flex";
    document.getElementById("showimage").src = src;
}

function closeImage() {
    document.getElementById("displayArea").style.display = "none";
}