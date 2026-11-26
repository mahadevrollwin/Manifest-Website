import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "./SocialIcons";
import { site } from "@/content/site";

/** Social profiles shown in the header utility bar and the footer. */
export const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { label: "YouTube", href: site.social.youtube, Icon: YoutubeIcon },
];
