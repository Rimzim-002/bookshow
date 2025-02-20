// When the page is loaded, populate the username in the navbar
window.addEventListener('load', function() {
    const userDetails = localStorage.getItem('user');
    if (userDetails) {
        const userData = JSON.parse(userDetails);
        // Set the user's full name inside the user-name span
        document.querySelector('.user-name').textContent = userData.fullName;
    }
});


// When the user clicks the user circle icon, show the logout modal (First Modal)
// Trigger the logout modal when the user icon is clicked
document.getElementById('user-icon-btn').addEventListener('click', function() {
    const logoutModal = new bootstrap.Modal(document.getElementById('finalLogoutModal'), {
        keyboard: false
    });
    logoutModal.show();
});

// Handle the logout process when the "Logout" button in the modal is clicked
document.getElementById('confirm-logout-btn').addEventListener('click', function() {
    // Retrieve the users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the currently logged-in user
    const loggedInUser = users.find(user => user.isLoggedIn === true);

    if (loggedInUser) {
        // Set the isLoggedIn field to false for the logged-in user
        loggedInUser.isLoggedIn = false;

        // Update the users array in localStorage with the modified user data
        localStorage.setItem('users', JSON.stringify(users));

        // Optionally, clear any related cart or session data if necessary
        localStorage.removeItem('cart');  // Clear cart data (if desired)

        // Close the logout modal
        const logoutModal = bootstrap.Modal.getInstance(document.getElementById('finalLogoutModal'));
        logoutModal.hide();

        // Redirect to the login page after logging out
        window.location.href = "/login";
    } else {
        alert("No user is logged in.");
    }
});


// When the user clicks "Signout" in the first modal, show the final signout confirmation modal
document.getElementById('signout-btn').addEventListener('click', function() {
    const finalLogoutModal = new bootstrap.Modal(document.getElementById('finalLogoutModal'), {
        keyboard: false
    });
    finalLogoutModal.show();
});

document.getElementById('confirm-logout-btn').addEventListener('click', function() {
    window.location.href = '/login';
});



// add to cart feature


document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const movieTitle = button.getAttribute("data-movie-title");
            const movieImg = button.getAttribute("data-movie-img");
            const moviePrice = 300;  // Fixed price for the movie/ticket (300)
            
            // Get the logged-in user from the users array stored in localStorage
            const users = JSON.parse(localStorage.getItem("users")) || [];  // assuming users array is stored in localStorage
            const loggedInUser = users.find(user => user.isLoggedIn === true);  // Find the logged-in user

            if (!loggedInUser) {
                alert("Please log in to add items to the cart.");
                return;
            }

            const userID = loggedInUser.userID;  // Extract the userID from the logged-in user

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Check if cart already exists for the user
            let userCart = cart.find(item => item.userID === userID);
            if (!userCart) {
                // If no cart exists for this user, create a new cart for the user
                userCart = { userID: userID, items: [] };
                cart.push(userCart);
            }

            // Check if the movie already exists in the user's cart
            let existingMovie = userCart.items.find(item => item.title === movieTitle);
            if (existingMovie) {
                existingMovie.quantity += 1; // Increment quantity if already exists
                // Update the total price based on the updated quantity
                existingMovie.total = existingMovie.quantity * existingMovie.price; // Correctly calculate total (price  quantity)
            } else {
                userCart.items.push({
                    title: movieTitle,
                    img: movieImg,
                    price: moviePrice,  // Fixed price
                    quantity: 1,  // Initial quantity is 1
                    total: moviePrice , // Initial total price (price * quantity)
                    cartId:"cart-"+Date.now()
                });
            }

            // Save the updated cart back to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${movieTitle} added to your cart!`);

            // Redirect to the dashboard or cart page
            // window.location.href = "/dashboard"; 
        });
    });
});








 // search functionality
 const dashmovies = [
    { title: "Bareilly Ki Barfi", link: "../pages/movie-detail.html?movieIndex=0" },
    { title: "Dil To Pagal Hai", link: "../pages/movie-detail.html?movieIndex=1" },
    { title: "Jab We Met", link: "../pages/movie-detail.html?movieIndex=2" },
    { title: "Captain America", link: "../pages/movie-detail.html?movieIndex=3" },
    { title: "Interstellar", link: "../pages/movie-detail.html?movieIndex=4" },
    { title: "Sonic 3", link: "../pages/movie-detail.html?movieIndex=5" },
    { title: "Hoshiar Singh", link: "../pages/movie-detail.html?movieIndex=6" },
    { title: "Majhail", link: "../pages/movie-detail.html?movieIndex=7" },
    { title: "Thandel", link: "../pages/movie-detail.html?movieIndex=8" },
    { title: "Vidaamuyarchi", link: "../pages/movie-detail.html?movieIndex=9" },
    { title: "Marco", link: "../pages/movie-detail.html?movieIndex=10" },
    { title: "Nosferatu", link: "../pages/movie-detail.html?movieIndex=11" },
    { title: "Dragon", link: "../pages/movie-detail.html?movieIndex=12" },
    { title: "Chhaava", link: "../pages/movie-detail.html?movieIndex=13" },
    { title: "Deva", link: "../pages/movie-detail.html?movieIndex=14" },
    { title: "Loveyappa", link: "../pages/movie-detail.html?movieIndex=15" },



    



];

const searchInput = document.getElementById("search-input");
const suggestionsList = document.getElementById("search-suggestions");
const searchButton = document.querySelector(".btn-search")

// Function to show dropdown suggestions
function showSuggestions(filteredMovies) {
    suggestionsList.innerHTML = ""; // Clear previous suggestions

    if (filteredMovies.length === 0) {
        suggestionsList.style.display = "none"; // Hide dropdown if no movies match
        return;
    }

    filteredMovies.forEach((movie) => {
        const listItem = document.createElement("li");
        listItem.classList.add("dropdown-item");
        listItem.textContent = movie.title;

        listItem.addEventListener("click", function () {
            searchInput.value = movie.title; // Fill input with selected movie
            suggestionsList.style.display = "none"; // Hide dropdown
            window.location.href = movie.link;
        });

        suggestionsList.appendChild(listItem);
    });

    suggestionsList.style.display = "block"; // Show dropdown
}   
searchButton.addEventListener('click',function(event){
    event.preventDefault();
    const searchTerm=searchInput.value.toLowerCase();
    const filteredMovies=dashmovies.filter(movie=>movie.title.toLocaleLowerCase().includes(searchTerm ));
    if(filteredMovies.length>0){
        window.location.href = filteredMovies[0].link;
        console.log("helo from buttoon ")
}else{
    alert('No movies found ')
}

})

// Event listener for search input
searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filteredMovies = dashmovies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm)
    );
    showSuggestions(filteredMovies);
});

// Hide dropdown when clicking outside
document.addEventListener("click", function (event) {
    if (!searchInput.contains(event.target) && !suggestionsList.contains(event.target)) {
        suggestionsList.style.display = "none";
    }
});

// Prevent closing dropdown when clicking inside the search input or suggestion list
searchInput.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent click from closing the dropdown
});

