// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Initialize Typed.js
    const typed = new Typed('#typed-output', {
        strings: [
            'Full Stack Developer',
            'System Analyst',
            'Video Editor',
            'Photographer'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    });
    
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('active');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to nav links on scroll
    const sections = document.querySelectorAll('section');
    
    function highlightNavOnScroll() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`a[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('text-indigo-400'));
                navLink.classList.add('text-indigo-400');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // Parallax effect for hero section
    const heroSection = document.getElementById('home');
    
    window.addEventListener('scroll', function() {
        if (window.innerWidth > 768) {
            const scrollPosition = window.scrollY;
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
    
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight * 0.8;
            
            if (barPosition < screenPosition) {
                bar.style.width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
            }
        });
    }
    
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars(); // Run once on page load
    
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Validation is handled by the required attributes and PHP
            
            // Add loading state to button on submit
            const submitBtn = document.getElementById('submit-btn');
            submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin mr-2"></i> Sending...';
            submitBtn.disabled = true;
            
            // Form will be submitted normally, and PHP will handle the rest
        });
    }
});

// Add the fade-in animation to the page when it loads
window.addEventListener('load', function() {
    document.body.classList.add('fade-in');
});