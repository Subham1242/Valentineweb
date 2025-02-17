// Play background music automatically
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");
    if (audio) {
        audio.volume = 0.5;
        audio.play().catch(error => console.log("Autoplay blocked:", error));
    }
});

// Teddy Surprise on Page 3
function revealLoveMessage() {
    let teddy = document.getElementById("teddy");
    let message = document.getElementById("love-message");

    teddy.style.transform = "scale(0)";
    setTimeout(() => {
        teddy.style.display = "none";
        message.classList.remove("hidden");
    }, 500);
}

// Smooth page transitions
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        let nextPage = this.getAttribute("href");
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = nextPage;
        }, 500);
    });
});
