document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const passwordInput = document.getElementById("login-password");
    const toggleIcon = document.getElementById("toggleLoginPassword");

    // Toggle Password Visibility
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

    // Login Form Submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const storedUsers = localStorage.getItem("users");

        if (!storedUsers) {
            alert("No users found. Please sign up first.");
            return;
        }

        const users = JSON.parse(storedUsers);
        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value.trim();

        const user = users.find(user => user.email === email);

        if (!user) {
            alert("User not found! Please check your email or sign up.");
            return;
        }

        if (user.password !== password) {
            alert("Incorrect password! Please try again.");
            return;
        }

        alert("Welcome to BookMyShow!");

        // Mark user as logged in
        user.isLoggedIn = true;

        // Update user info in localStorage
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("user", JSON.stringify({ fullName: user.fullName, userID: user.userID }));

        // Initialize cart if it's a new login
        if (!localStorage.getItem(user.userID + "-cart")) {
            localStorage.setItem(user.userID + "-cart", JSON.stringify([]));
        }

        // Redirect to dashboard
        window.location.href = "/dashboard";
    });
});