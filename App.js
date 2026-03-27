// --- SECURE CLASSROOM LOGIC ---
const ACCESS_CODE = "ALQALAM786"; // Change this whenever you want to lock the class!

document.getElementById('attendanceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('studentName').value;
    const userCode = prompt("Please enter your Student Access Code (Sent to your WhatsApp/Email):");
    const status = document.getElementById('statusMsg');

    if (userCode === ACCESS_CODE) {
        status.style.color = "#D4AF37";
        status.innerHTML = `Welcome ${name}! Access Granted. Opening Zoom...`;
        
        // This only happens if the code is correct
        setTimeout(() => {
            window.location.href = "https://zoom.us/j/YOUR_MEETING_ID"; 
        }, 2000);
    } else {
        status.style.color = "red";
        status.innerHTML = "❌ Invalid Access Code. Please contact Ustaz for payment/registration.";
    }
});