/**
 * ═══════════════════════════════════════════════════════════════
 * QUBIT ACADEMY — script.js
 * Sahan De Silva | Personal ICT Tuition Website
 * ═══════════════════════════════════════════════════════════════
 */

const translations = {
  en: {
    /* NAVBAR */
    nav_academy: "Qubit Academy",
    nav_about: "The Brains",
    nav_courses: "The Roadmap",
    nav_why: "The Edge",
    nav_tuts: "Tuts",
    nav_contact: "Secure Your Seat",

    /* HERO */
    hero_label: "Don't Just Study. Dominate.",
    hero_academy: "Qubit Academy",
    hero_tagline: '"Crafting Minds. Building Futures."',
    hero_intro: "Stop memorizing. Start mastering. <br />Bringing modern ICT logic to A/L & O/L students who want to lead the future. 🚀",
    hero_btn_join: "Start Your Grind",
    hero_btn_courses: "Browse the Stack",

    /* ABOUT */
    about_title: "The Mentor Behind the Code",
    about_stat1_label: "Years of Hustle",
    about_stat2_label: "Students Unlocked",
    about_stat3_label: "Tier-A Results",
    about_bio: `ICT shouldn't be a struggle. I'm Sahan, and for 5+ years, I've been turning "confusing" concepts into "aha!" moments for A/L and O/L students. 
                At Qubit Academy, we cut the fluff. We build logic, solve real problems, and ensure you're exam-ready without the burnout. 
                You're not just a number; we tailor the grind to fit your pace.`,
    about_h1: "CS Background (No fake gurus)",
    about_h2: "Logic over Rote Learning",
    about_h3: "Python Mastery & Algo Drills",
    about_h4: "Proven A-Pass Blueprint",

    /* COURSES */
    courses_title: "Choose Your Mission",
    courses_subtitle: "Zero fluff. Pure knowledge. Serious results.",
    al_badge: "Advanced Level",
    al_title: "A/L ICT Mastery",
    al_desc: "The ultimate deep dive into the A/L syllabus. We master the logic, crush the programming, and dominate the papers.",
    al_f1: "100% Syllabus Coverage (No shortcuts)",
    al_f2: "Logic Building & Flowchart Pro-Tips",
    al_f3: "Hands-on Python (Real-world style)",
    al_f4: "Past Paper Speed-Run Practice",
    al_f5: "Exam-killer Theory Strategies",
    ol_badge: "Ordinary Level",
    ol_title: "O/L ICT Foundation",
    ol_desc: "Build a bulletproof foundation. We turn O/L ICT into your easiest 'A' while prepping you for the next level.",
    ol_f1: "Crystal clear theory sessions",
    ol_f2: "Practicals that actually click",
    ol_f3: "Result-oriented Exam Prep",
    ol_f4: "Modern Tech Tools & Insights",
    ol_f5: "Confidence that hits different",
    card_cta: "Enroll Now →",

    /* WHY */
    why_title: "The Qubit Advantage",
    why_subtitle: "Why settle for 'normal' when you can have the edge?",
    why_h1: "5+ Years of Proof",
    why_p1: "A proven track record of turning average students into ICT toppers.",
    why_h2: "Real Tech Roots",
    why_p2: "Learn from someone who actually knows CS, not just someone reading a book.",
    why_h3: "Modern Vibes Only",
    why_p3: "Visual learning, coding drills, and real-world logic that makes sense.",
    why_h4: "Personalized Support",
    why_p4: "Small batches, big focus. We don't leave anyone behind.",

    /* TUTS & SYLLABUS */
    tuts_title: "Free ICT Tuts",
    tuts_subtitle: "High-value lessons, zero cost. Build real understanding before the exam.",
    syllabus_label: "A/L ICT Syllabus",
    syllabus_heading: "All 13 Lessons Covered",
    syllabus_note: "Lesson 01 is free to download. More lessons dropping regularly.",
    tut_btn_read: "Read →",
    tut_btn_pdf: "PDF ↓",
    syl_free_tag: "✦ Free",
    syl_soon: "🔒 Soon",
    syl_01: "Concept of ICT",
    syl_02: "Introduction to Computer",
    syl_03: "Data Representation",
    syl_04: "Fundamentals of Digital Circuits",
    syl_05: "Computer Operating Systems",
    syl_06: "Data Communication and Networking",
    syl_07: "System Analysis and Design",
    syl_08: "Database Management",
    syl_09: "Programming",
    syl_10: "Web Development",
    syl_11: "Internet of Things (IoT)",
    syl_12: "ICT in Business",
    syl_13: "New Trends and Future Directions of ICT",
    syl_14: "Project",
    tuts_more_note: "More free lessons dropping regularly.",
    tuts_view_all: "View All Tuts →",
    quiz_badge: "🐍 Python MCQ Quiz",
    quiz_title: "Python Programming — 50 MCQ Challenge",
    quiz_desc: "Think you know Python? Test yourself with 50 model MCQ questions designed specifically for A/L ICT students. Sharpen your logic and ace the exam.",
    quiz_btn: "Start Quiz →",
    quiz_embed_link: "View on this site ↗",

    /* CONTACT */
    contact_title: "Ready to Level Up?",
    contact_subtitle: "The best time to start was yesterday. The second best time is now.",
    contact_phone_label: "Call / WhatsApp",
    contact_email_label: "Email",
    contact_location_label: "Based in",
    contact_cta_text: "Join the Qubit family today. Classes available island-wide for A/L and O/L legends.",
    contact_whatsapp: "Ping us on WhatsApp",
    schedule_title: "📅 Class Schedule",
    schedule_text: "New batches are forming! Reach out to grab your time slot.",

    /* FOOTER */
    footer_tagline: '"Crafting Minds. Building Futures."',
  },

  si: {
    /* NAVBAR */
    nav_academy: "Qubit Academy",
    nav_about: "මම කවුද?",
    nav_courses: "පාඨමාලා",
    nav_why: "විශේෂත්වය",
    nav_tuts: "නිදහස් පාඩම්",
    nav_contact: "සම්බන්ධ වන්න",

    /* HERO */
    hero_label: "ICT ගේම් එක වෙනස් කරමු",
    hero_academy: "Qubit Academy",
    hero_tagline: '"හදන තැන හැදෙන තැන"',
    hero_intro: "කටපාඩම් කරන කාලය ඉවරයි. තර්කනයෙන් වැඩ පටන්ගමු. <br />අනාගතයට ගැළපෙන නවීන ICT දැනුමෙන් A/L සහ O/L සිසුන් සන්නද්ධ කරන තැන. 🚀",
    hero_btn_join: "අදම සම්බන්ධ වන්න",
    hero_btn_courses: "පාඨමාලා බලන්න",

    /* ABOUT */
    about_title: "ගුරුවරයා ගැන",
    about_stat1_label: "වසරක අත්දැකීම්",
    about_stat2_label: "සිසුන් ප්‍රමාණය",
    about_stat3_label: "විභාග ප්‍රතිඵල",
    about_bio: `ICT අමාරුයි කියලා හිතන එක නවත්තමු. මම සහන් ද සිල්වා. පසුගිය වසර 5 පුරාම ලංකාවේ දක්ෂතම ICT සිසුන් පිරිසක් බිහි කරන්න මම මග පෙන්වූවා.
                Qubit Academy එකේදී අපි කරන්නේ තවත් එක පන්තියක් නෙවෙයි; ඔයාට තේරෙන විදිහට, logical විදිහට විෂය කරුණු කියලා දෙන එක. 
                අමාරුයි කියන Theory සරලව ඉගෙනගෙන, විභාගයට බයක් නැතුව මුහුණ දෙන්න අපි ඔයාව ලෑස්ති කරනවා.`,
    about_h1: "පරිගණක විද්‍යාව පිළිබඳ විධිමත් පදනම",
    about_h2: "තර්කානුකූලව හිතන්න පුරුදු කරන ක්‍රමය",
    about_h3: "Python සහ Algorithms ප්‍රායෝගික පුහුණුව",
    about_h4: "විභාග ජයග්‍රහණ ලබාදුන් ඔප්පු කළ ඉතිහාසය",

    /* COURSES */
    courses_title: "ඔබේ ඉලක්කය තෝරන්න",
    courses_subtitle: "සෑම පියවරක්ම ක්‍රමවත්ව සහ පැහැදිලිව.",
    al_badge: "Advanced Level",
    al_title: "A/L ICT Mastery",
    al_desc: "සම්පූර්ණ විෂය නිර්දේශය ආවරණය කරමින්, Programming සහ Logic වලට විශේෂ අවධානයක් සහිතව ඉහළම සාමාර්ථයක් කරා.",
    al_f1: "සම්පූර්ණ විෂය නිර්දේශය (Syllabus) ආවරණය",
    al_f2: "Algorithm සහ Flowcharts වලට විශේෂ පුහුණුව",
    al_f3: "ප්‍රායෝගික Python Programming",
    al_f4: "ප්‍රශ්න පත්‍ර සාකච්ඡා කිරීමේ විශේෂ ක්‍රමවේද",
    al_f5: "විභාගයට ගැළපෙන කෙටි ක්‍රම සහ උපක්‍රම",
    ol_badge: "Ordinary Level",
    ol_title: "O/L ICT Foundation",
    ol_desc: "O/L ICT වලට 'A' එකක් විතරක් නෙවෙයි, අනාගතයට අවශ්‍ය තාක්ෂණික පදනම මෙතනින්.",
    ol_f1: "සරලව පැහැදිලි කරන න්‍යාය (Theory) සැසි",
    ol_f2: "ප්‍රායෝගික ක්‍රියාකාරකම් (Practicals)",
    ol_f3: "විභාගය ඉලක්ක කළ සූදානම",
    ol_f4: "නවීන ICT මෙවලම් භාවිතය",
    ol_f5: "විෂය ගැන විශ්වාසය ගොඩනැගීම",
    card_cta: "අදම ලියාපදිංචි වන්න →",

    /* WHY */
    why_title: "ඇයි Qubit Academy?",
    why_subtitle: "අපි විෂය උගන්වනවා විතරක් නෙවෙයි, ඔබව තාක්ෂණික ලෝකයට ගැළපෙන චින්තකයෙක් කරනවා.",
    why_h1: "වසර 5+ අත්දැකීම්",
    why_p1: "A/L සහ O/L සිසුන්ව සාර්ථකත්වය කරා මෙහෙයවූ සැබෑ පළපුරුද්ද.",
    why_h2: "Computer Science පදනම",
    why_p2: "පොතේ තියෙන දේ විතරක් නෙවෙයි, විෂය ඇතුළේ තියෙන සැබෑ තාක්ෂණය ඉගෙනගන්න.",
    why_h3: "නවීන ඉගැන්වීම් ක්‍රම",
    why_p3: "Visual tools සහ logic පුහුණුව හරහා කම්මැලි නැතුව ඉගෙනගන්න.",
    why_h4: "පෞද්ගලික අවධානය",
    why_p4: "සෑම සිසුවෙකුටම තමන්ගේ වේගයෙන් ඉගෙනගන්න පෞද්ගලික මගපෙන්වීම.",

    /* TUTS & SYLLABUS */
    tuts_title: "නොමිලේ ICT පාඩම්",
    tuts_subtitle: "ඉහළ වටිනාකමැති පාඩම්, ශුන්‍ය වියදමකින්. විභාගයට පෙර සැබෑ අවබෝධය ගොඩනගන්න.",
    syllabus_label: "A/L ICT විෂය නිර්දේශය",
    syllabus_heading: "පාඩම් 13ක් ආවරණය කෙරේ",
    syllabus_note: "පළමු පාඩම නොමිලේ download කළ හැකිය. තවත් පාඩම් ළඟදීම.",
    tut_btn_read: "කියවන්න →",
    tut_btn_pdf: "PDF ↓",
    syl_free_tag: "✦ නොමිලේ",
    syl_soon: "🔒 ළඟදී",
    syl_01: "තොරතුරු හා සන්නිවේදන තාක්ෂණය පිළිබඳ සංකල්ප",
    syl_02: "පරිගණකයට හැඳින්වීම",
    syl_03: "දත්ත නිරූපණය",
    syl_04: "අංකිත පරිපථවල මූලිකාංග",
    syl_05: "පරිගණක මෙහෙයුම් පද්ධති",
    syl_06: "දත්ත සන්නිවේදනය හා ජාලකරණය",
    syl_07: "පද්ධති විශ්ලේෂණය හා නිර්මාණය",
    syl_08: "දත්ත සමුදා කළමනාකරණය",
    syl_09: "ක්‍රමලේඛනය (Programming)",
    syl_10: "වෙබ් සංවර්ධනය",
    syl_11: "අන්තර්ජාල දේවල් (Internet of Things - IoT)",
    syl_12: "ව්‍යාපාර සඳහා ICT",
    syl_13: "ICT හි නව ප්‍රවණතා සහ අනාගත දිශානති",
    syl_14: "ව්‍යාපෘතිය (Project)",
    tuts_more_note: "තවත් නොමිලේ පාඩම් ළඟදීම.",
    tuts_view_all: "සියලු පාඩම් බලන්න →",
    quiz_badge: "🐍 Python MCQ ප්‍රශ්නාවලිය",
    quiz_title: "Python Programming — MCQ ප්‍රශ්න 50ක් අභියෝගය",
    quiz_desc: "Python ගැන දන්නවාද? A/L ICT සිසුන් සඳහා විශේෂයෙන් නිර්මාණය කළ MCQ ප්‍රශ්න 50කින් ඔබේ දැනුම පරීක්ෂා කරන්න.",
    quiz_btn: "ප්‍රශ්නාවලිය පටන් ගන්න →",
    quiz_embed_link: "මෙම සයිට් එකේ බලන්න ↗",

    /* CONTACT */
    contact_title: "පටන් ගමුද?",
    contact_subtitle: "සාර්ථකත්වයේ පළමු පියවර අදම තබන්න.",
    contact_phone_label: "දුරකථන / WhatsApp",
    contact_email_label: "විද්‍යුත් තැපෑල",
    contact_location_label: "ස්ථානය",
    contact_cta_text: "Qubit පවුලට අදම එකතු වෙන්න. මුළු දිවයිනටම Online සහ Physical පන්ති.",
    contact_whatsapp: "WhatsApp හරහා කතා කරන්න",
    schedule_title: "📅 පන්ති කාලසටහන",
    schedule_text: "අලුත් කණ්ඩායම් සඳහා වේලාවන් දැනගන්න දැන්ම අපව අමතන්න.",

    /* FOOTER */
    footer_tagline: '"හදන තැන හැදෙන තැන"',
  }
};

