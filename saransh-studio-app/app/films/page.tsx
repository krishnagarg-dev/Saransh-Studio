import Image from "next/image";
import { Play } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export default function FilmsPage() {
  const films = [
    { title: "Rohan & Simran", location: "New Delhi", duration: "4:30", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000" },
    { title: "Karan & Ananya", location: "Udaipur", duration: "6:15", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000" },
  ];

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">Cinema</p>
        <h1 className="text-4xl md:text-6xl font-serif mb-6">Wedding Films</h1>
        <p className="text-neutral-400 text-sm leading-relaxed mb-8">Immersive cinematic stories capturing the pure energy and emotion of your celebrations.</p>
        <Button href={site.youtube} isExternal variant="outline" className="flex items-center gap-2 mx-auto" aria-label="YouTube">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.125-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.373.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.125 2.136c1.868.505 9.373.505 9.373.505s7.505 0 9.373-.505a3.015 3.015 0 0 0 2.125-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch on YouTube ({site.youtubeHandle})
        </Button>
      </div>

      <div className="space-y-16">
        {films.map((f) => (
          <div key={f.title} className="relative aspect-video w-full overflow-hidden group">
            <Image src={f.image} alt={f.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <Play className="w-6 h-6 text-neutral-950 fill-current ml-1" />
              </div>
              <h3 className="text-3xl font-serif text-white">{f.title}</h3>
              <p className="text-neutral-300 text-xs tracking-widest uppercase mt-2">{f.location} • {f.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
