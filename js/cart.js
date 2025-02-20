document.addEventListener("DOMContentLoaded", function () {
    // Retrieve users from localStorage or set an empty array if none exist
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the currently logged-in user
    const loggedInUser = users.find((user) => user.isLoggedIn === true);

    // If no user is logged in, redirect to the login page
    if (!loggedInUser) {
        alert("Please log in to view your cart.");
        window.location.href = "/login";
        return;
    }

    // Retrieve the logged-in user's ID
    const userID = loggedInUser.userID;

    // Retrieve cart from localStorage or set an empty array if none exist
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Find the cart belonging to the logged-in user
    let userCart = cart.find((item) => item.userID === userID);

    // Get the cart count display element
    const cartCountElement = document.querySelector("#cart-items-count");
    if (cartCountElement) {
        cartCountElement.innerHTML = "0"; // Initialize cart count
    }

    // If the cart is empty, display a message and set cart count to 0
    if (!userCart || userCart.items.length === 0) {
        document.querySelector("#cart-items").innerHTML =
            "<p>Your cart is empty. Start adding items!</p>";
        if (cartCountElement) {
            cartCountElement.innerHTML = "0";
        }
        return;
    }

    // Update the cart count display with the number of items in the cart
    if (cartCountElement) {
        cartCountElement.innerHTML = userCart.items.length;
    }

    let cartItemsHTML = "";
    let totalAmount = 0;

    // Loop through each item in the cart and generate HTML for display
    userCart.items.forEach((item) => {
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
    document.querySelector("#cart-items").innerHTML = cartItemsHTML;

    // Update the total amount for the cart
    document.querySelector("#cart-total").innerText = totalAmount;
    document.querySelector("#checkout-total").innerText = totalAmount;

    // Get the "Proceed to Checkout" button
    const proceedToCheckoutButton = document.querySelector('#proceedToCheckoutBtn');

    // If the total is 0, hide the button by adding the 'd-none' class
    // If the total is greater than 0, show the button by removing the 'd-none' class
    if (totalAmount === 0) {
        proceedToCheckoutButton.classList.add('d-none'); // Hide the button
    } else {
        proceedToCheckoutButton.classList.remove('d-none'); // Show the button
    }

    // Handle quantity change events
    document.querySelectorAll(".movie-quantity-input").forEach((input) => {
        input.addEventListener("change", function () {
            const newQuantity = parseInt(this.value);
            const movieTitle = this.getAttribute("data-movie-title");

            if (newQuantity < 1) {
                this.value = 1;
                return;
            }

            // Find the movie in the cart and update its quantity and total price
            let movie = userCart.items.find((item) => item.title === movieTitle);
            if (movie) {
                movie.quantity = newQuantity;
                movie.total = movie.quantity * movie.price;
            }

            // Save updated cart to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Update total amount and UI
            let updatedTotalAmount = userCart.items.reduce((sum, item) => sum + item.total, 0);
            document.querySelector("#cart-total").innerText = updatedTotalAmount;
            document.querySelector("#checkout-total").innerText = updatedTotalAmount;

            // Update item total price display
            this.closest(".card-body").querySelector(".item-total-price").textContent = `₹ ${movie.total}`;

            // Update cart count display dynamically
            if (cartCountElement) {
                cartCountElement.innerHTML = userCart.items.length;
            }
        });
    });

    // Handle item removal events
    document.querySelectorAll(".remove-item-btn").forEach((button) => {
        button.addEventListener("click", function () {
            const movieTitle = this.getAttribute("data-movie-title");

            // Remove the selected item from the cart
            userCart.items = userCart.items.filter((item) => item.title !== movieTitle);

            // Update localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Update UI dynamically without reloading the page
            this.closest(".col-md-12").remove();

            // Update cart count and total price
            let updatedTotalAmount = userCart.items.reduce((sum, item) => sum + item.total, 0);
            document.querySelector("#cart-total").innerText = updatedTotalAmount;
            document.querySelector("#checkout-total").innerText = updatedTotalAmount;

            if (cartCountElement) {
                cartCountElement.innerHTML = userCart.items.length;
            }

            // Show empty cart message if no items remain
            if (userCart.items.length === 0) {
                document.querySelector("#cart-items").innerHTML = "<p>Your cart is empty. Start adding items!</p>";
            }
        });
    });

    // Close all currently open modals
    function closeAllModals() {
        document.querySelectorAll(".modal.show").forEach((modal) => {
            bootstrap.Modal.getInstance(modal).hide();
        });
    }

    // Proceed to Payment
    document.getElementById("proceedToPaymentBtn").addEventListener("click", function () {
        closeAllModals();

        setTimeout(() => {
            let paymentModalEl = document.getElementById("paymentModal");
            let paymentModal = new bootstrap.Modal(paymentModalEl);
            document.querySelector("#paymentAmount").innerText = document.querySelector("#checkout-total").innerText;
            paymentModal.show();
        }, 500);
    });

    // Handle Payment
    document.getElementById("payNowBtn").addEventListener("click", function () {
        let cardNumber = document.getElementById("cardNumber").value.trim();
        let expiryDate = document.getElementById("expiryDate").value.trim();
        let cvv = document.getElementById("cvv").value.trim();

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

        setTimeout(() => {
            alert(`Payment of ₹${document.getElementById("paymentAmount").innerText} received!`);
            bootstrap.Modal.getInstance(document.getElementById("paymentModal")).hide();

            setTimeout(() => {
                new bootstrap.Modal(document.getElementById("successModal")).show();
            }, 500);
        }, 1000);
    });

    document.getElementById("goHomeBtn").addEventListener("click", function () {
        localStorage.removeItem("cart");
        window.location.href = "/dashboard";
    });
});
