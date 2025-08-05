import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Briefcase, Code, Award, GraduationCap, Mail, GitHub, Linkedin, Facebook, Instagram, Download, Menu, X, ChevronsRight, Server, Smartphone, PenTool, Users, HardDrive, Camera } from 'lucide-react';

// Main App Component
const App = () => {
    const [theme, setTheme] = useState('dark');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    const sections = [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'skills', name: 'Skills' },
        { id: 'projects', name: 'Projects' },
        { id: 'certifications', name: 'Certs' },
        { id: 'contact', name: 'Contact' },
    ];

    return (
        <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans leading-relaxed">
            {/* --- Navigation --- */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md shadow-slate-200/5 dark:shadow-black/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <a href="#home" className="text-2xl font-bold">
                            <span className="text-indigo-500">&lt;</span>
                            Eduard
                            <span className="text-indigo-500">/&gt;</span>
                        </a>
                        <div className="hidden md:flex items-center space-x-8">
                            {sections.map(section => (
                                <a key={section.id} href={`#${section.id}`} className="text-sm font-medium uppercase tracking-wider hover:text-indigo-500 transition-colors duration-300">{section.name}</a>
                            ))}
                        </div>
                        <div className="flex items-center">
                             <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-300">
                                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                            </button>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden ml-4 p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800">
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white dark:bg-slate-900 py-4">
                        {sections.map(section => (
                            <a key={section.id} href={`#${section.id}`} onClick={() => setIsMenuOpen(false)} className="block text-center py-2 text-sm font-medium uppercase tracking-wider hover:text-indigo-500 transition-colors duration-300">{section.name}</a>
                        ))}
                    </div>
                )}
            </nav>

            <main className="pt-20">
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <CertificationsSection />
                <RoadmapSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
};

// --- Hero Section ---
const HeroSection = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['Full Stack Developer', 'System Analyst', 'Mobile Developer', 'UI/UX Designer'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        };
        // Dynamically load Typed.js if it's not already available
        if (window.Typed) {
            typedRef.current = new window.Typed('#typed-text', options);
        } else {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
            script.onload = () => {
                typedRef.current = new window.Typed('#typed-text', options);
            };
            document.body.appendChild(script);
        }

        return () => {
            if (typedRef.current) {
                typedRef.current.destroy();
            }
        };
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center bg-dots-pattern">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">Eduard Roland Donor</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8">
                            I'm a <span id="typed-text"></span>
                        </p>
                         <div className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg shadow-lg backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 mb-8">
                            <h3 className="font-bold text-lg mb-3 flex items-center"><Briefcase className="mr-2 text-indigo-500" />Currently Working On:</h3>
                            <div className="space-y-3 text-sm">
                                <p className="flex items-start"><ChevronsRight className="text-teal-400 mr-2 mt-1 flex-shrink-0" size={18}/> Building a Sari-Sari Store Inventory System with React.js & Laravel 12.</p>
                                <p className="flex items-start"><ChevronsRight className="text-teal-400 mr-2 mt-1 flex-shrink-0" size={18}/> Maintaining & Bug Fixing the CHED-eTrack System in Laravel 12.</p>
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#contact" className="bg-indigo-500 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg">Contact Me</a>
                            <a href="#projects" className="bg-transparent border-2 border-indigo-500 text-indigo-500 font-bold py-3 px-8 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:scale-105">Projects</a>
                        </div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-indigo-500 to-teal-400 animate-pulse-slow"></div>
                        <img src="https://placehold.co/400x400/FFFFFF/4A90E2?text=Eduard" alt="Eduard Roland Donor" className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-white dark:border-slate-900 shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- About Section ---
