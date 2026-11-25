export type FaqBlock = string | { list: string[] };
export type Faq = { q: string; a: FaqBlock[] };
export type FaqCategory = { id: string; title: string; items: Faq[] };

export const faqCategories: FaqCategory[] = [
  {
    id: "company-formation",
    title: "UAE Company Formation",
    items: [
      {
        q: "How to start a company in Dubai as a foreigner?",
        a: [
          "Starting a company in Dubai as a foreigner is straightforward—you can choose between a Dubai free zone, which offers 100% ownership and simplified setup, or a mainland company setup, which allows you to operate across the UAE. With the right documents and professional guidance, the process can be completed quickly and efficiently.",
        ],
      },
      {
        q: "What is the cost of company formation in Dubai?",
        a: [
          "The Dubai company formation cost starts from AED 12,000 and varies based on your business activity, license type, and location. In most cases, free zone companies are more affordable compared to other setup options.",
        ],
      },
      {
        q: "Can I get 100% ownership in Dubai company?",
        a: [
          "Yes, you can get 100% ownership in Dubai through free zone companies and many mainland business activities, allowing full control of your business without a local sponsor.",
        ],
      },
      {
        q: "How long does it take to register a company in Dubai?",
        a: [
          "The Dubai company registration process typically takes 3–7 working days, depending on your business activity and document readiness.",
        ],
      },
      {
        q: "Which is better: free zone or mainland company in Dubai?",
        a: [
          "Free zone companies in Dubai offer tax benefits and full ownership, making them ideal for startups and international businesses. In contrast, mainland companies allow you to trade freely across the UAE without restrictions, making them better suited for businesses targeting the local market.",
        ],
      },
      {
        q: "What documents are required for Dubai company setup?",
        a: [
          "For Dubai business setup, you typically need a passport copy, visa details, selected business activity, and completed application forms to begin the company registration process.",
        ],
      },
      {
        q: "Why choose Manifest professional consultants for Dubai company formation?",
        a: [
          "Choosing Manifest means partnering with experienced business setup consultants in Dubai who simplify the entire Dubai business setup process from start to finish. Our team handles documentation, approvals, and compliance efficiently—saving you time, reducing risks, and avoiding costly delays.",
          "We focus on delivering a low cost business setup in Dubai by recommending the most suitable free zone or mainland option based on your business goals. With transparent guidance, faster turnaround, and end-to-end support, Manifest ensures your company is set up smoothly and ready to grow from day one.",
        ],
      },
    ],
  },
  {
    id: "visa-services",
    title: "Visa Services",
    items: [
      {
        q: "How to apply for Dubai visa?",
        a: [
          "You can apply for a Dubai visa online by submitting your passport, required documents, and application through authorized service providers or official portals for a smooth and quick process.",
        ],
      },
      {
        q: "How fast can I get a Dubai visa?",
        a: [
          "Processing time depends on the visa type and how complete your documents are. Once we review your case, our team will confirm a realistic timeline and handle every step to keep your application moving.",
        ],
      },
      {
        q: "What are common reasons for Dubai visa rejection?",
        a: [
          "Common Dubai visa rejection reasons include:",
          {
            list: [
              "Incorrect or incomplete application details",
              "Mismatch in passport information or unclear documents",
              "Previous visa overstays or immigration violations",
              "Criminal record or security concerns",
              "Insufficient supporting documents or unclear purpose of visit",
            ],
          },
          "Ensuring accurate documentation helps avoid these Dubai visa rejection reasons and improves approval chances.",
        ],
      },
      {
        q: "Which visa is best for business setup in Dubai?",
        a: [
          "The best option for business setup in Dubai is an investor visa Dubai, as it allows entrepreneurs to establish and manage their company while gaining UAE residency and long-term business benefits.",
        ],
      },
      {
        q: "Why choose professional visa services in Dubai?",
        a: [
          "Choosing Manifest for Dubai visa services ensures a smooth, reliable, and hassle-free experience from start to finish. Our experts handle documentation, application, and follow-ups with precision—reducing delays and minimizing rejection risks.",
          "With personalized guidance, fast processing, and end-to-end support, our Dubai visa services help you secure the right visa—whether for business, employment, or family—so you can focus on your goals without stress.",
        ],
      },
    ],
  },
  {
    id: "pro-services",
    title: "PRO Services",
    items: [
      {
        q: "What are PRO services in Dubai?",
        a: [
          "PRO services in Dubai refer to professional support that handles all government-related processes for businesses, including visa processing, trade license applications, document clearance, and approvals from UAE authorities. These services ensure smooth operations, compliance, and save businesses time and effort.",
        ],
      },
      {
        q: "Why are PRO services important in Dubai?",
        a: [
          "PRO services in Dubai are essential because they handle all government-related processes such as visa approvals, license renewals, and document clearances. This ensures your business stays compliant with UAE regulations, avoids fines or delays, and operates smoothly without administrative hassles.",
        ],
      },
      {
        q: "What is included in Dubai PRO services?",
        a: [
          "PRO services in Dubai include end-to-end support for government-related processes such as visa processing, labor approvals, document clearing, Emirates ID assistance, license renewals, and liaison with UAE authorities. These services ensure your business stays compliant while saving time and avoiding administrative hassles.",
        ],
      },
      {
        q: "Can PRO services handle all government work?",
        a: [
          "Yes, PRO services in Dubai can handle almost all government-related work, including visa processing, license approvals, document clearance, and coordination with authorities—ensuring smooth, compliant, and hassle-free operations for your business.",
        ],
      },
    ],
  },
  {
    id: "banking-assistance",
    title: "Banking Assistance",
    items: [
      {
        q: "How to open a business bank account in Dubai?",
        a: [
          "To open a Dubai business bank account, you need your company documents, passport copies of shareholders, and proof of business activity. The process involves submitting these documents to the bank, completing compliance checks, and attending verification if required.",
        ],
      },
      {
        q: "Why do Dubai bank accounts get rejected?",
        a: [
          "Dubai bank account rejection usually happens due to strict compliance checks. Common reasons include:",
          {
            list: [
              "Incomplete or incorrect documentation",
              "Unclear or high-risk business activity",
              "Lack of proper business proof or transactions",
              "Issues with shareholder background or residency status",
              "Failure to meet bank compliance or KYC requirements",
            ],
          },
          "Ensuring accurate documents and a clear business profile can help avoid Dubai bank account rejection and improve approval chances.",
        ],
      },
      {
        q: "Which bank is best in Dubai for business?",
        a: [
          "There's no single “best” option—choosing the right Dubai business bank account depends on your business type, transaction needs, and budget. However, some of the most preferred banks include:",
          {
            list: [
              "Emirates NBD – strong for corporate and digital banking",
              "First Abu Dhabi Bank – ideal for large businesses and growth",
              "Mashreq Bank – great for startups and digital services",
              "Abu Dhabi Commercial Bank – reliable for SMEs",
            ],
          },
          "The best Dubai business bank account ultimately depends on your company structure, expected transactions, and compliance profile.",
        ],
      },
      {
        q: "How can banking assistance help in Dubai?",
        a: [
          "Banking assistance in Dubai helps streamline the process of opening a business bank account by guiding you through documentation, compliance requirements, and bank selection. It improves approval chances, reduces delays, and ensures a smooth, hassle-free experience.",
        ],
      },
    ],
  },
  {
    id: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    items: [
      {
        q: "Is accounting mandatory in Dubai?",
        a: [
          "Yes, accounting in Dubai is mandatory for businesses to maintain proper financial records, comply with VAT regulations, and ensure transparency as per UAE laws.",
        ],
      },
      {
        q: "Why outsource accounting services in Dubai?",
        a: [
          "Outsourcing Dubai accounting services helps businesses reduce costs, ensure compliance with UAE regulations, and gain access to expert financial management without hiring an in-house team.",
        ],
      },
    ],
  },
  {
    id: "attestation-translation",
    title: "Attestation & Translation",
    items: [
      {
        q: "What is document attestation in Dubai?",
        a: [
          "Document attestation in Dubai is the process of verifying and legalizing your certificates and documents so they are officially recognized by UAE authorities for business, employment, or residency purposes.",
        ],
      },
      {
        q: "Why is MOFA attestation required in Dubai?",
        a: [
          "An MOFA attestation in Dubai is required to officially validate your documents by the UAE Ministry of Foreign Affairs, ensuring they are legally recognized for use in business, employment, education, or residency processes.",
        ],
      },
      {
        q: "How long does attestation take for Dubai?",
        a: [
          "The Dubai attestation process usually takes 5–10 working days, depending on the type of document and the authorities involved.",
        ],
      },
      {
        q: "Which documents need attestation for Dubai?",
        a: [
          "Documents that typically require attestation for Dubai include educational certificates, marriage and birth certificates, and business-related documents such as commercial agreements and company papers, depending on your purpose (employment, residency, or business setup).",
        ],
      },
    ],
  },
];

export function faqToPlainText(blocks: FaqBlock[]) {
  return blocks.map((b) => (typeof b === "string" ? b : b.list.map((l) => `• ${l}`).join("\n"))).join("\n\n");
}
