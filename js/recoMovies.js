document.addEventListener("DOMContentLoaded", function () {
    let languageButtons = document.querySelectorAll(".btn-outline-custom");
    let movieSections = document.querySelectorAll(".movie-section");

    function resetMovies() {
        movieSections.forEach(section => {
            section.style.display = "block";
            section.nextElementSibling.style.display = "flex"; // Show movie cards
        });
    }
     const addcart=document.getElementById('add-to-cart')
     addcart.addEventListener("click",function(){
        window.location.reload();
     })

    function filterMovies(selectedLanguage) {
        movieSections.forEach(section => {
            if (section.getAttribute("data-language").toLowerCase() === selectedLanguage) {
                section.style.display = "block";
                section.nextElementSibling.style.display = "flex"; // Show movie cards
            } else {
                section.style.display = "none";
                section.nextElementSibling.style.display = "none"; // Hide movie cards
            }
        });
    }

    languageButtons.forEach(button => {
        button.addEventListener("click", function () {
            let selectedLanguage = this.textContent.toLowerCase().trim();
            filterMovies(selectedLanguage);
        });
    });

    // Show all movies initially
    resetMovies();
});

// JavaScript to make all movie cards clickable and redirect to their respective detail pages
const movieCards = document.querySelectorAll('.card');

movieCards.forEach(card => {
    card.addEventListener('click', (event) => {
        // Prevent button clicks from triggering the card redirect
        if (!event.target.classList.contains('btn')) {
            const linkElement = card.querySelector('.movie-button');
            if (linkElement) {
                window.location.href = linkElement.href;
            }
        }
    });

    // Add hover effect for clarity
    card.style.cursor = 'pointer';
});