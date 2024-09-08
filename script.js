const videoLinks = {
    "DarbsJourney@J1": "https://youtu.be/Abg-aODlP7E?feature=shared",
    "DarbsJourney@J2": "https://www.kotobati.com/book/%D9%83%D8%AA%D8%A7%D8%A8-%D9%85%D9%82%D8%A7%D8%B5%D8%AF-%D8%A7%D9%84%D8%B9%D8%A8%D8%A7%D8%AF%D8%A7%D8%AA",
    "DarbsJourney@J3": "https://youtu.be/9FLH-ceHXd0?feature=shared",
    "DarbsJourney@J4": "https://youtu.be/Gr-gZx8A4qA?feature=shared",
    "DarbsJourney@J5": "https://youtu.be/HD_RRRv2s7g?feature=shared",
    "live&dieforallah": "https://youtu.be/I89L7Zc9M4M?feature=shared",
    "live&dieforallah1": "https://youtu.be/G7IDID1yXco?feature=shared",
    "live&dieforallah2": "https://youtu.be/WE_jmLSKgP4?feature=shared",
    "live&dieforallah3": "https://omran.org/ar/%D9%81%D9%8A-%D9%81%D9%84%D8%B3%D9%81%D8%A9-%D8%A7%D9%84%D8%B9%D8%A8%D8%A7%D8%AF%D8%A7%D8%AA?language=en",
    "live&dieforallah4": "https://makkahacademy.org/our-life-and-islamic-culture-0011/",
};

function checkpassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    
    if (videoLinks[password]) {
        document.querySelector('.container').style.display = 'none';
        successMessage.style.display = 'block';
        successMessage.setAttribute('data-url', videoLinks[password]);
        const videoElement = document.getElementById('congrats-video');
        videoElement.play(); // Auto-play the video

        triggerConfetti();
    } else {
        errorMessage.textContent = "الباسورد مش صح جرب تاني";
        errorMessage.style.display = "block";
        document.getElementById('password').value = "";
    }
}

function triggerConfetti() {
    const confettiContainer = document.getElementById('confetti');

    // Create confetti pieces
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        
        // Randomize position and delay
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
        
        confettiContainer.appendChild(confettiPiece);
    }

    // Stop confetti after 3 seconds
    setTimeout(() => {
        while (confettiContainer.firstChild) {
            confettiContainer.removeChild(confettiContainer.firstChild);
        }
    }, 6000); // 3000 milliseconds = 3 seconds
}


function redirect() {
    const successMessage = document.getElementById('success-message');
    const videoUrl = successMessage.getAttribute('data-url');
    window.location.href = videoUrl;
}
