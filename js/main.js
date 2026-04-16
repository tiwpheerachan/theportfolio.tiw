/* ============================================
   PORTFOLIO — MAIN JS
   Enhanced: Modal, Particles, Spotlight,
   Ripple, Theme, i18n, Magnetic cursor
   ============================================ */

// ── Project Detail Data (ZipNow Client Work) ──
const projectData = {
  hrms: {
    title: 'HRMS Platform',
    desc: 'A comprehensive Human Resource Management System we built for a client managing multi-company operations. The platform handles the entire employee lifecycle -- geofenced GPS check-in/out with overnight shift support, shift scheduling, leave management, overtime calculation, attendance correction workflows, and complete payroll processing. Features an AI-powered chatbot that answers employee payroll questions in real-time.',
    role: 'Our team handled the full delivery: database architecture, full-stack development with Next.js and Supabase, Row Level Security for multi-company data isolation, and AI chatbot integration using the Anthropic API.',
    highlights: [
      'Geofenced GPS check-in with overnight shift support',
      'AI chatbot for payroll Q&A using Anthropic API',
      'Multi-company scoping with Supabase RLS',
      'Thai payroll period (22nd-21st) & locale support',
      'Role-based access: Employee / Manager / Admin',
      'Replaced costly third-party HR software entirely'
    ],
    metrics: [
      { num: '350+', label: 'Active Employees' },
      { num: '100%', label: 'Manual Process Replaced' },
      { num: '3', label: 'Companies Supported' },
      { num: '24/7', label: 'AI Chatbot Uptime' }
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Anthropic API', 'Tailwind CSS', 'RLS'],
    links: [],
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
  },
  dreame: {
    title: 'Membership & Loyalty Platform',
    desc: 'A full membership and loyalty platform we built for a leading smart home appliance brand. The system covers product registration via serial numbers, points accumulation from purchases, tier-based upgrades (Silver/Gold/Platinum), reward redemption, and warranty tracking. Delivered end-to-end in just 4 weeks from first commit to production.',
    role: 'We designed the membership architecture, implemented the points and tier engine, built the product registration flow with serial number validation, and created the admin dashboard for managing rewards and warranty claims.',
    highlights: [
      'Product registration with serial number validation',
      'Points accumulation and tier-based rewards system',
      'Warranty tracking with automated expiration alerts',
      'Admin dashboard for rewards and member management',
      'Delivered complete system in 4 weeks',
      '10,000+ registered users and growing'
    ],
    metrics: [
      { num: '10K+', label: 'Registered Users' },
      { num: '4', label: 'Weeks to Launch' },
      { num: '3', label: 'Membership Tiers' },
      { num: '↑', label: 'Repeat Purchases' }
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    links: [],
    gradient: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)'
  },
  '70mai': {
    title: 'Online Booking System',
    desc: 'An online booking platform we built for a dashcam brand\'s installation services across Thailand. Customers browse available branches, select preferred dates and time slots, and book installation appointments -- all from their phone. The system eliminated manual scheduling entirely and improved the conversion funnel from interested users to paying customers.',
    role: 'We handled the full project: booking flow UX, branch management, calendar availability system, time slot logic with conflict prevention, customer notifications, and the admin management dashboard.',
    highlights: [
      'Branch selection with location-based filtering',
      'Real-time calendar availability with time slots',
      'Conflict prevention for double-booking',
      'Automated customer confirmation notifications',
      'Admin dashboard for managing bookings and branches',
      'Reduced manual scheduling work to zero'
    ],
    metrics: [
      { num: '3K+', label: 'Real Bookings' },
      { num: '0', label: 'Manual Scheduling' },
      { num: '↑40%', label: 'Conversion Rate' },
      { num: '10+', label: 'Branches' }
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    links: [{ label: 'Visit Live Site', url: 'https://booking.70mai.co.th' }],
    gradient: 'linear-gradient(135deg, #2d3436 0%, #636e72 50%, #b2bec3 100%)'
  },
  shd: {
    title: 'Corporate & Careers Platform',
    desc: 'A unified corporate website and recruitment platform we built for a technology company operating across 9 countries. The system supports multilingual content management, job listings with category filtering, online applications with file uploads, and integrated HR workflows for application tracking.',
    role: 'We architected the multilingual CMS, built the job listing and application system, implemented file upload and storage pipelines, and designed the HR workflow for tracking applicants from submission to hiring.',
    highlights: [
      'Multilingual content support across 9 countries',
      'Job listing system with category/location filtering',
      'Online application with resume/document uploads',
      'HR workflow for application tracking and status',
      'Integrated branding with corporate identity',
      'Handled 2,000+ applicants across multiple roles'
    ],
    metrics: [
      { num: '9', label: 'Countries' },
      { num: '2K+', label: 'Applicants' },
      { num: '5+', label: 'Languages' },
      { num: '∞', label: 'Scalability' }
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'i18n'],
    links: [
      { label: 'Corporate Site', url: 'https://shd-technology.co.th' },
      { label: 'Careers Portal', url: 'https://careers.shd-technology.co.th' }
    ],
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #e94560 30%, #533483 100%)'
  },
  ecom: {
    title: 'E-Commerce Data Platform',
    desc: 'A centralized data pipeline and operations system we built integrating Shopee, Lazada, and TikTok Shop APIs across 18 brands (Anker, Dreame, Xiaomi, Levoit, and more). Automatically retrieves orders, items, ads performance, vouchers, flash sale data, and financial records with production-grade reliability.',
    role: 'We designed the multi-platform API integration architecture, implemented token refresh and retry logic, built the data pipeline with BigQuery, and created performance analysis dashboards for the client\'s operations team.',
    highlights: [
      '18 brands integrated across 3 major platforms',
      'Automated order, ads, voucher & financial data sync',
      'Token handling with refresh and retry logic',
      'Batch processing with fallback strategies',
      'Scheduled synchronization for production reliability',
      'Multi-store performance analysis dashboards'
    ],
    metrics: [
      { num: '18', label: 'Brands' },
      { num: '3', label: 'Platforms' },
      { num: 'M+', label: 'Records Processed' },
      { num: '24/7', label: 'Auto-Sync' }
    ],
    tech: ['Python', 'BigQuery', 'Shopee API', 'Lazada API', 'TikTok API', 'SQL', 'Cloud Functions'],
    links: [],
    gradient: 'linear-gradient(135deg, #0c0032 0%, #190061 50%, #240090 100%)'
  }
};

document.addEventListener('DOMContentLoaded', () => {

  const isTouch = matchMedia('(pointer: coarse)').matches;

  // ── Custom Cursor ─────────────────────
  const cursor = document.getElementById('cursor');
  const trail = document.getElementById('cursorTrail');
  let mouseX = 0, mouseY = 0;
  let trailX = 0, trailY = 0;

  if (!isTouch) {
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    function animateTrail() {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      trail.style.left = trailX + 'px';
      trail.style.top = trailY + 'px';
      requestAnimationFrame(animateTrail);
    }
    animateTrail();

    // Hover scaling
    document.querySelectorAll('a, button, .skill-item, .project-card, .tag, .tp-badge, .about-stack span, .impact-card, .value-prop').forEach(el => {
      el.addEventListener('mouseenter', () => { cursor.classList.add('hovering'); trail.classList.add('hovering'); });
      el.addEventListener('mouseleave', () => { cursor.classList.remove('hovering'); trail.classList.remove('hovering'); });
    });
  }

  // ── Particle System ───────────────────
  const canvas = document.getElementById('particleCanvas');
  if (canvas && !isTouch) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const maxParticles = 50;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01;
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        this.color = isDark ? '200, 255, 0' : '26, 122, 0';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        this.size *= 0.98;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.life * 0.6})`;
        ctx.fill();
      }
    }

    let particleThrottle = 0;
    document.addEventListener('mousemove', (e) => {
      particleThrottle++;
      if (particleThrottle % 3 === 0 && particles.length < maxParticles) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    });

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter(p => p.life > 0);
      particles.forEach(p => { p.update(); p.draw(); });

      // Draw connections between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const alpha = (1 - dist / 80) * 0.15 * Math.min(particles[i].life, particles[j].life);
            ctx.strokeStyle = `rgba(${particles[i].color}, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  // ── Click Ripple Effect ───────────────
  const rippleContainer = document.getElementById('rippleContainer');
  if (rippleContainer && !isTouch) {
    document.addEventListener('click', (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      rippleContainer.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  }

  // ── Spotlight Effect ──────────────────
  const heroSpotlight = document.getElementById('heroSpotlight');
  if (heroSpotlight && !isTouch) {
    const hero = document.getElementById('hero');
    hero.addEventListener('mousemove', (e) => {
      heroSpotlight.style.left = e.clientX + 'px';
      heroSpotlight.style.top = e.clientY + 'px';
    });
  }

  // ── Section Spotlight (mouse glow on sections) ──
  if (!isTouch) {
    document.querySelectorAll('.impact-card, .value-prop').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty('--mouse-x', `${x}%`);
        el.style.setProperty('--mouse-y', `${y}%`);
      });
    });
  }

  // ── Theme Toggle ──────────────────────
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }

  setTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.add('theme-transitioning');
    setTheme(next);
    setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 500);
  });

  // ── Language Switcher ─────────────────
  const langToggle = document.getElementById('langToggle');
  const langSwitcher = document.getElementById('langSwitcher');
  const langCurrent = document.getElementById('langCurrent');
  const langDropdown = document.getElementById('langDropdown');

  langToggle.addEventListener('click', (e) => { e.stopPropagation(); langSwitcher.classList.toggle('open'); });
  document.addEventListener('click', () => langSwitcher.classList.remove('open'));
  langDropdown.addEventListener('click', (e) => e.stopPropagation());

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      langCurrent.textContent = btn.dataset.lang.toUpperCase();
      langSwitcher.classList.remove('open');
      setLanguage(btn.dataset.lang);
    });
  });

  const initLang = localStorage.getItem('portfolio-lang') || 'en';
  langCurrent.textContent = initLang.toUpperCase();
  initI18n();

  // ── Nav scroll ────────────────────────
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // ── Mobile hamburger ──────────────────
  const hamburger = document.getElementById('navHamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Smooth scroll ─────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  // ── Scroll reveal ─────────────────────
  const revealElements = document.querySelectorAll(
    '.section-label, .section-title, .about-text, .about-visual, ' +
    '.project-card, .skill-group, .contact-left, .contact-form, ' +
    '.edu-card, .terminal-card, .award-card, .timeline-item, ' +
    '.impact-card, .value-prop, .impact-subtitle, .projects-hint'
  );

  revealElements.forEach((el) => {
    if (!el.classList.contains('reveal') && !el.classList.contains('reveal-left') &&
        !el.classList.contains('reveal-right') && !el.classList.contains('reveal-scale')) {
      if (el.classList.contains('timeline-item')) { /* own animation */ }
      else if (el.classList.contains('about-visual') || el.classList.contains('terminal-card')) { el.classList.add('reveal-right'); }
      else if (el.classList.contains('award-card') || el.classList.contains('edu-card')) { el.classList.add('reveal-scale'); }
      else { el.classList.add('reveal'); }
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  revealElements.forEach(el => observer.observe(el));

  // Skills grid
  const skillsGrid = document.querySelector('.skills-grid');
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  if (skillsGrid) skillsObserver.observe(skillsGrid);

  // ── Counter animation ─────────────────
  function animateCount(el, target, duration = 1500) {
    const start = performance.now();
    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  // Hero meta counter
  const metaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.meta-num').forEach(num => {
          animateCount(num, parseInt(num.getAttribute('data-count')));
        });
        metaObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  const heroMeta = document.querySelector('.hero-meta');
  if (heroMeta) metaObserver.observe(heroMeta);

  // Impact counter
  const impactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const num = entry.target.querySelector('[data-count-impact]');
        if (num) animateCount(num, parseInt(num.getAttribute('data-count-impact')), 2000);
        impactObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.impact-card').forEach(card => impactObserver.observe(card));

  // ── Mouse tracking for cards ──────────
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
      card.style.setProperty('--mouse-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });
  });

  // ── Tilt effect on project cards ──────
  if (!isTouch) {
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        card.style.transform = `perspective(1000px) rotateX(${(y - 0.5) * 4}deg) rotateY(${(x - 0.5) * -4}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  // ── Magnetic effect on buttons ────────
  if (!isTouch) {
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        btn.style.transform = `translate(${(e.clientX - rect.left - rect.width / 2) * 0.15}px, ${(e.clientY - rect.top - rect.height / 2) * 0.15}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  // ── Project Modal ─────────────────────
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');

  function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    // Title
    document.getElementById('modalTitle').textContent = data.title;

    // Tags
    const tagsEl = document.getElementById('modalTags');
    tagsEl.innerHTML = data.tech.slice(0, 5).map(t => `<span class="proj-tag">${t}</span>`).join('');

    // Description
    document.getElementById('modalDesc').textContent = data.desc;

    // Role
    document.getElementById('modalRole').textContent = data.role;

    // Highlights
    const highlightsEl = document.getElementById('modalHighlights');
    highlightsEl.innerHTML = data.highlights.map(h => `<li>${h}</li>`).join('');

    // Metrics
    const metricsEl = document.getElementById('modalMetrics');
    metricsEl.innerHTML = data.metrics.map(m =>
      `<div class="modal-metric"><div class="modal-metric-num">${m.num}</div><div class="modal-metric-label">${m.label}</div></div>`
    ).join('');

    // Tech
    const techEl = document.getElementById('modalTech');
    techEl.innerHTML = data.tech.map(t => `<span class="modal-tech-tag">${t}</span>`).join('');

    // Links
    const linksEl = document.getElementById('modalLinks');
    if (data.links.length > 0) {
      linksEl.innerHTML = data.links.map(l =>
        `<a href="${l.url}" class="modal-link" target="_blank" rel="noopener">${l.label} &#8599;</a>`
      ).join('');
      linksEl.style.display = 'flex';
    } else {
      linksEl.style.display = 'none';
    }

    // Gallery — collect all images for lightbox
    const mainImg = document.getElementById('modalImgMain');
    const thumbs = document.getElementById('modalImgThumbs');
    mainImg.classList.remove('is-portrait');
    mainImg.innerHTML = '';
    thumbs.innerHTML = '';

    const allImages = [];  // [{src, alt}] — filled as images load
    let currentMainIndex = 0;

    // helper: set main preview image
    function setMainImage(src, alt, index) {
      mainImg.classList.remove('is-portrait');
      const oldImg = mainImg.querySelector('img');
      if (oldImg) oldImg.style.opacity = '0';
      const newImg = new Image();
      newImg.src = src;
      newImg.alt = alt || data.title;
      newImg.style.cssText = 'cursor:pointer; opacity:0;';
      newImg.onload = () => {
        if (newImg.naturalHeight > newImg.naturalWidth) mainImg.classList.add('is-portrait');
        if (oldImg) oldImg.remove();
        mainImg.appendChild(newImg);
        requestAnimationFrame(() => { newImg.style.opacity = '1'; });
      };
      newImg.onerror = () => newImg.remove();
      // click main image → open lightbox
      newImg.addEventListener('click', () => {
        if (allImages.length) window.openLightbox(allImages, index != null ? index : currentMainIndex);
      });
      if (index != null) currentMainIndex = index;
    }

    // helper: activate thumb
    function activateThumb(el) {
      thumbs.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    // Load preview as first image
    const previewSrc = `images/${projectId}/preview.png`;
    const previewTest = new Image();
    previewTest.src = previewSrc;
    previewTest.onload = () => {
      allImages.push({ src: previewSrc, alt: data.title + ' — Preview' });
      setMainImage(previewSrc, data.title, 0);
    };
    previewTest.onerror = () => {
      mainImg.innerHTML = `<div class="modal-placeholder" style="background: ${data.gradient}"><span style="color:var(--text-3);font-size:13px;">No preview available</span></div>`;
    };

    // Load thumbnails 1–20
    for (let n = 1; n <= 20; n++) {
      const src = `images/${projectId}/thumb-${n}.png`;
      const thumbEl = document.createElement('div');
      thumbEl.className = 'modal-thumb';

      const img = new Image();
      img.src = src;
      img.alt = `${data.title} — Screenshot ${n}`;
      img.onload = () => {
        const ratio = img.naturalWidth / img.naturalHeight;
        const isPortrait = ratio < 0.85;
        if (isPortrait) {
          thumbEl.classList.add('is-portrait');
          thumbEl.style.width = Math.round(100 * ratio) + 'px';
        } else {
          thumbEl.style.width = Math.round(80 * ratio) + 'px';
        }
        thumbEl.appendChild(img);
        thumbs.appendChild(thumbEl);

        // track in allImages
        const imgIndex = allImages.length;
        allImages.push({ src, alt: img.alt });

        // click thumb → update main + open lightbox on double
        thumbEl.addEventListener('click', () => {
          activateThumb(thumbEl);
          setMainImage(src, img.alt, imgIndex);
        });

        // double-click thumb → open lightbox directly
        thumbEl.addEventListener('dblclick', () => {
          window.openLightbox(allImages, imgIndex);
        });

        // first thumb auto-activate
        if (thumbs.children.length === 1) thumbEl.classList.add('active');
      };
      img.onerror = () => { /* skip missing */ };
    }

    // Open
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Click project cards to open modal
  document.querySelectorAll('.project-card[data-project]').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't open modal if clicking a link
      if (e.target.closest('a')) return;
      openModal(card.dataset.project);
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  // ── Contact form ──────────────────────
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.style.opacity = '0.6';
      btn.disabled = true;
      setTimeout(() => { btn.style.display = 'none'; success.style.display = 'block'; form.reset(); }, 1200);
    });
  }

  // ── Nav active link ───────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => { if (window.scrollY >= section.offsetTop - 200) current = section.id; });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
    });
  }, { passive: true });

  // ── Logo glitch ───────────────────────
  const logo = document.querySelector('.nav-logo');
  if (logo) {
    logo.addEventListener('mouseenter', () => {
      logo.style.letterSpacing = '0.1em';
      setTimeout(() => { logo.style.letterSpacing = '0.05em'; }, 150);
    });
  }

  // ── Parallax orbs ─────────────────────
  if (!isTouch) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      document.querySelectorAll('.orb').forEach((orb, i) => {
        orb.style.transform = `translate(${x * (i + 1) * 15}px, ${y * (i + 1) * 15}px)`;
      });
    });
  }

  // ── Text scramble for hero name ───────
  const nameEl = document.querySelector('.hero-name-text');
  if (nameEl) {
    const originalText = nameEl.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let iteration = 0;
    function scramble() {
      nameEl.textContent = originalText.split('').map((char, index) => {
        if (index < iteration) return originalText[index];
        if (char === ' ') return ' ';
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');
      if (iteration < originalText.length) {
        iteration += 0.5;
        requestAnimationFrame(() => setTimeout(scramble, 30));
      }
    }
    setTimeout(scramble, 800);
  }

  // ── Keyboard shortcut ─────────────────
  document.addEventListener('keydown', (e) => {
    if (e.key === 'c' && !e.ctrlKey && !e.metaKey) {
      const el = document.activeElement;
      if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  // ── Color scheme detection ────────────
  if (!localStorage.getItem('portfolio-theme')) {
    setTheme(matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  // ══════════════════════════════════════
  //  LIGHTBOX — full-screen image viewer
  // ══════════════════════════════════════
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbCounter = document.getElementById('lightboxCounter');
  const lbStrip = document.getElementById('lightboxStrip');
  const lbPrev = document.getElementById('lightboxPrev');
  const lbNext = document.getElementById('lightboxNext');
  let lbImages = [];   // [{src, alt}]
  let lbIndex = 0;

  // Public: open lightbox with array of images at given index
  window.openLightbox = function(images, startIndex) {
    lbImages = images;
    lbIndex = startIndex || 0;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    renderLightbox();
    buildStrip();
  };

  function renderLightbox() {
    const item = lbImages[lbIndex];
    lbImg.classList.add('loading');
    lbImg.onload = () => lbImg.classList.remove('loading');
    lbImg.src = item.src;
    lbImg.alt = item.alt || '';
    lbCounter.textContent = `${lbIndex + 1} / ${lbImages.length}`;

    // update nav state
    lbPrev.classList.toggle('disabled', lbIndex === 0);
    lbNext.classList.toggle('disabled', lbIndex === lbImages.length - 1);

    // update strip active
    lbStrip.querySelectorAll('.lightbox-strip-thumb').forEach((t, i) => {
      t.classList.toggle('active', i === lbIndex);
      if (i === lbIndex) t.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
  }

  function buildStrip() {
    lbStrip.innerHTML = '';
    lbImages.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'lightbox-strip-thumb' + (i === lbIndex ? ' active' : '');
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt || '';
      img.onload = () => {
        const ratio = img.naturalWidth / img.naturalHeight;
        div.style.width = Math.round(52 * ratio) + 'px';
      };
      div.appendChild(img);
      div.addEventListener('click', () => { lbIndex = i; renderLightbox(); });
      lbStrip.appendChild(div);
    });
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = 'hidden'; // keep project modal's overflow
  }

  lbPrev.addEventListener('click', () => { if (lbIndex > 0) { lbIndex--; renderLightbox(); } });
  lbNext.addEventListener('click', () => { if (lbIndex < lbImages.length - 1) { lbIndex++; renderLightbox(); } });

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);

  // keyboard: arrows + escape
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && lbIndex > 0) { lbIndex--; renderLightbox(); }
    if (e.key === 'ArrowRight' && lbIndex < lbImages.length - 1) { lbIndex++; renderLightbox(); }
  });

  // swipe support for mobile
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  lightbox.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0 && lbIndex < lbImages.length - 1) { lbIndex++; renderLightbox(); }
      if (diff > 0 && lbIndex > 0) { lbIndex--; renderLightbox(); }
    }
  }, { passive: true });

});
