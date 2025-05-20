document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

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

    // Fetch GitHub Projects
async function fetchGitHubProjects() {
    const featuredProjects = [
        'ewardronin35/Research-System',
        'ewardronin35/CHED-eTrack',
        'ewardronin35/PilarCare',
        'ewardronin35/Registrar-Monitoring-System',
        'ewardronin35/Portfolio-with-Content-Management-',
        'ewardronin35/Alert-and-Lost-Found-Notification-in-PCZC'
    ];

    try {
        const projectsContainer = document.querySelector('#projects .row');
        projectsContainer.innerHTML = ''; // Clear existing content
        
        for (const projectPath of featuredProjects) {
            const response = await fetch(`https://api.github.com/repos/${projectPath}`);
            const project = await response.json();
            const card = createProjectCard(project);
            projectsContainer.innerHTML += card;
        }

        // Initialize AOS for new elements
        AOS.refresh();
    } catch (error) {
        console.error('Error fetching projects:', error);
        const projectsContainer = document.querySelector('#projects .row');
        projectsContainer.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-danger">Error loading projects. Please try again later.</p>
            </div>
        `;
    }
}
function createProjectCard(project) {
    const truncateDescription = (desc, maxLength = 100) => {
        if (!desc) return 'No description available';
        return desc.length > maxLength ? desc.substring(0, maxLength) + '...' : desc;
    };

    return `
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
            <div class="project-card">
                <div class="project-image">
                    <img src="https://opengraph.githubassets.com/1/${project.full_name}" alt="${project.name}">
                    <div class="project-overlay">
                        <a href="${project.html_url}" class="btn btn-gradient" target="_blank">
                            <i class="fas fa-external-link-alt me-2"></i>View Project
                        </a>
                    </div>
                </div>
                <div class="project-content p-4">
                    <h3 class="text-truncate mb-3">${project.name}</h3>
                    <p class="mb-3">${truncateDescription(project.description)}</p>
                    <div class="project-tags">
                        ${project.language ? `
                            <span class="project-tag">
                                <i class="fas fa-code"></i> ${project.language}
                            </span>
                        ` : ''}
                        <span class="project-tag">
                            <i class="fas fa-star"></i> ${project.stargazers_count}
                        </span>
                        <span class="project-tag">
                            <i class="fas fa-code-branch"></i> ${project.forks_count}
                        </span>
                        <span class="project-tag">
                            <i class="fas fa-clock"></i> ${new Date(project.created_at).toLocaleDateString()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;
}
    fetchGitHubProjects();

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