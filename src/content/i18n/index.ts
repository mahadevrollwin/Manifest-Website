import { commonAr } from "./common";
import { homeAr } from "./home";
import { servicesAr } from "./services";
import { services2Ar } from "./services2";
import { setupAr } from "./setup";
import { blogAr } from "./blog";
import { faqAr } from "./faq";
import { assistantAr } from "./assistant";

export type { Lang } from "./common";

/**
 * Arabic translations, keyed by the exact English string used in the UI. Anything missing falls back to the
 * English text. Files are merged in this order; a later file wins if two files define the same key.
 */
export const ar: Record<string, string> = {
  ...commonAr,
  ...homeAr,
  ...servicesAr,
  ...services2Ar,
  ...setupAr,
  ...blogAr,
  ...faqAr,
  ...assistantAr,
};
