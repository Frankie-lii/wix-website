// JavaScript for Bike Haven Website

document.addEventListener("DOMContentLoaded", () => {
    // Carousel Functionality
    const carouselItems = document.querySelectorAll(".carousel-item");
    let currentCarouselIndex = 0;

    const showCarouselItem = (index) => {
        carouselItems.forEach((item, i) => {
            item.style.display = i === index ? "block" : "none";
        });
    };

    const nextCarouselItem = () => {
        currentCarouselIndex = (currentCarouselIndex + 1) % carouselItems.length;
        showCarouselItem(currentCarouselIndex);
    };

    const prevCarouselItem = () => {
        currentCarouselIndex =
            (currentCarouselIndex - 1 + carouselItems.length) % carouselItems.length;
        showCarouselItem(currentCarouselIndex);
    };

    document.querySelector(".carousel-next").addEventListener("click", nextCarouselItem);
    document.querySelector(".carousel-prev").addEventListener("click", prevCarouselItem);

    showCarouselItem(currentCarouselIndex);

    // Customer Reviews - Sliding Reviews
    const reviews = document.querySelectorAll(".review");
    let currentReviewIndex = 0;

    const showReview = (index) => {
        reviews.forEach((review, i) => {
            review.style.display = i === index ? "block" : "none";
        });
    };

    const nextReview = () => {
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
        showReview(currentReviewIndex);
    };

    const prevReview = () => {
        currentReviewIndex =
            (currentReviewIndex - 1 + reviews.length) % reviews.length;
        showReview(currentReviewIndex);
    };

    document.querySelector(".review-next").addEventListener("click", nextReview);
    document.querySelector(".review-prev").addEventListener("click", prevReview);

    showReview(currentReviewIndex);

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll("a[href^='#']");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Form Validation in Contact Section
    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        alert("Thank you for reaching out! We'll get back to you soon.");
        contactForm.reset();
    });
});