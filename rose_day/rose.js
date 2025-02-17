document.addEventListener("DOMContentLoaded", function() {
  let audio = document.getElementById("bg-music");
  if (audio) {
    audio.volume = 0.5;
    audio.play().catch(error => console.log("Autoplay blocked:", error));
  }
});

    const numPebbles = 15;
    for (let i = 0; i < numPebbles; i++) {
        let pebble = document.createElement("div");
        pebble.classList.add("pebble");
        pebble.style.left = Math.random() * 100 + "vw";
        pebble.style.animationDuration = 3 + Math.random() * 3 + "s";
        pebble.style.animationDelay = Math.random() * 2 + "s";
        document.body.appendChild(pebble);
    }
});
