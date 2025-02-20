document.addEventListener("DOMContentLoaded", function () {
    let languageButtons = document.querySelectorAll(".btn-outline-custom");
    let movieSections = document.querySelectorAll(".movie-section");
    let showAllButton = document.getElementById("show-all");
    let cartCountElement = document.getElementById("cart-count");

    // ✅ Function to Reset Movie List (Show All Movies)
    function showAllMovies() {
        movieSections.forEach(section => {
            section.style.display = "block"; // Show section
            let movieCardsContainer = section.nextElementSibling;
            
            if (movieCardsContainer) {
                movieCardsContainer.style.display = "flex"; // Show movie card container

                // ✅ Ensure all movie cards inside are also visible
                let movieCards = movieCardsContainer.querySelectorAll(".card");
                movieCards.forEach(card => {
                    card.style.display = "block";
                });
            }
        });
    }

    // ✅ Function to Filter Movies by Language
    function filterMovies(selectedLanguage) {
        movieSections.forEach(section => {
            let movieLanguage = section.getAttribute("data-language").toLowerCase().trim();
            let movieCardsContainer = section.nextElementSibling;

            if (movieLanguage === selectedLanguage) {
                section.style.display = "block";
                if (movieCardsContainer) {
                    movieCardsContainer.style.display = "flex";
                    movieCardsContainer.querySelectorAll(".card").forEach(card => {
                        card.style.display = "block"; // Show matching movie cards
                    });
                }
            } else {
                section.style.display = "none";
                if (movieCardsContainer) {
                    movieCardsContainer.style.display = "none";
                }
            }
        });
    }

    // ✅ Event Listener for Language Buttons
    languageButtons.forEach(button => {
        button.addEventListener("click", function () {
            let selectedLanguage = this.textContent.toLowerCase().trim();
            filterMovies(selectedLanguage);
        });
    });

    // ✅ Event Listener for "Show All" Button
    showAllButton.addEventListener("click", function () {
        console.log("Show All button clicked!"); // Debugging
        showAllMovies();
    });

    // ✅ Load All Movies Initially
    showAllMovies();

    // ✅ Fix: Make Movie Cards Clickable (Only if a Link Exists)
    const movieCards = document.querySelectorAll('.card');
    movieCards.forEach(card => {
        card.addEventListener('click', (event) => {
            // Prevent buttons inside the card from triggering navigation
            if (!event.target.classList.contains('btn')) {
                const linkElement = card.querySelector('.movie-button');
                if (linkElement && linkElement.href) {
                    window.location.href = linkElement.href;
                } else {
                    console.warn("No valid link found for this movie card.");
                }
            }
        });
        card.style.cursor = 'pointer';
    });

    // ✅ Fix: Add to Cart (Without Reloading)
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default behavior

            let movieId = this.getAttribute("data-movie-id");
            let movieTitle = this.getAttribute("data-movie-title");

            if (!movieId || !movieTitle) {
                console.error("Movie ID or title missing.");
                return;
            }

            // Get existing cart items from localStorage
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Check if movie is already in cart
            let existingMovie = cart.find(item => item.id === movieId);
            if (!existingMovie) {
                cart.push({ id: movieId, title: movieTitle });
                localStorage.setItem("cart", JSON.stringify(cart));

                // Update Cart Count
                updateCartCount();
                
                // Show Success Message
                alert(`${movieTitle} added to cart!`);
            } else {
                alert(`${movieTitle} is already in your cart.`);
            }
        });
    });

    // ✅ Function to Update Cart Count
    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartCountElement.textContent = cart.length; // Update cart count
    }

    // ✅ Initialize Cart Count on Page Load
    updateCartCount();
});
