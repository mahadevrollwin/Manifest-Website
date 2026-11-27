import { WhatsappIcon } from "./SocialIcons";
import { T } from "./T";
import { whatsappLink, whatsappMessages } from "@/content/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Manifest on WhatsApp"
      className="group fixed end-5 bottom-5 z-40 flex items-center gap-3 sm:end-7 sm:bottom-7"
    >
      <span className="pointer-events-none hidden translate-x-2 rtl:-translate-x-2 bg-ivory px-4 py-2 text-[0.68rem] font-medium tracking-[0.18em] text-olive-deep uppercase opacity-0 shadow-lg transition-all duration-500 group-hover:translate-x-0 rtl:group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        <T>Chat with us</T>
      </span>
      <span className="relative flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_15px_35px_-10px_rgba(37,211,102,0.7)] transition-transform duration-500 group-hover:scale-105">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-25 [animation-duration:2.6s]" />
        <WhatsappIcon className="relative size-6" />
      </span>
    </a>
  );
}
