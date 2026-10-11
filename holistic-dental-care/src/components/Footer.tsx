import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { MapPin, Phone, CheckCircle, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegal: (tab: 'privacy' | 'terms' | 'safety') => void;
  onOpenQA: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
  onOpenQA
}) => {
  return (
    <footer className="w-full bg-[#194031] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#315747] text-[#c2ecd7] flex items-center justify-center">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 3.5 1.8 6.58 4.54 8.36.27-.47.53-1 .76-1.58.5-1.25.7-2.61.64-3.95-.04-.84.22-1.68.75-2.31.78-.93 1.93-1.52 3.19-1.52h.24c.73 0 1.44-.27 1.99-.76.99-.88 1.48-2.23 1.3-3.56-.23-1.74.87-3.34 2.6-3.66 1.46-.27 2.87.5 3.49 1.77.29.6.78 1.05 1.41 1.25.1.03.2.06.31.08.31-1.12.47-2.3.47-3.51 0-5.52-4.48-10-10-10zm-1.89 15.65c-.09.34-.23.67-.42.98C7.62 17.5 6 15 6 12c0-1.87.64-3.59 1.71-4.96.22 1.96 1.34 3.73 3.03 4.69.4.23.63.67.58 1.13-.07.64-.38 1.22-.89 1.62-.22.18-.39.42-.48.69-.13.38-.17.78-.12 1.17.03.22.09.43.18.63z" />
                </svg>
              </div>
              <span className="font-serif text-lg sm:text-xl text-[#fef9ef] font-medium tracking-tight">
                HOLISTIC DENTAL CARE
              </span>
            </div>

            <p className="font-sans text-sm text-[#a6d0bb]/90 max-w-sm leading-relaxed">
              A more thoughtful, biologically respectful approach to your smile. Crafted with gentle clinical precision and calming care in Kudasan, Gandhinagar.
            </p>

            <div className="flex flex-col space-y-2 pt-2 text-[#ece8de]">
              <div className="flex items-start gap-2.5 font-sans text-xs sm:text-sm">
                <MapPin className="w-4 h-4 text-[#fdaa8b] mt-0.5 shrink-0" />
                <span>{BUSINESS_CONFIG.address.building}, Kudasan, Gandhinagar 382419</span>
              </div>
              <div className="flex items-center gap-2.5 font-sans text-xs sm:text-sm">
                <Phone className="w-4 h-4 text-[#fdaa8b] shrink-0" />
                <a
                  href={BUSINESS_CONFIG.phone.telHref}
                  className="hover:text-white transition-colors underline decoration-white/30"
                >
                  {BUSINESS_CONFIG.phone.display}
                </a>
              </div>
            </div>
          </div>

          {/* Care Philosophy */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <span className="font-sans text-xs uppercase tracking-wider text-[#fdaa8b] font-semibold">
              Care Philosophy
            </span>
            <ul className="flex flex-col space-y-2 font-sans text-sm">
              <li>
                <button
                  onClick={() => onNavigate('approach-section')}
                  className="text-[#a6d0bb] hover:text-white transition-colors text-left"
                >
                  Our Approach
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('treatments-section')}
                  className="text-[#a6d0bb] hover:text-white transition-colors text-left"
                >
                  Biomimetic Concept
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('approach-section')}
                  className="text-[#a6d0bb] hover:text-white transition-colors text-left"
                >
                  Conservative Protocol
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('smile-care-section')}
                  className="text-[#a6d0bb] hover:text-white transition-colors text-left"
                >
                  Restorative Ambience
                </button>
              </li>
            </ul>
          </div>

          {/* Clinical Services */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <span className="font-sans text-xs uppercase tracking-wider text-[#fdaa8b] font-semibold">
              Clinical Services
            </span>
            <ul className="flex flex-col space-y-2 font-sans text-sm">
              <li>
                <button
                  onClick={() => onNavigate('treatments-section')}
                  className="text-[#a6d0bb] hover:text-white transition-colors text-left"
                >
                  Dental Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('treatments-section')}
                  className="text-[#a6d0bb] hover:text-white transition-colors text-left"
                >
                  Check-ups &amp; Hygiene
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('treatments-section')}
                  className="text-[#a6d0bb] hover:text-white transition-colors text-left"
                >
                  Teeth Whitening
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('treatments-section')}
                  className="text-[#a6d0bb] hover:text-white transition-colors text-left"
                >
                  Dental Implants
                </button>
              </li>
            </ul>
          </div>

          {/* Patient Portal */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <span className="font-sans text-xs uppercase tracking-wider text-[#fdaa8b] font-semibold">
              Patient Portal
            </span>
            <ul className="flex flex-col space-y-2 font-sans text-sm">
              <li>
                <button
                  onClick={() => onNavigate('patient-journey-section')}
                  className="text-[#a6d0bb] hover:text-white transition-colors text-left"
                >
                  Patient Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('appointment-section')}
                  className="text-[#a6d0bb] hover:text-white transition-colors text-left"
                >
                  Schedule Visit
                </button>
              </li>
              <li>
                <a
                  href={BUSINESS_CONFIG.googleRating.reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a6d0bb] hover:text-white transition-colors text-left"
                >
                  Patient Reviews (5.0 ★)
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact-section')}
                  className="text-[#a6d0bb] hover:text-white transition-colors text-left"
                >
                  Contact &amp; Map
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Quality */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <span className="font-sans text-xs uppercase tracking-wider text-[#fdaa8b] font-semibold">
              Legal &amp; Quality
            </span>
            <ul className="flex flex-col space-y-2 font-sans text-sm">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="text-[#a6d0bb] hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="text-[#a6d0bb] hover:text-white transition-colors text-left"
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('safety')}
                  className="text-[#a6d0bb] hover:text-white transition-colors text-left"
                >
                  Sterilization Standards
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQA}
                  className="text-[#fdaa8b] hover:text-white transition-colors text-left text-xs font-semibold flex items-center gap-1 mt-1"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>QA &amp; Vercel Specs</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#a6d0bb]/80 font-sans text-xs">
          <p>© {new Date().getFullYear()} Holistic Dental Care Kudasan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Gandhinagar Holistic Oral Wellness Practice</span>
            <span>·</span>
            <a
              href={BUSINESS_CONFIG.phone.telHref}
              className="text-[#fdaa8b] hover:text-white transition-colors"
            >
              074330 53737
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
