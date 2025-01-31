let isDark = true;

const btn = document.getElementById("darkmode");
btn.addEventListener("click", function() {
    isDark = !isDark;
    const body = document.body;
    const btnimg = document.querySelector("#darkmode > img");

    if (isDark) {
        body.style.backgroundImage = "url(bg.webp)";
        btnimg.setAttribute("src", "lightmode.png");
    } else {
        body.style.backgroundImage = "url(bglight.webp)";
        btnimg.setAttribute("src", "darkmode.png");
    }

    body.classList.toggle("darkmode");

    const sections = document.getElementsByTagName("section");
    for (const sec of sections) {
        sec.classList.toggle("darkmode");
        console.log(sec.className);
    }

    const texts = document.querySelectorAll("p, a");
    for (const text of texts) {
        text.classList.toggle("black");
    }

    const itemtexts = document.querySelectorAll(".itemtext");
    for (const it of itemtexts) {
        it.classList.toggle("darkmode");
    }
});