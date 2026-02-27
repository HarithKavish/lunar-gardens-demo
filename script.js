document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animation on scroll for cards and illustrations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-enter');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.card, .lunar-illustration, .future-illustration').forEach(element => {
        observer.observe(element);
    });

    // Add animation classes
    function addAnimationClasses() {
        const elements = document.querySelectorAll('.animate-enter');
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            setTimeout(() => {
                element.style.transition = 'opacity var(--transition-speed) ease, transform var(--transition-speed) ease';
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 10);
            }, 10);
        });
    }

    // Initialize animations
    addAnimationClasses();

    // Contact form placeholder functionality
    document.querySelector('#contact-info a').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Contact form will be implemented soon. Please check back for updates!');
    });
});