export type FormationPackage = {
  name: string;
  /** Short line under the name, for example the visa allowance. */
  subtitle: string;
  badge?: string;
  features: string[];
  /** Price in AED. */
  price: number;
  /** Crossed-out earlier price in AED, if the package is discounted. */
  wasPrice?: number;
};

// Package names, inclusions and prices are the offers supplied by the client; update them here.
export const formationPackages: FormationPackage[] = [
  {
    name: "UAE Free Zone: Lowest Price Offer",
    subtitle: "Zero Visa Package",
    badge: "Most Popular",
    features: ["Up To 10 Business Activities", "Trade License & Approvals", "Bank Account Assistance"],
    price: 5999,
    wasPrice: 6999,
  },
  {
    name: "All-Inclusive UAE Free Zone",
    subtitle: "One Visa Package",
    features: ["Business License + Approvals", "Free Digital Bank Account", "Free Flexi Desk"],
    price: 11999,
  },
  {
    name: "Dubai Free Zone",
    subtitle: "Zero Visa Package",
    badge: "Bestseller",
    features: ["Business License + Approvals", "Free Digital Bank Account", "Free Flexi Desk"],
    price: 14900,
  },
  {
    name: "Cayman Island Offshore",
    subtitle: "0% Tax & 100% Ownership",
    features: [
      "Certification of Incorporation",
      "Registered Office Address (1 year)",
      "Registered agent service (1 year)",
      "KYC & Compliance Assistance",
    ],
    price: 16500,
  },
];
