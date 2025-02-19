document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get values from the form fields
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Basic Validation
    if (!fullName) {
        alert('Full Name is required.');
        return;
    }

    const fullNamePattern = /^[A-Za-z\s]+$/; // Only letters and spaces
    if (!fullNamePattern.test(fullName)) {
        alert('Full Name must contain only alphabets and spaces.');
        return;
    }
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Phone number validation pattern
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Invalid phone number format! Please use XXXXXXXXXX.');
        return;
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if (!passwordPattern.test(password)) {
    alert('Password must be at least 8 characters long and contain letters, numbers, and at least one special character (@$!%*?&).');
    return;
}

    let existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const emailExists = existingUsers.some(user => user.email === email);
    if (emailExists) {
        alert('An account with this email already exists.');
        return;
    }

    const userID = 'user-' + Date.now();

    const user = { userID, fullName, email, phone, password };

    existingUsers.push(user);

    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Sign up successful!');
    window.location.href = "/login"; 
});
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.getElementById("togglePassword");

    toggleIcon.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleIcon.classList.remove("bi-eye-slash");
            toggleIcon.classList.add("bi-eye");
        } else {
            passwordInput.type = "password";
            toggleIcon.classList.remove("bi-eye");
            toggleIcon.classList.add("bi-eye-slash");
        }
    });
});