/* ─────────────────────────────────────
    THEME TOGGLE — Dark / Light
───────────────────────────────────── */
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
  const isLight = theme === 'light';
  if (isLight) {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
  updateParticlesForTheme(isLight);
}

function toggleTheme() {
  const isLight = document.body.classList.contains('light-mode');
  const newTheme = isLight ? 'dark' : 'light';
  applyTheme(newTheme);
  localStorage.setItem('qubit_theme', newTheme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

/* ─────────────────────────────────────
    LANGUAGE SYSTEM
───────────────────────────────────── */

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.documentElement.lang = lang === 'si' ? 'si' : 'en';
  document.body.classList.toggle('lang-si', lang === 'si');
}

function setLang(lang) {
  const currentLang = localStorage.getItem('qubit_lang');
  if (lang === currentLang) return;

  const body = document.body;
  body.classList.add('lang-fade');

  setTimeout(() => {
    applyTranslations(lang);
    localStorage.setItem('qubit_lang', lang);

    document.getElementById('btnEN').classList.toggle('active', lang === 'en');
    document.getElementById('btnSI').classList.toggle('active', lang === 'si');

    body.classList.remove('lang-fade');
  }, 250);
}

/* ─────────────────────────────────────
    NAVBAR — sticky on scroll
───────────────────────────────────── */
const navbar = document.getElementById('navbar');

function handleNavScroll() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });

