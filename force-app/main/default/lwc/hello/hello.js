import { LightningElement, track } from 'lwc';
import profileImageFile from '@salesforce/resourceUrl/myProfilePic';
import skillIcons from '@salesforce/resourceUrl/skillicons';
import sendContactFormEmail from '@salesforce/apex/ContactFormController.sendContactFormEmail';


export default class Hello extends LightningElement {
    @track isDarkTheme = true;
    profileImage = profileImageFile;
    // apex = apexLogo;

    educationData = [
        {
            id: 1,
            degree: 'B.Tech Computer Science Engineering',
            institution: 'GSFC University',
            dateRange: 'July 2021 – June 2025',
            location: 'Vadodara, Gujarat, India'
        },
        {
            id: 2,
            degree: 'Higher Secondary Education (HSC)',
            institution: 'Sharda Mandir Anitaben Devangbhai Patel (Ipcowala) Day School',
            dateRange: 'June 2019 – July 2021',
            location: 'Nadiad, Gujarat, India'
        },
        {
            id: 3,
            degree: 'Secondary School Education (SSC)',
            institution: 'Sharda Mandir Anitaben Devangbhai Patel (Ipcowala) Day School',
            dateRange: 'June 2017 – May 2019',
            location: 'Nadiad, Gujarat, India'
        },
        {
            id: 4,
            degree: 'Primary and Elementary Education',
            institution: 'Shree Swami Vivekanand Vidhya Vihar School',
            dateRange: 'June 2007 – May 2017',
            location: 'Nadiad, Gujarat, India'
        }
    ];

    certificationsData = [
        {
            id: 1,
            title: 'Google Cloud Computing Foundations',
            provider: 'NPTEL(IIT - Kharagpur)',
            date: 'October 2023',
            certificateUrl: 'https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs90/Course/NPTEL23CS90S73110002820030695.pdf'
        },
        {
            id: 2,
            title: 'Google Cloud Professional Machine Learning Engineer',
            provider: 'Google / Google Cloud',
            date: 'September 2025',
            certificateUrl: '#'
        },
    ];

    get skills() {
        return this.skillsData.map(skill => ({
            ...skill,
            iconUrl: `${skillIcons}/DevIcons/${skill.iconFile}`
        }));
    }
    
    skillsData = [
        { id: 1, name: 'Python', iconFile: 'python.svg' },
        { id: 2, name: 'Java', iconFile: 'java.svg' },
        { id: 3, name: 'JavaScript', iconFile: 'javascript.svg' },
        { id: 4, name: 'Apex', iconFile: 'apex.svg' },
        { id: 5, name: 'LWC', iconFile: 'lwc.png' },
        { id: 6, name: 'Salesforce Admin', iconFile: 'sf-admin.jpg' },
        { id: 7, name: 'Salesforce Development', iconFile: 'salesforce.svg' },
        { id: 8, name: 'HTML', iconFile: 'html.svg' },
        { id: 9, name: 'CSS', iconFile: 'css.svg' },
        { id: 10, name: 'Agentforce', iconFile: 'agentforce.jpg' },
        { id: 11, name: 'Einstein AI', iconFile: 'einsteinai.png' },
        { id: 12, name: 'Google Cloud', iconFile: 'googlecloud.svg' },
        { id: 13, name: 'Google AI', iconFile: 'googleai.jpg' },
        { id: 14, name: 'AI', iconFile: 'ai.png' },
        { id: 15, name: 'ML', iconFile: 'ml.png' },
        { id: 16, name: 'Deep Learning', iconFile: 'dl.png' },
        { id: 17, name: 'LLMs', iconFile: 'llm.png' },
        { id: 18, name: 'RAG', iconFile: 'rag.png' }
    ];
    

    // Handle skill card click (optional)
    handleSkillClick(event) {
        const skillName = event.currentTarget.querySelector('.skill-name').textContent;
        console.log('Clicked skill:', skillName);
        // You can add any click functionality here
    }

    
    projectsData = [
        {
            id: 1,
            title: 'Explainable AI-Based Glaucoma Detection',
            description: 'Built a multi-modal diagnostic AI system using CNNs, LIME, and LLMs. Created a full-stack app using React.js and FastAPI for real-time screening. Integrated MongoDB and AI explainability via heatmaps and natural language outputs.',
            techStack: ['React.js', 'FastAPI', 'CNNs', 'LIME', 'LLMs', 'MongoDB', 'Python', 'TensorFlow'],
            projectUrl: '#' // Replace with actual project URL
        },
        {
            id: 2,
            title: 'E-Commerce Customer Segmentation & Insights',
            description: 'Performed customer segmentation using RFM scoring and K-Means clustering in Python. Enhanced marketing efficiency by 20% through targeted strategies. Built dashboards and visualizations in Tableau for business reporting.',
            techStack: ['Python', 'K-Means', 'RFM Scoring', 'Tableau', 'Pandas', 'Scikit-learn', 'Data Analysis'],
            projectUrl: '#' // Replace with actual project URL
        },
        {
            id: 3,
            title: 'AI-Powered Chatbot with RAG Implementation',
            description: 'Developed an intelligent chatbot using Large Language Models and Retrieval-Augmented Generation. Integrated vector databases for context-aware responses and implemented real-time learning capabilities.',
            techStack: ['LLMs', 'RAG', 'Vector DB', 'Python', 'FastAPI', 'Transformers', 'LangChain'],
            projectUrl: '#' // Replace with actual project URL
        }
    ];

