import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

interface CosmeticCareSectionProps {
  onDiscussGoals: () => void;
}

export const CosmeticCareSection: React.FC<CosmeticCareSectionProps> = ({ onDiscussGoals }) => {
  return (
    <section className="w-full bg-[#fef9ef] py-20 border-b border-[#30392f]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Clinical Card Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-[#f2ede3] rounded-3xl p-8 sm:p-10 shadow-sm border border-[#30392f]/6">
              <div className="w-12 h-12 rounded-full bg-[#ffdbce] flex items-center justify-center text-[#8d4d34] mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#194031] mb-3 leading-snug">
                Clinical Suitability First
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#414844] leading-relaxed mb-6">
                All cosmetic and restorative procedures are subject to direct clinical examination to confirm enamel thickness, gum health, and bite function.
              </p>

              <div className="bg-white rounded-2xl p-5 mb-6 flex flex-col gap-3.5 shadow-xs border border-[#30392f]/5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#194031] shrink-0" />
                  <span className="font-sans text-sm text-[#1d1c16] font-medium">
                    Minimally invasive composite resin
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#194031] shrink-0" />
                  <span className="font-sans text-sm text-[#1d1c16] font-medium">
                    Gentle shade assessment under true daylight
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#194031] shrink-0" />
                  <span className="font-sans text-sm text-[#1d1c16] font-medium">
                    Digital imaging for precise crown fit
                  </span>
                </div>
              </div>

              <div className="text-[#717974] font-sans text-xs italic">
                *Procedures planned solely on individual clinical suitability.
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="font-sans text-xs uppercase tracking-wider text-[#8d4d34] font-semibold">
              Cosmetic &amp; Restorative Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#194031] tracking-tight mt-2 mb-4 leading-tight">
              Your Smile, Your Priorities.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#414844] mb-8 leading-relaxed">
              Every patient has different concerns. Discuss your preferences and understand the options that may be appropriate for your dental health.
            </p>

            <div className="space-y-4 mb-8">
              {/* Item 1 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#f8f3e9] flex items-start gap-4 border border-[#30392f]/5 hover:bg-[#f2ede3] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#e7e2d8] flex items-center justify-center text-[#194031] shrink-0 mt-0.5 font-serif font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-sans text-base text-[#194031] font-semibold">
                    Teeth Whitening
                  </h4>
                  <p className="font-sans text-sm text-[#414844] mt-0.5">
                    Review suitable options to lighten discolored enamel gently and consistently.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#f8f3e9] flex items-start gap-4 border border-[#30392f]/5 hover:bg-[#f2ede3] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#e7e2d8] flex items-center justify-center text-[#194031] shrink-0 mt-0.5 font-serif font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-sans text-base text-[#194031] font-semibold">
                    Dental Bonding
                  </h4>
                  <p className="font-sans text-sm text-[#414844] mt-0.5">
                    Address subtle chips, minor spacing, and contour irregularities with tooth-colored composite.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#f8f3e9] flex items-start gap-4 border border-[#30392f]/5 hover:bg-[#f2ede3] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#e7e2d8] flex items-center justify-center text-[#194031] shrink-0 mt-0.5 font-serif font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-sans text-base text-[#194031] font-semibold">
                    Restorative Treatment Options
                  </h4>
                  <p className="font-sans text-sm text-[#414844] mt-0.5">
                    Crowns and bridges crafted for durable chewing function and long-term aesthetic harmony.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onDiscussGoals}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#194031] text-white font-sans text-sm sm:text-base font-medium rounded-full hover:bg-[#315747] transition-all duration-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#194031]"
            >
              Discuss Your Smile Goals
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
