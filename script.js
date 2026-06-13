// Handle form submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    // Validate phone number
    if (!phoneNumber.trim()) {
        alert('Please enter a phone number');
        return;
    }
    
    // As per requirement, the form goes nowhere after clicking signup
    console.log('Sign up clicked with phone number:', phoneNumber);
    
    // Optional: Show a message or perform any other action
    alert('Sign up button clicked! (Currently goes nowhere as requested)');
    
    // Clear the form
    document.getElementById('signupForm').reset();
});

// Handle social login buttons
document.querySelectorAll('.btn-social').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const provider = this.textContent.trim();
        console.log('Social login attempted:', provider);
        // Currently goes nowhere as requested
    });
});
