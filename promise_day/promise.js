// Open & Close Promise Box
function openPromiseBox() {
    document.getElementById("promiseBox").style.display = "block";
}

function closePromiseBox() {
    document.getElementById("promiseBox").style.display = "none";
}

// Show Fingerprint Image when Thumb Button is Clicked
function showFingerprint() {
    document.getElementById("fingerprintContainer").style.display = "block";
}

// Open & Close Success Box
function openSuccessBox() {
    document.getElementById("successBox").style.display = "block";
}

function closeSuccessBox() {
    document.getElementById("successBox").style.display = "none";
    
    // Disable buttons & show Next
    document.getElementById("viewPromiseBtn").disabled = true;
    document.getElementById("thumbBtn").disabled = true;
    document.getElementById("nextBtn").style.display = "block";
}

// Go to Next Page
function goToNextPage() {
    window.location.href = "page5.html";
}
