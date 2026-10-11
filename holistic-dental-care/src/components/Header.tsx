import React, { useState, useEffect } from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onBookClick: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick, onNavigate, activeSection = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'Our Approach', target: 'approach-section' },
    { label: 'Dental Treatments', target: 'treatments-section' },
    { label: 'Smile Care', target: 'smile-care-section' },
    { label: 'Patient Guide', target: 'patient-journey-section' },
    { label: 'Contact', target: 'contact-section' },
  ];

  const handleLinkClick = (target: string) => {
    setMobileMenuOpen(false);
    onNavigate(target);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#fef9ef] border-b border-[#30392f]/10 shadow-[0_1px_8px_rgba(49,87,71,0.06)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand / Logo */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#194031] rounded-lg text-left"
            aria-label="Holistic Dental Care - Home"
          >
            <div className="w-10 h-10 rounded-full bg-[#f2ede3] flex items-center justify-center text-[#315747] group-hover:bg-[#c2ecd7] transition-colors shrink-0">
              {/* Organic tooth / botanical leaf SVG symbol from Stitch */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 3.5 1.8 6.58 4.54 8.36.27-.47.53-1 .76-1.58.5-1.25.7-2.61.64-3.95-.04-.84.22-1.68.75-2.31.78-.93 1.93-1.52 3.19-1.52h.24c.73 0 1.44-.27 1.99-.76.99-.88 1.48-2.23 1.3-3.56-.23-1.74.87-3.34 2.6-3.66 1.46-.27 2.87.5 3.49 1.77.29.6.78 1.05 1.41 1.25.1.03.2.06.31.08.31-1.12.47-2.3.47-3.51 0-5.52-4.48-10-10-10zm-1.89 15.65c-.09.34-.23.67-.42.98C7.62 17.5 6 15 6 12c0-1.87.64-3.59 1.71-4.96.22 1.96 1.34 3.73 3.03 4.69.4.23.63.67.58 1.13-.07.64-.38 1.22-.89 1.62-.22.18-.39.42-.48.69-.13.38-.17.78-.12 1.17.03.22.09.43.18.63z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-medium tracking-tight text-[#194031] leading-none">
                HOLISTIC DENTAL CARE
              </span>
              <span className="font-sans text-[11px] uppercase tracking-wider text-[#717974] mt-1 font-semibold">
                Kudasan · Gandhinagar
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Visible on lg 1024px+) */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-[#414844]"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.target;
              return (
                <button
                  key={link.target}
                  type="button"
                  onClick={() => handleLinkClick(link.target)}
                  className={`font-sans text-[15px] transition-all py-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#194031] rounded relative cursor-pointer ${
                    isActive
                      ? 'text-[#194031] font-semibold'
                      : 'text-[#414844] hover:text-[#194031] font-normal'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#194031] rounded-full transition-all duration-200"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right CTA Actions */}
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_CONFIG.phone.telHref}
              className="hidden sm:inline-flex lg:hidden items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#194031] bg-[#ece8de] hover:bg-[#e7e2d8] rounded-full transition-colors"
              title="Call Clinic"
              aria-label="Call clinic directly at 074330 53737"
            >
              <Phone className="w-3.5 h-3.5 text-[#8d4d34]" />
              <span className="text-xs">{BUSINESS_CONFIG.phone.display}</span>
            </a>

            <button
              type="button"
              onClick={onBookClick}
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 bg-[#315747] text-white font-sans text-xs sm:text-sm font-medium rounded-full hover:bg-[#194031] transition-colors duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315747]"
            >
              Book a Consultation
            </button>

            {/* Mobile & Tablet Menu Hamburger Button (lg:hidden) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#194031] bg-[#f2ede3] hover:bg-[#e7e2d8] rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#194031] transition-colors shrink-0"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full Viewport Mobile Navigation Drawer (Rendered as sibling outside header for true viewport fixed positioning) */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-[#fef9ef] overflow-y-auto flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200 border-t border-[#30392f]/10 shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="flex flex-col space-y-4 pt-2">
            <span className="text-xs uppercase tracking-widest text-[#8d4d34] font-semibold">
              Clinic Navigation
            </span>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  type="button"
                  onClick={() => handleLinkClick(link.target)}
                  className="font-serif text-2xl sm:text-3xl text-left text-[#194031] hover:text-[#8d4d34] py-3 border-b border-[#30392f]/5 transition-colors flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-5 h-5 text-[#717974] group-hover:text-[#8d4d34] group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#30392f]/10 flex flex-col gap-3.5 pb-6">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-4 bg-[#194031] text-white font-sans text-base font-medium rounded-xl hover:bg-[#315747] transition-colors shadow-sm text-center"
            >
              Request a Consultation
            </button>

            <a
              href={BUSINESS_CONFIG.phone.telHref}
              className="w-full py-3.5 bg-[#f2ede3] text-[#194031] font-sans text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-[#ece8de] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#8d4d34]" />
              <span>Call Clinic ({BUSINESS_CONFIG.phone.display})</span>
            </a>

            <div className="text-xs text-[#717974] text-center pt-1 leading-relaxed">
              {BUSINESS_CONFIG.address.building}, {BUSINESS_CONFIG.address.road}, Kudasan, Gandhinagar
            </div>
          </div>
        </div>
      )}
    </>
  );
};
