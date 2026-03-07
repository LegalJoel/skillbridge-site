// SkillBridge Liberia – Main JS

document.addEventListener('DOMContentLoaded', function () {

  // ---- HAMBURGER MENU ----
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // ---- ACTIVE NAV LINK ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });

  // ---- NAVBAR SCROLL EFFECT ----
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)';
      else navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
    });
  }

  // ---- BACK TO TOP ----
  const btt = document.getElementById('backToTop');
  if (btt) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) btt.classList.add('visible');
      else btt.classList.remove('visible');
    });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ---- TABS (how it works) ----
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      const target = document.getElementById(this.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  // ---- REGISTER TABS ----
  document.querySelectorAll('.register-tab').forEach(tab => {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.register-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.register-panel').forEach(p => p.style.display = 'none');
      this.classList.add('active');
      const panel = document.getElementById(this.dataset.panel);
      if (panel) panel.style.display = 'block';
    });
  });

  // ---- FORMS handled by Netlify Forms (data-netlify=true) – no JS override needed ----





  // ---- ANIMATE ON SCROLL (simple intersection observer) ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .step-card, .price-card, .team-card, .value-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // ---- COUNTER ANIMATION ----
  function animateCounters() {
    document.querySelectorAll('.stat-num, .metric-num').forEach(el => {
      const target = el.textContent;
      const num = parseFloat(target.replace(/[^0-9.]/g, ''));
      if (isNaN(num)) return;
      const suffix = target.replace(/[0-9.]/g, '');
      let start = 0;
      const duration = 1500;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const val = Math.floor(progress * num);
        el.textContent = val + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target;
      };
      requestAnimationFrame(step);
    });
  }

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { animateCounters(); statsObserver.disconnect(); }
    }, { threshold: 0.5 });
    statsObserver.observe(statsSection);
  }

});
