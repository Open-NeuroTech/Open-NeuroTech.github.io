// Navigation functionality
function showPage(pageId, clickedElement = null) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update navigation - more reliable method
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Find and activate the correct nav link
    if (clickedElement) {
        clickedElement.classList.add('active');
    } else {
        // Fallback: find the link by onclick content
        const activeLink = Array.from(navLinks).find(link => 
            link.getAttribute('onclick') && link.getAttribute('onclick').includes(pageId)
        );
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Trigger card animations for new page
    setTimeout(() => animateCards(), 100);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Card animation on scroll
function animateCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        // Reset animation state
        card.classList.remove('visible');
        card.style.transform = 'translateY(50px)';
        card.style.opacity = '0';
        
        // Trigger animation with staggered timing
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 100);
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Parallax effect for background elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Form submission handler
function handleFormSubmission() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                institution: formData.get('institution'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Basic validation
            if (!data.name || !data.email || !data.subject || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert(`Thank you, ${data.name}! Your message has been sent. We will get back to you soon at ${data.email}.`);
                form.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize page animations and effects
function initializePageEffects() {
    // Animate cards that are currently visible
    setTimeout(() => animateCards(), 500);
    
    // Observe all cards for scroll animations
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => observer.observe(card));
    
    // Add loading animation to hero elements
    const heroElements = document.querySelectorAll('.hero h1, .hero p, .cta-button');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.3}s`;
    });
}

// Mobile navigation toggle (for future mobile menu implementation)
function initializeMobileNavigation() {
    // This function can be expanded to handle mobile menu toggle
    // For now, it sets up basic responsive behavior
    
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Add touch event listeners for mobile devices
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
}

// Page visibility change handler
function handleVisibilityChange() {
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            // Page became visible again, restart animations if needed
            const currentPage = document.querySelector('.page.active');
            if (currentPage) {
                setTimeout(() => animateCards(), 200);
            }
        }
    });
}

// Keyboard navigation support
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Navigate between pages with number keys (1-5)
        if (e.key >= '1' && e.key <= '5') {
            const pages = ['home', 'about', 'services', 'projects', 'contact'];
            const pageIndex = parseInt(e.key) - 1;
            if (pages[pageIndex]) {
                showPage(pages[pageIndex]);
                
                // Update navigation active state
                const navLinks = document.querySelectorAll('.nav-links a');
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[pageIndex].classList.add('active');
            }
        }
        
        // Escape key to return to home
        if (e.key === 'Escape') {
            showPage('home');
            const homeLink = document.querySelector('.nav-links a[onclick*="home"]');
            if (homeLink) {
                document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
                homeLink.classList.add('active');
            }
        }
    });
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Optimized scroll handler
const optimizedScrollHandler = throttle(() => {
    const scrolled = window.pageYOffset;
    const navbar = document.getElementById('navbar');
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    // Navbar effect
    if (scrolled > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Parallax effect
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}, 16); // ~60fps

// Enhanced page transition with fade effect
function enhancedPageTransition(pageId) {
    const currentPage = document.querySelector('.page.active');
    const targetPage = document.getElementById(pageId);
    
    if (currentPage === targetPage) return;
    
    // Fade out current page
    if (currentPage) {
        currentPage.style.opacity = '0';
        currentPage.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            currentPage.classList.remove('active');
            currentPage.style.opacity = '';
            currentPage.style.transform = '';
        }, 300);
    }
    
    // Fade in target page
    setTimeout(() => {
        targetPage.classList.add('active');
        targetPage.style.opacity = '0';
        targetPage.style.transform = 'translateY(20px)';
        
        // Force reflow
        targetPage.offsetHeight;
        
        targetPage.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        targetPage.style.opacity = '1';
        targetPage.style.transform = 'translateY(0)';
        
        // Cleanup
        setTimeout(() => {
            targetPage.style.transition = '';
        }, 300);
    }, 150);
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initializePageEffects();
    initializeMobileNavigation();
    handleFormSubmission();
    initializeSmoothScrolling();
    handleVisibilityChange();
    initializeKeyboardNavigation();
    
    // Replace scroll event listener with optimized version
    window.removeEventListener('scroll', () => {}); // Remove any existing listeners
    window.addEventListener('scroll', optimizedScrollHandler);
    
    // Add loading state management
    document.body.classList.add('loaded');
    
    // Preload hover states for better performance
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.willChange = 'transform, box-shadow';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.willChange = 'auto';
        });
    });
    
    // Add intersection observer for performance
    const lazyElements = document.querySelectorAll('.card, .project');
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-viewport');
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    lazyElements.forEach(el => lazyObserver.observe(el));
});

// Add CSS classes for enhanced effects
const additionalStyles = `
    <style>
        .page {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        body.loaded .hero h1,
        body.loaded .hero p,
        body.loaded .cta-button {
            animation-play-state: running;
        }
        
        .card.in-viewport {
            transform: translateY(0);
            opacity: 1;
        }
        
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    </style>
`;

// Inject additional styles
document.head.insertAdjacentHTML('beforeend', additionalStyles);