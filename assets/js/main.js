(function () {
  'use strict';

  // ---- Theme ----
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var isDark = current ? current === 'dark' : prefersDark;
      var next = isDark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      toggle.textContent = next === 'dark' ? '☀️' : '🌙';
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (e) {}
    if (stored) {
      toggle.textContent = stored === 'dark' ? '☀️' : '🌙';
    } else {
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      toggle.textContent = prefersDark ? '☀️' : '🌙';
    }
  }

  // ---- Mobile menu ----
  var hamburger = document.querySelector('.nav-hamburger');
  var navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('mobile-open');
      document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navLinks.classList.remove('mobile-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Nav scroll behavior ----
  var nav = document.querySelector('.site-nav');
  if (nav) {
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (y > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      lastScroll = y;
    }, { passive: true });
  }

  // ---- Scroll reveal (Intersection Observer) ----
  var revealSelectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger';
  var revealEls = document.querySelectorAll(revealSelectors);
  if (revealEls.length && 'IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { revealObs.observe(el); });
  }

  // ---- Parallax ----
  var parallaxLayers = document.querySelectorAll('.parallax-layer');
  if (parallaxLayers.length) {
    var ticking = false;
    function updateParallax() {
      var scrollY = window.scrollY;
      parallaxLayers.forEach(function (layer) {
        var speed = parseFloat(layer.dataset.speed) || 0.1;
        var direction = layer.dataset.direction || 'y';
        var val = scrollY * speed;
        if (direction === 'x') {
          layer.style.transform = 'translate3d(' + val + 'px, 0, 0)';
        } else if (direction === 'both') {
          layer.style.transform = 'translate3d(' + (val * 0.5) + 'px, ' + val + 'px, 0)';
        } else {
          layer.style.transform = 'translate3d(0, ' + val + 'px, 0)';
        }
      });
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- KaTeX auto-render ----
  function initKaTeX() {
    if (window.renderMathInElement) {
      renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initKaTeX);
  } else {
    initKaTeX();
  }

  // ---- Tilt on character hover (mouse tracking) ----
  var heroChar = document.querySelector('.hero-character');
  if (heroChar && window.innerWidth > 680) {
    var charSvg = heroChar.querySelector('svg');
    if (charSvg) {
      heroChar.addEventListener('mousemove', function (e) {
        var rect = heroChar.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        charSvg.style.transform = 'rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 6) + 'deg)';
      });
      heroChar.addEventListener('mouseleave', function () {
        charSvg.style.transform = 'rotateY(0) rotateX(0)';
        charSvg.style.transition = 'transform 0.5s ease';
        setTimeout(function () { charSvg.style.transition = ''; }, 500);
      });
    }
  }

  // ---- Typing effect for speech bubbles ----
  document.querySelectorAll('.speech-bubble[data-text]').forEach(function (bubble) {
    var text = bubble.dataset.text;
    bubble.textContent = '';
    var delay = parseFloat(bubble.dataset.delay) || 1200;

    setTimeout(function () {
      var i = 0;
      function typeChar() {
        if (i < text.length) {
          bubble.textContent += text.charAt(i);
          i++;
          setTimeout(typeChar, 35 + Math.random() * 25);
        }
      }
      typeChar();
    }, delay);
  });

  // ---- Active nav link ----
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === path) link.classList.add('active');
  });

})();
