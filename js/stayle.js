
const { useState, useEffect, useRef, useMemo } = React;

const DATA = {
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

/* tech logos that gather into rows */
const TECH = [
    { n: "React", c: "#61dafb" },
    { n: "TypeScript", c: "#4f8ff7" },
    { n: "JavaScript", c: "#f7df1e" },
    { n: "Next.js", c: "#e6edf3" },
    { n: "Node.js", c: "#5fa04e" },
    { n: "Express", c: "#a1a1aa" },
    { n: "MongoDB", c: "#47a248" },
    { n: "PostgreSQL", c: "#5b7fe8" },
    { n: "Tailwind", c: "#38bdf8" },
    { n: "Docker", c: "#2496ed" },
    { n: "Git", c: "#f05032" },
    { n: "Python",  c: "#ffd43b" },
    { n: "Redux" , c: "#a78bfa" },
    { n: "REST API" , c: "#94a3b8" },
    { n: "ChatGPT", c: "#10a37f" },
    { n: "Claude", c: "#d97706" },
    { n: "Gemini",  c: "#8e75ff" },
    { n: "OpenAI API" , c: "#10a37f" },
    { n: "LangChain" , c: "#38bdf8" },
    { n: "Prompt Eng",  c: "#fbbf24" },
];

/* ==================== COPY ==================== */
const COPY = {
    ar: {
        dir: "rtl",
        brand: "طارق.dev",
        nav: {
            work: "أعمالي",
            about: "عني",
            stack: "اللغات",
            contact: "تواصل",
        },
        roles: [
            "مطوّر Full-Stack",
            "React · TypeScript · Tailwind",
            "Node.js · Express · PostgreSQL",
        ],
        badge: "متاح لمشاريع جديدة",
        hello: "أهلاً أنا ",
        name: "طارق محمد الخولي",
        headline:
            "ببني منتجات ويب سريعة وشكلها حلو من البكسل لحد قاعدة البيانات",
        lead: "مطوّر Front-end و Back-end من مصر. بشكّل الواجهات بـ React و TypeScript و Tailwind، وبشغّلها بسيرفرات Node.js و Express. بحب التفاصيل الصغيرة اللي المستخدم بيحسّها من غير ما يشوفها.",
        cta1: "شوف أعمالي",
        cta2: "كلمني",
        toggleLang: "EN",
        toggleTheme: "تبديل الوضع",
        workTitle: "أعمال مختارة",
        workSub: "مشاريع بنيتها من الأول للآخر.",
        viewCode: "الكود على GitHub",
        aboutTitle: "عني",
        aboutCards: [
            {
                t: "مين أنا",
                d: "مطوّر ويب بيحب يمسك الفيتشر من أول رسمة على الورق لحد ما يشتغل على السيرفر بسرعة ونضافة.",
            },
            {
                t: "إزاي بشتغل",
                d: "خطوات صغيرة، أسماء واضحة، واختبارات في الأماكن اللي بتفرق فعلاً، وكلام صريح عن أي trade-off.",
            },
            {
                t: "بدوّر على إيه",
                d: "شغل فيه حرفة حقيقية، مكان الواجهة فيه مهتمين بيها قد الكود نفسه.",
            },
        ],
        stackTitle: "اللغات والأدوات اللي بشتغل بيها",
        stackSub: "كمّل سكرول — اللوجوهات بتتجمّع لوحدها في مكانها.",
        aiLabel: "ذكاء اصطناعي",
        skillsTitle: "المهارات",
        frontLabel: "Front-end",
        backLabel: "Back-end",
        aiLabel: "ذكاء اصطناعي",
        toolsLabel: "أدوات",
        contactTitle: "يلا نبني حاجة.",
        contactSub: "قولّي عن المشروع وأنا برد عليك في خلال يومين شغل.",
        fName: "اسمك",
        fEmail: "الإيميل",
        fMsg: "رسالتك",
        send: "ابعت الرسالة",
        copy: "انسخ الإيميل",
        copied: "اتنسخ ✓",
        sending: "بيفتح تطبيق الإيميل…",
        footer: "مبني بـ React و TypeScript و Tailwind و Node.js.",
        top: "لفوق",
        photoAlt: "صورة طارق محمد الخولي",
    },
    en: {
        dir: "ltr",
        brand: "tarek.dev",
        nav: {
            work: "Work",
            about: "About",
            stack: "Stack",
            contact: "Contact",
        },
        roles: [
            "Full-stack developer",
            "React · TypeScript · Tailwind",
            "Node.js · Express · PostgreSQL",
        ],
        badge: "Available for projects",
        hello: "Hi, I'm ",
        name: "Tarek El-Kholy",
        headline:
            "I build fast, good-looking web products — from the pixel to the database.",
        lead: "Front-end and back-end developer based in Egypt. I shape interfaces with React, TypeScript and Tailwind, and power them with Node.js and Express. I care about the small details people feel but never see.",
        cta1: "See my work",
        cta2: "Get in touch",
        toggleLang: "عربي",
        toggleTheme: "Toggle theme",
        statsHint: "Approximate figures — replace with yours",
        workTitle: "Selected work",
        workSub: "A few products built end to end.",
        viewCode: "Source on GitHub",
        aboutTitle: "About me",
        aboutCards: [
            {
                t: "Who I am",
                d: "A web developer who likes owning a feature from the first sketch to a fast, clean production server.",
            },
            {
                t: "How I work",
                d: "Small steps, clear naming, tests where they actually matter, and honest talk about trade-offs.",
            },
            {
                t: "What I'm after",
                d: "Teams and products where craft matters, and where the interface gets as much care as the code.",
            },
        ],
        stackTitle: "Languages & tools I work with",
        stackSub:
            "Keep scrolling — the logos gather into place on their own.",
        skillsTitle: "Skills",
        frontLabel: "Front-end",
        backLabel: "Back-end",
        toolsLabel: "Tools",
        contactTitle: "Let's build something.",
        contactSub:
            "Tell me about the project and I'll reply within two working days.",
        fName: "Your name",
        fEmail: "Email",
        fMsg: "Your message",
        send: "Send message",
        copy: "Copy email",
        copied: "Copied ✓",
        sending: "Opening your email app…",
        footer: "Built with React, TypeScript, Tailwind and Node.js.",
        top: "Back to top",
        photoAlt: "Tarek El-Kholy portrait",
    },
};

/* ==================== HOOKS ==================== */
const reduced = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function useInView(threshold = 0.15) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (!("IntersectionObserver" in window) || reduced()) {
            setInView(true);
            return;
        }
        const io = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setInView(true);
                    io.disconnect();
                }
            },
            { threshold },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);
    return [ref, inView];
}

