
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Eduard - System Analyst & Full Stack Developer Portfolio">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data: blob:">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Eduard's Portfolio</title>
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="icon.ico">
    <!-- CSS Dependencies -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
</head>
<body>
        <!-- Preloader -->
    <div id="preloader">
        <div class="loader">
            <div class="loader-inner"></div>
        </div>
    </div>

    <!-- Cursor -->
    <div class="cursor"></div>
    <div class="cursor-follower"></div>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
        <a class="navbar-brand fw-bold" href="#">
            <div class="logo-container">
                <span class="logo-bracket">&lt;</span>
                <span class="logo-text">Eduard</span>
                <span class="logo-bracket">/&gt;</span>
            </div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#home">
                        <i class="fas fa-home me-1"></i> Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">
                        <i class="fas fa-user me-1"></i> About
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#skills">
                        <i class="fas fa-code me-1"></i> Skills
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#projects">
                        <i class="fas fa-project-diagram me-1"></i> Projects
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">
                        <i class="fas fa-envelope me-1"></i> Contact
                    </a>
                </li>
                <li class="nav-item">
                    <button class="theme-toggle btn btn-link nav-link" aria-label="Toggle theme">
                        <i class="fas fa-moon"></i>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</nav>

    <!-- Hero Section -->
<section id="home" class="hero-section">
    <div class="particles-js" id="particles-js"></div>
    <div class="container">
        <div class="row align-items-center min-vh-100">
            <div class="col-lg-6 text-center text-lg-start" data-aos="fade-right">
                <h1 class="display-4 fw-bold mb-4">
                    Hi, I'm <span class="text-gradient">Eduard Roland Donor</span>
                </h1>
                <p class="lead mb-4">
                    <span class="typed-text"></span>
                </p>
                <div class="d-flex gap-3 justify-content-center justify-content-lg-start">
                    <a href="#contact" class="btn btn-gradient">Contact Me</a>
                    <a href="#projects" class="btn btn-outline">Projects</a>
                </div>
            </div>
            <div class="col-lg-6 text-center" data-aos="fade-left">
                <div class="profile-wrapper">
                    <div class="profile-circle">
                        <img src="photo.png" alt="Edward" class="profile-img">
                    </div>
                    <div class="profile-circle-bg"></div>
                </div>
            </div>
        </div>
    </div>
</section>

    <!-- About Section -->

<section id="about" class="py-5">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6" data-aos="fade-right">
                <h2 class="section-title">About Me</h2>
                <p class="lead">A passionate Full Stack Developer and System Analyst with academic excellence and a drive for innovation.</p>
                
                <div class="education-timeline mt-4">
                    <h3 class="h4 mb-4"><i class="fas fa-graduation-cap me-2"></i>Education</h3>
                    
                    <div class="timeline-item" data-aos="fade-up">
                        <span class="badge bg-gradient mb-2">2021 - 2025</span>
                        <h4 class="h5">Bachelor of Science in Information Technology</h4>
                        <p class="text-gradient fw-bold">Cum Laude</p>
                        <p class="mb-0">Pilar College of Zamboanga City, Inc.</p>
                        <ul class="timeline-details">
                            <li>Graduated with academic honors (Cum Laude)</li>
                            <li>Major in Web and Mobile Development</li>
                            <li>Dean's Lister for 8 consecutive semesters</li>
                            <li>Thesis: "PilarCare: Web-Based Clinic Management System at Pilar College of Zamboanga City, Inc."</li>
                            <li>IT Council Member for 4 consecutive years</li>

                        </ul>
                    </div>

                    <div class="timeline-item" data-aos="fade-up" data-aos-delay="100">
                        <span class="badge bg-gradient mb-2">2017 - 2019</span>
                        <h4 class="h5">Senior High School</h4>
                        <p class="mb-0">Pilar College of Zamboanga City, Inc.</p>
                        <p>ABM Strand - With Honors</p>
                        <ul class="timeline-details">
                            <li>Artist of the Year</li>
                            <li>Basketball Club President</li>
                        </ul>
                    </div>

                    <div class="timeline-item" data-aos="fade-up" data-aos-delay="200">
                        <span class="badge bg-gradient mb-2">2013 - 2017</span>
                        <h4 class="h5">High School</h4>
                        <p class="mb-0">Immaculate Conception Archdiocesan School de Calarian</p>
                        <ul class="timeline-details">
                            <li>Consistent Honor Student</li>
                            <li>Science Club Member</li>
                            <li>Mathematics Competition Participant</li>
                        </ul>
                    </div>
                </div>

               
