document.addEventListener('DOMContentLoaded', function() {

    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        mirror: false
    });

    const navbar = document.querySelector('.navbar');
    const scrollProgressBar = document.querySelector('.scroll-progress');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Mobile menu functionality
    const mobileMenu = {
        init() {
            const hamburger = document.querySelector('.navbar-toggler');
            
            document.addEventListener('click', (e) => {
                const isNavbarCollapse = e.target.closest('.navbar-collapse');
                const isHamburger = e.target.closest('.navbar-toggler');
                
                if (!isNavbarCollapse && !isHamburger && navbarCollapse.classList.contains('show')) {
                    hamburger.click();
                }
            });

            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (navbarCollapse.classList.contains('show')) {
                        hamburger.click();
                    }
                });
            });
        }
    };
    mobileMenu.init();

    // Preloader
    window.addEventListener('load', () => {
        const preloader = document.querySelector('#preloader');
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Typing animation
    if (document.querySelector('.typed-text')) {
        new Typed('.typed-text', {
            strings: [
                'Full Stack Developer',
                'System Analyst',
                'Mobile Developer',
                'UI/UX Designer'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1000,
            loop: true
        });
    }

    // Particles.js initialization
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#a0a0a0" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#a0a0a0", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });
    }

    // Function to create project cards
    function createProjectCard(project) {
        const technologiesList = project.technologies.map(tech => `<span class="project-tag"><i class="fas fa-code"></i> ${tech}</span>`).join('');
        const featuresList = project.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('');

        return `
            <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
                <div class="project-card h-100">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.name}" class="img-fluid">
                        <div class="project-overlay">
                            <div class="project-actions">
                                <a href="${project.github}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-github"></i> Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3 class="mb-3">${project.name}</h3>
                        <p class="mb-3">${project.description}</p>
                        <div class="project-features mb-4">
                            <h4 class="h6">Key Features:</h4>
                            <ul class="feature-list">
                                ${featuresList}
                            </ul>
                        </div>
                        <div class="project-technologies mt-auto">
                            <h4 class="h6 mb-2">Technologies Used:</h4>
                            <div class="project-tags">
                                ${technologiesList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }
    
    // Fetch and display projects (simplified for a local HTML file)
    function displayProjects() {
        // Since we don't have a projects.json, we will manually create an array of project objects
        // and add them directly to the page.
        const projects = [
            // Your projects can be added here. Example:
            {
                "name": "PilarCare: Clinic Management System",
                "description": "A web-based system for managing clinic operations at Pilar College.",
                "features": ["Appointment scheduling", "Patient records management", "Inventory tracking"],
                "technologies": ["Laravel", "Bootstrap", "MySQL"],
                "github": "ewardronin35/PilarCare-Web-Based-Clinic-Management-System-at-Pilar-College",
                "image": "path/to/pilarcare.png"
            },
            {
                "name": "CHED-eTrack: Document Management System",
                "description": "A comprehensive system for tracking and managing documents for CHED Region IX.",
                "features": ["Document status tracking", "Internal messaging", "Automated notifications"],
                "technologies": ["Laravel", "JavaScript", "Bootstrap"],
                "github": "ewardronin35/CHED-eTrack-Document-Management-System",
                "image": "path/to/ched.png"
            }
        ];

        const projectsContainer = document.querySelector('#projects .row');
        projectsContainer.innerHTML = ''; // Clear any existing content

        projects.forEach(project => {
            projectsContainer.innerHTML += createProjectCard(project);
        });

        AOS.refresh();
    }
    
    // Call the display projects function
    displayProjects();
    

    // Consolidated Scroll Handler
    function handleScroll() {
        // Navbar scroll effect
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Scroll progress bar
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (scrollHeight > 0) {
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            scrollProgressBar.style.width = scrollProgress + '%';
        }
        
        // Active link highlighting on scroll (Scroll Spy)
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on load to set initial state

    // Smooth Scroll Handler
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    const themeToggle = document.querySelector('.theme-toggle');

    // Theme functionality
    function updateTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
    }

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    // Check for saved theme preference or default to user's system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme') || 
        (prefersDarkScheme.matches ? 'dark' : 'light');
    updateTheme(currentTheme);

    // Theme toggle handler
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' 
            ? 'light' 
            : 'dark';
        updateTheme(newTheme);
    });
});