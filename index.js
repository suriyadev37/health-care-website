// ===== NAVBAR: Mobile Toggle =====
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('close-menu');

if (mobileMenu) {
  mobileMenu.addEventListener('click', () => navMenu.classList.add('active'));
}
if (closeMenu) {
  closeMenu.addEventListener('click', () => navMenu.classList.remove('active'));
}
// Close on outside click
document.addEventListener('click', (e) => {
  if (navMenu && !navMenu.contains(e.target) && mobileMenu && !mobileMenu.contains(e.target)) {
    navMenu.classList.remove('active');
  }
});

// ===== NAVBAR: Scroll Shrink =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger sibling cards
      const siblings = entry.target.parentElement
        ? [...entry.target.parentElement.children].filter(c => c.classList.contains('reveal'))
        : [];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// ===== APPOINTMENT FORM (index.html) =====
const bookBtn = document.getElementById('bookBtn');
if (bookBtn) {
  bookBtn.addEventListener('click', () => {
    const name   = document.getElementById('name')?.value.trim();
    const email  = document.getElementById('email')?.value.trim();
    const phone  = document.getElementById('phone')?.value.trim();
    const date   = document.getElementById('date')?.value;
    const time   = document.getElementById('time')?.value;
    const doctor = document.getElementById('doctor')?.value;
    const msg    = document.getElementById('bookMessage');

    if (name && email && phone && date && time && doctor) {
      msg.style.color = '#00c896';
      msg.textContent = '✅ Appointment confirmed! We\'ll reach out shortly.';
      // Reset
      ['name','email','phone','date','time','doctor'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
    } else {
      msg.style.color = '#ff5e7d';
      msg.textContent = '⚠️ Please fill in all fields before booking.';
    }
  });
}

// ===== CONTACT FORM (contact.html) =====
function sendContactForm() {
  const name    = document.getElementById('cf-name')?.value.trim();
  const email   = document.getElementById('cf-email')?.value.trim();
  const phone   = document.getElementById('cf-phone')?.value.trim();
  const subject = document.getElementById('cf-subject')?.value.trim();
  const message = document.getElementById('cf-message')?.value.trim();

  if (!name || !email || !phone || !subject || !message) {
    alert('⚠️ Please fill in all fields before submitting.');
    return;
  }

  alert(`✅ Thank you, ${name}! Your message has been sent. We'll respond within 24 hours.`);

  // Reset form
  ['cf-name','cf-email','cf-phone','cf-subject','cf-message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}
