import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { Star, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onRequestConsultation: () => void;
  onExploreTreatments: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestConsultation,
  onExploreTreatments,
}) => {
  return (
    <section id="home" className="relative w-full bg-[#f8f3e9] overflow-hidden py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Hero Content Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Location & Ethos Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ede3] text-[#194031] font-sans text-xs tracking-widest uppercase mb-6 shadow-sm border border-[#30392f]/5">
              <span className="w-2 h-2 rounded-full bg-[#8d4d34]" aria-hidden="true"></span>
              Thoughtful Dental Care · Kudasan
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#194031] tracking-tight mb-6 leading-[1.12] text-balance">
              Your Smile Deserves Thoughtful Care.
            </h1>

            {/* Introductory Body Text */}
            <p className="font-sans text-base sm:text-lg text-[#414844] max-w-xl mb-8 leading-relaxed">
              Explore dental care in a welcoming environment, with clear communication and an approach that considers your individual oral health needs.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onRequestConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-[#194031] text-white font-sans text-sm md:text-base font-medium rounded-full hover:bg-[#315747] transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#194031] focus-visible:ring-offset-2"
              >
                Request a Consultation
              </button>

              <button
                onClick={onExploreTreatments}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-[#ece8de] text-[#194031] font-sans text-sm md:text-base font-medium rounded-full hover:bg-[#dedad0] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#194031]"
              >
                Explore Our Treatments
              </button>
            </div>

            {/* Verified Google Review Proof Strip */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center text-[#8d4d34]" aria-label="5 out of 5 stars rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#8d4d34]" />
                ))}
              </div>
              <span className="font-sans text-sm text-[#194031] font-semibold">
                {BUSINESS_CONFIG.googleRating.badgeText}
              </span>
              <span className="text-[#717974] text-xs">·</span>
              <a
                href={BUSINESS_CONFIG.googleRating.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs sm:text-sm text-[#414844] hover:text-[#194031] transition-colors underline decoration-[#c1c8c2] underline-offset-4"
                title="View verified reviews on Google Maps"
              >
                {BUSINESS_CONFIG.googleRating.verifiedText}
              </a>
            </div>
          </div>

          {/* Hero Visual Composition Right Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              {/* Terracotta background offset card */}
              <div
                className="absolute -inset-4 bg-[#ffdbce]/40 rounded-[2.5rem] transform -rotate-2 -z-10"
                aria-hidden="true"
              ></div>
              {/* Soft sage atmospheric glow */}
              <div
                className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#dce5d8] rounded-full blur-2xl -z-10 opacity-70"
                aria-hidden="true"
              ></div>

              {/* Main Image Frame with Fallback Resilience */}
              <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-xl bg-[#f2ede3] border border-[#30392f]/5 relative">
                <img
                  src="/images/hero-clinic.jpg"
                  alt="Calm, naturally lit consultation room with dental specialist and patient at Holistic Dental Care Kudasan"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    // Fallback to Google CDN URL if local image fails
                    const target = e.currentTarget;
                    if (!target.src.includes('googleusercontent')) {
                      target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuBCuAKW1J0EMOmhQhi8jK7iQPKdulSG-59Z3Ga609u41aXikS8wq7s80nbVnOHCEBgZIBhlLqzhYwinXVSDm9wADL5NSvvBvKqQOXpqinmfXw62iHG0ZO8naePY83IgGeyJMWPuLFdLyHiRJwBzQrQqS-NauQYbNagdb-UpzDOmG0P_dUwV-T5SQ7eu8m-8_Jr0PZUN127F2veBo2fapOLk9cXewspmDVoBRblc6E6ef4RplL_JO0n9";
                    }
                  }}
                />
              </div>

              {/* Floating Editorial Pill Badge */}
              <div className="absolute -bottom-5 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-[#30392f]/8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#c2ecd7] flex items-center justify-center text-[#194031]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs sm:text-sm text-[#194031] font-semibold">
                    Unhurried Care
                  </span>
                  <span className="font-sans text-[11px] text-[#414844]">
                    {BUSINESS_CONFIG.locationKicker}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
