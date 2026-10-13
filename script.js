const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const menuToggle = $(".menu-toggle");
const nav = $(".main-nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  });
  $$(".main-nav a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }));
}
const year = $("#year");
if (year) year.textContent = new Date().getFullYear();

const backTop = $(".back-top");
if (backTop) {
  window.addEventListener("scroll", () => backTop.classList.toggle("visible", window.scrollY > 400), {passive:true});
  backTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
}

// Reveal elements gently as they enter the viewport.
const revealItems = $$(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add("is-visible"));

// Project category filters.
const filterButtons = $$(".filter-btn");
const projectItems = $$(".project-detail[data-category]");
filterButtons.forEach(button => button.addEventListener("click", () => {
  filterButtons.forEach(b => b.classList.toggle("active", b === button));
  const filter = button.dataset.filter;
  projectItems.forEach(item => {
    item.hidden = !(filter === "all" || item.dataset.category === filter);
  });
}));

// Prefill service when arriving from a service card.
const serviceSelect = $("#service");
if (serviceSelect) {
  const key = new URLSearchParams(window.location.search).get("service");
  const map = {web:"تطوير موقع",design:"تصميم جرافيك",uiux:"واجهة UI / UX",branding:"هوية بصرية"};
  if (map[key]) serviceSelect.value = map[key];
}
const contactForm = $("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const subject = `استفسار مشروع من ${data.get("name")}`;
    const body = [
      `الاسم: ${data.get("name")}`,
      `وسيلة التواصل: ${data.get("reply") || "لم يحدد"}`,
      `الخدمة المطلوبة: ${data.get("service")}`,
      "",
      "تفاصيل المشروع:",
      data.get("details")
    ].join("\n");
    const mailto = `mailto:rgarges7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const note = $("#formNote");
    if (note) note.textContent = "هيتم فتح برنامج البريد برسالة جاهزة. راجعها واضغط إرسال من برنامجك.";
    window.location.href = mailto;
  });
}

// Bilingual toggle: stores choice and translates the shared navigation + page text where translations exist.
const translations = {
  en: {
    navHome:"Home",navProjects:"Projects",navServices:"Services",navContact:"Contact",
    homeEyebrow:"CODE × DESIGN × CREATIVITY",homeIntro:"Hello, I'm",homeRole:"Web Developer & Graphic Designer",
    homeDesc:"I combine software thinking with visual creativity to turn ideas into distinctive, fast, and user-friendly digital experiences.",
    homeWork:"Explore my work",homeContact:"Let's talk",aboutTitle:"A developer's mindset,<br>a designer's eye.",aboutText:"I build practical websites and strong visual identities, from planning to the final details.",
    projectTitle:"Ideas made real.",serviceTitle:"Services that turn ideas into polished work.",contactTitle:"Let's start something new."
  },
  ar: {
    navHome:"الرئيسية",navProjects:"أعمالي",navServices:"خدماتي",navContact:"تواصل معي",
    homeEyebrow:"البرمجة × التصميم × الإبداع",homeIntro:"أهلًا، أنا",homeRole:"مطور مواقع ومصمم جرافيك",
    homeDesc:"بجمع بين التفكير البرمجي والحس البصري عشان أحوّل الأفكار لتجارب رقمية مميزة، سريعة، وسهلة الاستخدام.",
    homeWork:"استكشف أعمالي",homeContact:"خلينا نتكلم",aboutTitle:"تقنية بعقلية مطور،<br>وتفاصيل بعين مصمم.",aboutText:"مهتم ببناء مواقع عملية وشكل بصري قوي، من أول الفكرة والتخطيط لحد تجربة المستخدم والتفاصيل النهائية.",
    projectTitle:"أفكار أصبحت واقعًا.",serviceTitle:"خدمات بتبدأ بفكرة، وتنتهي بشغل متقن.",contactTitle:"خلينا نبدأ حاجة جديدة."
  }
};
function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.dataset.lang = lang;
  $$(".lang-toggle").forEach(btn => { btn.textContent = lang === "ar" ? "EN" : "عربي"; btn.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية"); });
  try { localStorage.setItem("romanyPortfolioLanguage", lang); } catch (_) {}
  // The complete page layouts remain Arabic by default. This toggles layout direction and the key shared navigation.
  const labels = lang === "en" ? ["Home","Projects","Services","Contact"] : ["الرئيسية","أعمالي","خدماتي","تواصل معي"];
  $$(".main-nav a").forEach((a, i) => { if (labels[i]) a.textContent = labels[i]; });
}
$$(".lang-toggle").forEach(btn => btn.addEventListener("click", () => {
  const current = document.documentElement.lang || "ar";
  setLanguage(current === "ar" ? "en" : "ar");
}));
try {
  const saved = localStorage.getItem("romanyPortfolioLanguage");
  if (saved === "en") setLanguage("en");
} catch (_) {}
