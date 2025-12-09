// Small JS helper: mobile nav toggle, year, and basic form validation
document.addEventListener('DOMContentLoaded', function(){
  var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', function(){
      var visible = mainNav.style.display === 'block';
      mainNav.style.display = visible ? '' : 'block';
    });
  }

  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      var email = form.querySelector('input[name="email"]');
      if(email && !email.value.includes('@')){
        e.preventDefault();
        alert('Please enter a valid email address.');
        email.focus();
      }
    });
  }
});
