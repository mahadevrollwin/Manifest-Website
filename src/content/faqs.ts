export type FaqItem = { q: string; a: string };
export type FaqGroup = { id: string; title: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting started",
    items: [
      {
        q: "What do I need to start a company in Dubai?",
        a: "A clear business activity, a passport copy for each shareholder, and a decision on jurisdiction: mainland, free zone or offshore. We help you make that decision in a free consultation, then handle the rest.",
      },
      {
        q: "Do I need to be in the UAE to set up?",
        a: "Much of the process can start remotely. You will usually need to be in the UAE for the visa medical test and Emirates ID biometrics, and some banks ask to meet you in person.",
      },
      {
        q: "Can I set up a company while employed in the UAE?",
        a: "Often yes, but you may need a no-objection letter from your current employer, depending on your visa and the jurisdiction. We check this for you.",
      },
      {
        q: "What is a business activity and why does it matter?",
        a: "Your licence lists the activities you are allowed to carry out. Choosing the right ones affects your cost, your approvals and where you can trade, so we get this right first.",
      },
    ],
  },
  {
    id: "mainland-vs-free-zone",
    title: "Mainland vs free zone",
    items: [
      {
        q: "What is the difference between mainland and free zone?",
        a: "A mainland company can trade anywhere in the UAE and work with government clients. A free zone company trades inside its zone and internationally, and usually needs a distributor or extra permit to sell to the mainland.",
      },
      {
        q: "Can I own 100% of a mainland company?",
        a: "Yes, for most commercial, industrial and professional activities since June 2021. A small number of strategic activities still carry ownership conditions.",
      },
      {
        q: "Which is cheaper?",
        a: "Free zone packages often have a lower starting cost, especially with a flexi-desk. Mainland needs a physical office, but gives you full access to the UAE market. We compare both for your plan.",
      },
      {
        q: "What is an offshore company?",
        a: "A structure for holding assets and international business. It cannot trade inside the UAE or sponsor residence visas.",
      },
    ],
  },
  {
    id: "costs-timelines",
    title: "Costs & timelines",
    items: [
      {
        q: "How much does it cost to set up a company in Dubai?",
        a: "It depends on the jurisdiction, licence type, office and number of visas. Setup can start from around AED 12,000. You get an itemised quote before you commit.",
      },
      {
        q: "How long does it take?",
        a: "Once your documents are ready, registration typically takes 3–7 working days. Visas and the bank account take additional time, and we give you a full timeline in your setup plan.",
      },
      {
        q: "Are there hidden fees?",
        a: "Not with us. Your quote lists every government fee and our service fee separately.",
      },
      {
        q: "What are the yearly costs after setup?",
        a: "Licence renewal, office or flexi-desk renewal, visa renewals when due, and accounting and tax filing. We remind you before every deadline.",
      },
    ],
  },
  {
    id: "visas",
    title: "Visas",
    items: [
      {
        q: "How many visas can my company sponsor?",
        a: "It depends on your jurisdiction, package and office size. We match your setup to the number of visas you need.",
      },
      {
        q: "Can I sponsor my family?",
        a: "Yes, once you hold a residence visa and meet the minimum salary or income requirement. You will need attested marriage and birth certificates.",
      },
      {
        q: "Who qualifies for the Golden Visa?",
        a: "Eligible investors, entrepreneurs, specialised professionals and some other categories. The criteria change from time to time, so we check your eligibility first.",
      },
    ],
  },
  {
    id: "banking",
    title: "Banking",
    items: [
      {
        q: "Can you guarantee a bank account?",
        a: "No one can; approval is the bank’s decision. We prepare a complete, consistent file and approach the banks most likely to suit your profile.",
      },
      {
        q: "When can I open a bank account?",
        a: "Once your licence is issued. Many banks prefer that shareholders and signatories also hold a UAE residence visa.",
      },
      {
        q: "What documents do banks ask for?",
        a: "Usually your licence and incorporation documents, passports, visas and Emirates IDs, a company profile, proof of address and source of funds.",
      },
    ],
  },
  {
    id: "tax-compliance",
    title: "Tax & compliance",
    items: [
      {
        q: "How is corporate tax charged in the UAE?",
        a: "At 0% on taxable income up to AED 375,000 and 9% on taxable income above that. Most companies must register and file a return even if no tax is due.",
      },
      {
        q: "Do free zone companies pay corporate tax?",
        a: "A Qualifying Free Zone Person pays 0% on qualifying income and 9% on other taxable income. Every free zone company must still register and file.",
      },
      {
        q: "When do I need to register for VAT?",
        a: "VAT registration is mandatory once taxable supplies exceed AED 375,000 in 12 months, and optional from AED 187,500.",
      },
    ],
  },
];
