import Image from "next/image";
import { site } from "@/lib/site";

export default function AboutPage() {
  return (
    <div className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[3/4]">
          <Image src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2000" alt="About Saransh Studio" fill className="object-cover" />
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-6">About {site.name}</p>
          <h1 className="text-4xl md:text-5xl font-serif mb-8">Capturing Soul.</h1>
          <div className="space-y-6 text-neutral-400 text-sm leading-relaxed font-light">
            <p>Based in Ghaziabad, Uttar Pradesh, we approach wedding photography not as an event, but as a deeply personal story. Our focus is on the authentic, the candid, and the fleeting moments that define your celebration.</p>
            <p>Led by {site.owner}, our studio&apos;s cinematic philosophy is rooted in editorial aesthetics—clean frames, genuine emotion, and light-filled imagery. We aim to create heirlooms that you and your generations will cherish.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
