import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function PreWeddingPage() {
  return (
    <div className="py-24 px-6 max-w-5xl mx-auto space-y-20">
      <div className="text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">Specialty</p>
        <h1 className="text-4xl md:text-6xl font-serif mb-6">Pre-Wedding Stories</h1>
        <p className="text-neutral-400 text-sm max-w-xl mx-auto">Artistic, intimate couple sessions in breathtaking destinations.</p>
      </div>

      <div className="relative aspect-[16/9] w-full">
        <Image src="https://images.unsplash.com/photo-1532712938310-23cb310a08e0?q=80&w=2000" alt="Pre-Wedding Hero" fill className="object-cover" />
      </div>

      <div className="text-center">
        <Button href="https://wa.me/919027731570" isExternal>Enquire via WhatsApp</Button>
      </div>
    </div>
  );
}
