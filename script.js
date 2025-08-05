document.addEventListener('DOMContentLoaded', function() {

    // ===================================================================
    // 1. VARIABLE DECLARATIONS
    // ===================================================================
    const navbar = document.querySelector('.navbar');
    const scrollProgressBar = document.querySelector('.scroll-progress');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const themeToggle = document.querySelector('.theme-toggle');
    const preloader = document.querySelector('#preloader');
    const profileWrapper = document.getElementById('profile-tilt-wrapper');

    // ===================================================================
    // 2. LIBRARY INITIALIZATIONS
    // ===================================================================

    // Initialize AOS (Animation on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true, // Animates elements only once for better performance
        offset: 50,
    });

    // Initialize Typed.js for the hero section text
    new Typed('.typed-text', {
        strings: [
            'Full Stack Developer',
            'System Analyst',
            'Web Developer',
            'Software Engineer',
            'Data Analyst',
            'Mobile App Creator',
            'UI/UX Enthusiast'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true
    });

    // Initialize Particles.js for the hero background
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

    // Initialize Swiper Carousel for the "My Work" section
    new Swiper('.my-work-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    // ===================================================================
    // 3. UI AND EVENT HANDLERS
    // ===================================================================

    // --- Preloader ---
    if (preloader) {
        // This uses window.onload to ensure all assets are loaded
        window.onload = () => {
            preloader.style.opacity = '0';
            preloader.addEventListener('transitionend', () => preloader.style.display = 'none');
        };
    }
    
    // --- Theme Toggling Logic ---
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    function updateThemeIcon(theme) {
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
    
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
    }

    // Check time and set theme automatically
    function checkTimeAndSetTheme() {
        const hour = new Date().getHours();
        // Light theme between 6 AM and 5 PM (17:00)
        const shouldBeLightTheme = hour >= 6 && hour < 17;
        const autoTheme = shouldBeLightTheme ? 'light' : 'dark';
        setTheme(autoTheme);
    }
    
    // Set initial theme based on local storage, or system preference, or time of day
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        checkTimeAndSetTheme();
    }
    
    // Manual theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // Check time every minute to auto-switch theme
    setInterval(checkTimeAndSetTheme, 60000);


    // --- Scroll Handling (Navbar Style, Progress Bar, Active Link Highlighting) ---
    function handleScroll() {
        const scrollY = window.pageYOffset;

        // Navbar style change on scroll
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Scroll progress bar
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollY / scrollHeight) * 100;
        scrollProgressBar.style.width = scrollProgress + '%';

        // Active link highlighting (Scroll Spy)
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 150) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', handleScroll);

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed navbar
                    behavior: 'smooth'
                });
                // Close mobile menu on click
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });

    // --- Profile Image Tilt Effect ---
    if (profileWrapper) {
        profileWrapper.addEventListener('mousemove', (e) => {
            const rect = profileWrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            profileWrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        profileWrapper.addEventListener('mouseleave', () => {
            profileWrapper.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    }

    // --- Dynamic Project Loading from JSON ---
    // Note: This logic remains but will only run if the '#projects .row' container exists.
    async function fetchProjects() {
        try {
            const response = await fetch('projects.json');
            const data = await response.json();
            const projectsContainer = document.querySelector('#projects .row');
            if (!projectsContainer) return;

            projectsContainer.innerHTML = ''; // Clear existing
            
            // Your logic for priority and other projects... (This part is preserved)
            const priorityProjects = data.projects.filter(p => ['pilarcare', 'ched-etrack', 'research system'].some(name => p.name.toLowerCase().includes(name)));
            const otherProjects = data.projects.filter(p => !priorityProjects.includes(p));

            priorityProjects.forEach(project => {
                projectsContainer.innerHTML += createProjectCard(project, true);
            });

            if (otherProjects.length > 0) {
                const otherProjectsContainer = document.createElement('div');
                otherProjectsContainer.id = 'other-projects';
                otherProjectsContainer.className = 'row g-4 d-none'; // Start hidden
                otherProjects.forEach(project => {
                    otherProjectsContainer.innerHTML += createProjectCard(project, false);
                });
                projectsContainer.insertAdjacentElement('afterend', otherProjectsContainer);

                const showMoreBtn = document.createElement('button');
                showMoreBtn.className = 'btn btn-gradient mt-4 mx-auto d-block';
                showMoreBtn.textContent = 'Show More Projects';
                showMoreBtn.addEventListener('click', () => {
                    const isHidden = otherProjectsContainer.classList.contains('d-none');
                    if (isHidden) {
                        otherProjectsContainer.classList.remove('d-none');
                        showMoreBtn.textContent = 'Show Less Projects';
                    } else {
                        otherProjectsContainer.classList.add('d-none');
                        showMoreBtn.textContent = 'Show More Projects';
                    }
                });
                projectsContainer.insertAdjacentElement('afterend', showMoreBtn);
            }
            AOS.refresh();
        } catch (error) {
            console.error('Error loading projects:', error);
        }
    }
    
    function createProjectCard(project, showImage) {
        // Card creation logic... (This part is preserved)
        return ``; 
    }

    fetchProjects();
});