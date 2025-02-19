
// Movie Data
const movies = [
    {
        title: "Bareilly Ki Barfi",
        backgroundImage: "../assets/img/Bareilly-Ki-Barfi-1.jpg",
        poster: "../assets/img/BareillyKiBarfi.avif",
        rating: "⭐ 8/10 (61.9K Votes)",
        format: "2D",
        language: "Hindi",
        details: "2h 2m • Comedy, Romantic • UA • 18 Aug, 2017",
        about: "Set in the small town of Bareilly, this romantic comedy explores the nuances of simple lives people live there. It's a story of Bitti Mishra, a free-spirited girl, who is tired of the societal pressures and finds solace in a book titled 'Bareilly Ki Barfi'.",
        video: "../assets/img/bar.mp4"
    },
    {
        title: "Dil To Pagal Hai",
        backgroundImage: "../assets/img/dil-to-pagal-hai-banner.avif",
        poster: "../assets/img/Diltopagalhai.avif",
        rating: "⭐ 9.0/10 (2.3M Votes)",
        format: "2D, IMAX",
        language: "Hindi",
        details: "3h • Drama, Music, Drama • U • 30 Oct, 1997",
        about: "A timeless romantic musical that has mesmerized generations of moviegoers, Dil To Pagal Hai follows the story of Rahul, Pooja, Nisha and Ajay - four youngsters who are caught in the cross-currents of romance.",
        video: "../assets/img/dil.mp4"
    },
    {
        title: "Jab We Met",
        backgroundImage: "../assets/img/jab-we-met-banner.jpg",
        poster: "../assets/img/Jabwemet.avif",
        rating: "⭐ 9.7/10 (8.6M Votes)",
        format: "2D, IMAX",
        language: "Hindi",
        details: "2h 18m • Romantic, Comedy • U • 26 Oct, 2007",
        about: "The life of a suicidal industrialist takes a sharp turn when he meets a spirited chatterbox on a train journey in this breezy Bollywood romantic comedy.",
        video: "../assets/img/jab.mp4"
    

    },
    {
        title: "Captain America",
        backgroundImage: "../assets/img/captain-america-banner.jpg",
        poster: "../assets/img/captainAmerica.avif",
        rating: "⭐ 9.7/10 (8.6M Votes)",
        format: "2D, IMAX",
        language: "English",
        details: "2h 45 m • Action, Adventure, Sci-Fi",
        about: "It is a sequel to Marvel Studios The Falcon and the Winter Soldier  and follows Sam Wilson as the new Captain America.",
        video: "../assets/img/cap.mp4"
    
    },
    {
        title: "Intersteller",
        backgroundImage: "../assets/img/intersteller-banner.jpg",
        poster: "../assets/img/Interstellar.avif",
        rating: "⭐ 9.8/10 (8.6M Votes)",
        format: "2D, IMAX",
        language: "English",
        details: "2h 49 m • Adventure, Action Sci-Fi • 13+ • 07 Nov, 2014",
        about: "A team of explorers travel beyond this galaxy through a newly discovered wormhole to discover whether mankind has a future among the stars.",
        video: "../assets/img/in.mp4"
    
    },
    {
        title: "Sonic 3",
        backgroundImage: "../assets/img/sonic-banner.jpg",
        poster: "../assets/img/Sonic.avif",
        rating: "⭐ 9.8/10 (8.6M Votes)",
        format: "2D, IMAX",
        language: "English",
        details: "2h 50 m • Action, Adventure, Animation, Family • UA13+ • 03 Jan, 2025",
        about: "Sonic the Hedgehog returns to the big screen this holiday season in his most thrilling adventure yet. Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
        video: "../assets/img/soni.mp4"
    
    },
    {
        title: "Hoshiar Singh",
        backgroundImage: "../assets/img/singh-banner.avif",
        poster: "../assets/img/HoshiarSingh.avif",
        rating: "⭐ 7.6/10 (2.6M Votes)",
        format: "2D, IMAX",
        language: "Punjabi",
        details: "2h 12 min • Comedy, Drama • U • 07 Feb, 2025",
        about: "The film follows Hoshiar Singh, a vibrant soul once denied education, as he returns to the system as a teacher, only to challenge its flaws and create a revolutionary approach to learning and life",
        video: "../assets/img/ho.mp4"
    },
    {
        title: "Majhail",
        backgroundImage: "../assets/img/mahjail.jpg",
        poster: "../assets/img/Majhail.avif",
        rating: "⭐ 7.6/10 (1.6M Votes)",
        format: "2D, IMAX",
        language: "Punjabi",
        details: "2h 43 min • Action, Crime, Drama • UA-16+ • 30 Jan, 2025",
        about: "Majhail is a Punjabi movie directed by Deeraj Rattan. The movie features Dev Kharod, Roopi Gill, and Guggu Gill in the pivotal role.",
        video: "../assets/img/ma.mp4"
    
    },
    {
        title: "Thandel",
        backgroundImage: "../assets/img/thandel-banner.webp",
        poster: "../assets/img/Thandel.avif",
        rating: "⭐ 8.9/10 (5.6M Votes)",
        format: "2D, IMAX",
        language: "Tamil",
        details: "2h 32 min • Action, Drama, Romantic • UA-13+ • 07 Feb, 2025",
        about: "Thandel follows the gripping journey of fishermen from Srikakulam who, during a routine trip, accidentally drift into Pakistani waters. The story blends love, revenge, courage, and patriotism, creating a powerful mix of action, drama, and emotion that captures the audience`s heart.",
        video: "../assets/img/th.mp4"
    
    },

    {
        title: "Vidaamuyarchi",
        backgroundImage: "../assets/img/vidaa-banner.avif",
        poster: "../assets/img/Vidaamuyarchi.avif",
        rating: "⭐ 8.6/10 (15.6M Votes)",
        format: "2D, IMAX",
        language: "Tamil",
        details: "2h 34 min • Action, Thriller, Mystery • UA-16+ • 06 Feb, 2025",
        about: "A married couple`s trip takes an unsettling turn when the wife goes missing prompting the husband to search for her through all odds.",
        video: "../assets/img/vi.mp4"
    
    },
    {
        title: "Marco",
        backgroundImage: "../assets/img/marco-banner.avif",
        poster: "../assets/img/Marco.avif",
        rating: "⭐ 8.5/10 (8.6M Votes)",
        format: "2D, IMAX",
        language: "Tamil",
        details: "2h 24 min • Action, Thriller • A • 20 Dec, 2024",
        about: "Adattu is one of the most renowned gold-trading families in Kerala. Unexpectedly, a mysterious incident shakes the Adattu family. George, the head of the family, sets out to uncover the truth and find those responsible. At the same time, his younger brother, Marco, embarks on the same quest but through a different path. This forms the core of Marco, an intense, violent, action-packed drama.",
        video: "../assets/img/marco.mp4"
    
    },

];

function loadMovieDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieIndex = parseInt(urlParams.get('movieIndex'));

    if (!isNaN(movieIndex) && movies[movieIndex]) {
        const movie = movies[movieIndex];

        // Set the poster image
        const posterImage = document.getElementById('movie-poster');
        posterImage.src = movie.poster;
        posterImage.alt = movie.title + " Poster";  

        // Set the movie title
        const movieTitle = document.getElementById('movie-title');
        movieTitle.textContent = movie.title;
        movieTitle.style.color = "white";  
        movieTitle.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.6)";  

        // Other movie details
        document.getElementById('movie-rating').textContent = movie.rating;
        document.getElementById('movie-format').textContent = movie.format;
        document.getElementById('movie-language').textContent = movie.language;
        document.getElementById('movie-details').textContent = movie.details;
        document.getElementById('movie-about').textContent = movie.about;

        // Get the main container
        const backgroundDiv = document.querySelector('.main-div');

        // Check if a video exists for this movie
        if (movie.video) {
            let existingVideo = document.getElementById('background-video');

            if (!existingVideo) {
                // Create video element
                const videoElement = document.createElement('video');
                videoElement.id = "background-video";
                videoElement.autoplay = true;
                videoElement.loop = true;
                videoElement.muted = false;
                videoElement.playsInline = true;
                videoElement.innerHTML = `<source src="${movie.video}" type="video/mp4">Your browser does not support the video tag.`;

                // Apply video styling to keep it in the background
                videoElement.style.position = "absolute";
                videoElement.style.top = "0";
                videoElement.style.left = "0";
                videoElement.style.width = "100%";
                videoElement.style.height = "100%";
                videoElement.style.objectFit = "cover";
                videoElement.style.zIndex = "-1"; // Keeps it behind text

                // Insert video into the background container
                backgroundDiv.prepend(videoElement);
            } else {
                // Update the video source if it already exists
                existingVideo.querySelector("source").src = movie.video;
                existingVideo.load();
            }
        } else {
            // Remove video if no video exists for the selected movie
            let existingVideo = document.getElementById('background-video');
            if (existingVideo) {
                existingVideo.remove();
            }

            // Set background image instead
            backgroundDiv.style.backgroundImage = `url(${movie.backgroundImage})`;
            backgroundDiv.style.backgroundSize = "cover";
            backgroundDiv.style.backgroundPosition = "center";
        }
    }
}

document.addEventListener('DOMContentLoaded', loadMovieDetails);



