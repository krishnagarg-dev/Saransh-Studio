import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const STORIES = [
  { id: 1, title: "A & R", category: "Wedding", location: "Udaipur", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000" },
  { id: 2, title: "M & S", category: "Pre-Wedding", location: "Goa", image: "https://images.unsplash.com/photo-1532712938310-23cb310a08e0?q=80&w=2000" },
  { id: 3, title: "K & P", category: "Wedding", location: "Jaipur", image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2000" },
];

export default function Home() {
  const whatsappUrl = `${site.whatsapp}?text=${encodeURIComponent("Hi Saransh Studio, I would like to enquire about wedding photography and cinematography.")}`;

  return (
    <div className="flex flex-col bg-[var(--color-ivory)] text-[var(--color-charcoal)]">
      {/* Hero Section (Cinematic Dark Visual Moment) */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--color-dark-warm)]">
        <Image
          src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070&auto=format&fit=crop"
          alt="Premium Wedding Moment"
          fill
          priority
          className="object-cover scale-105 animate-slow-zoom opacity-80"
          style={{ objectPosition: "50% 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-warm)] via-[var(--color-dark-warm)]/30 to-transparent z-10" />

        <div className="relative z-20 text-center px-6 mt-12 flex flex-col items-center">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-neutral-300 mb-6 font-light">
            Contemporary Indian Wedding Cinema & Photography
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white mb-10 leading-[0.9]">
            Stories Worth <br /> Reliving.
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="/portfolio" size="lg" className="bg-white text-neutral-950 hover:bg-neutral-200">VIEW OUR STORIES</Button>
            <Button href={whatsappUrl} isExternal variant="outline" size="lg" className="border-neutral-400 text-white hover:bg-white/10">ENQUIRE ON WHATSAPP</Button>
          </div>
        </div>

        <div className="absolute bottom-8 z-20 flex flex-col items-center text-neutral-300 text-[10px] tracking-[0.2em] uppercase font-light animate-pulse">
          <span className="mb-2">Scroll</span>
          <div className="w-[1px] h-10 bg-neutral-400"></div>
        </div>
      </section>

      {/* Philosophy Section (Light Ivory) */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center bg-[var(--color-ivory)]">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-muted-gray)] mb-8">Our Philosophy</p>
        <p className="text-3xl md:text-5xl font-serif font-light leading-snug text-[var(--color-charcoal)]">
          &ldquo;We don&apos;t just capture events; we preserve the soul of your celebrations through an editorial lens, crafting cinematic heirlooms that last lifetimes.&rdquo;
        </p>
      </section>

      {/* Selected Stories (Warm Beige Surface) */}
      <section className="py-24 px-6 bg-[var(--color-warm-beige)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs tracking-[0.3em] uppercase text-[var(--color-muted-gray)] mb-12">Selected Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STORIES.map((story, i) => (
              <Link key={story.id} href={`/portfolio/${story.title.replace(/\s+/g, '-').toLowerCase()}`} className={`group relative overflow-hidden bg-[var(--color-surface)] ${i === 0 ? "md:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/5]"}`}>
                <Image src={story.image} alt={story.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-serif mb-2">{story.title}</h3>
                  <p className="text-neutral-200 text-xs tracking-widest uppercase mb-4">{story.category} — {story.location}</p>
                  <span className="text-white text-xs tracking-[0.2em] uppercase flex items-center gap-2">View Story <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (Light Ivory) */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-[var(--color-ivory)]">
        <h2 className="text-xs tracking-[0.3em] uppercase text-[var(--color-muted-gray)] mb-16">Services</h2>
        <div className="space-y-24">
            {[ {title: "Wedding Photography", img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2000"}, {title: "Wedding Cinematography", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000"}].map((s, i) => (
                <div key={s.title} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                    <div className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden bg-[var(--color-surface)]">
                        <Image src={s.img} alt={s.title} fill className="object-cover" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="text-4xl md:text-5xl font-serif mb-6 text-[var(--color-charcoal)]">{s.title}</h3>
                        <p className="text-[var(--color-muted-gray)] mb-8 leading-relaxed">Capturing the essence of your big day with an editorial eye, ensuring every moment is preserved in stunning detail.</p>
                        <Button href="/services" variant="ghost" className="px-0 underline underline-offset-8 text-[var(--color-charcoal)] hover:bg-transparent">View Service</Button>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Wedding Cinema (Dark Cinematic Feature) */}
      <section className="py-24 px-6 bg-[var(--color-dark-warm)] text-white">
        <div className="max-w-6xl mx-auto relative aspect-video overflow-hidden shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000" alt="Cinema" fill className="object-cover opacity-85" />
            <div className="absolute inset-0 bg-neutral-950/60 flex flex-col items-center justify-center gap-6 p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105">
                    <Play className="w-8 h-8 text-neutral-950 fill-current ml-1" />
                </div>
                <h3 className="text-4xl font-serif tracking-wider">WEDDING CINEMA</h3>
                <p className="text-neutral-300 max-w-md text-sm font-light">Immersive motion films that bring the grandeur, music, and emotions of your celebrations to life.</p>
                <Button href="/films" variant="outline" className="border-white text-white hover:bg-white/10">Watch Our Films</Button>
            </div>
        </div>
      </section>

      {/* Packages Section (Warm Beige) */}
      <section className="py-24 px-6 bg-[var(--color-warm-beige)]">
        <div className="max-w-7xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-muted-gray)] mb-4">Investment</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-16">Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {[
                  { name: "Signature", price: "₹XX,XXX", desc: "For intimate celebrations focusing on core moments." },
                  { name: "Premium", price: "₹XX,XXX", desc: "Comprehensive coverage for grand weddings.", featured: true },
                  { name: "Luxury", price: "₹XX,XXX", desc: "The ultimate experience in wedding storytelling." },
                ].map((p) => (
                  <div key={p.name} className={`p-10 border bg-[var(--color-ivory)] ${p.featured ? "border-[var(--color-charcoal)] shadow-md" : "border-[var(--color-border)]"}`}>
                    <h3 className="text-2xl font-serif mb-2 text-[var(--color-charcoal)]">{p.name}</h3>
                    <p className="text-[var(--color-muted-gray)] text-xs mb-8 min-h-[40px]">{p.desc}</p>
                    <p className="text-3xl font-serif mb-8 text-[var(--color-charcoal)]">{p.price}</p>
                    <Button href="/packages" variant={p.featured ? "primary" : "outline"} className="w-full bg-[var(--color-dark-warm)] text-white hover:bg-black">View Details</Button>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* Final CTA (Light Ivory) */}
      <section className="py-32 px-6 bg-[var(--color-ivory)] text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-[var(--color-charcoal)]">Let&apos;s create something you&apos;ll keep forever.</h2>
            <p className="text-[var(--color-muted-gray)] text-sm mb-12">Get in touch to check date availability for your celebration.</p>
            <Button href={whatsappUrl} isExternal size="lg" className="bg-[var(--color-dark-warm)] text-[var(--color-ivory)] hover:bg-black">ENQUIRE ON WHATSAPP</Button>
        </div>
      </section>
    </div>
  );
}
