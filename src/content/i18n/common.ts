export type Lang = "en" | "ar";

/**
 * Arabic translations, keyed by the exact English string used in the UI.
 * Anything missing here falls back to the English text, so pages that are not
 * translated yet keep working. Add new entries here to extend Arabic coverage.
 */
export const commonAr: Record<string, string> = {
  // Language switch
  Language: "اللغة",
  "Skip to content": "انتقل إلى المحتوى",

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

  // Shared: breadcrumbs, CTA band, carousels, floating button
  Home: "الرئيسية",
  "Chat with us": "تحدث معنا",
  "navigation": "التنقل",
  "Show package {n} of {total}": "عرض الباقة {n} من {total}",
  "Tell us what you plan to do. An adviser will reply within one working day with the options and costs that fit.":
    "أخبرنا بما تخطط له. سيردّ عليك مستشار خلال يوم عمل واحد بالخيارات والتكاليف المناسبة.",
  "Get my free setup plan": "احصل على خطة التأسيس المجانية",

  // Shared: FAQ panel
  "FAQ topics": "مواضيع الأسئلة الشائعة",
  "Still have a question?": "هل لديك سؤال آخر؟",
  "An adviser will reply within one working day.": "سيردّ عليك مستشار خلال يوم عمل واحد.",
  "Ask an adviser": "اسأل مستشارًا",

  // Shared: consultation form
  "Thank you — we'll be in touch shortly.": "شكرًا لك — سنتواصل معك قريبًا.",
  "Your request has been prepared in WhatsApp. If it didn't open, email us at {email} or call {phone}.":
    "تم تجهيز طلبك على واتساب. إذا لم يفتح، راسلنا على {email} أو اتصل على {phone}.",
  "Send another request": "إرسال طلب آخر",
  "Full name": "الاسم الكامل",
  "Your name": "اسمك",
  Email: "البريد الإلكتروني",
  "Phone / WhatsApp": "الهاتف / واتساب",
  "Country of residence (optional)": "بلد الإقامة (اختياري)",
  "e.g. India": "مثال: الهند",
  "I'm interested in *": "أنا مهتم بـ *",
  "Select a service": "اختر خدمة",
  "Dubai Mainland Setup": "تأسيس شركة في البر الرئيسي بدبي",
  "Dubai Free Zone Setup": "تأسيس شركة في منطقة حرة بدبي",
  "Banking Assistance": "المساعدة في الخدمات المصرفية",
  "Attestation & Translation": "التصديق والترجمة",
  Other: "أخرى",
  "How can we help?": "كيف يمكننا مساعدتك؟",
  "Tell us about your business (optional)": "حدثنا عن عملك (اختياري)",
  "Tell us about your business goals in the UAE…": "حدثنا عن أهدافك التجارية في الإمارات…",
  "I agree to Manifest contacting me about my enquiry.": "أوافق على تواصل مانيفست معي بخصوص استفساري.",
  "Confidential · No obligation · Reply within one working day": "سرّي · دون التزام · رد خلال يوم عمل واحد",
  "Confidential · No obligation · Dubai-based experts": "سرّي · دون التزام · خبراء مقيمون في دبي",
  "Request consultation": "اطلب استشارة",

  // 404
  "Error 404": "خطأ 404",
  "This page has": "هذه الصفحة",
  "moved on": "انتقلت إلى مكان آخر",
  "The page you're looking for doesn't exist. Let's get you back to building your business in Dubai.":
    "الصفحة التي تبحث عنها غير موجودة. دعنا نعيدك إلى بناء عملك في دبي.",
  "Back to home": "العودة إلى الرئيسية",
  "Contact Us": "اتصل بنا",
};