function Reveal({ children, delay = 0, className = "" }) {
    const [ref, inView] = useInView();
    return (
        <div
            ref={ref}
            className={`reveal ${inView ? "in" : ""} ${className}`}
            style={{ "--d": delay + "ms" }}
        >
            {children}
        </div>
    );
}

function Counter({ to, suffix = "" }) {
    const [ref, inView] = useInView(0.5);
    const [n, setN] = useState(0);
    useEffect(() => {
        if (!inView) return;
        if (reduced()) {
            setN(to);
            return;
        }
        let start = null,
            raf;
        const dur = 1400;
        const step = (t) => {
            if (start === null) start = t;
            const p = Math.min((t - start) / dur, 1);
            setN(Math.round((1 - Math.pow(1 - p, 3)) * to));
            if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [inView, to]);
    return (
        <span ref={ref} className="tabular-nums">
            {n}
            {suffix}
        </span>
    );
}

function Typing({ words }) {
    const [i, setI] = useState(0);
    const [text, setText] = useState("");
    const [del, setDel] = useState(false);
    useEffect(() => {
        if (reduced()) {
            setText(words[0]);
            return;
        }
        const word = words[i % words.length];
        let delay = del ? 35 : 75;
        if (!del && text === word) delay = 1500;
        const t = setTimeout(() => {
            if (!del && text === word) {
                setDel(true);
                return;
            }
            if (!del) {
                setText(word.slice(0, text.length + 1));
                return;
            }
            if (text === "") {
                setDel(false);
                setI(i + 1);
                return;
            }
            setText(text.slice(0, -1));
        }, delay);
        return () => clearTimeout(t);
    }, [text, del, i, words]);
    return (
        <span>
            {text}
            <span className="blink inline-block w-[2px] h-[1em] translate-y-[3px] bg-[var(--accent)] align-middle ms-1" />
        </span>
    );
}

function Tilt({ children, className = "" }) {
    const ref = useRef(null);
    const onMove = (e) => {
        if (reduced() || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        ref.current.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-3px)`;
    };
    const onLeave = () => {
        if (ref.current) ref.current.style.transform = "";
    };
    return (
        <div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
        >
            {children}
        </div>
    );
}

function SkillBar({ name, level }) {
    const [ref, inView] = useInView(0.4);
    return (
        <div ref={ref}>
            <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium">{name}</span>
                <span className="muted mono tabular-nums">{level}</span>
            </div>
            <div
                className="h-[6px] w-full overflow-hidden rounded-full"
                style={{ background: "var(--line)" }}
            >
                <div
                    className="h-full rounded-full transition-[width] duration-[1200ms] ease-out"
                    style={{
                        width: inView ? level + "%" : "0%",
                        background: "var(--accent)",
                    }}
                />
            </div>
        </div>
    );
}

/* ==================== TECH FIELD (logos gather into rows) ==================== */
function TechField({ gridRef, sectionRef }) {
    const chipRefs = useRef([]);
    const slotRefs = useRef([]);
    const [landed, setLanded] = useState(false);
    const landedRef = useRef(false);
    const pRef = useRef(0);
    const targetRef = useRef(0);

    const seed = useMemo(
        () =>
            TECH.map((_, i) => ({
                fx: 0.06 + ((i * 0.6180339887) % 1) * 0.88,
                fy: 0.08 + ((i * 0.7548776662) % 1) * 0.78,
                ph: (i * 1.7) % (Math.PI * 2),
                sp: 0.22 + ((i * 0.37) % 1) * 0.45,
                am: 14 + ((i * 0.53) % 1) * 22,
            })),
        [],
    );

    useEffect(() => {
        if (reduced()) {
            setLanded(true);
            return;
        }
        let raf,
            t0 = performance.now();
        const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
        const lerp = (a, b, t) => a + (b - a) * t;

        const tick = (now) => {
            const time = (now - t0) / 1000;
            const grid = gridRef.current,
                sec = sectionRef.current;

            if (grid && sec) {
                const gr = grid.getBoundingClientRect();
                const vh = window.innerHeight;
                const d = gr.top + gr.height / 2 - vh * 0.55;
                let raw = 1 - clamp(Math.abs(d) / (vh * 0.6), 0, 1);
                targetRef.current = raw * raw * (3 - 2 * raw);
            }
            pRef.current = lerp(pRef.current, targetRef.current, 0.1);
            const p = pRef.current;

            const isLanded = p > 0.95;
            if (isLanded !== landedRef.current) {
                landedRef.current = isLanded;
                setLanded(isLanded);
            }

            if (sec) {
                const sr = sec.getBoundingClientRect();
                TECH.forEach((_, i) => {
                    const chip = chipRefs.current[i];
                    const slot = slotRefs.current[i];
                    if (!chip || !slot) return;
                    const sl = slot.getBoundingClientRect();
                    const cx =
                        sl.left - sr.left + sl.width / 2 - chip.offsetWidth / 2;
                    const cy =
                        sl.top - sr.top + sl.height / 2 - chip.offsetHeight / 2;
                    const s = seed[i];
                    const dx =
                        s.fx * sr.width + Math.sin(time * s.sp + s.ph) * s.am;
                    const dy =
                        s.fy * sr.height +
                        Math.cos(time * s.sp * 0.8 + s.ph) * s.am * 0.8;
                    const x = lerp(dx, cx, p);
                    const y = lerp(dy, cy, p);
                    chip.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${lerp(1, 0.9, p).toFixed(3)})`;
                    chip.style.opacity = (0.32 + p * 0.68).toFixed(3);
                });
            }
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [seed, gridRef, sectionRef]);

    return (
        <>
            <div
                className="pointer-events-none absolute inset-0 z-[2]"
                aria-hidden="true"
            >
                {TECH.map((tech, i) => (
                    <div
                        key={tech.n}
                        ref={(el) => {
                            chipRefs.current[i] = el;
                        }}
                        className={`tech-chip ${landed ? "landed" : ""}`}
                        style={{ color: tech.c }}
                    >
                        <span className="glyph">{tech.s}</span>
                        <span className="tiny">{tech.n}</span>
                    </div>
                ))}
            </div>

            <div ref={gridRef} className="slot-grid relative z-[3]">
                {TECH.map((tech, i) => (
                    <div
                        key={tech.n}
                        ref={(el) => {
                            slotRefs.current[i] = el;
                        }}
                        className={`slot ${landed ? "done" : ""}`}
                    />
                ))}
            </div>
        </>
    );
}

