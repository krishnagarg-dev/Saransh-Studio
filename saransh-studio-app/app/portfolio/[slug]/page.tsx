import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function PortfolioDetailPage() {
  return (
    <div className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">Wedding Story — Udaipur</p>
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Aarav & Riya</h1>
        <p className="text-neutral-400 text-sm">January 2026 • City Palace, Udaipur</p>
      </div>

      <div className="relative aspect-[16/9] w-full mb-16">
        <Image src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000" alt="Story Hero" fill className="object-cover" />
      </div>

      <div className="max-w-2xl mx-auto mb-20 text-center">
        <p className="text-lg font-light leading-relaxed text-neutral-300">
          Set against the breathtaking backdrop of the City Palace, Aarav and Riya&apos;s celebration was a masterclass in elegance and emotion. Every frame reflects the grandeur of traditional Indian heritage blended with modern editorial framing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="relative aspect-[4/5]">
          <Image src="https://images.unsplash.com/photo-1532712938310-23cb310a08e0?q=80&w=2000" alt="Gallery 1" fill className="object-cover" />
        </div>
        <div className="relative aspect-[4/5] md:mt-12">
          <Image src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2000" alt="Gallery 2" fill className="object-cover" />
        </div>
      </div>

      <div className="text-center bg-neutral-900 p-12 border border-neutral-800">
        <h3 className="text-2xl font-serif mb-4">Let&apos;s Create Your Story</h3>
        <p className="text-neutral-400 text-xs mb-8">Ready to discuss your wedding dates?</p>
        <Button href="https://wa.me/919027731570" isExternal>Enquire on WhatsApp</Button>
      </div>
    </div>
  );
}
