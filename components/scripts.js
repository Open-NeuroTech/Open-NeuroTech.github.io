// ============================================
// INITIALIZATION
// ============================================

// Initialize AOS and Feather Icons on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    // Initialize Feather Icons
    feather.replace();
});

// Redirect from /index.html to root
if (window.location.pathname === '/index.html') {
  window.history.replaceState(null, '', '/');
}

// ============================================
// SMOOTH SCROLLING
// ============================================

// Smooth scrolling for anchor links
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

// ============================================
// MODAL FUNCTIONS
// ============================================

/**
 * Open a modal by ID
 * @param {string} modalId - The ID of the modal to open
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Re-initialize feather icons in modal after a brief delay
        setTimeout(() => feather.replace(), 100);
    }
}

/**
 * Close a modal by ID
 * @param {string} modalId - The ID of the modal to close
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside the modal content
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
});

// ============================================
// VANTA.JS BACKGROUND (Index page only)
// ============================================

/**
 * Initialize Vanta.js animated background
 * Only runs if the #vanta-bg element exists on the page
 */
function initVantaBackground() {
    const vantaElement = document.getElementById('vanta-bg');
    if (vantaElement && typeof VANTA !== 'undefined') {
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3b82f6,
            backgroundColor: 0x111827,
            points: 12.00,
            maxDistance: 22.00,
            spacing: 18.00
        });
    }
}

// Initialize Vanta background if available
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVantaBackground);
} else {
    initVantaBackground();
}