import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function ServicesPage() {
  const services = [
    { title: "Wedding Photography", desc: "Timeless, editorial coverage of your wedding day capturing raw emotions and grand celebrations.", image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2000" },
    { title: "Wedding Cinematography", desc: "Cinematic heirloom films that preserve the soul, sound, and movement of your celebrations.", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000" },
    { title: "Pre-Wedding Sessions", desc: "Artistic couple portraits in breathtaking locations to celebrate your journey before the wedding.", image: "https://images.unsplash.com/photo-1532712938310-23cb310a08e0?q=80&w=2000" },
  ];

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">Expertise</p>
        <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Services</h1>
        <p className="text-neutral-400 text-sm leading-relaxed">Dedicated cinematic and photographic storytelling tailored for Indian weddings.</p>
      </div>

      <div className="space-y-24">
        {services.map((s, i) => (
          <div key={s.title} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
            <div className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden">
              <Image src={s.image} alt={s.title} fill className="object-cover" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-serif mb-6">{s.title}</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed text-sm">{s.desc}</p>
              <Button href="https://wa.me/919027731570" isExternal variant="outline">Enquire Now</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
