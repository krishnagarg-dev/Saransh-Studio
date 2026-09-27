"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES = ["ALL", "WEDDING", "COUPLES", "PRE-WEDDING", "PORTRAITS", "CORPORATE", "EVENTS", "PRODUCT"];

const PROJECTS = [
  { id: 1, title: "Aarav & Riya", category: "WEDDING", location: "Udaipur", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000", size: "large" },
  { id: 2, title: "Classic Love", category: "COUPLES", location: "Goa", image: "https://images.unsplash.com/photo-1532712938310-23cb310a08e0?q=80&w=2000", size: "small" },
  { id: 3, title: "Elegance", category: "PORTRAITS", location: "Studio", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000", size: "small" },
  { id: 4, title: "Soulmate", category: "PRE-WEDDING", location: "Jaipur", image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2000", size: "large" },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("ALL");

  const filteredProjects = filter === "ALL"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto bg-[var(--color-ivory)]">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-muted-gray)] mb-4">Our Work</p>
        <h1 className="text-4xl md:text-6xl font-serif mb-10 text-[var(--color-charcoal)]">Stories captured with intention.</h1>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 text-xs tracking-[0.2em] uppercase text-[var(--color-muted-gray)]">
          {CATEGORIES.map(cat => (
            <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`transition-colors pb-1 border-b-2 ${filter === cat ? "border-[var(--color-charcoal)] text-[var(--color-charcoal)] font-semibold" : "border-transparent hover:text-[var(--color-charcoal)]"}`}
            >
                {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProjects.map((p) => (
          <Link
            key={p.id}
            href={`/portfolio/${p.title.toLowerCase().replace(/\s+/g, '-')}`}
            className={`group relative overflow-hidden bg-[var(--color-surface)] shadow-sm ${p.size === 'large' ? 'col-span-2 row-span-2 aspect-[4/3] md:aspect-auto' : 'col-span-2 md:col-span-1 row-span-1 aspect-square'}`}
          >
            <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-neutral-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-serif">{p.title}</h3>
              <p className="text-neutral-200 text-[10px] tracking-widest uppercase">{p.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
