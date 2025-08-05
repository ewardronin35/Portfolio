document.addEventListener('DOMContentLoaded', function() {

    // ===================================================================
    // 1. DOM ELEMENT SELECTION
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
        strings: ['Full Stack Developer', 'System Analyst', 'Web Developer', 'Software Engineer', 'Data Analyst', 'Mobile App Creator', 'UI/UX Enthusiast'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true
    });

    // Initialize Particles.js for the hero background
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#a0a0a0" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5, "random": false }, "size": { "value": 3, "random": true }, "line_linked": { "enable": true, "distance": 150, "color": "#a0a0a0", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "out" } },
            "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } } },
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
        autoplay: { delay: 4000, disableOnInteraction: false },
        coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    });


    // ===================================================================
    // 3. UI FUNCTIONS & EVENT HANDLERS
    // ===================================================================

    // --- Preloader Hiding ---
    window.addEventListener('load', () => {
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.addEventListener('transitionend', () => preloader.style.display = 'none');
        }
    });

    // --- Theme Management ---
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    function updateThemeIcon(theme) { if (themeToggle) themeToggle.querySelector('i').className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'; }
    function setTheme(theme) { document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('theme', theme); updateThemeIcon(theme); }
    
    // --- Scroll Behavior ---
    function handleScroll() {
        const scrollY = window.pageYOffset;
        if (navbar) { if (scrollY > 50) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled'); }
        if (scrollProgressBar) {
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            scrollProgressBar.style.width = `${(scrollY / scrollHeight) * 100}%`;
        }
        let currentSectionId = '';
        sections.forEach(section => { if (scrollY >= section.offsetTop - 150) currentSectionId = section.getAttribute('id'); });
        navLinks.forEach(link => { link.classList.remove('active'); if (link.getAttribute('href')?.substring(1) === currentSectionId) link.classList.add('active'); });
    }

    // --- Profile Image Tilt Effect ---
    if (profileWrapper) {
        profileWrapper.addEventListener('mousemove', e => {
            const rect = profileWrapper.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5, rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
            profileWrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        profileWrapper.addEventListener('mouseleave', () => profileWrapper.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)');
    }


    // ===================================================================
    // 4. DATA FETCHING (PROJECTS)
    // ===================================================================
    function createProjectCard(project) {
        const technologiesList = project.technologies.map(tech => `<span class="project-tag"><i class="fas fa-code"></i> ${tech}</span>`).join('');
        const featuresList = project.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('');
        return `
            <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
                <div class="project-card h-100">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.name}" class="img-fluid" onerror="this.onerror=null;this.src='https://placehold.co/600x400/1d2d50/e6f1ff?text=Project+Image';">
                        <div class="project-overlay">
                            <div class="project-actions">
                                <a href="https://github.com/${project.github}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
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
                            <ul class="feature-list">${featuresList}</ul>
                        </div>
                        <div class="project-technologies mt-auto">
                            <h4 class="h6 mb-2">Technologies Used:</h4>
                            <div class="project-tags">${technologiesList}</div>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    async function fetchProjects() {
        try {
            const response = await fetch('projects.json');
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json();
            const projectsContainer = document.querySelector('#projects .row');
            if (projectsContainer) {
                projectsContainer.innerHTML = data.projects.map(createProjectCard).join('');
                AOS.refresh();
            }
        } catch (error) {
            console.error('Error fetching projects.json:', error);
            const projectsContainer = document.querySelector('#projects .row');
            if(projectsContainer) projectsContainer.innerHTML = `<div class="col-12 text-center"><p class="text-danger">Could not load projects. Please check that projects.json is present and valid.</p></div>`;
        }
    }


    // ===================================================================
    // 5. EVENT LISTENERS & INITIAL EXECUTION
    // ===================================================================

    // --- Set Initial Theme ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const hour = new Date().getHours();
        setTheme((hour >= 6 && hour < 17) ? 'light' : 'dark');
    }
    
    // --- Attach Event Listeners ---
    window.addEventListener('scroll', handleScroll);
    if (themeToggle) themeToggle.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
                if (navbarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click();
                }
            }
        });
    });

    // --- Run Initial Functions ---
    handleScroll();
    fetchProjects();

});