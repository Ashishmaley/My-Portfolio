// script.js
document.addEventListener("DOMContentLoaded", function() {
    const fadeSections = document.querySelectorAll('.fade-section');

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, options);

    fadeSections.forEach(section => {
        observer.observe(section);
    });
});

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header');
    const fadeSections = document.querySelectorAll('.fade-section');
    let lastScrollY = window.scrollY;

    // Intersection Observer for fade-in sections
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, options);

    fadeSections.forEach(section => {
        observer.observe(section);
    });

    // Scroll event to handle header visibility
    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            if (window.scrollY > 50) { // Adjust the value as needed
                header.classList.add('hidden');
            }
        } else {
            // Scrolling up or at the top
            header.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });
});

