// ============================
// SummitBound — Main JavaScript
// ============================

(function() {
  'use strict';

  // 1. Mobile Navigation Toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function() {
      mainNav.classList.toggle('is-open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !mainNav.contains(e.target)) {
        mainNav.classList.remove('is-open');
      }
    });
  }

  // 2. Update Copyright Year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 3. Form Validation (contact.html)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      
      let valid = true;
      let errors = [];

      // Validate name
      if (name && name.value.trim() === '') {
        valid = false;
        errors.push('Name is required');
        name.classList.add('error');
      } else if (name) {
        name.classList.remove('error');
      }

      // Validate email
      if (email && email.value.trim() === '') {
        valid = false;
        errors.push('Email is required');
        email.classList.add('error');
      } else if (email && !isValidEmail(email.value)) {
        valid = false;
        errors.push('Please enter a valid email address');
        email.classList.add('error');
      } else if (email) {
        email.classList.remove('error');
      }

      // Validate message
      if (message && message.value.trim() === '') {
        valid = false;
        errors.push('Message is required');
        message.classList.add('error');
      } else if (message) {
        message.classList.remove('error');
      }

      if (!valid) {
        e.preventDefault();
        alert('Please fix the following errors:\n' + errors.join('\n'));
      }
    });
  }

  // 4. Email Validation Helper
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // 5. Smooth Scroll for Anchor Links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 6. Active Navigation Link
  function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(function(link) {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage || 
          (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Initialize on page load
  setActiveNav();

})();
