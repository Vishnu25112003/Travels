import { useState } from "react";
import Logo from "./Logo";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Destinations", href: "#destinations" },
    { label: "Gallery", href: "#destinations" },
    { label: "Contacts", href: "#contact" },
  ] as const;

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-xl md:shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
<Logo size={40} />
            {/* <span className="font-bold text-xl text-secondary hidden sm:inline">Varsha Travels</span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-gray-700 font-medium transition-colors duration-200 hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation (animated) */}
        <div
          id="mobile-nav"
          className={`md:hidden space-y-2 overflow-hidden transition-all duration-300 ${
            isOpen
              ? "max-h-96 opacity-100 translate-y-0 pb-4"
              : "max-h-0 opacity-0 -translate-y-2 pb-0"
          }`}
        >
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className={`${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              } relative block px-4 py-2 text-gray-700/90 bg-white/0 rounded-lg transition-all duration-300 ease-out hover:bg-gray-100 hover:text-primary hover:translate-x-1 focus:bg-gray-100 active:bg-gray-100 after:absolute after:left-4 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full focus:after:w-full active:after:w-full`}
              style={{ transitionDelay: isOpen ? `${idx * 40}ms` : "0ms" }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