<div class="work-experience mt-4">
    <h3 class="h4 mb-4">
        <i class="fas fa-briefcase me-2"></i>Work Experience
    </h3>
    
    <div class="timeline-item" data-aos="fade-up">
        <span class="badge bg-gradient mb-2">2023</span>
        <h4 class="h5">Programmer / OJT</h4>
        <p class="mb-2">Commission on Higher Education (CHED) Region IX</p>
        <p class="text-gradient mb-3">Zamboanga City</p>
        <ul class="timeline-details">
            <li>Developed CHED-eTrack: A comprehensive document management system</li>
            <li>Implemented Gmail-like interface for CHED internal communications</li>
            <li>Streamlined document tracking and processing workflows</li>
            <li>Improved records management efficiency through digitization</li>
        </ul>
    </div>
</div>         
  <div class="achievements mt-5">
                    <h3 class="h4 mb-3"><i class="fas fa-trophy me-2"></i>Key Achievements</h3>
                    <ul class="achievement-list">
                        <li>Dean's Lister Award (2019-2023)</li>
                        <li>Best Thesis Award for [Your Project]</li>
                        <li>Programming Competition Winner</li>
                        <li>Published Research Paper in [Conference/Journal Name]</li>
                    </ul>
                </div>


            </div>
            <div class="col-lg-6" data-aos="fade-left">
                <div class="about-image-wrapper">
                    <img src="photo.png" alt="Profile" class="img-fluid rounded-3 shadow">
                    <div class="experience-badge" data-aos="zoom-in" data-aos-delay="300">
                        <span class="number">4+</span>
                        <span class="text">Years of Coding Experience</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    <!-- Skills Section -->
<section id="skills" class="py-5 bg-light">
    <div class="container">
        <h2 class="section-title text-center mb-5" data-aos="fade-up">Skills & Technologies</h2>
        <div class="skills-grid">
            <!-- Backend -->
            <div class="skill-card" data-aos="fade-up">
                <div class="skill-icon backend">
                    <i class="fas fa-server"></i>
                </div>
                <h3>Backend</h3>
                <ul class="skill-list">
                    <li><i class="fab fa-php"></i> PHP & Laravel</li>
                    <li><i class="fab fa-node-js"></i> Node.js</li>
                    <li><i class="fab fa-python"></i> Python</li>
                    <li><i class="fab fa-java"></i> Java</li>
                </ul>
            </div>

            <!-- Frontend -->
            <div class="skill-card" data-aos="fade-up" data-aos-delay="100">
                <div class="skill-icon frontend">
                    <i class="fas fa-code"></i>
                </div>
                <h3>Frontend</h3>
                <ul class="skill-list">
                    <li><i class="fab fa-react"></i> React.js</li>
                    <li><i class="fab fa-js"></i> JavaScript</li>
                    <li><i class="fab fa-html5"></i> HTML5</li>
                    <li><i class="fab fa-css3-alt"></i> CSS3</li>
                </ul>
            </div>

            <!-- Mobile -->
            <div class="skill-card" data-aos="fade-up" data-aos-delay="200">
                <div class="skill-icon mobile">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <h3>Mobile</h3>
                <ul class="skill-list">
                    <li><i class="fab fa-android"></i> Kotlin</li>
                    <li><i class="fas fa-mobile"></i> Flutter</li>
                </ul>
            </div>

            <!-- Hardware & Networking -->
            <div class="skill-card" data-aos="fade-up" data-aos-delay="300">
                <div class="skill-icon hardware">
                    <i class="fas fa-microchip"></i>
                </div>
                <h3>Hardware & Networking</h3>
                <ul class="skill-list">
                    <li><i class="fas fa-network-wired"></i> Network Troubleshooting</li>
                    <li><i class="fas fa-desktop"></i> PC Building</li>
                    <li><i class="fas fa-server"></i> System Maintenance</li>
                </ul>
            </div>

            <!-- Multimedia -->
            <div class="skill-card" data-aos="fade-up" data-aos-delay="400">
                <div class="skill-icon multimedia">
                    <i class="fas fa-photo-video"></i>
                </div>
                <h3>Multimedia</h3>
                <ul class="skill-list">
                    <li><i class="fas fa-video"></i> Video Editing</li>
                    <li><i class="fas fa-camera"></i> Photography</li>
                    <li><i class="fas fa-palette"></i> Graphic Design</li>
                </ul>
                <div class="skill-details">
                    <p class="small text-muted mt-3">Tools:</p>
                    <div class="tool-tags">
                        <span class="tool-tag">Filmora</span>
                        <span class="tool-tag">After Effects</span>
                        <span class="tool-tag">Sony Vegas</span>
                        <span class="tool-tag">Photoshop</span>
                        <span class="tool-tag">Illustrator</span>
                    </div>
                </div>
                
            </div>
            <div class="skill-card" data-aos="fade-up" data-aos-delay="300">
                <div class="skill-icon leadership">
                    <i class="fas fa-users"></i>
                </div>
                <h3>Leadership & Communication</h3>
                <ul class="skill-list">
                    <li><i class="fas fa-comments"></i> Excellent Communication</li>
                    <li><i class="fas fa-lightbulb"></i> Effective Problem Solving</li>
                    <li><i class="fas fa-project-diagram"></i> Project Leadership</li>
                </ul>
            </div>
        </div>
    </div>
