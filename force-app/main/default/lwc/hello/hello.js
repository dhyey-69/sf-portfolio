import { LightningElement, track } from 'lwc';
import profileImageFile from '@salesforce/resourceUrl/myProfilePic';


export default class Hello extends LightningElement {
    @track isDarkTheme = true;
    profileImage = profileImageFile;


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

    /* -------------------------
       Contact form submit
       ------------------------- */
    handleContactFormSubmit(event) {
        event.preventDefault();

        // Collect data (you will wire backend in Apex later)
        const form = event.target;
        const fd = new FormData(form);
        const payload = {
            name: fd.get('name'),
            email: fd.get('email'),
            message: fd.get('message')
        };

        // For now: basic validation + UX
        if (!payload.name || !payload.email || !payload.message) {
            this.showNotification('Please fill all required fields', 'error');
            return;
        }

        // TODO: send payload to Apex / Salesforce when ready.
        console.log('Contact form payload:', payload);

        // UX feedback
        this.showNotification('Message sent — backend coming soon', 'success');

        // reset form
        form.reset();
    }
}
