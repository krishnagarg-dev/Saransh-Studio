import { Button } from "@/components/ui/Button";

export default function PackagesPage() {
  const packages = [
    { name: "Signature", price: "₹XX,XXX", desc: "For intimate celebrations focusing on core moments.", features: ["Photography coverage", "Digital gallery", "Cinematic edit"] },
    { name: "Premium", price: "₹XX,XXX", desc: "Comprehensive coverage for grand weddings.", features: ["Full day coverage", "Cinematic highlight film", "Photo album", "Aerial drone shots"], featured: true },
    { name: "Luxury", price: "₹XX,XXX", desc: "The ultimate experience in wedding storytelling.", features: ["Full team coverage", "Extended feature film", "Multiple albums", "Premium cinematography", "Pre-wedding shoot"], },
  ];

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">Investment</p>
        <h1 className="text-4xl md:text-6xl font-serif mb-6">Packages</h1>
        <p className="text-neutral-400 text-sm leading-relaxed">Thoughtfully crafted experiences designed to preserve your most cherished memories.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((p) => (
          <div key={p.name} className={`p-10 border ${p.featured ? "border-neutral-500 bg-neutral-900" : "border-neutral-800"}`}>
            <h3 className="text-2xl font-serif mb-2">{p.name}</h3>
            <p className="text-neutral-400 text-xs mb-8 min-h-[60px]">{p.desc}</p>
            <p className="text-3xl font-serif mb-8">{p.price}</p>
            <ul className="space-y-4 text-xs text-neutral-300 mb-10 text-left">
              {p.features.map((f) => <li key={f}>— {f}</li>)}
            </ul>
            <Button href="https://wa.me/919027731570" isExternal variant={p.featured ? "primary" : "outline"} className="w-full">Enquire Now</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
