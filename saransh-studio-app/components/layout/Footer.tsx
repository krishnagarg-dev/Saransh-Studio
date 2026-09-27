import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-ivory)] py-20 px-6 text-[var(--color-muted-gray)] text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="text-[var(--color-charcoal)] font-serif text-base mb-4 tracking-[0.2em] uppercase">{site.name}</h3>
          <p className="leading-relaxed mb-4 font-light">
            {site.type}
          </p>
          <p className="font-light">
            {site.address}
          </p>
        </div>
        <div>
          <h4 className="font-semibold tracking-[0.2em] uppercase text-[var(--color-charcoal)] mb-4">Navigation</h4>
          <ul className="space-y-3 font-light">
            <li><Link href="/portfolio" className="hover:text-[var(--color-charcoal)] transition-colors">Portfolio</Link></li>
            <li><Link href="/films" className="hover:text-[var(--color-charcoal)] transition-colors">Cinematic Films</Link></li>
            <li><Link href="/services" className="hover:text-[var(--color-charcoal)] transition-colors">Services</Link></li>
            <li><Link href="/packages" className="hover:text-[var(--color-charcoal)] transition-colors">Packages</Link></li>
            <li><Link href="/about" className="hover:text-[var(--color-charcoal)] transition-colors">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold tracking-[0.2em] uppercase text-[var(--color-charcoal)] mb-4">Contact</h4>
          <p className="mb-2 font-light">Phone / WhatsApp:</p>
          <a href={`tel:${site.phone}`} className="text-[var(--color-charcoal)] font-medium hover:underline tracking-wider">{site.phone}</a>
          <div className="mt-4">
              <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--color-charcoal)]" aria-label="YouTube">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.125-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.373.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.125 2.136c1.868.505 9.373.505 9.373.505s7.505 0 9.373-.505a3.015 3.015 0 0 0 2.125-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  {site.youtubeHandle}
              </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold tracking-[0.2em] uppercase text-[var(--color-charcoal)] mb-4">Quick Action</h4>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--color-dark-warm)] text-[var(--color-ivory)] px-6 py-3 font-semibold tracking-[0.15em] uppercase hover:bg-black transition-all"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between font-light">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/admin/login" className="hover:text-[var(--color-charcoal)]">Admin Access</Link>
        </div>
      </div>
    </footer>
  );
}
