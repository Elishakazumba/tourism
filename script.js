// ===== NAVIGATION: HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    navbar.style.background = 'rgba(250, 247, 240, 0.96)';
    navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,0.06)';
  } else {
    navbar.style.background = 'rgba(250, 247, 240, 0.92)';
    navbar.style.boxShadow = 'none';
  }
  lastScroll = currentScroll;
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.section, .trust-card, .safari-card, .day-card, .why-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== GALLERY LAZY LOAD (placeholder) =====
// Images are already loaded via CSS background-image
// This ensures smooth appearance

// ===== WHATSAPP BUTTON PRE-FILL =====
// Already set in href attribute

// ===== FORM SUBMISSION (placeholder) =====
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  // Show a friendly message - in production this would send data
  alert('Thank you for your enquiry! We will get back to you shortly. Meanwhile, feel free to chat with us on WhatsApp.');
  this.reset();
});

// ===== ACTIVE NAV LINK HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a:not(.btn-plan)');

window.addEventListener('scroll', () => {
  let current = '';
  const navHeight = navbar.offsetHeight;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navHeight - 100;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  
  navLinksAll.forEach(link => {
    link.style.color = '#3a3a3a';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#c89d6b';
    }
  });
});

console.log('TPD Tours International — Tanzania Dream Website');
console.log('📞 +255 717 527 092');
console.log('📸 @tpdtoursinternational');