/* ==================== APP ==================== */
function App() {
    const [theme, setTheme] = useState("dark");
    const [lang, setLang] = useState("ar");
    const [menu, setMenu] = useState(false);
    const [progress, setProgress] = useState(0);
    const [toast, setToast] = useState("");
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [photoOk, setPhotoOk] = useState(true);

    const spotRef = useRef(null);
    const stackRef = useRef(null);
    const gridRef = useRef(null);

    const t = COPY[lang];
    const pick = (o) => o[lang];

    /* load prefs once */
    useEffect(() => {
        try {
            const th = localStorage.getItem("pf-theme");
            const lg = localStorage.getItem("pf-lang");
            if (th) setTheme(th);
            if (lg) setLang(lg);
        } catch (e) { }
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        try {
            localStorage.setItem("pf-theme", theme);
        } catch (e) { }
    }, [theme]);

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = COPY[lang].dir;
        try {
            localStorage.setItem("pf-lang", lang);
        } catch (e) { }
    }, [lang]);

    useEffect(() => {
        const onScroll = () => {
            const h =
                document.documentElement.scrollHeight - window.innerHeight;
            setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
            const bg = document.getElementById("parallaxBg");
            if (bg && !reduced()) {
                const offset = window.scrollY * 0.15;
                bg.style.transform = `translateY(${offset}px)`;
            }
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const fine =
            window.matchMedia("(pointer: fine)").matches && !reduced();
        if (!fine) return;
        const onMove = (e) => {
            if (spotRef.current) {
                spotRef.current.style.transform = `translate(${e.clientX - 260}px, ${e.clientY - 260}px)`;
            }
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    useEffect(() => {
        if (!toast) return;
        const id = setTimeout(() => setToast(""), 2400);
        return () => clearTimeout(id);
    }, [toast]);

    /* staggered reveal on scroll */
    useEffect(() => {
        if (reduced()) return;
        const groups = document.querySelectorAll(".stagger");
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add("in");
                });
            },
            { threshold: 0.12 },
        );
        groups.forEach((g) => io.observe(g));
        return () => io.disconnect();
    }, []);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(DATA.email);
            setToast(t.copied);
        } catch (err) {
            setToast(DATA.email);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`${form.name} | Portfolio`);
        const body = encodeURIComponent(`${form.message}\n\n${form.email}`);
        setToast(t.sending);
        window.location.href = `mailto:${DATA.email}?subject=${subject}&body=${body}`;
    };

    const navKeys = Object.keys(t.nav);

    return (
        <>
            <div ref={spotRef} className="spot" aria-hidden="true" />

            <div
                className="progress fixed inset-x-0 top-0 z-[60] h-[2px]"
                style={{ transform: `scaleX(${progress / 100})` }}
                aria-hidden="true"
            />

            <header
                className="fixed inset-x-0 top-[2px] z-50 border-b backdrop-blur-md line"
                style={{
                    background: "color-mix(in srgb, var(--bg) 85%, transparent)",
                }}
            >
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
                    <a href="#top" className="display text-lg font-bold">
                        {t.brand}
                    </a>

                    <nav
                        className="hidden items-center gap-8 text-sm font-medium md:flex"
                        aria-label="Main"
                    >
                        {navKeys.map((k) => (
                            <a key={k} href={"#" + k} className="nav-link">
                                {t.nav[k]}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                            className="btn-icon px-3"
                            aria-label="Switch language"
                        >
                            {t.toggleLang}
                        </button>
                        <button
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className="btn-icon w-9 px-0 text-base"
                            aria-label={t.toggleTheme}
                            title={t.toggleTheme}
                        >
                            {theme === "dark" ? "☀" : "☾"}
                        </button>
                        <button
                            onClick={() => setMenu(!menu)}
                            className="btn-icon md:hidden"
                            aria-expanded={menu}
                            aria-label="Menu"
                        >
                            {menu ? "✕" : "☰"}
                        </button>
                    </div>
                </div>

                <div
                    className={`overflow-hidden px-5 transition-all duration-500 ease-out md:hidden ${menu ? "max-h-60 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
                >
                    <div className="flex flex-col gap-3 text-base font-medium">
                        {navKeys.map((k) => (
                            <a
                                key={k}
                                href={"#" + k}
                                onClick={() => setMenu(false)}
                                className="py-1"
                            >
                                {t.nav[k]}
                            </a>
                        ))}
                    </div>
                </div>
            </header>

            <main id="top" className="relative z-10">
                {/* ==================== HERO ==================== */}
                <section className="px-5 pb-24 pt-32 md:pt-40">
                    <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.15fr_.85fr]">
                        <div>
                            <span
                                className="rise inline-flex items-center gap-2 rounded-full border line px-3 py-1 text-sm muted"
                                style={{ "--d": "0ms" }}
                            >
                                <span
                                    className="ping inline-block h-2 w-2 rounded-full"
                                    style={{ background: "var(--accent)" }}
                                />
                                {t.badge}
                            </span>

                            <h1
                                className="display rise mt-6 text-4xl font-bold leading-[1.12] sm:text-5xl md:text-6xl"
                                style={{ "--d": "100ms" }}
                            >
                                {t.hello}
                                <span style={{ color: "var(--accent)" }}>{t.name}</span>
                            </h1>

                            <p
                                className="rise mt-5 h-8 text-lg font-semibold muted sm:text-xl"
                                style={{ "--d": "180ms" }}
                            >
                                <Typing words={t.roles} />
                            </p>

                            <p
                                className="rise mt-6 max-w-xl text-lg leading-relaxed"
                                style={{ "--d": "260ms" }}
                            >
                                {t.headline}
                            </p>
                            <p
                                className="rise muted mt-3 max-w-xl leading-relaxed"
                                style={{ "--d": "320ms" }}
                            >
                                {t.lead}
                            </p>

                            <div
                                className="rise mt-9 flex flex-wrap gap-3"
                                style={{ "--d": "400ms" }}
                            >
                                <a href="#work" className="btn btn-solid">
                                    {t.cta1}
                                </a>
                                <a href="#contact" className="btn btn-outline">
                                    {t.cta2}
                                </a>
                            </div>
                        </div>

                        {/* portrait card */}
                        <div
                            className="rise mx-auto w-full max-w-[330px]"
                            style={{ "--d": "300ms" }}
                        >
                            <Tilt>
                                <div className="photo-frame p-1 shadow-2xl">
                                    <div className="photo-inner aspect-[4/5]">
                                        {photoOk ? (
                                            <img
                                                src={DATA.avatar}
                                                alt={t.photoAlt}
                                                onError={() => setPhotoOk(false)}
                                                loading="eager"
                                            />
                                        ) : (
                                            <div className="photo-fallback">
                                                <span>ط.خ</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Tilt>
                            <div className="mt-4 flex items-center justify-center gap-2 text-xs muted">
                                <span
                                    className="inline-block h-1.5 w-1.5 rounded-full"
                                    style={{ background: "var(--accent)" }}
                                />
                                {pick({
                                    en: "Cairo, Egypt · Remote friendly",
                                    ar: "القاهرة، مصر · شغل عن بُعد",
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================== STATS ==================== */}
                <section className="px-5 pb-24">
                    <div
                        className="mx-auto grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-2xl border line sm:grid-cols-3"
                        style={{ background: "var(--line)" }}
                    >
                        {DATA.stats.map((s, i) => (
                            <Reveal key={i} delay={i * 120}>
                                <div
                                    className="h-full p-8 text-center"
                                    style={{ background: "var(--bg)" }}
                                >
                                    <div
                                        className="display text-5xl font-bold"
                                        style={{ color: "var(--accent)" }}
                                    >
                                        <Counter to={s.to} suffix={s.suffix} />
                                    </div>
                                    <div className="muted mt-2">{pick(s)}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <p className="muted mt-4 text-center text-xs">{t.statsHint}</p>
                </section>

                {/* ==================== WORK ==================== */}
                <section id="work" className="scroll-mt-24 px-5 py-24">
                    <div className="mx-auto max-w-6xl">
                        <Reveal>
                            <h2 className="display text-3xl font-bold md:text-4xl">
                                {t.workTitle}
                            </h2>
                            <p className="muted mt-2">{t.workSub}</p>
                        </Reveal>

                        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {DATA.projects.map((p, i) => (
                                <Reveal key={i} delay={i * 120}>
                                    <Tilt className="h-full">
                                        <article className="card flex h-full flex-col p-5">
                                            <div className="project-visual mb-5">
                                                <div className="rule" />
                                                <div
                                                    className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-3 px-6 pb-[22px]"
                                                    style={{ top: 0 }}
                                                >
                                                    {p.bars.map((h, j) => (
                                                        <div
                                                            key={j}
                                                            className="bar"
                                                            style={{ height: h + "%" }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <h3 className="display text-xl font-bold">
                                                {pick(p.title)}
                                            </h3>
                                            <p className="muted mt-2 flex-1 leading-relaxed">
                                                {pick(p.desc)}
                                            </p>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {p.tags.map((tag) => (
                                                    <span key={tag} className="chip">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="mt-5 text-sm font-semibold">
                                                {p.repo && (
                                                    <a
                                                        href={p.repo}
                                                        target="_blank"
                                                        rel="noopener"
                                                        className="transition-colors hover:text-[var(--accent)]"
                                                    >
                                                        {t.viewCode} ↗
                                                    </a>
                                                )}
                                            </div>
                                        </article>
                                    </Tilt>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ==================== ABOUT ==================== */}
                <section id="about" className="scroll-mt-24 px-5 py-24">
                    <div className="mx-auto max-w-6xl">
                        <Reveal>
                            <h2 className="display text-3xl font-bold md:text-4xl">
                                {t.aboutTitle}
                            </h2>
                        </Reveal>
                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {t.aboutCards.map((c, i) => (
                                <Reveal key={i} delay={i * 120}>
                                    <div className="card h-full p-7">
                                        <div
                                            className="mb-5 h-[2px] w-8"
                                            style={{ background: "var(--accent)" }}
                                        />
                                        <h3 className="display text-lg font-bold">{c.t}</h3>
                                        <p className="muted mt-2 leading-relaxed">{c.d}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ==================== STACK / LANGUAGES ==================== */}
                <section
                    id="stack"
                    ref={stackRef}
                    className="relative scroll-mt-24 overflow-hidden py-24"
                >
                    <TechField gridRef={gridRef} sectionRef={stackRef} />

                    <div className="relative z-10 mx-auto max-w-6xl px-5">
                        <Reveal>
                            <h2 className="display text-3xl font-bold md:text-4xl">
                                {t.stackTitle}
                            </h2>
                            <p className="muted mt-2">{t.stackSub}</p>
                        </Reveal>

                        <div className="mt-12 grid gap-10 md:grid-cols-2">
                            <Reveal delay={100}>
                                <h3 className="display mb-6 text-xl font-bold">
                                    {t.skillsTitle} · {t.frontLabel}
                                </h3>
                                <div className="space-y-5">
                                    {DATA.skills.front.map((s) => (
                                        <SkillBar key={s.n} name={s.n} level={s.l} />
                                    ))}
                                </div>
                                <h3 className="display mb-6 text-xl font-bold mt-12">
                                    {t.skillsTitle} · {t.backLabel}
                                </h3>
                                <div className="space-y-5">
                                    {DATA.skills.back.map((s) => (
                                        <SkillBar key={s.n} name={s.n} level={s.l} />
                                    ))}
                                </div>
                            </Reveal>
                            <Reveal delay={200}>
                                <h3 className="display mb-6 text-xl font-bold">
                                    {t.skillsTitle} · {t.aiLabel}
                                </h3>
                                <div className="space-y-5">
                                    {DATA.skills.ai.map((s) => (
                                        <SkillBar key={s.n} name={s.n} level={s.l} />
                                    ))}
                                </div>
                                <div className="mt-8">
                                    <p className="muted mb-3 text-sm">{t.toolsLabel}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {DATA.tools.map((tool) => (
                                            <span key={tool} className="chip">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* ==================== CONTACT ==================== */}
                <section id="contact" className="scroll-mt-24 px-5 py-24">
                    <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
                        <Reveal>
                            <h2 className="display text-4xl font-bold md:text-5xl">
                                {t.contactTitle}
                            </h2>
                            <p className="muted mt-4 max-w-md text-lg leading-relaxed">
                                {t.contactSub}
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <button onClick={copyEmail} className="btn btn-outline">
                                    {t.copy}
                                </button>
                                <a
                                    href={DATA.github}
                                    target="_blank"
                                    rel="noopener"
                                    className="btn btn-outline"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={DATA.linkedin}
                                    target="_blank"
                                    rel="noopener"
                                    className="btn btn-outline"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </Reveal>

                        <Reveal delay={120}>
                            <form onSubmit={onSubmit} className="card space-y-5 p-7">
                                <div>
                                    <label
                                        htmlFor="f-name"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        {t.fName}
                                    </label>
                                    <input
                                        id="f-name"
                                        required
                                        className="field"
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm({ ...form, name: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="f-email"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        {t.fEmail}
                                    </label>
                                    <input
                                        id="f-email"
                                        type="email"
                                        required
                                        dir="ltr"
                                        className="field"
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({ ...form, email: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="f-msg"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        {t.fMsg}
                                    </label>
                                    <textarea
                                        id="f-msg"
                                        rows="4"
                                        required
                                        className="field resize-none"
                                        value={form.message}
                                        onChange={(e) =>
                                            setForm({ ...form, message: e.target.value })
                                        }
                                    />
                                </div>
                                <button type="submit" className="btn btn-solid w-full">
                                    {t.send}
                                </button>
                            </form>
                        </Reveal>
                    </div>
                </section>
            </main>

            <footer className="relative z-10 border-t px-5 py-10 text-sm muted line">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
                    <span>© 2026 {t.name}</span>
                    <span>{t.footer}</span>
                    <a href="#top" className="chip">
                        ↑ {t.top}
                    </a>
                </div>
            </footer>

            <div
                role="status"
                aria-live="polite"
                className={`fixed bottom-6 start-1/2 z-[70] -translate-x-1/2 rounded-full px-5 py-2.5 text-sm font-medium shadow-lg transition-all duration-300 ${toast ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ background: "var(--fg)", color: "var(--bg)" }}
            >
                {toast}
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
