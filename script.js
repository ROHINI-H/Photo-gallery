function displayimage(src) {
    document.getElementById("displayArea").style.display = "flex";
    const img = document.getElementById("showimage")
    img.src = src;
}

function closeImage() {
    document.getElementById("displayArea").style.display = "none";
}

function filterImg(category) {
    const images = document.querySelectorAll(".container img");

    images.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "inline-block";
        } else {
            img.style.display = "none";
        }
    });
}

function darkmode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}