document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach(el => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transition = "opacity 1.5s ease-in-out";
        }, 200);
    });

    // Floating Hearts Effect
    function createHeart() {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 5000);
    }
    setInterval(createHeart, 1000);
});
document.addEventListener("DOMContentLoaded", function() {
  let audio = document.getElementById("bg-music");
  if (audio) {
    audio.volume = 0.5;
    audio.play().catch(error => console.log("Autoplay blocked:", error));
  }
});