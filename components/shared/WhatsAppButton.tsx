import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export function WhatsAppButton({
  href,
  label = "Contactar por WhatsApp",
  className,
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow transition-all hover:scale-[1.02] hover:bg-[#1fb057]",
        className,
      )}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.52 0-9.99 4.47-9.99 9.99 0 1.76.46 3.48 1.34 5l-1.42 5.19 5.32-1.4c1.47.8 3.12 1.22 4.79 1.22 5.52 0 9.99-4.47 9.99-9.99S17.56 2 12.04 2zm0 18.1c-1.49 0-2.94-.4-4.2-1.15l-.3-.18-3.16.83.84-3.08-.2-.32a8.06 8.06 0 0 1-1.26-4.31c0-4.46 3.63-8.09 8.09-8.09 2.16 0 4.2.84 5.73 2.37a8.06 8.06 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.09 8.09zm4.44-6.06c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.37.1-.49.1-.1.24-.27.36-.41.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.65.3s-.86.84-.86 2.05.88 2.38 1 2.54c.12.16 1.73 2.64 4.19 3.7.58.25 1.04.4 1.4.51.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
    </svg>
  );
}
