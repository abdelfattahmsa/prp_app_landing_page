/* ==========================================================================
   PRP Landing Page — Scripts
   Theme toggle, i18n (EN/AR + RTL), screenshot carousel, subtle reveals.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------ i18n ------------------ */
  const translations = {
    en: {
      'meta.title': 'PRP — Plan. Record. Progress.',
      'meta.description': 'PRP is a minimal, fast productivity app to plan your day, record your progress, and stay in flow. Available on Windows and Web.',
      'nav.features': 'Features',
      'nav.screenshots': 'Screenshots',
      'nav.availability': 'Platforms',
      'hero.pill': 'New — v1.0 is here',
      'hero.titleA': 'Plan. Record.',
      'hero.titleB': 'Progress.',
      'hero.sub': 'A minimal, fast productivity app that helps you plan your day, record what you do, and see real progress — without the clutter.',
      'hero.ctaWindows': 'Download for Windows',
      'hero.ctaWeb': 'Open Web App',
      'hero.metaA': 'Offline-first',
      'hero.metaB': 'Lightweight',
      'hero.metaC': 'Free to start',
      'shots.title': 'A look inside',
      'shots.sub': 'Clean, focused, and built to get out of your way.',
      'shots.cap1': 'Dashboard — your day at a glance.',
      'shots.cap2': 'Planner — drag, drop, done.',
      'shots.cap3': 'Progress — real metrics, zero noise.',
      'features.title': "Everything you need. Nothing you don't.",
      'features.sub': 'Core features designed for focus and flow.',
      'features.f1.title': 'Smart Planner',
      'features.f1.desc': 'Plan your day in seconds with a keyboard-first, drag-and-drop interface.',
      'features.f2.title': 'Time Tracking',
      'features.f2.desc': 'Record how you actually spend your time — automatically and privately.',
      'features.f3.title': 'Progress Insights',
      'features.f3.desc': 'Weekly reports that show real progress, not vanity metrics.',
      'features.f4.title': 'Private by Default',
      'features.f4.desc': 'Your data stays on your device. End-to-end encrypted sync if you opt in.',
      'features.f5.title': 'Blazing Fast',
      'features.f5.desc': 'Instant startup, zero lag. Built for speed from the first keystroke.',
      'features.f6.title': 'Customizable',
      'features.f6.desc': 'Themes, shortcuts, layouts — bend PRP to fit your workflow.',
      'avail.title': 'Available where you work',
      'avail.sub': 'More platforms coming soon.',
      'avail.download': 'Download',
      'avail.open': 'Open App',
      'avail.web': 'Web',
      'avail.soon': 'Coming Soon',
      'footer.tagline': 'Plan. Record. Progress.',
      'footer.github': 'GitHub',
      'footer.contact': 'Contact',
      'footer.privacy': 'Privacy',
      'footer.terms': 'Terms',
      'footer.rights': 'All rights reserved.'
    },
    ar: {
      'meta.title': 'PRP — خطّط. سجّل. تقدّم.',
      'meta.description': 'PRP تطبيق إنتاجية بسيط وسريع لتخطيط يومك وتسجيل تقدمك دون تشتيت. متوفر على ويندوز والويب.',
      'nav.features': 'المزايا',
      'nav.screenshots': 'لقطات',
      'nav.availability': 'المنصّات',
      'hero.pill': 'جديد — الإصدار 1.0 متاح',
      'hero.titleA': 'خطّط. سجّل.',
      'hero.titleB': 'تقدّم.',
      'hero.sub': 'تطبيق إنتاجية بسيط وسريع يساعدك على تخطيط يومك وتسجيل ما تُنجزه ورؤية تقدم حقيقي — بلا فوضى.',
      'hero.ctaWindows': 'تحميل لويندوز',
      'hero.ctaWeb': 'افتح تطبيق الويب',
      'hero.metaA': 'يعمل دون إنترنت',
      'hero.metaB': 'خفيف وسريع',
      'hero.metaC': 'مجاني للبداية',
      'shots.title': 'نظرة من الداخل',
      'shots.sub': 'واجهة نظيفة ومركّزة، صُمّمت لتختفي من طريقك.',
      'shots.cap1': 'لوحة التحكم — يومك في نظرة واحدة.',
      'shots.cap2': 'المخطِّط — اسحب، أفلت، تمّ.',
      'shots.cap3': 'التقدّم — مقاييس حقيقية بلا ضجيج.',
      'features.title': 'كل ما تحتاجه. ولا شيء زائد.',
      'features.sub': 'مزايا أساسية مصمّمة للتركيز والتدفّق.',
      'features.f1.title': 'مخطِّط ذكي',
      'features.f1.desc': 'خطّط يومك في ثوانٍ بواجهة تدعم لوحة المفاتيح والسحب والإفلات.',
      'features.f2.title': 'تتبّع الوقت',
      'features.f2.desc': 'سجّل وقتك تلقائيًا وبخصوصية تامّة.',
      'features.f3.title': 'رؤى التقدّم',
      'features.f3.desc': 'تقارير أسبوعية تُظهر تقدّمًا حقيقيًا لا أرقامًا شكلية.',
      'features.f4.title': 'الخصوصية أولًا',
      'features.f4.desc': 'بياناتك تبقى على جهازك. مزامنة مشفّرة طرفًا لطرف عند الرغبة.',
      'features.f5.title': 'سرعة فائقة',
      'features.f5.desc': 'تشغيل فوري بلا تأخير. مبنيّ للسرعة منذ أول ضغطة زر.',
      'features.f6.title': 'قابل للتخصيص',
      'features.f6.desc': 'ثيمات واختصارات وتخطيطات — طوّع PRP لأسلوبك.',
      'avail.title': 'متاح حيث تعمل',
      'avail.sub': 'المزيد من المنصات قريبًا.',
      'avail.download': 'تحميل',
      'avail.open': 'افتح التطبيق',
      'avail.web': 'الويب',
      'avail.soon': 'قريبًا',
      'footer.tagline': 'خطّط. سجّل. تقدّم.',
      'footer.github': 'جيت‌هَب',
      'footer.contact': 'تواصل',
      'footer.privacy': 'الخصوصية',
      'footer.terms': 'الشروط',
      'footer.rights': 'جميع الحقوق محفوظة.'
    }
  };

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = dict[key];
      if (value == null) return;
      if (el.tagName === 'META') {
        el.setAttribute('content', value);
      } else if (el.tagName === 'TITLE') {
        document.title = value;
      } else {
        el.textContent = value;
      }
    });
  }

  function setLanguage(lang) {
    const root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('lang', lang);
    applyTranslations(lang);
    const label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'ar' ? 'ع' : 'EN';
  }

  /* ------------------ Theme ------------------ */
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  /* ------------------ Init ------------------ */
  document.addEventListener('DOMContentLoaded', function () {
    // Apply saved language
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);

    // Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    // Language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('lang') || 'en';
        setLanguage(current === 'ar' ? 'en' : 'ar');
      });
    }

    // Header scrolled state
    const header = document.getElementById('header');
    const onScroll = () => {
      if (!header) return;
      header.classList.toggle('scrolled', window.scrollY > 4);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Screenshot carousel
    initCarousel();

    // Reveal on scroll
    initReveal();
  });

  /* ------------------ Carousel ------------------ */
  function initCarousel() {
    const track = document.getElementById('shotsTrack');
    const prev = document.getElementById('shotsPrev');
    const next = document.getElementById('shotsNext');
    const dotsWrap = document.getElementById('shotsDots');
    if (!track) return;

    const slides = Array.from(track.querySelectorAll('.shot'));
    if (!slides.length) return;

    // Build dots
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', `Screenshot ${i + 1}`);
      b.addEventListener('click', () => scrollToIndex(i));
      dotsWrap.appendChild(b);
    });

    function currentIndex() {
      const slideWidth = slides[0].getBoundingClientRect().width + 20; // gap
      return Math.round(track.scrollLeft / slideWidth);
    }

    function scrollToIndex(i) {
      const slideWidth = slides[0].getBoundingClientRect().width + 20;
      const dir = document.documentElement.getAttribute('dir') === 'rtl' ? -1 : 1;
      track.scrollTo({ left: i * slideWidth * dir, behavior: 'smooth' });
    }

    function updateDots() {
      const idx = Math.abs(currentIndex());
      dotsWrap.querySelectorAll('button').forEach((b, i) => {
        b.classList.toggle('is-active', i === idx);
      });
    }

    if (prev) prev.addEventListener('click', () => {
      const dir = document.documentElement.getAttribute('dir') === 'rtl' ? 1 : -1;
      scrollToIndex(Math.max(0, Math.abs(currentIndex()) + dir));
    });
    if (next) next.addEventListener('click', () => {
      const dir = document.documentElement.getAttribute('dir') === 'rtl' ? -1 : 1;
      scrollToIndex(Math.min(slides.length - 1, Math.abs(currentIndex()) + dir));
    });

    track.addEventListener('scroll', () => {
      window.requestAnimationFrame(updateDots);
    });

    updateDots();
  }

  /* ------------------ Reveal on scroll ------------------ */
  function initReveal() {
    const targets = document.querySelectorAll('.feature, .shot, .platform, .section__head');
    targets.forEach((el) => el.classList.add('reveal'));

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach((el) => io.observe(el));
  }
})();
