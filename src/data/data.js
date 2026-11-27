export const DATA = {
  email: "tarek.elkhouly.11@gmail.com",
  github: "https://github.com/tarekmohamed1100",
  linkedin: "https://www.linkedin.com/in/tarek-mohamed-dev",
  avatar: "https://github.com/tarekmohamed1100.png?size=460",
  stats: [
    { to: 1, suffix: "+", en: "Years building", ar: "سنين خبرة" },
    { to: 20, suffix: "+", en: "Projects shipped", ar: "مشروع منجز" },
    { to: 20, suffix: "+", en: "Tech in my stack", ar: "تقنية بستخدمها" },
  ],
  projects: [
    {
      title: { en: "E-Commerce Store", ar: "متجر إلكتروني" },
      desc: {
        en: "Modern responsive shop: product categories, search, cart, flash sales and checkout.",
        ar: "متجر متجاوب فيه أقسام منتجات، بحث، سلة مشتريات، عروض فلاش، وصفحة دفع.",
      },
      tags: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe",
      ],
      repo: "https://github.com/tarekmohamed1100/E-Commerce",
      // demo: "https://...",        // optional live link
      // image: "projects/shop.png", // optional screenshot in /public/projects
      bars: [35, 65, 90, 50, 75],
    },
    {
      title: { en: "RihLa Travel", ar: "رحلة — حجز رحلات" },
      desc: {
        en: "Bus-trip booking site for Egypt: trip listings, details, booking, sign-in and booking management.",
        ar: "موقع حجز رحلات أتوبيس في مصر: عرض الرحلات وتفاصيلها، الحجز، تسجيل الدخول، وإدارة الحجوزات.",
      },
      tags: ["HTML", "Responsive", "Auth", "Booking"],
      repo: "https://github.com/tarekmohamed1100/RihLa",
      bars: [55, 80, 45, 70, 60],
    },
    {
      title: { en: "Student Management", ar: "إدارة الطلاب" },
      desc: {
        en: "Responsive CRUD app to add, edit and delete student records with input validation.",
        ar: "تطبيق متجاوب لإضافة وتعديل وحذف بيانات الطلاب، مع تحقق كامل من المدخلات.",
      },
      tags: ["JavaScript", "Bootstrap", "CRUD", "Validation"],
      repo: "https://github.com/tarekmohamed1100/Student-Management",
      bars: [70, 45, 60, 85, 50],
    },
  ],
  skills: {
    front: [
      { n: "React", l: 90 },
      { n: "TypeScript", l: 88 },
      { n: "JavaScript", l: 90 },
      { n: "Tailwind CSS", l: 92 },
    ],
    back: [
      { n: "Node.js", l: 85 },
      { n: "Express / REST APIs", l: 85 },
      { n: "PostgreSQL", l: 78 },
      { n: "Auth & sessions", l: 75 },
    ],
    ai: [
      { n: "ChatGPT / GPT-4", l: 90 },
      { n: "Claude", l: 88 },
      { n: "Gemini", l: 82 },
      { n: "Prompt Engineering", l: 85 },
      { n: "OpenAI API", l: 88 },
      { n: "LangChain", l: 75 },
    ],
  },
  tools: [
    "Git",
    "GitHub",
    "Docker",
    "Vite",
    "Postman",
    "Figma",
    "OpenAI",
    "ChatGPT",
    "Claude",
  ],
};
