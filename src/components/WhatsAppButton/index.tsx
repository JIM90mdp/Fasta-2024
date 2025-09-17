import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href="https://wa.me/5492236329755"
        target="_blank"
        rel="nofollow noreferrer"
        aria-label="Enviar mensaje por WhatsApp"
        className="bg-primary/80 hover:shadow-signUp flex h-10 w-10 items-center justify-center rounded-md text-white opacity-70 shadow-md transition duration-300 ease-in-out hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image
          src="/images/redes/whatsapp-icon-logo-svgrepo-com.svg"
          alt="WhatsApp"
          width={48}
          height={48}
        />
      </a>
    </div>
  );
}