const AboutSection = () => {
    const education = [
        { year: '2021 - 2025', degree: 'BS in Information Technology', school: 'Pilar College of Zamboanga City, Inc.', honor: 'Cum Laude', details: ["Major in Web and Mobile Development", "Dean's Lister (8 consecutive semesters)", "Thesis: 'PilarCare: Web-Based Clinic Management System'", "IT Council Member (4 years)", "Leadership Award By Program (Gold)"] },
        { year: '2018 - 2020', degree: 'Senior High School', school: 'Pilar College of Zamboanga City, Inc.', honor: 'With Honors (ABM Strand)', details: ["Artist of the Year", "Basketball Club President"] },
    ];
    const experience = [
        { year: '2023', role: 'Programmer / OJT', company: 'Commission on Higher Education (CHED) Region IX', location: 'Zamboanga City', details: ["Developed CHED-eTrack: A comprehensive document management system.", "Implemented a Gmail-like interface for internal communications.", "Streamlined document tracking and processing workflows."] },
    ];
    const achievements = [
        { year: '2025', title: 'BlueCode: Hackathon Winner', detail: 'BEST in UI/UX' },
        { year: '2025', title: 'Leadership Award by Program (Gold)', detail: 'For leading and being a consecutive member of IT Council 2020-2025' },
        { year: '2025', title: 'Proficiency Award (Gold)', detail: 'Best Performance in the On-the-Job Training Program by CHED Region IX' },
        { year: '2020-2025', title: "Dean's Lister Award", detail: 'Consistent academic excellence for 8 consecutive semesters' },
    ];

    return (
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
                <div className="grid md:grid-cols-5 gap-12">
                    <div className="md:col-span-3">
                        <h3 className="text-2xl font-bold mb-6 flex items-center"><GraduationCap className="mr-3 text-indigo-500" /> Education</h3>
                        <div className="relative border-l-2 border-indigo-200 dark:border-slate-700 space-y-8 pl-8">
                            {education.map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-[42px] top-1 w-4 h-4 bg-white dark:bg-slate-950 border-2 border-indigo-500 rounded-full"></div>
                                    <span className="text-sm font-semibold text-indigo-500">{item.year}</span>
                                    <h4 className="font-bold text-lg">{item.degree}</h4>
                                    <p className="text-slate-600 dark:text-slate-400">{item.school}</p>
                                    <p className="font-semibold text-teal-500">{item.honor}</p>
                                    <ul className="mt-2 text-sm list-disc list-inside text-slate-500 dark:text-slate-400 space-y-1">
                                        {item.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>

                         <h3 className="text-2xl font-bold mt-12 mb-6 flex items-center"><Briefcase className="mr-3 text-indigo-500" /> Work Experience</h3>
                         <div className="relative border-l-2 border-indigo-200 dark:border-slate-700 space-y-8 pl-8">
                            {experience.map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-[42px] top-1 w-4 h-4 bg-white dark:bg-slate-950 border-2 border-indigo-500 rounded-full"></div>
                                    <span className="text-sm font-semibold text-indigo-500">{item.year}</span>
                                    <h4 className="font-bold text-lg">{item.role}</h4>
                                    <p className="text-slate-600 dark:text-slate-400">{item.company} - {item.location}</p>
                                     <ul className="mt-2 text-sm list-disc list-inside text-slate-500 dark:text-slate-400 space-y-1">
                                        {item.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-6 flex items-center"><Award className="mr-3 text-indigo-500" /> Key Achievements</h3>
                        <div className="space-y-4">
                            {achievements.map((ach, index) => (
                                <div key={index} className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md border-l-4 border-teal-400">
                                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{ach.year}</span>
                                    <h4 className="font-bold">{ach.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{ach.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Skills Section ---
const SkillsSection = () => {
    const skills = [
        { title: 'Backend', icon: <Server />, items: ['PHP & Laravel', 'Node.js', 'Python', 'Java'] },
        { title: 'Frontend', icon: <Code />, items: ['React.js', 'JavaScript', 'HTML5', 'CSS3'] },
        { title: 'Mobile', icon: <Smartphone />, items: ['Kotlin', 'Flutter'] },
        { title: 'Hardware & Networking', icon: <HardDrive />, items: ['Network Troubleshooting', 'PC Building', 'System Maintenance'] },
        { title: 'Multimedia', icon: <Camera />, items: ['Video Editing', 'Photography', 'Graphic Design'] },
        { title: 'Leadership', icon: <Users />, items: ['Excellent Communication', 'Effective Problem Solving', 'Project Leadership'] },
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-white dark:bg-slate-950 p-6 rounded-xl shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="p-3 bg-indigo-100 dark:bg-slate-800 text-indigo-500 rounded-lg mr-4">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold">{skill.title}</h3>
                            </div>
                            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                                {skill.items.map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        <ChevronsRight className="text-teal-400 mr-2" size={16} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Projects Section ---
const ProjectsSection = () => {
    const projects = [
        { name: 'PilarCare: Clinic Management System', description: 'A comprehensive web-based system for managing clinic operations at Pilar College.', image: 'https://placehold.co/600x400/112240/E6F1FF?text=PilarCare', technologies: ['Laravel', 'PHP', 'Bootstrap', 'MySQL'], features: ['Patient Records', 'Appointment Scheduling', 'Medical Records'], github: 'ewardronin35/pilarcare' },
        { name: 'CHED-eTrack: Document Management', description: 'A system for tracking and managing documents within CHED Region IX, inspired by Gmail.', image: 'https://placehold.co/600x400/112240/E6F1FF?text=CHED-eTrack', technologies: ['Laravel', 'Livewire', 'MySQL', 'Tailwind CSS'], features: ['Document Tracking', 'User Roles', 'Digital Records'], github: 'ewardronin35/ched-etrack' },
        { name: 'Research Management System', description: 'A platform to manage and archive research papers and projects for academic institutions.', image: 'https://placehold.co/600x400/112240/E6F1FF?text=Research+System', technologies: ['PHP', 'JavaScript', 'HTML/CSS', 'MySQL'], features: ['Paper Submission', 'Review Process', 'Searchable Archive'], github: 'ewardronin35/research-system' },
    ];

    return (
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden group">
                            <div className="relative">
                                <img src={project.image} alt={project.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                     <a href={`https://github.com/${project.github}`} target="_blank" rel="noopener noreferrer" className="text-white border-2 border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition-colors duration-300 flex items-center"><GitHub size={18} className="mr-2"/> Source Code</a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2">{project.name}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>
                                <div className="mb-4">
                                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                                    <ul className="text-sm space-y-1 text-slate-500 dark:text-slate-400">
                                        {project.features.map(f => <li className="flex items-center" key={f}><ChevronsRight size={14} className="mr-1 text-teal-400"/>{f}</li>)}
                                    </ul>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="bg-slate-200 dark:bg-slate-800 text-xs font-semibold px-3 py-1 rounded-full">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Certifications Section ---
const CertificationsSection = () => {
    const certs = [
        { title: 'Introduction to HTML 5', issuer: 'University of Michigan (Coursera)', icon: <Code/> },
        { title: 'Data Analytics in Python', issuer: 'DICT', icon: <PenTool/> },
        { title: 'Ethical Hacking: Understanding the Thin Line', issuer: 'DICT', icon: <Server/> },
        { title: 'Cyber Security SOC: Level 2', issuer: 'Pilar College of Zamboanga City, Inc.', icon: <HardDrive/> },
    ];

    return (
        <section id="certifications" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                    {certs.map((cert, index) => (
                        <div key={index} className="bg-white dark:bg-slate-950 p-6 rounded-lg shadow-md flex items-center hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
                           <div className="p-4 bg-teal-100 dark:bg-slate-800 text-teal-500 rounded-lg mr-5">{cert.icon}</div>
                            <div>
                                <h3 className="font-bold">{cert.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Roadmap Section ---
const RoadmapSection = () => {
    const mastered = ['PHP & Laravel', 'JavaScript', 'HTML5/CSS3', 'Bootstrap', 'Kotlin', 'Java', 'Python', 'Flutter', 'VB.NET'];
    const learning = [
        { tech: 'React.js', progress: 40 },
        { tech: 'Docker', progress: 35 },
        { tech: 'MongoDB', progress: 30 },
        { tech: 'Node.js', progress: 25 },
    ];
    const next = ['Django', 'Machine Learning', 'LLMs'];
    
    return (
        <section id="roadmap" className="py-20 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Learning & Development Roadmap</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-xl mb-4 text-teal-500">Mastered</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            {mastered.map(tech => <span key={tech} className="bg-slate-200 dark:bg-slate-800 text-xs font-semibold px-3 py-1 rounded-full">{tech}</span>)}
                        </div>
                    </div>
                     <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg border-2 border-indigo-500">
                        <h3 className="font-bold text-xl mb-4 text-indigo-500">Currently Learning</h3>
                        <div className="space-y-3">
                            {learning.map(item => (
                                <div key={item.tech}>
                                    <div className="flex justify-between text-sm font-semibold mb-1">
                                        <span>{item.tech}</span>
                                        <span>{item.progress}%</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                                        <div className="bg-gradient-to-r from-indigo-500 to-teal-400 h-2.5 rounded-full" style={{width: `${item.progress}%`}}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-xl mb-4 text-slate-500">Next to Learn</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            {next.map(tech => <span key={tech} className="bg-slate-200 dark:bg-slate-800 text-xs font-semibold px-3 py-1 rounded-full">{tech}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Contact Section ---
const ContactSection = () => {
    const socialLinks = [
        { name: 'GitHub', icon: <GitHub />, url: 'https://github.com/ewardronin35' },
        { name: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/eduarddonor/' },
        { name: 'Facebook', icon: <Facebook />, url: 'https://www.facebook.com/Midoyoki/' },
        { name: 'Instagram', icon: <Instagram />, url: 'https://www.instagram.com/midoyoki/' },
        { name: 'Download CV', icon: <Download />, url: 'cv.pdf', download: true },
    ];

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                    I'm currently available for freelance projects and open to discussing new opportunities. Feel free to reach out!
                </p>
                <a href="mailto:eduardroland20@gmail.com" className="inline-block bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-bold text-lg py-3 px-8 rounded-full hover:shadow-lg hover:shadow-indigo-500/40 transition-all duration-300 transform hover:scale-105">
                    eduardroland20@gmail.com
                </a>
                <div className="flex justify-center space-x-4 mt-12">
                     {socialLinks.map(link => (
                        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" download={link.download} className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-indigo-500 hover:text-white transition-colors duration-300">
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Footer ---
const Footer = () => {
    return (
        <footer className="bg-slate-100 dark:bg-slate-950 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500 dark:text-slate-400">
                <p>&copy; {new Date().getFullYear()} Eduard Roland Donor. All rights reserved.</p>
                <p>Made with <span className="text-red-500">&hearts;</span> in Zamboanga City, Philippines</p>
            </div>
        </footer>
    );
};

export default App;