/* ─────────────────────────────────────
    HAMBURGER MOBILE MENU
───────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen.toString());
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

/* ─────────────────────────────────────
    SCROLL REVEAL — IntersectionObserver
───────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right')
  .forEach(el => revealObserver.observe(el));

/* ─────────────────────────────────────
    PARTICLES.JS
───────────────────────────────────── */
function initParticles() {
  if (typeof particlesJS === 'undefined') return;

  particlesJS('particles-js', {
    "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#6d28d9" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5, "random": false },
      "size": { "value": 3, "random": true },
      "line_linked": { "enable": true, "distance": 150, "color": "#6d28d9", "opacity": 0.4, "width": 1 },
      "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
      "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
  });
}

// Re-tint particles canvas when theme switches
function updateParticlesForTheme(isLight) {
  const canvas = document.querySelector('#particles-js canvas');
  if (!canvas) return;
  if (isLight) {
    canvas.style.opacity = '0.6';
    canvas.style.filter = 'saturate(1.6) brightness(0.55)';
  } else {
    canvas.style.opacity = '1';
    canvas.style.filter = 'none';
  }
}

/* ─────────────────────────────────────
    ACTIVE NAV LINK
───────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinkElems = document.querySelectorAll('.nav-links a, .mobile-menu a');

function highlightNavLink() {
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const top = section.offsetTop - navbar.offsetHeight - 60;
    const bottom = top + section.offsetHeight;
    if (scrollY >= top && scrollY < bottom) {
      navLinkElems.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active-link');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNavLink, { passive: true });

/* ─────────────────────────────────────
    INIT
───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('qubit_lang') || 'en';
  applyTranslations(savedLang);

  document.getElementById('btnEN').classList.toggle('active', savedLang === 'en');
  document.getElementById('btnSI').classList.toggle('active', savedLang === 'si');

  // Load saved theme
  const savedTheme = localStorage.getItem('qubit_theme') || 'dark';
  applyTheme(savedTheme);

  initParticles();
  // Apply particle tint after init (slight delay for canvas to render)
  setTimeout(() => updateParticlesForTheme(savedTheme === 'light'), 300);

  handleNavScroll();
  highlightNavLink();
});