    languagesData = [
        { id: 1, name: 'English' },
        { id: 2, name: 'Hindi' },
        { id: 3, name: 'Gujarati' }
    ];

    // Lifecycle hooks
    connectedCallback() {
        console.log('Projects section loaded with', this.projectsData.length, 'projects');
    }

    // Handle project view button click
    handleProjectClick(event) {
        const projectUrl = event.target.closest('a').href;
        if (projectUrl === window.location.origin + '/#') {
            event.preventDefault();
            console.log('Project URL not available');
            // You can show a toast message here
        }
    }

    // Handle language tag click
    handleLanguageClick(event) {
        const language = event.target.textContent;
        console.log('Selected language:', language);
        // You can implement language switching logic here
    }

    // Handle certificate link clicks
    handleCertificateClick(event) {
        const url = event.target.closest('a').href;
        if (url === '#') {
            event.preventDefault();
            // You can show a modal or toast message here
            console.log('Certificate URL not available');
        }
    }

    experiences = [
        {
            id: 1,
            title: 'Salesforce Developer',
            company: 'UCI-India',
            dateRange: 'Jan 2025 – Present',
            location: 'Vadodara, Gujarat, India',
            achievements: [
                '',
                '',
                ''
            ]
        },
        {
            id: 2,
            title: 'Python Developer Intern',
            company: 'Webmyne Systems',
            dateRange: 'Dec 2024 - Jan 2025',
            location: 'Vadodara, Gujarat, India',
            achievements: [
                '',
                '',
                ''
            ]
        }
    ];


