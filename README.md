# Portfolio — React + Vite + Tailwind

موقع بورتفوليو ثنائي اللغة (عربي/إنجليزي) مبني بـ React 18 و Vite و Tailwind CSS.

## التشغيل

```bash
npm install
npm run dev        # تطوير على http://localhost:5173
npm run build      # بناء للإنتاج في فولدر dist
npm run preview    # تجربة نسخة الإنتاج محلياً
```

## تعديل المحتوى

| إيه اللي عايز تغيّره | الملف |
|---|---|
| الإيميل، اللينكات، المشاريع، المهارات، الأرقام | `src/data/data.js` |
| كل النصوص (عربي/إنجليزي) | `src/data/copy.js` |
| لوجوهات التقنيات اللي بتتجمّع | `src/data/tech.js` |
| الألوان (dark / light) والأنيميشن | `src/index.css` |

كل مشروع في `data.js` ممكن يبقى له حقلين اختياريين:
`demo: "https://..."` لينك مباشر، و`image: "projects/shop.png"` لصورة (حطها في `public/projects/`).

## صورتك

حط صورتك في `public/me.jpg` (نسبة 4:5 أحسن، حوالي 800×1000). لو الملف مش موجود بياخد صورة GitHub، ولو دي كمان مش اشتغلت بيظهر "ط.خ".

## فورم التواصل

- من غير إعداد: الفورم بيفتح تطبيق الإيميل عند الزائر (`mailto:`).
- لإرسال حقيقي: اعمل فورم مجاني على [Formspree](https://formspree.io)، وانسخ `.env.example` إلى `.env` وحط اللينك في `VITE_FORM_ENDPOINT`، وبعدين `npm run build`.
  لو الإرسال فشل لأي سبب، الفورم بيرجع تلقائياً لـ `mailto:`.
- في حقل مخفي (honeypot) بيمنع أغلب رسائل السبام.

## النشر

الـ build بيستخدم مسارات نسبية (`base: "./"`) فبيشتغل على GitHub Pages أو Netlify أو Vercel أو أي استضافة ثابتة. انشر محتوى فولدر `dist`.

بعد ما يبقى عندك دومين: ضيف `og:url` و`canonical` في `index.html`، واستبدل `og:image` بصورة 1200×630.
