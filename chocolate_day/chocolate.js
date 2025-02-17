// Ensure background music plays automatically
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");
    if (audio) {
        audio.volume = 0.5; // Adjust volume if needed
        audio.play().catch(error => console.log("Autoplay blocked:", error));
    }
});

// Function to smoothly transition between pages
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

// Function to unwrap chocolate on Page 4 (Fixing conflicts)
function unwrapChocolate() {
    let wrap = document.getElementById("giftWrap");
    let chocolate = document.getElementById("chocolate");
    let message = document.getElementById("message");

    if (wrap && chocolate && message) { // Ensure elements exist
        wrap.style.opacity = "0"; // Fade out wrap
        setTimeout(() => {
            wrap.style.display = "none"; // Hide it completely
            chocolate.style.display = "block"; // Show chocolate
            chocolate.style.opacity = "1"; // Fade in effect
            message.classList.remove("hidden"); // Show message
        }, 500);
    } else {
        console.log("Error: Element not found! Check your image IDs.");
    }
}