    handleLinkClick(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        
        if (targetId && targetId.startsWith('#')) {
            const targetElement = this.template.querySelector(targetId);
            if (targetElement) {
                // This is the fix: calculate the position manually
                const header = this.template.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 90; // Get header height, or fallback to 70px
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerHeight;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }

    handleScrollToTop(event) {
        event.preventDefault();
        const homeElement = this.template.querySelector('.home');
        if (homeElement) {
            const headerOffset = 80;
            const elementPosition = homeElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    

    handleThemeToggle(event) {
        event.preventDefault();
        this.isDarkTheme = !this.isDarkTheme;
        
        const mainContainer = this.template.querySelector('.main-container');
        if (mainContainer) {
            if (this.isDarkTheme) {
                // Dark Theme
                mainContainer.style.setProperty('--bg-primary', '#0f172a');
                mainContainer.style.setProperty('--bg-secondary', '#1e293b');
                mainContainer.style.setProperty('--text-primary', '#f8fafc');
                mainContainer.style.setProperty('--text-secondary', '#94a3b8');
                mainContainer.style.setProperty('--border-color', '#475569');
                // THIS IS THE FIX: Use the original semi-transparent color
                mainContainer.style.setProperty('--bg-card', 'rgba(30, 41, 59, 0.5)'); 
            } else {
                // Light Theme
                mainContainer.style.setProperty('--bg-primary', '#ffffff');
                mainContainer.style.setProperty('--bg-secondary', '#f1f5f9');
                mainContainer.style.setProperty('--text-primary', '#0f172a');
                mainContainer.style.setProperty('--text-secondary', '#475569');
                mainContainer.style.setProperty('--border-color', '#e2e8f0');
                // THIS IS THE FIX: Use a solid white color
                mainContainer.style.setProperty('--bg-card', '#ffffff');
            }
        }
    }

    handleDownloadResume(event) {
        event.preventDefault();
        
        // Create a temporary link element to trigger download
        const link = document.createElement('a');
        link.href = ''; // Replace with actual resume URL
        link.download = 'Dhyey.pdf';
        link.target = '_blank';
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Show feedback
        this.showNotification('Resume download started!', 'success');
    }

    handleGetInTouch(event) {
        event.preventDefault();
        const contactElement = this.template.querySelector('#contact');
        if (contactElement) {
            contactElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
        }
    }

    handleViewProjects(event) {
        event.preventDefault();
        const projectsElement = this.template.querySelector('#projects');
        if (projectsElement) {
            projectsElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background-color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            font-family: var(--font-family);
            font-weight: 500;
        `;

        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Add to DOM
        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
                if (document.head.contains(style)) {
                    document.head.removeChild(style);
                }
            }, 300);
        }, 3000);
    }

    handleScroll() {
        const header = this.template.querySelector('.header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
                header.style.backdropFilter = 'blur(12px)';
            }
        }
    }

    renderedCallback() {
        // Add scroll event listener
        if (!this.scrollListenerAdded) {
            window.addEventListener('scroll', this.handleScroll.bind(this));
            this.scrollListenerAdded = true;
        }

        // Initialize theme
        this.initializeTheme();

        // initialize typing & scroll animations if desired
        this.initializeTypingAnimation();
        this.initializeScrollAnimations();
    }

    initializeTheme() {
        const themeIcon = this.template.querySelector('.theme-toggle__icon');
        if (themeIcon && this.isDarkTheme) {
            themeIcon.style.setProperty('content', '"☀"');
        }
    }

    disconnectedCallback() {
        // Remove scroll event listener to prevent memory leaks
        if (this.scrollListenerAdded) {
            window.removeEventListener('scroll', this.handleScroll.bind(this));
            this.scrollListenerAdded = false;
        }
    }

    handleMobileMenuToggle(event) {
        event.preventDefault();
        const navMenu = this.template.querySelector('.nav__menu');
        if (navMenu) {
            navMenu.classList.toggle('nav__menu--active');
        }
    }

    handleSocialClick(event, platform) {
        // Track social media clicks for analytics (if needed)
        console.log(`Social media click: ${platform}`);
        
        // Let the default behavior handle the link opening
        // This method can be extended for analytics tracking
    }

    handleEmailClick(event) {
        const email = 'dhyeybhatt66@gmail.com';
        const subject = 'Hello from your portfolio website';
        const body = 'Hi Dhyey,\n\nI visited your portfolio website and would like to connect with you.\n\nBest regards,';
        
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
    }

    handlePhoneClick(event) {
        const phoneNumber = '+918780027129';
        window.location.href = `tel:${phoneNumber}`;
    }

    initializeTypingAnimation() {
        const titleElement = this.template.querySelector('.home__title');
        if (titleElement && !this.typingAnimationInitialized) {
            const text = "Hi 👋, I'm Dhyey Bhatt";
            titleElement.innerHTML = '';
            
            let index = 0;
            const typeWriter = () => {
                if (index < text.length) {
                    if (text.charAt(index) === 'V') {
                        titleElement.innerHTML += '<span class="highlight">Dhyey Bhatt</span>';
                        index = text.length; // Skip to end since we added the whole highlighted part
                    } else {
                        titleElement.innerHTML += text.charAt(index);
                        index++;
                    }
                    setTimeout(typeWriter, 100);
                } else {
                    // Add cursor blink effect
                    const cursor = document.createElement('span');
                    cursor.className = 'typing-cursor';
                    cursor.style.cssText = `
                        display: inline-block;
                        width: 2px;
                        height: 1em;
                        background-color: var(--primary-color);
                        margin-left: 4px;
                        animation: blink 1s infinite;
                    `;
                    titleElement.appendChild(cursor);
                    
                    // Add blink animation
                    const blinkStyle = document.createElement('style');
                    blinkStyle.textContent = `
                        @keyframes blink {
                            0%, 50% { opacity: 1; }
                            51%, 100% { opacity: 0; }
                        }
                    `;
                    document.head.appendChild(blinkStyle);
                    
                    // Remove cursor after 3 seconds
                    setTimeout(() => {
                        if (titleElement.contains(cursor)) {
                            titleElement.removeChild(cursor);
                        }
                    }, 3000);
                }
            };
            
            // Start typing animation after a small delay
            setTimeout(typeWriter, 500);
            this.typingAnimationInitialized = true;
        }
    }

    initializeScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe sections for scroll animations
        const sections = this.template.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }

    handleContactFormSubmit(event) {
        event.preventDefault();    
        const nameEl = this.template.querySelector('[data-id="cf-name"]');
        const emailEl = this.template.querySelector('[data-id="cf-email"]');
        const messageEl = this.template.querySelector('[data-id="cf-message"]');
        
        const name = nameEl?.value.trim();
        const email = emailEl?.value.trim();
        const message = messageEl?.value.trim();
        
        if (!name || !email || !message) {
            console.warn('⚠️ Validation failed — missing fields');
            this.showNotification('Please fill all required fields', 'error');
            return;
        }
    
        sendContactFormEmail({ name, email, message })
            .then(result => {
                if (result === 'SUCCESS') {
                    this.showNotification('Message sent — check your email!', 'success');
                    this.template.querySelector('form').reset();
                } else {
                    this.showNotification('Error: ' + result, 'error');
                }
            })
            .catch(error => {
                console.error('💥 Apex error:', error);
                this.showNotification('Something went wrong', 'error');
            });
    }    
    
    showNotification(message, variant) {
        alert(message);
    }
    
}
