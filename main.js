// main.js
function toggleNav() {
  const nav = document.getElementById('navbarNav');
  nav.classList.toggle('show');
}

function closeNav() {
  const nav = document.getElementById('navbarNav');
  nav.classList.remove('show');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeNav();
  });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 159, 243, 0.95)';
    navbar.style.backdropFilter = 'blur(10px)';
  } else {
    navbar.style.background = 'linear-gradient(135deg, var(--primary-pink), #f8b500)';
    navbar.style.backdropFilter = 'none';
  }
});