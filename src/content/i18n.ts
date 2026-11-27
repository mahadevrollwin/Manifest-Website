export type Lang = "en" | "ar";

/**
 * Arabic translations, keyed by the exact English string used in the UI.
 * Anything missing here falls back to the English text, so pages that are not
 * translated yet keep working. Add new entries here to extend Arabic coverage.
 */
export const ar: Record<string, string> = {
  // Language switch
  Language: "اللغة",

  // Header: utility bar and actions
  Contact: "اتصل بنا",
  "Social media": "وسائل التواصل الاجتماعي",
  "Book free consultation": "احجز استشارة مجانية",
  "Chat With Us": "تحدث معنا",
  "(opens the AI assistant in a new tab)": "(يفتح المساعد الذكي في علامة تبويب جديدة)",
  "Open menu": "فتح القائمة",
  "Close menu": "إغلاق القائمة",
  Primary: "التنقل الرئيسي",
  Mobile: "قائمة الجوال",

  // Main navigation
  Services: "الخدمات",
  "Business setup": "تأسيس الأعمال",
  About: "من نحن",
  FAQs: "الأسئلة الشائعة",
  Blog: "المدونة",

  // Services dropdown
  "Company Formation": "تأسيس الشركات",
  "Right jurisdiction, right license, launched hassle-free.": "الاختصاص المناسب والرخصة المناسبة، وانطلاقة بلا عناء.",
  "PRO Services": "خدمات العلاقات الحكومية",
  "Government liaison, approvals and compliance handled.": "نتولى التواصل الحكومي والموافقات والامتثال.",
  "Visa Services": "خدمات التأشيرات",
  "Golden, investor, employment and family visas.": "التأشيرة الذهبية وتأشيرات المستثمرين والعمل والعائلة.",
  "Accounting & Bookkeeping": "المحاسبة ومسك الدفاتر",
  "Accurate records, reporting and full compliance.": "سجلات دقيقة وتقارير وامتثال كامل.",
  Banking: "الخدمات المصرفية",
  "Corporate and personal accounts with major UAE banks.": "حسابات للشركات والأفراد لدى كبرى البنوك في الإمارات.",

  // Business setup dropdown
  "Dubai Mainland": "البر الرئيسي في دبي",
  "Trade freely across the UAE with a DED license.": "مارس التجارة بحرية في أنحاء الإمارات برخصة دائرة التنمية الاقتصادية.",
  "Dubai Free Zone": "المنطقة الحرة في دبي",
  "100% ownership across 46+ UAE jurisdictions.": "ملكية كاملة بنسبة 100% عبر أكثر من 46 منطقة في الإمارات.",

  // Footer
  "Business setup in Dubai, handled end to end.": "تأسيس الأعمال في دبي، نتولاه من البداية إلى النهاية.",
  "Quick links": "روابط سريعة",
  "Our services": "خدماتنا",
  "Company formation": "تأسيس الشركات",
  "PRO services": "خدمات العلاقات الحكومية",
  "Visa services": "خدمات التأشيرات",
  "Banking assistance": "المساعدة في الخدمات المصرفية",
  "Accounting & bookkeeping": "المحاسبة ومسك الدفاتر",
  "Attestation & translation": "التصديق والترجمة",
  "Fahidi Heights, 16th Floor, 1603": "فهيدي هايتس، الطابق 16، مكتب 1603",
  "Sharaf D G Exit-4,": "مخرج 4 شرف دي جي،",
  "Bur Dubai, Dubai,": "بر دبي، دبي،",
  "United Arab Emirates": "الإمارات العربية المتحدة",
  "All rights reserved.": "جميع الحقوق محفوظة.",

  // Homepage hero
  "Business setup in Dubai": "تأسيس الأعمال في دبي",
  "Your Dubai company,": "شركتك في دبي،",
  "set up properly from day one": "تُؤسَّس بشكل صحيح منذ اليوم الأول",
  "Mainland, free zone or offshore. We help you choose the right licence, then handle the paperwork, visas and bank account so you can start trading sooner.":
    "بر رئيسي أو منطقة حرة أو أوفشور. نساعدك على اختيار الرخصة المناسبة، ثم نتولى الأوراق والتأشيرات والحساب المصرفي لتبدأ نشاطك التجاري في وقت أقرب.",
  "Chat on WhatsApp": "تحدث عبر واتساب",
  "Mainland, free zone & offshore": "بر رئيسي ومنطقة حرة وأوفشور",
  "Licence, visas, PRO & banking under one roof": "الرخصة والتأشيرات وخدمات PRO والبنوك تحت سقف واحد",
  "Clear quote before you commit": "عرض سعر واضح قبل أن تلتزم",
  "Office in Bur Dubai, meet us in person": "مكتبنا في بر دبي، يسعدنا لقاؤك شخصيًا",
};