</section>

    <!-- Projects Section -->
    <section id="projects" class="py-5">
        <div class="container">
            <h2 class="section-title text-center mb-5" data-aos="fade-up">Featured Projects</h2>
            <div class="row g-4">
                <!-- Project cards will be dynamically loaded from GitHub -->
            </div>
        </div>
    </section>

  <!-- Replace the existing contact section with this -->
<!-- Replace the existing contact section with this simplified version -->
<section id="contact" class="py-5 bg-light">
    <div class="container">
        <h2 class="section-title text-center mb-5" data-aos="fade-up">Let's Connect</h2>
        <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
                <div class="contact-card" data-aos="fade-up">
                    <div class="contact-icons mb-4">
                        <a href="mailto:eduardroland20@gmail.com" class="contact-icon mx-3">
                            <i class="fas fa-envelope"></i>
                            <span>eduardroland20@gmail.com</span>
                        </a>
                    </div>
                    <div class="social-links mt-4">
                        <div class="d-flex gap-3 justify-content-center">
                            <a href="https://github.com/ewardronin35" class="social-icon" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i>
    </a>
    <a href="#" class="social-icon" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="#" class="social-icon" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook"></i>
    </a>
    <a href="#" class="social-icon" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="cv.pdf" class="social-icon" download>
        <i class="fas fa-download"></i>
    </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    <!-- Footer -->
    <footer class="py-4 text-center">
        <div class="container">
            <p class="mb-0">&copy; 2025 Eduard Roland Donor. All rights reserved.</p>
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <script src="script.js"></script>
 
<script>
    // Disable right click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    document.addEventListener('keydown', function(event) {
        if (event.keyCode == 123 || 
           (event.ctrlKey && event.shiftKey && event.keyCode == 73) || 
           (event.ctrlKey && event.shiftKey && event.keyCode == 74) ||
           (event.ctrlKey && event.keyCode == 85)) {
            event.preventDefault();
            return false;
        }
    });

    // Disable Developer Tools
    document.addEventListener('devtoolschange', event => {
        if (event.detail.isOpen) {
            document.body.innerHTML = 'Developer Tools are not allowed on this page.';
        }
    });

    // Disable text selection
    document.addEventListener('selectstart', event => event.preventDefault());
</script>
</body>
</html>