import { useState } from 'react';
import { Facebook, Instagram, Twitter, Youtube, ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import Logo from './Logo';

const Footer: React.FC = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Twitter, name: 'Twitter', href: '#' },
    { icon: Youtube, name: 'YouTube', href: '#' },
  ] as const;

  const sections = [
    { title: 'Company', links: [{ label: 'About Us', href: '#' }, { label: 'Careers', href: '#' }, { label: 'Press', href: '#' }, { label: 'Blog', href: '#' }] },
    { title: 'Support', links: [{ label: 'Help Center', href: '#' }, { label: 'Safety', href: '#' }, { label: 'Terms of Service', href: '#' }, { label: 'Privacy Policy', href: '#' }] },
    { title: 'Discover', links: [{ label: 'Destinations', href: '#' }, { label: 'Gallery', href: '#' }, { label: 'Travel Guides', href: '#' }, { label: 'Special Offers', href: '#' }] },
  ] as const;

  return (
    <footer className="relative bg-secondary text-white mt-0 md:mt-28 lg:mt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Brand */}
        <div className="mb-6 md:mb-8 md:hidden">
          <div className="flex items-center gap-2 mb-3">
<Logo size={36} />
            <span className="font-extrabold text-lg tracking-wide">Varsha Travels</span>
          </div>
          <p className="text-blue-100/90 text-xs leading-relaxed max-w-xl">
            Creating unforgettable travel experiences since 2015. Explore the world with confidence and style.
          </p>
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden mb-8">
          <Accordion type="single" collapsible className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm divide-y divide-white/10">
            {sections.map((sec) => (
              <AccordionItem key={sec.title} value={sec.title}>
                <AccordionTrigger className="px-3">
                  <span className="text-primary text-base font-semibold">{sec.title}</span>
                </AccordionTrigger>
                <AccordionContent className="px-3 pb-3">
                  <ul className="space-y-2">
                    {sec.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className="group flex items-center gap-2 text-xs text-blue-100 hover:text-primary transition">
                          <ChevronRight className="w-3.5 h-3.5 text-primary/70 group-hover:translate-x-0.5 transition-transform" />
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 lg:gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <img src="/varsha-logo.png" alt="Varsha Travels Logo" width={36} height={36} className="rounded-md object-contain" />
              <span className="font-extrabold text-lg tracking-wide">Varsha Travels</span>
            </div>
            <p className="text-blue-100/90 text-xs leading-relaxed">Creating unforgettable travel experiences since 2015. Explore the world with confidence and style.</p>
          </div>
          {sections.map((sec) => (
            <div key={sec.title}>
              <h4 className="font-bold text-base mb-3 text-primary">{sec.title}</h4>
              <ul className="space-y-2 text-xs">
                {sec.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="group inline-flex items-center gap-2 text-blue-100 hover:text-primary transition">
                      <ChevronRight className="w-3.5 h-3.5 text-primary/70 group-hover:translate-x-0.5 transition-transform" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-xs text-blue-100">© 2025 Wanderlust. All rights reserved.</p>
        </div>
      </div>

      {/* Fixed social icons */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-row md:flex-col items-center md:items-end gap-2">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          const isHovered = hoveredSocial === social.name;
          return (
            <div key={social.name} className="relative" onMouseEnter={() => setHoveredSocial(social.name)} onMouseLeave={() => setHoveredSocial(null)}>
              {isHovered && (
                <span className="hidden md:block absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md bg-foreground text-background text-xs font-semibold whitespace-nowrap shadow-md">
                  {social.name}
                </span>
              )}
              <a href={social.href} className="md:w-10 md:h-10 w-9 h-9 rounded-md bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 shadow-md border border-border transition-transform hover:scale-105" aria-label={social.name}>
                <Icon className="md:w-5 md:h-5 w-4 h-4" />
              </a>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;