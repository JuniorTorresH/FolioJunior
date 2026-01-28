document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-out-back',
        once: true,
        mirror: false
    });

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Add Glitch Effect to Hero Title on Hover (Optional fun extra)
    const heroTitle = document.querySelector('.glitch-effect');
    if(heroTitle) {
        heroTitle.addEventListener('mouseover', () => {
            heroTitle.style.textShadow = '2px 2px 0px #ff00ff, -2px -2px 0px #39ff14';
        });
        heroTitle.addEventListener('mouseout', () => {
            heroTitle.style.textShadow = 'none';
        });
    }
});