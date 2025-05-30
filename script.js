document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Custom cursor
       const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    // Check if device is not mobile/tablet
    function isDesktop() {
        return window.innerWidth > 768 && !('ontouchstart' in window);
    }

    // Initialize cursor
    function initCursor() {
        if (isDesktop()) {
            // Show cursors
            if (cursor) cursor.style.display = 'block';
            if (cursorFollower) cursorFollower.style.display = 'block';
            
            // Add mouse move event
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
                
                setTimeout(() => {
                    cursorFollower.style.left = e.clientX + 'px';
                    cursorFollower.style.top = e.clientY + 'px';
                }, 100);
            });
        } else {
            // Hide cursors on mobile
            if (cursor) cursor.style.display = 'none';
            if (cursorFollower) cursorFollower.style.display = 'none';
        }
    }

    // Initialize cursor
    initCursor();

    // Re-initialize on window resize
    window.addEventListener('resize', initCursor);
    // Preloader
    window.addEventListener('load', () => {
        document.querySelector('#preloader').style.display = 'none';
    });

    // Typing animation
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

 async function fetchProjects() {
    try {
        const response = await fetch('projects.json');
        const data = await response.json();
        const projectsContainer = document.querySelector('#projects .row');
        projectsContainer.innerHTML = '';
        
        data.projects.forEach(project => {
            const card = createProjectCard(project);
            projectsContainer.innerHTML += card;
        });

        // Initialize AOS for new elements
        AOS.refresh();
    } catch (error) {
        console.error('Error loading projects:', error);
        const projectsContainer = document.querySelector('#projects .row');
        projectsContainer.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-danger">Error loading projects. Please try again later.</p>
            </div>
        `;
    }
}
function createProjectCard(project) {
    const technologiesList = project.technologies.map(tech => 
        `<span class="project-tag"><i class="fas fa-code"></i> ${tech}</span>`
    ).join('');

    const featuresList = project.features.map(feature =>
        `<li><i class="fas fa-check"></i> ${feature}</li>`
    ).join('');

    return `
        <div class="col-lg-6 mb-4" data-aos="fade-up">
            <div class="project-card">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.name}" class="img-fluid">
                    <div class="project-overlay">
                        <div class="project-actions">
                            <a href="${project.demoLink}" class="btn btn-gradient me-2" target="_blank">
                                <i class="fas fa-external-link-alt"></i> Live Demo
                            </a>
                            <a href="https://github.com/${project.github}" class="btn btn-outline" target="_blank">
                                <i class="fab fa-github"></i> Source Code
                            </a>
                        </div>
                    </div>
                </div>
                <div class="project-content p-4">
                    <h3 class="mb-3">${project.name}</h3>
                    <p class="mb-3">${project.description}</p>
                    <div class="project-features mb-4">
                        <h4 class="h6">Key Features:</h4>
                        <ul class="feature-list">
                            ${featuresList}
                        </ul>
                    </div>
                    <div class="project-technologies">
                        <h4 class="h6 mb-2">Technologies Used:</h4>
                        <div class="project-tags">
                            ${technologiesList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
    fetchProjects();

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
$(document).ready(function() {
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'send_message.php',
            data: $(this).serialize(),
            success: function(response) {
                if (response === 'success') {
                    toastr.success('Message sent successfully!');
                    $('#contact-form')[0].reset();
                } else {
                    toastr.error('Error sending message.');
                }
            },
            error: function() {
                toastr.error('Error sending message.');
            }
        });
    });
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