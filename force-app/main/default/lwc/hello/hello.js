import { LightningElement, track } from 'lwc';
import profileImageFile from '@salesforce/resourceUrl/myProfilePic';
import sendContactFormEmail from '@salesforce/apex/ContactFormController.sendContactFormEmail';


export default class Hello extends LightningElement {
    @track isDarkTheme = true;
    profileImage = profileImageFile;

    educationData = [
        {
            id: 1,
            degree: 'B.Tech – Computer Science and Engineering',
            institution: 'GSFC University',
            dateRange: 'July 2021 – June 2025',
            location: 'Vadodara, Gujarat, India'
        },
        {
            id: 2,
            degree: 'Senior Secondary (PCM with Computer) – 69.3%',
            institution: 'Sharda Mandir Anitaben Devangbhai Patel (Ipcowala) Secondary and Higher Secondary Day School Nadiad',
            dateRange: 'June 2020 – July 2021',
            location: 'Nadiad, Gujarat, India'
        },
        {
            id: 3,
            degree: 'Secondary – 74.8%',
            institution: 'Sharda Mandir Anitaben Devangbhai Patel (Ipcowala) Secondary and Higher Secondary Day School Nadiad',
            dateRange: 'June 2018 – May 2019',
            location: 'Nadiad, Gujarat, India'
        }
    ];

    certificationsData = [
        {
            id: 1,
            title: 'Google Data Analytics',
            provider: 'Google',
            date: 'June 2024',
            certificateUrl: '#' // Replace with actual certificate URL
        },
        {
            id: 2,
            title: 'IBM Back-End Development',
            provider: 'IBM',
            date: 'July 2024',
            certificateUrl: 'https://orgfarm-b4985a3d23-dev-ed.develop.my.site.com/s/' // Replace with actual certificate URL
        },
        {
            id: 3,
            title: 'TensorFlow Developer',
            provider: 'DeepLearning.AI',
            date: '2024',
            certificateUrl: '#' // Replace with actual certificate URL
        }
    ];

    skillsData = [
        {
            id: 1,
            name: 'Python',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        },
        {
            id: 2,
            name: 'Java',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
        },
        {
            id: 3,
            name: 'JavaScript',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        {
            id: 4,
            name: 'Apex',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg'
        },
        {
            id: 5,
            name: 'LWC',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg'
        },
        {
            id: 6,
            name: 'Salesforce Admin',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg'
        },
        {
            id: 7,
            name: 'Salesforce Development',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg'
        },
        {
            id: 8,
            name: 'HTML',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        },
        {
            id: 9,
            name: 'CSS',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        },
        {
            id: 10,
            name: 'Agentforce',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg'
        },
        {
            id: 11,
            name: 'Einstein AI',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg'
        },
        {
            id: 12,
            name: 'Google Cloud',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
        },
        {
            id: 13,
            name: 'Google AI',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
        },
        {
            id: 14,
            name: 'AI',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
        },
        {
            id: 15,
            name: 'ML',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        },
        {
            id: 16,
            name: 'Deep Learning',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
        },
        {
            id: 17,
            name: 'LLMs',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        },
        {
            id: 18,
            name: 'RAG',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        }
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
        },
        {
            id: 4,
            title: 'Deep Learning Stock Price Prediction',
            description: 'Built a sophisticated stock price prediction model using LSTM neural networks and technical indicators. Achieved 85% accuracy in short-term price movements with real-time data integration and visualization dashboard.',
            techStack: ['Deep Learning', 'LSTM', 'TensorFlow', 'Python', 'Pandas', 'NumPy', 'Plotly'],
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
            location: 'Vadodara, Gujarat',
            achievements: [
                'Created Mentor Mentee web platform using React.js and FastAPI, reducing server response time by 25%',
                'Developed AI-based matching system using Python and scikit-learn, achieving 90% accuracy',
                'Designed role-specific dashboards and managed data with PostgreSQL and MongoDB'
            ]
        },
        {
            id: 2,
            title: 'Python Developer Intern',
            company: 'Webmyne Systems',
            dateRange: 'June – July 2024',
            location: 'Vadodara, Gujarat',
            achievements: [
                'Developed SQL-based database solutions for Data Center Management Systems',
                'Automated data collection and cleaning workflows using Python',
                'Tuned queries to improve data retrieval speed by 30%'
            ]
        }
    ];


    handleLinkClick(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        
        if (targetId && targetId.startsWith('#')) {
            const targetElement = this.template.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start',
                    inline: 'nearest'
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
        
        // Update CSS custom properties for theme
        const mainContainer = this.template.querySelector('.main-container');
        if (mainContainer) {
            if (this.isDarkTheme) {
                mainContainer.style.setProperty('--bg-primary', '#0f172a');
                mainContainer.style.setProperty('--bg-secondary', '#1e293b');
                mainContainer.style.setProperty('--text-primary', '#f8fafc');
                mainContainer.style.setProperty('--text-secondary', '#94a3b8');
            } else {
                mainContainer.style.setProperty('--bg-primary', '#ffffff');
                mainContainer.style.setProperty('--bg-secondary', '#f8fafc');
                mainContainer.style.setProperty('--text-primary', '#0f172a');
                mainContainer.style.setProperty('--text-secondary', '#475569');
            }
        }

        // Update theme toggle icon
        const themeIcon = this.template.querySelector('.theme-toggle__icon');
        if (themeIcon) {
            themeIcon.style.setProperty('content', this.isDarkTheme ? '"☀"' : '"🌙"');
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
