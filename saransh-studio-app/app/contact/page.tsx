import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function ContactPage() {
  const whatsappUrl = `${site.whatsapp}?text=${encodeURIComponent("Hi Saransh Studio, I would like to enquire about wedding photography and cinematography.")}`;

  return (
    <div className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">Get in Touch</p>
        <h1 className="text-4xl md:text-6xl font-serif mb-6">Enquire</h1>
        <p className="text-neutral-400 text-sm">Let&apos;s create something you&apos;ll keep forever.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
            <div>
                <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">{site.name}</h4>
                <p className="font-light text-neutral-300 leading-relaxed whitespace-pre-line">
                  {site.address}
                </p>
            </div>
            <div>
                <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Phone / WhatsApp</h4>
                <a href={`tel:${site.phone}`} className="font-light text-white hover:underline block">{site.phone}</a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button href={`tel:${site.phone}`} isExternal variant="outline" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call Now
                </Button>
                <Button href={whatsappUrl} isExternal variant="primary" className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                </Button>
            </div>
            <div>
                <Button href={site.googleMaps} isExternal variant="ghost" className="px-0 text-xs underline underline-offset-8 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Visit the Studio (Google Maps)
                </Button>
            </div>
        </div>

        <form className="space-y-6">
            <input type="text" placeholder="Name" className="w-full bg-neutral-900 border border-neutral-700 p-4 text-sm focus:outline-none focus:border-neutral-400 text-white" />
            <input type="email" placeholder="Email" className="w-full bg-neutral-900 border border-neutral-700 p-4 text-sm focus:outline-none focus:border-neutral-400 text-white" />
            <input type="tel" placeholder="Phone" className="w-full bg-neutral-900 border border-neutral-700 p-4 text-sm focus:outline-none focus:border-neutral-400 text-white" />
            <select className="w-full bg-neutral-900 border border-neutral-700 p-4 text-sm text-neutral-400 focus:outline-none focus:border-neutral-400">
                <option>Event Type</option>
                <option>Wedding Photography</option>
                <option>Wedding Cinematography</option>
                <option>Pre-Wedding</option>
            </select>
            <textarea placeholder="Message" rows={4} className="w-full bg-neutral-900 border border-neutral-700 p-4 text-sm focus:outline-none focus:border-neutral-400 text-white"></textarea>
            <Button className="w-full">Send Enquiry</Button>
        </form>
      </div>
    </div>
  );
}
