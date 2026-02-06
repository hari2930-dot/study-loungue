// script.js

// Mobile navigation toggle functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    // Toggle mobile navigation
});

// Intersection Observer for fade-in animations
const fadeIns = document.querySelectorAll('.fade-in');

const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

fadeIns.forEach(fadeIn => {
    observer.observe(fadeIn);
});

// CSS classes for animations
// In your CSS, add styles for .visible and transitions