document.addEventListener("DOMContentLoaded", function () {
    const bookButtons = document.getElementsByClassName("book-btn");

    for (let i = 0; i < bookButtons.length; i++) {
        bookButtons[i].addEventListener("click", function () {


            // Open Bootstrap Modal
            const bookModal = new bootstrap.Modal(document.getElementById("bookTicketModal"));
            bookModal.show();
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const ticketPrice = 300; // Fixed price per ticket
    let totalAmount = ticketPrice; // Default amount

    const bookButtons = document.getElementsByClassName("book-btn");

    for (let i = 0; i < bookButtons.length; i++) {
        bookButtons[i].addEventListener("click", function () {
            const bookModal = new bootstrap.Modal(document.getElementById("bookTicketModal"));
            bookModal.show();
        });
    }

    function calculateTotal() {
        let count = parseInt(document.getElementById("ticketCount").value) || 1;
        if (count < 1) count = 1; // Prevents negative/zero values
        totalAmount = count * ticketPrice;
        document.getElementById("totalAmount").innerText = totalAmount;
    }

    document.getElementById("ticketCount").addEventListener("input", calculateTotal);



    // Proceed to Payment
    document.getElementById("proceedToPaymentBtn").addEventListener("click", function () {
        // Close Booking Modal
        let bookModalEl = document.getElementById("bookTicketModal");
        let bookModal = bootstrap.Modal.getInstance(bookModalEl);
        bookModal.hide();

        // Open Payment Modal
        document.getElementById("paymentAmount").innerText = totalAmount;
        setTimeout(() => {
            const paymentModal = new bootstrap.Modal(document.getElementById("paymentModal"));
            paymentModal.show();
        }, 500);
    });

    // Pay Now Button Clicked
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

        // Simulate Payment Processing
        setTimeout(() => {
            alert(`Payment of ₹${totalAmount} received!`);

            // Close Payment Modal
            let paymentModalEl = document.getElementById("paymentModal");
            let paymentModal = bootstrap.Modal.getInstance(paymentModalEl);
            paymentModal.hide();

            // Show Success Modal
            setTimeout(() => {
                const successModal = new bootstrap.Modal(document.getElementById("successModal"));
                successModal.show();
            }, 500);
        }, 1000); // Simulating a delay for payment processing
    });
});


document.getElementById("proceedToPaymentBtn").addEventListener("click", function() {
    let movieTitle = document.getElementById("movie-title").innerText;
    let ticketCount = document.getElementById("ticketCount").value;
    let ticketPrice = parseFloat(document.getElementById("ticketPrice").innerText); // Ensure it's a number
    let totalPrice = ticketCount * ticketPrice;

    // Check if ticket count and price are valid numbers
    if (isNaN(ticketCount) || isNaN(ticketPrice) || ticketCount <= 0 || ticketPrice <= 0) {
        alert("Please enter valid ticket count and price.");
        return;
    }
});

    // Get existing cart data from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new ticket details to the cart
    cart.push({
        title: movieTitle,
        tickets: ticketCount,
        price: ticketPrice,
        total: totalPrice
    });

    // Save updated cart data to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Alert the user
    alert("Tickets added to cart!");

    // Show the payment modal (you can modify this as needed)
    const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
    paymentModal.show();



  // Pay Now Button Clicked
document.getElementById("payNowBtn").addEventListener("click", function () {
    let cardNumber = document.getElementById("cardNumber").value.trim();
    let expiryDate = document.getElementById("expiryDate").value.trim();
    let cvv = document.getElementById("cvv").value.trim();

    // Validate the Card Number
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        alert("Please enter a valid 16-digit card number.");
        return;
    }
    // Validate Expiry Date
    if (!expiryDate) {
        alert("Please select an expiry date.");
        return;
    }
    // Validate CVV
    if (cvv.length !== 3 || isNaN(cvv)) {
        alert("Please enter a valid 3-digit CVV.");
        return;
    }

    // Simulate Payment Processing
    setTimeout(() => {
        alert(`Payment of ₹${totalAmount} received!`);

        // Close Payment Modal
        let paymentModalEl = document.getElementById("paymentModal");
        let paymentModal = bootstrap.Modal.getInstance(paymentModalEl);
        paymentModal.hide();

        // Show Success Modal
        setTimeout(() => {
            const successModal = new bootstrap.Modal(document.getElementById("successModal"));
            successModal.show();
        }, 500);
    }, 1000); // Simulating a delay for payment processing
});



// document.getElementById("proceedToPaymentBtn").addEventListener("click", function() {
//     let movieTitle = document.getElementById("movie-title").innerText;
//     let ticketCount = document.getElementById("ticketCount").value;
//     let ticketPrice = document.getElementById("ticketPrice").innerText;
//     let totalPrice = ticketCount * ticketPrice;

//     // Get existing cart data from localStorage or initialize an empty array
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     // Add the new ticket details to the cart
//     cart.push({
//         title: movieTitle,
//         tickets: ticketCount,
//         price: ticketPrice,
//         total: totalPrice
//     });

//     // Save updated cart data to localStorage
//     localStorage.setItem("cart", JSON.stringify(cart));

//     alert("Tickets added to cart!");
// });

