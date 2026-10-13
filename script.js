const translations = {
  en: {
    navHome:"Home",navAbout:"About",navSkills:"Skills",navProjects:"Projects",navContact:"Contact",letsTalk:"Let’s talk",
    availability:"CREATIVE MIND. DEVELOPER'S LOGIC.",hello:"Hello, I'm",heroRole:'Software Developer <span>&</span> Graphic Designer',
    heroDescription:"I build thoughtful digital experiences and visual identities that bring ideas to life — with a balance of clean code and creative design.",
    viewWork:"Explore my work",contactMe:"Contact me",metaOne:"Code with purpose",metaTwo:"Design with meaning",photoHint:"YOUR PHOTO GOES HERE",photoSubHint:"Replace assets/profile.jpg with your real photo",badgeText:"Built with curiosity",
    aboutLabel:"THE PERSON BEHIND THE PIXELS",aboutHeading:"A developer’s mindset.<br><span>A designer’s eye.</span>",
    aboutText:"I’m Romany Garges, a developer and graphic designer who enjoys turning ideas into useful, clear, and memorable digital experiences. I bring together technical thinking and visual storytelling to create work that feels as good as it functions.",
    startConversation:"Let’s create something meaningful",skillsLabel:"WHAT I BRING",skillsHeading:"Skills & <span>craft.</span>",skillsIntro:"A practical mix of code, design, and problem-solving.",
    skillWeb:"Web Development",skillWebText:"Responsive interfaces built with HTML, CSS, and JavaScript.",skillDesign:"Graphic Design",skillDesignText:"Visual concepts, social media creatives, and brand-focused graphics.",skillUI:"UI / UX Design",skillUIText:"Clear layouts and intuitive user journeys across screen sizes.",
    projectsLabel:"SELECTED WORK",projectsHeading:"Ideas made <span>real.</span>",projectsIntro:"A selection of projects I’ve been building.",eduvoDesc:"An educational platform concept designed to support students with study planning and learning resources.",romeoDesc:"A dark, media-inspired web experience focused on content discovery and visual identity.",personalProject:"Personal Portfolio",portfolioDesc:"A personal space to present my work, skills, and creative direction.",projectsNote:"Project descriptions can be updated as each project develops.",
    contactLabel:"HAVE A PROJECT IN MIND?",contactHeading:"Let’s make your<br><span>next idea happen.</span>",contactText:"Have a website idea, a design project, or a collaboration in mind? Get in touch.",emailMe:"Email me",socialPrompt:"FIND ME ONLINE",footerText:"Designed with intent. Built with curiosity."
  },
  ar: {
    navHome:"الرئيسية",navAbout:"من أنا",navSkills:"مهاراتي",navProjects:"أعمالي",navContact:"تواصل معي",letsTalk:"لنتحدث",
    availability:"إبداع في التفكير. منطق في البرمجة.",hello:"أهلًا، أنا",heroRole:'مطور برمجيات <span>&</span> مصمم جرافيك',
    heroDescription:"أحوّل الأفكار إلى تجارب رقمية وهوية بصرية مميزة، من خلال الجمع بين كتابة كود منظم وحس إبداعي في التصميم.",
    viewWork:"استكشف أعمالي",contactMe:"تواصل معي",metaOne:"برمجة لها هدف",metaTwo:"تصميم له معنى",photoHint:"صورتك الشخصية هنا",photoSubHint:"استبدل ملف assets/profile.jpg بصورتك الحقيقية",badgeText:"الإبداع يبدأ بالفضول",
    aboutLabel:"الشخص وراء كل تفصيلة",aboutHeading:"عقلية مطور.<br><span>وعين مصمم.</span>",
    aboutText:"أنا روماني جرجس، مهتم بتطوير المواقع وتصميم الجرافيك، وبحب أحوّل الأفكار إلى تجارب رقمية مفيدة وواضحة وسهلة الاستخدام. بجمع بين التفكير التقني والحكاية البصرية عشان أقدّم شغل يجمع بين الشكل والأداء.",
    startConversation:"خلينا نعمل حاجة مميزة",skillsLabel:"ما الذي أقدمه؟",skillsHeading:"مهاراتي و<span>أدواتي.</span>",skillsIntro:"مزيج عملي من البرمجة والتصميم وحل المشكلات.",
    skillWeb:"تطوير المواقع",skillWebText:"واجهات متجاوبة باستخدام HTML وCSS وJavaScript.",skillDesign:"تصميم الجرافيك",skillDesignText:"أفكار بصرية وتصميمات للسوشيال ميديا وهوية العلامات التجارية.",skillUI:"تصميم UI / UX",skillUIText:"واجهات واضحة وتجربة استخدام سهلة على مختلف الشاشات.",
    projectsLabel:"نماذج من أعمالي",projectsHeading:"أفكار أصبحت <span>واقعًا.</span>",projectsIntro:"مجموعة من المشاريع التي أعمل على تطويرها.",
    eduvoDesc:"فكرة منصة تعليمية لمساعدة الطلاب في تنظيم المذاكرة والوصول إلى مصادر التعلم.",romeoDesc:"تجربة ويب بطابع إعلامي داكن، تركز على اكتشاف المحتوى والهوية البصرية.",personalProject:"البورتفوليو الشخصي",portfolioDesc:"مساحة شخصية لعرض أعمالي ومهاراتي واتجاهي الإبداعي.",projectsNote:"يمكن تحديث وصف كل مشروع مع تطور العمل عليه.",
    contactLabel:"عندك مشروع في بالك؟",contactHeading:"خلينا نحول<br><span>فكرتك لواقع.</span>",contactText:"لو عندك فكرة موقع أو مشروع تصميم أو حابب نتعاون، ابعتلي.",emailMe:"راسلني",socialPrompt:"تلاقيني على",footerText:"تصميم بهدف. وتنفيذ بشغف."
  }
};
const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".desktop-nav");
let currentLanguage = "en";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.dir = language === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  languageToggle.textContent = language === "en" ? "عربي" : "English";
  languageToggle.setAttribute("aria-label", language === "en" ? "التبديل إلى العربية" : "Switch to English");
  try { localStorage.setItem("romanyPortfolioLanguage", language); } catch (_) {}
}
languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "ar" : "en"));
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => backTop.classList.toggle("visible", window.scrollY > 500), { passive: true });
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
const portraitImage = document.getElementById("portraitImage");
const portraitPlaceholder = document.getElementById("portraitPlaceholder");
portraitImage.addEventListener("load", () => { portraitImage.hidden = false; portraitPlaceholder.hidden = true; });
portraitImage.addEventListener("error", () => { portraitImage.hidden = true; portraitPlaceholder.hidden = false; });
try {
  const savedLanguage = localStorage.getItem("romanyPortfolioLanguage");
  if (savedLanguage === "ar" || savedLanguage === "en") setLanguage(savedLanguage);
} catch (_) {}
