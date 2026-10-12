import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { Star, ExternalLink, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#fef9ef] py-20 border-b border-[#30392f]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#dce5d8]/45 rounded-3xl p-8 sm:p-12 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#30392f]/8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            {/* Visual Rating Box */}
            <div className="flex flex-col items-center justify-center bg-white w-32 h-32 rounded-2xl shadow-sm shrink-0 border border-[#30392f]/5 p-2">
              <span className="font-serif text-5xl text-[#194031] leading-none font-bold">
                5.0
              </span>
              <div className="flex text-[#8d4d34] mt-1.5" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#8d4d34]" />
                ))}
              </div>
              <span className="font-sans text-[11px] text-[#717974] mt-1 uppercase tracking-wider font-semibold">
                out of 5
              </span>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#8d4d34] font-semibold mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Patient Community</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#194031] mt-1 mb-2">
                {BUSINESS_CONFIG.googleRating.reviewCount} Google Reviews
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#414844] max-w-md leading-relaxed">
                Real patients from Kudasan and Gandhinagar share their experiences directly on our verified Google Business profile.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <a
              href={BUSINESS_CONFIG.googleRating.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#194031] text-white font-sans text-sm sm:text-base font-medium rounded-full hover:bg-[#315747] transition-all duration-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#194031]"
            >
              <span>Read Google Reviews</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
