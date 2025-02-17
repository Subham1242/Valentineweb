document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".day-btn");

    buttons.forEach(button => {
        const day = parseInt(button.getAttribute("data-day"));
        const today = new Date().getDate();

        if (today >= day) {
            button.addEventListener("click", function () {
                window.location.href = `${getFolderName(day)}/index.html`;
            });
        } else {
            button.style.opacity = "0.5"; 
            button.style.pointerEvents = "none"; 
        }
    });

    function getFolderName(day) {
        const folderNames = {
            7: "rose_day", 8: "propose_day", 9: "chocolate_day",
            10: "teddy_day", 11: "promise_day", 12: "hug_day",
            13: "kiss_day", 14: "valentine_day"
        };
        return folderNames[day] || "rose_day";
    }

    // 🎵 Background Music for Homepage
    let audio = new Audio("background.mp3"); 
    audio.loop = true;
    document.addEventListener("click", () => {
        audio.play().catch(err => console.log("Auto-play blocked:", err));
    });
});
