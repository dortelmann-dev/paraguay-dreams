import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/595000000000"
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-deep transition hover:scale-105"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366]/40" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}
