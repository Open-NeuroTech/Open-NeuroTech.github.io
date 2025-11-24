// Load navbar HTML and initialize mobile menu
document.addEventListener("DOMContentLoaded", function() {
  fetch("/components/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
      if (window.feather) feather.replace();
      
      // Initialize mobile menu after navbar is loaded
      initMobileMenu();
    })
    .catch(error => console.error("Error loading navbar:", error));
});

// Mobile menu functionality
function initMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!menuButton || !mobileMenu) return;
  
  const menuIcon = menuButton.querySelector('.menu-icon');
  const closeIcon = menuButton.querySelector('.close-icon');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  
  // Toggle menu when button is clicked
  menuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    
    // Prevent body scroll when menu is open
    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Close menu when clicking a navigation link
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.style.overflow = '';
    });
  });
  
  // Close menu when clicking outside of it
  document.addEventListener('click', function(event) {
    if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
      if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }
  });
}