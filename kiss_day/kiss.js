// Play background music on page load
window.onload = function() {
    let bgMusic = document.getElementById("bg-music");
    bgMusic.play();
};

// Smooth transition to the next page
function nextPage(page) {
    document.body.style.opacity = "0"; // Fade out before transition
    setTimeout(() => {
        window.location.href = page;
    }, 600); // Wait for the fade-out effect before changing the page
}


function showLoveLetter() {
    document.getElementById("love-letter").style.display = "block";
    document.getElementById("home-button").disabled = true; // Disable home button
}

function closeLoveLetter() {
    document.getElementById("love-letter").style.display = "none";
    document.getElementById("home-button").disabled = false; // Enable home button
}
