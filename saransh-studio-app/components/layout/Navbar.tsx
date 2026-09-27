"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Films", href: "/films" },
    { name: "Services", href: "/services" },
    { name: "Packages", href: "/packages" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const whatsappEnquireUrl = `${site.whatsapp}?text=${encodeURIComponent("Hi Saransh Studio, I would like to enquire about photography and cinematography.")}`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-ivory)]/90 backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-lg md:text-xl tracking-[0.2em] font-serif font-bold uppercase text-[var(--color-charcoal)]">
            {site.name}
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase text-[var(--color-muted-gray)] font-medium">
            {links.map(l => (
              <Link key={l.name} href={l.href} className="hover:text-[var(--color-charcoal)] transition-colors">
                {l.name}
              </Link>
            ))}
          </nav>
          <a
            href={whatsappEnquireUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-[var(--color-dark-warm)] text-[var(--color-ivory)] px-6 py-2.5 rounded-none text-xs font-semibold tracking-[0.15em] uppercase hover:bg-black transition-all"
          >
            Enquire on WhatsApp
          </a>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-[var(--color-charcoal)]" onClick={() => setIsOpen(true)}>
            <Menu />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-[var(--color-ivory)] p-6 flex flex-col justify-between">
          <button className="text-[var(--color-charcoal)] self-end" onClick={() => setIsOpen(false)}>
            <X />
          </button>
          <nav className="flex flex-col space-y-8 text-2xl font-serif text-center uppercase tracking-widest text-[var(--color-charcoal)]">
            {links.map(l => (
              <Link key={l.name} href={l.href} onClick={() => setIsOpen(false)}>
                {l.name}
              </Link>
            ))}
          </nav>
          <div className="grid grid-cols-2 gap-4">
            <a href={`tel:${site.phone}`} className="bg-[var(--color-warm-beige)] text-[var(--color-charcoal)] py-4 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call
            </a>
            <a href={whatsappEnquireUrl} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-dark-warm)] text-[var(--color-ivory)] py-4 flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
