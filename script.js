/* ==========================================================================
   PRP Landing Page — Scripts
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------ i18n ------------------ */
  const translations = {
    en: {
      'meta.title': 'PRP — Personal Resource Planner',
      'meta.description': 'PRP is your personal operating system for Time, Finance, Energy, and Health — a data-driven decision engine to optimize every dimension of your life.',
      'nav.features': 'Features',
      'nav.membership': 'Membership',
      'nav.docs': 'Docs',
      'nav.availability': 'Platforms',
      'nav.openApp': 'Open App',
      'hero.pill': 'v4.7 — Your Personal OS',
      'hero.titleA': 'Manage Your',
      'hero.titleB': '4 Life Resources.',
      'hero.sub': 'PRP is your personal operating system for Time, Finance, Energy, and Health — a data-driven decision engine that transforms raw life data into actionable insights.',
      'hero.ctaWindows': 'Download for Windows',
      'hero.ctaWeb': 'Open Web App',
      'hero.metaA': 'Core Modules',
      'hero.metaB': 'to Start',
      'hero.metaC': 'Latest Release',
      'hero.metaVersion': 'v4.7',
      'modules.title': 'Your 4 Life Resources',
      'modules.sub': 'PRP transforms raw life data into actionable insights across every dimension that matters.',
      'modules.time.title': 'Time',
      'modules.time.desc': 'Schedule management, time tracking, calendar events, and task priorities in one unified view.',
      'modules.time.f1': 'Smart Calendar',
      'modules.time.f2': 'Time Tracking',
      'modules.time.f3': 'Task Management',
      'modules.finance.title': 'Finance',
      'modules.finance.desc': 'Complete financial picture — banking, investments, debt, expenses, net worth, and live FX rates.',
      'modules.finance.f1': 'Multi-Currency',
      'modules.finance.f2': 'Live FX & Stocks',
      'modules.finance.f3': 'Net Worth Tracking',
      'modules.energy.title': 'Energy',
      'modules.energy.desc': 'Focus sessions, Pomodoro timer, goal tracking with subtasks, and an ideas manager to stay in flow.',
      'modules.energy.f1': 'Pomodoro Focus',
      'modules.energy.f2': 'Goal Tracking',
      'modules.energy.f3': 'Ideas Manager',
      'modules.health.title': 'Health',
      'modules.health.desc': 'Habit tracking, daily metrics, fasting timer, steps, sleep, and water intake monitoring.',
      'modules.health.f1': 'Habit Heatmap',
      'modules.health.f2': 'Fasting Timer',
      'modules.health.f3': 'Daily Metrics',
      'shots.title': 'A look inside',
      'shots.sub': 'Clean, focused, and built to get out of your way.',
      'shots.cap1': 'Dashboard — all 4 resources at a glance.',
      'shots.cap2': 'Finance — complete net worth overview.',
      'shots.cap3': 'Health — habits, metrics, and streaks.',
      'features.title': 'Built for how you actually live.',
      'features.sub': 'Every feature designed to surface insights, not add busywork.',
      'features.f1.title': 'Smart Insights',
      'features.f1.desc': 'Interactive charts, habit heatmaps, cashflow analysis, and spending breakdowns — raw data made actionable.',
      'features.f2.title': 'Persistent Focus Timer',
      'features.f2.desc': 'Pomodoro sessions that follow you across every screen. A floating banner keeps you on track — never lose your flow.',
      'features.f3.title': 'Multi-Currency Finance',
      'features.f3.desc': 'Live FX rates, stock prices via Alpha Vantage, 35+ Egyptian bank autocomplete, and full net worth tracking.',
      'features.f4.title': 'Health Rituals',
      'features.f4.desc': 'Visual habit heatmaps, fasting timers, daily step and sleep goals — build lasting routines with real accountability.',
      'features.f5.title': 'Deep Customization',
      'features.f5.desc': 'Dark/light/system themes, custom avatar, personalized greeting with live clock — PRP adapts to your style.',
      'features.f6.title': 'Secure & Private',
      'features.f6.desc': 'Supabase backend with row-level security policies. Your data is end-to-end protected — always.',
      'membership.title': 'Simple, Honest Pricing',
      'membership.sub': 'Start free. Pro membership is coming soon.',
      'membership.free.name': 'Free',
      'membership.free.period': 'forever',
      'membership.free.desc': 'Everything you need to get started managing your life.',
      'membership.free.f1': 'Time & Calendar management',
      'membership.free.f2': 'Basic finance tracking',
      'membership.free.f3': 'Habit & health tracking',
      'membership.free.f4': 'Focus & Pomodoro sessions',
      'membership.free.f5': 'Web & Windows access',
      'membership.free.cta': 'Get Started Free',
      'membership.pro.badge': 'Coming Soon',
      'membership.pro.name': 'Pro',
      'membership.pro.price': 'Coming Soon',
      'membership.pro.desc': 'Unlock the full power of your personal operating system.',
      'membership.pro.f1': 'Everything in Free',
      'membership.pro.f2': 'Unlimited history & data',
      'membership.pro.f3': 'Live FX rates & stock tracking',
      'membership.pro.f4': 'Advanced analytics & charts',
      'membership.pro.f5': 'Avatar & full customization',
      'membership.pro.f6': 'Priority support',
      'membership.pro.cta': 'Notify Me',
      'kyberia.cta': 'Visit Kyberia Labs →',
      'docs.title': 'Documentation & Wiki',
      'docs.sub': 'Everything you need to get the most out of PRP.',
      'docs.d1.title': 'Getting Started',
      'docs.d1.desc': 'Set up your account, configure your profile, and start tracking all 4 resources in minutes.',
      'docs.d2.title': 'Time Module Guide',
      'docs.d2.desc': 'Master calendar events, time blocking, task priorities, and schedule allocation reports.',
      'docs.d3.title': 'Finance Module Guide',
      'docs.d3.desc': 'Set up bank accounts, track investments, manage debt, and monitor your net worth in multiple currencies.',
      'docs.d4.title': 'Health & Energy Guide',
      'docs.d4.desc': 'Configure habits, set up fasting schedules, track goals with subtasks, and run focus sessions effectively.',
      'avail.title': 'Available where you work',
      'avail.sub': 'More platforms coming soon.',
      'avail.download': 'Download',
      'avail.open': 'Open App',
      'avail.web': 'Web',
      'avail.soon': 'Coming Soon',
      'download.title': 'PRP for Windows',
      'download.desc': 'Free download. Requires Windows 10 or later.',
      'download.btn': 'Download .exe',
      'kyberia.label': 'Built by',
      'kyberia.desc': 'PRP is a product of Kyberia Labs — the technology innovation lab under Peridot Holdings. We build intelligent tools that help people live and work at their highest level.',
      'footer.tagline': 'Personal Resource Planner',
      'footer.kyberia': 'A Kyberia Labs product',
      'footer.github': 'GitHub',
      'footer.contact': 'Contact',
      'footer.privacy': 'Privacy',
      'footer.terms': 'Terms',
      'footer.rights': 'All rights reserved.'
    },
    ar: {
      'meta.title': 'PRP — المخطّط الشخصي للموارد',
      'meta.description': 'PRP هو نظام التشغيل الشخصي الخاص بك للوقت والمال والطاقة والصحة — محرك قرار مبني على البيانات لتحسين كل جانب من جوانب حياتك.',
      'nav.features': 'المزايا',
      'nav.membership': 'العضوية',
      'nav.docs': 'التوثيق',
      'nav.availability': 'المنصّات',
      'nav.openApp': 'افتح التطبيق',
      'hero.pill': 'الإصدار 4.7 — نظام تشغيلك الشخصي',
      'hero.titleA': 'أدِر',
      'hero.titleB': 'مواردك الـ4 الحيوية.',
      'hero.sub': 'PRP هو نظام تشغيلك الشخصي للوقت والمال والطاقة والصحة — محرك قرار مبني على البيانات يحوّل معطيات حياتك إلى رؤى قابلة للتنفيذ.',
      'hero.ctaWindows': 'تحميل لويندوز',
      'hero.ctaWeb': 'افتح تطبيق الويب',
      'hero.metaA': 'وحدات أساسية',
      'hero.metaB': 'للبدء',
      'hero.metaC': 'أحدث إصدار',
      'modules.title': 'مواردك الـ4 الحيوية',
      'modules.sub': 'يحوّل PRP بيانات حياتك الخام إلى رؤى قابلة للتنفيذ في كل جانب يهمّك.',
      'modules.time.title': 'الوقت',
      'modules.time.desc': 'إدارة الجدول الزمني وتتبّع الوقت وأحداث التقويم والمهام في عرض موحّد.',
      'modules.time.f1': 'تقويم ذكي',
      'modules.time.f2': 'تتبّع الوقت',
      'modules.time.f3': 'إدارة المهام',
      'modules.finance.title': 'المال',
      'modules.finance.desc': 'صورة مالية كاملة — بنوك واستثمارات وديون ومصاريف وصافي الثروة وأسعار صرف مباشرة.',
      'modules.finance.f1': 'متعدد العملات',
      'modules.finance.f2': 'أسعار صرف مباشرة',
      'modules.finance.f3': 'تتبّع صافي الثروة',
      'modules.energy.title': 'الطاقة',
      'modules.energy.desc': 'جلسات تركيز وتقنية بومودورو وتتبّع الأهداف ومدير الأفكار للبقاء في حالة التدفّق.',
      'modules.energy.f1': 'تركيز بومودورو',
      'modules.energy.f2': 'تتبّع الأهداف',
      'modules.energy.f3': 'مدير الأفكار',
      'modules.health.title': 'الصحة',
      'modules.health.desc': 'تتبّع العادات والمقاييس اليومية ومؤقت الصيام وخطوات النوم وشرب الماء.',
      'modules.health.f1': 'خريطة حرارية للعادات',
      'modules.health.f2': 'مؤقت الصيام',
      'modules.health.f3': 'المقاييس اليومية',
      'shots.title': 'نظرة من الداخل',
      'shots.sub': 'واجهة نظيفة ومركّزة، صُمّمت لتختفي من طريقك.',
      'shots.cap1': 'لوحة التحكم — جميع الموارد الـ4 في لمحة.',
      'shots.cap2': 'المال — نظرة شاملة على صافي الثروة.',
      'shots.cap3': 'الصحة — العادات والمقاييس والإنجازات.',
      'features.title': 'مبنيّ لحياتك الحقيقية.',
      'features.sub': 'كل ميزة صُمّمت لإبراز الرؤى لا لإضافة أعباء.',
      'features.f1.title': 'رؤى ذكية',
      'features.f1.desc': 'مخططات تفاعلية وخرائط حرارية للعادات وتحليل التدفق النقدي — بيانات خام تتحوّل إلى قرارات.',
      'features.f2.title': 'مؤقت تركيز دائم',
      'features.f2.desc': 'جلسات بومودورو تتبعك عبر كل شاشة. شريط عائم يبقيك على المسار — لا تفقد تركيزك أبدًا.',
      'features.f3.title': 'تمويل متعدد العملات',
      'features.f3.desc': 'أسعار صرف مباشرة وأسعار أسهم وإكمال تلقائي لأكثر من 35 بنكًا مصريًا وتتبّع صافي الثروة.',
      'features.f4.title': 'طقوس صحية',
      'features.f4.desc': 'خرائط حرارية للعادات ومؤقتات الصيام وأهداف الخطوات والنوم — بنِ عادات راسخة بمسؤولية حقيقية.',
      'features.f5.title': 'تخصيص عميق',
      'features.f5.desc': 'ثيمات داكنة وفاتحة وتلقائية وصورة رمزية مخصصة وتحية شخصية بساعة حية — PRP يتكيّف مع أسلوبك.',
      'features.f6.title': 'آمن وخاص',
      'features.f6.desc': 'خادم Supabase مع سياسات أمان على مستوى الصف. بياناتك محمية دائمًا.',
      'membership.title': 'تسعير بسيط وصادق',
      'membership.sub': 'ابدأ مجانًا. رقِّ اشتراكك حين يصبح PRP لا غنى عنه في يومك.',
      'membership.free.name': 'مجاني',
      'membership.free.period': 'للأبد',
      'membership.free.desc': 'كل ما تحتاجه للبدء في إدارة حياتك.',
      'membership.free.f1': 'إدارة الوقت والتقويم',
      'membership.free.f2': 'تتبّع مالي أساسي',
      'membership.free.f3': 'تتبّع العادات والصحة',
      'membership.free.f4': 'جلسات التركيز وبومودورو',
      'membership.free.f5': 'الوصول عبر الويب وويندوز',
      'membership.free.cta': 'ابدأ مجانًا',
      'membership.pro.badge': 'قريبًا',
      'membership.pro.name': 'برو',
      'membership.pro.price': 'قريبًا',
      'membership.pro.desc': 'أطلق القوة الكاملة لنظام تشغيلك الشخصي.',
      'membership.pro.f1': 'كل ميزات الخطة المجانية',
      'membership.pro.f2': 'سجل بيانات غير محدود',
      'membership.pro.f3': 'أسعار صرف مباشرة وتتبّع الأسهم',
      'membership.pro.f4': 'تحليلات ومخططات متقدمة',
      'membership.pro.f5': 'صورة رمزية وتخصيص كامل',
      'membership.pro.f6': 'دعم ذو أولوية',
      'membership.pro.cta': 'أبلغني عند الإطلاق',
      'membership.sub': 'ابدأ مجانًا. العضوية الاحترافية قريبًا.',
      'kyberia.cta': 'زيارة Kyberia Labs →',
      'docs.title': 'التوثيق والويكي',
      'docs.sub': 'كل ما تحتاجه للاستفادة القصوى من PRP.',
      'docs.d1.title': 'البدء السريع',
      'docs.d1.desc': 'أنشئ حسابك وهيّئ ملفك الشخصي وابدأ تتبّع الموارد الـ4 في دقائق.',
      'docs.d2.title': 'دليل وحدة الوقت',
      'docs.d2.desc': 'أتقن أحداث التقويم وحجب الوقت وأولويات المهام وتقارير توزيع الجدول.',
      'docs.d3.title': 'دليل وحدة المال',
      'docs.d3.desc': 'أضف حساباتك البنكية وتتبّع استثماراتك وأدِر ديونك وراقب صافي ثروتك بعملات متعددة.',
      'docs.d4.title': 'دليل الصحة والطاقة',
      'docs.d4.desc': 'هيّئ عاداتك وجداول الصيام وتتبّع أهدافك بمهام فرعية وأدِر جلسات التركيز بفاعلية.',
      'avail.title': 'متاح حيث تعمل',
      'avail.sub': 'المزيد من المنصات قريبًا.',
      'avail.download': 'تحميل',
      'avail.open': 'افتح التطبيق',
      'avail.web': 'الويب',
      'avail.soon': 'قريبًا',
      'download.title': 'PRP لويندوز',
      'download.desc': 'تحميل مجاني. يتطلب ويندوز 10 أو أحدث.',
      'download.btn': 'تحميل .exe',
      'kyberia.label': 'بناه',
      'kyberia.desc': 'PRP منتج من Kyberia Labs — مختبر الابتكار التقني التابع لـ Peridot Holdings. نبني أدوات ذكية تساعد الناس على العيش والعمل بأعلى مستوياتهم.',
      'footer.tagline': 'المخطّط الشخصي للموارد',
      'footer.kyberia': 'منتج Kyberia Labs',
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

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  /* ------------------ Init ------------------ */
  document.addEventListener('DOMContentLoaded', function () {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('lang') || 'en';
        setLanguage(current === 'ar' ? 'en' : 'ar');
      });
    }

    const header = document.getElementById('header');
    const onScroll = () => {
      if (!header) return;
      header.classList.toggle('scrolled', window.scrollY > 4);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    initCarousel();
    initReveal();
    initBackToTop();
  });

  /* ------------------ Back to Top ------------------ */
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.classList.toggle('is-visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------ Carousel ------------------ */
  function initCarousel() {
    const track = document.getElementById('shotsTrack');
    const prev = document.getElementById('shotsPrev');
    const next = document.getElementById('shotsNext');
    const dotsWrap = document.getElementById('shotsDots');
    if (!track) return;

    const slides = Array.from(track.querySelectorAll('.shot'));
    if (!slides.length) return;

    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', `Screenshot ${i + 1}`);
      b.addEventListener('click', () => scrollToIndex(i));
      dotsWrap.appendChild(b);
    });

    function currentIndex() {
      const slideWidth = slides[0].getBoundingClientRect().width + 20;
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

    track.addEventListener('scroll', () => window.requestAnimationFrame(updateDots));
    updateDots();
  }

  /* ------------------ Reveal on scroll ------------------ */
  function initReveal() {
    const targets = document.querySelectorAll('.feature, .shot, .platform, .section__head, .module, .plan, .doc-card');
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
    }, { threshold: 0.1 });

    targets.forEach((el) => io.observe(el));
  }
})();
