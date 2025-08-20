document.addEventListener('DOMContentLoaded', function() {
    initProfileSlider();

AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
    
    mirror: true,
    anchorPlacement: 'top-bottom',
});
  const navbar = document.querySelector('.navbar');
    const scrollProgressBar = document.querySelector('.scroll-progress');
    const sections = document.querySelectorAll('section[id]');
    

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
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');


// Mobile menu functionality
function initProfileSlider() {
    const profileWrapper = document.getElementById('profile-tilt-wrapper');
    if (profileWrapper) {
        const slides = document.querySelectorAll('.profile-slide');
        const dots = document.querySelectorAll('.profile-dot');
        let currentSlide = 0;
        let slideInterval;

        // Show initial slide
        showSlide(0);

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.opacity = i === index ? '1' : '0';
                slide.style.zIndex = i === index ? '1' : '0';
            });
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function startSlideshow() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function stopSlideshow() {
            clearInterval(slideInterval);
        }

        // Add click handlers for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
                stopSlideshow();
                startSlideshow();
            });
        });

        // Start automatic slideshow
        startSlideshow();

        // Pause on hover
        profileWrapper.addEventListener('mouseenter', stopSlideshow);
        profileWrapper.addEventListener('mouseleave', startSlideshow);
    }
}
const mobileMenu = {
    init() {
        const hamburger = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const isNavbarCollapse = e.target.closest('.navbar-collapse');
            const isHamburger = e.target.closest('.navbar-toggler');
            
            if (!isNavbarCollapse && !isHamburger && navbarCollapse.classList.contains('show')) {
                hamburger.click();
            }
        });

        // Close menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    hamburger.click();
                }
            });
        });

        // Close menu on scroll
        window.addEventListener('scroll', () => {
            if (navbarCollapse.classList.contains('show')) {
                hamburger.click();
            }
        });

        // Add touch event handling for mobile
        document.addEventListener('touchstart', (e) => {
            const isNavbarCollapse = e.target.closest('.navbar-collapse');
            const isHamburger = e.target.closest('.navbar-toggler');
            
            if (!isNavbarCollapse && !isHamburger && navbarCollapse.classList.contains('show')) {
                hamburger.click();
            }
        });
    }
};
mobileMenu.init();
const mobileOptimizations = {
    init() {
        if (window.innerWidth <= 768) {
            // Defer non-critical resources
            this.deferImages();
            this.optimizeAnimations();
            this.addPullToRefresh();
        }
    },

    deferImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    },

    optimizeAnimations() {
        // Use requestAnimationFrame for smooth animations
        const animatedElements = document.querySelectorAll('.animated-element');
        
        const animate = () => {
            animatedElements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    element.classList.add('animate');
                }
            });
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    },

    addPullToRefresh() {
        // Add pull-to-refresh functionality if needed
    }
};
    mobileOptimizations.init();

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
            navbarCollapse.classList.remove('show');
        }
    });
});

 
// Replace the existing preloader code
window.addEventListener('load', () => {
    const preloader = document.querySelector('#preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

    // Typing animation
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

    // ================== Project Slider Logic ==================
    const slider = document.querySelector('.slider-container');
    if (slider) {
        const slides = document.querySelector('.slides');
        const slideItems = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        let currentIndex = 0;
        const slideCount = slideItems.length;

        function updateSliderPosition() {
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSliderPosition();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateSliderPosition();
        });

        // Optional: Auto-slide
        let autoSlideInterval = setInterval(() => {
            nextBtn.click();
        }, 5000); // Change slide every 5 seconds

        // Pause on hover
        slider.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });

        slider.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(() => {
                nextBtn.click();
            }, 5000);
        });
    }

    async function fetchProjects() {
        try {
            const response = await fetch('projects.json');
            const data = await response.json();
            const projectsContainer = document.querySelector('#projects .row');
            projectsContainer.innerHTML = '';

            const priorityProjects = data.projects.filter(project =>
                project.name.toLowerCase().includes('pilarcare') ||
                project.name.toLowerCase().includes('ched-etrack') ||
                project.name.toLowerCase().includes('research system')
            );

            priorityProjects.forEach(project => {
                projectsContainer.innerHTML += createProjectCard(project, true);
            });

            const otherProjects = data.projects.filter(project => 
                !project.name.toLowerCase().includes('pilarcare') &&
                !project.name.toLowerCase().includes('ched-etrack') &&
                !project.name.toLowerCase().includes('research system')
            );

            if (otherProjects.length > 0) {
                const otherProjectsContainer = document.createElement('div');
                otherProjectsContainer.id = 'other-projects';
                otherProjectsContainer.className = 'row g-4';
                otherProjectsContainer.style.display = 'none';

                otherProjects.forEach(project => {
                    otherProjectsContainer.innerHTML += createProjectCard(project, false);
                });

                projectsContainer.appendChild(otherProjectsContainer);

                const showMoreBtn = document.createElement('button');
                showMoreBtn.className = 'btn btn-gradient mt-4 mx-auto d-block';
                showMoreBtn.textContent = 'Show More Projects';
                showMoreBtn.onclick = function() {
                    const otherProjectsEl = document.getElementById('other-projects');
                    if (otherProjectsEl.style.display === 'none') {
                        otherProjectsEl.style.display = 'flex';
                        showMoreBtn.textContent = 'Show Less Projects';
                        otherProjectsEl.style.opacity = '0';
                        setTimeout(() => {
                            otherProjectsEl.style.transition = 'opacity 0.3s ease';
                            otherProjectsEl.style.opacity = '1';
                        }, 10);
                    } else {
                        otherProjectsEl.style.opacity = '0';
                        setTimeout(() => {
                            otherProjectsEl.style.display = 'none';
                            showMoreBtn.textContent = 'Show More Projects';
                        }, 300);
                    }
                };
                const buttonContainer = document.createElement('div');
                buttonContainer.className = 'col-12 text-center';
                buttonContainer.appendChild(showMoreBtn);
                projectsContainer.appendChild(buttonContainer);
            }

            AOS.refresh();

        } catch (error) {
            console.error('Error loading projects:', error);
            const projectsContainer = document.querySelector('#projects .row');
            projectsContainer.innerHTML = `<div class="col-12 text-center"><p class="text-danger">Error loading projects. Please try again later.</p></div>`;
        }
    }

    function createProjectCard(project, showImage = true) {
        const technologiesList = project.technologies.map(tech => `<span class="project-tag"><i class="fas fa-code"></i> ${tech}</span>`).join('');
        const featuresList = project.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('');

        return `
            <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
                <div class="project-card h-100">
                    ${showImage ? `
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.name}" class="img-fluid" onerror="this.onerror=null;this.src='https://placehold.co/600x400/1d2d50/e6f1ff?text=Project+Image';">
                        <div class="project-overlay">
                            <div class="project-actions">
                                <a href="https://github.com/${project.github}" class="btn btn-outline" target="_blank">
                                    <i class="fab fa-github"></i> Source Code
                                </a>
                            </div>
                        </div>
                    </div>` : ''}
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
                        ${!showImage ? `
                        <div class="mt-3">
                            <a href="https://github.com/${project.github}" class="btn btn-outline btn-sm" target="_blank">
                                <i class="fab fa-github"></i> View on GitHub
                            </a>
                        </div>` : ''}
                    </div>
                </div>
            </div>`;
    }

    fetchProjects();

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
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        scrollProgressBar.style.width = scrollProgress + '%';

        // Active link highlighting on scroll (Scroll Spy)
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
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


    // Scroll animations
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
  // ================== Advanced Swiper Carousel ==================
    const swiper = new Swiper('.my-work-slider', {
        // Optional parameters
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        
        // Autoplay
        autoplay: {
          delay: 4000, // 4 seconds
          disableOnInteraction: false,
        },
        
        // Coverflow effect settings
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or default to user's system preference
const currentTheme = localStorage.getItem('theme') || 
    (prefersDarkScheme.matches ? 'dark' : 'light');

// Set initial theme
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle handler
themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' 
        ? 'light' 
        : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});
function updateTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const icon = document.querySelector('.theme-toggle i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    // Add transition class
    document.body.classList.add('theme-transition');
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 300);
}
function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}
function checkTime() {
    const hour = new Date().getHours();
    // Light theme between 6 AM and 5 PM (17:00)
    const shouldBeLightTheme = hour >= 6 && hour < 17;
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (shouldBeLightTheme && currentTheme !== 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateThemeIcon('light');
    } else if (!shouldBeLightTheme && currentTheme !== 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateThemeIcon('dark');
    }
}

// Check time on page load
checkTime();

// Check time every minute
setInterval(checkTime, 60000);
