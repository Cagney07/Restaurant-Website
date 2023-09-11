// JavaScript for the King's Restaurant website

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile_menu');
  const navbar = document.getElementById('navbar');
  
  mobileMenuButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });
  
  // Scroll to top button
  const scrollToTopButton = document.getElementById('top');
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Form submission handling
  const contactForm = document.querySelector('#contact form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    contactForm.reset();
    
  });
  