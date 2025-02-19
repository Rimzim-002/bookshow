document.addEventListener("DOMContentLoaded", function () {
    // Retrieve users from localStorage or set an empty array if none exist
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find the currently logged-in user
    const loggedInUser = users.find(user => user.isLoggedIn === true);

    // If no user is logged in, redirect to the login page
    if (!loggedInUser) {
        alert("Please log in to view your cart.");
        window.location.href = "/login";
        return;
    }

    // Retrieve the logged-in user's ID
    const userID = loggedInUser.userID;
    
    // Retrieve cart from localStorage or set an empty array if none exist
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Find the cart belonging to the logged-in user
    const userCart = cart.find(item => item.userID === userID);
    
    // Get the cart count display element
const cartCountElement = document.querySelector('#cart-items-count');

// If the cart is empty, display a message and set cart count to 0
if (!userCart || userCart.items.length === 0) {
    document.querySelector('#cart-items').innerHTML = "<p>Your cart is empty. Start adding items!</p>";
    if (cartCountElement) {
        cartCountElement.innerHTML = "0"; // Set the cart count to 0
    }
    return;
}

// Update the cart count display with the number of items in the cart
if (cartCountElement) {
    cartCountElement.innerHTML = userCart.items.length; // Set the cart count based on the number of items
}

let cartItemsHTML = '';
let totalAmount = 0;

// Loop through each item in the cart and generate HTML for display
userCart.items.forEach(item => {
    const itemTotal = item.total;
    totalAmount += itemTotal;

    cartItemsHTML += `
        <div class="col-md-12 mb-3">
            <div class="card">
                <div class="card-body d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <img src="${item.img}" alt="Movie Poster" style="width: 100px; height: 150px; object-fit: cover;" class="me-3">
                        <div>
                            <h5 class="card-title mb-0">${item.title}</h5>
                            <p class="card-text">Price: ₹${item.price}</p>
                            <p class="card-text">Quantity: <span class="movie-quantity">${item.quantity}</span></p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <input type="number" class="form-control movie-quantity-input" value="${item.quantity}" min="1" max="10" style="width: 80px;" data-movie-title="${item.title}">
                        <span class="ms-2 item-total-price">₹ ${itemTotal}</span>
                    </div>
                    <button class="btn btn-danger ms-3 remove-item-btn" data-movie-title="${item.title}">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        </div>
    `;
});

// Insert the generated HTML into the cart container
document.querySelector('#cart-items').innerHTML = cartItemsHTML;

    
    // Update the total amount for the cart
    document.querySelector('#cart-total').innerText = totalAmount;
    document.querySelector('#checkout-total').innerText = totalAmount;

    // Handle quantity change events
    document.querySelectorAll('.movie-quantity-input').forEach(input => {
        input.addEventListener('change', function () {
            const newQuantity = parseInt(this.value);
            const movieTitle = this.getAttribute('data-movie-title');
            
            // Prevent quantity from being less than 1
            if (newQuantity < 1) {
                this.value = 1;
                return;
            }

            // Find the movie in the cart and update its quantity and total price
            let movie = userCart.items.find(item => item.title === movieTitle);
            if (movie) {
                movie.quantity = newQuantity;
                movie.total = movie.quantity * movie.price;
            }

            // Save updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Recalculate and update total amount for the cart
            let updatedTotalAmount = 0;
            userCart.items.forEach(item => updatedTotalAmount += item.total);
            document.querySelector('#cart-total').innerText = updatedTotalAmount;
            document.querySelector('#checkout-total').innerText = updatedTotalAmount;
            
            // Update the total price for the changed item
            const itemTotalElement = this.closest('.card-body').querySelector('.item-total-price');
            itemTotalElement.textContent = `₹ ${movie.total}`;
            
            // Update the cart count display
            if (cartCountElement) {
                cartCountElement.innerHTML = `<i class="fas fa-shopping-cart fa-lg"></i><span class="badge bg-danger">${userCart.items.length}</span>`;
            }
        });
    });

    // Handle item removal events
    document.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', function () {
            const movieTitle = this.getAttribute('data-movie-title');
            
            // Remove the selected item from the cart
            userCart.items = userCart.items.filter(item => item.title !== movieTitle);
            
            // Save updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Reload the page to reflect the updated cart
            window.location.reload();
        });
    });

    // Function to close all currently open modals
    function closeAllModals() {
        const openModals = document.querySelectorAll('.modal.show');
        openModals.forEach(modal => {
            let modalInstance = bootstrap.Modal.getInstance(modal);
            modalInstance.hide();
        });
    }

    // Proceed to Payment
    document.getElementById("proceedToPaymentBtn").addEventListener("click", function () {
        closeAllModals(); // Close any open modals first

        const checkoutModalEl = document.getElementById("checkoutModal");
        const checkoutModal = new bootstrap.Modal(checkoutModalEl);
        // checkoutModal.show(); // Show the checkout modal 

        // Set the checkout total amount in the payment modal
        const checkoutTotalAmount = document.querySelector('#checkout-total').innerText;
        
        // Listen for the closing of the checkout modal and show the payment modal
        checkoutModalEl.addEventListener('hidden.bs.modal', function () {
            const paymentModalEl = document.getElementById("paymentModal");
            const paymentModal = new bootstrap.Modal(paymentModalEl);

            // Set the total amount to the payment modal
            document.querySelector('#paymentAmount').innerText = checkoutTotalAmount; // Set payment amount here

            paymentModal.show(); // Show the payment modal after the checkout modal is hidden
        });
    });
    
    // Handle Payment
    document.getElementById("payNowBtn").addEventListener("click", function () {
        let cardNumber = document.getElementById("cardNumber").value.trim();
        let expiryDate = document.getElementById("expiryDate").value.trim();
        let cvv = document.getElementById("cvv").value.trim();

        // Validate card details
        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            alert("Please enter a valid 16-digit card number.");
            return;
        }
        if (!expiryDate) {
            alert("Please select an expiry date.");
            return;
        }
        if (cvv.length !== 3 || isNaN(cvv)) {
            alert("Please enter a valid 3-digit CVV.");
            return;
        }

        // Simulate payment processing
        setTimeout(() => {
            alert(`Payment of ₹${document.getElementById("paymentAmount").innerText} received!`);

            let paymentModalEl = document.getElementById("paymentModal");
            let paymentModal = bootstrap.Modal.getInstance(paymentModalEl);
            paymentModal.hide(); // Hide Payment Modal

            // Show Success Modal
            setTimeout(() => {
                const successModal = new bootstrap.Modal(document.getElementById("successModal"));
                successModal.show(); // Show Success Modal
            }, 500);

        }, 1000); // Simulating payment processing delay
    });
    document.getElementById("goHomeBtn").addEventListener("click", function () {
        // Clear the cart from localStorage
        localStorage.removeItem("cart");


        window.location.href = "/dashboard"; 
    });
});