import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { Headphones, Eye, Compass } from 'lucide-react';

export const ApproachSection: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Ear':
        return <Headphones className="w-6 h-6 text-[#194031]" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-[#194031]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#8d4d34]" />;
      default:
        return <Eye className="w-6 h-6 text-[#194031]" />;
    }
  };

  const getIconBg = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-[#c2ecd7]'; // primary-fixed
      case 1:
        return 'bg-[#e7e2d8]'; // surface-container-highest
      case 2:
        return 'bg-[#ffdbce]'; // secondary-fixed
      default:
        return 'bg-[#f2ede3]';
    }
  };

  return (
    <section id="approach-section" className="w-full bg-[#fef9ef] py-20 border-b border-[#30392f]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-sans text-xs uppercase tracking-wider text-[#8d4d34] font-semibold">
            Care Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#194031] tracking-tight mt-2 mb-4 leading-tight">
            Care That Considers the Whole Experience.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#414844] leading-relaxed">
            Good dental care starts with understanding your concerns, explaining available options, and helping you make informed decisions about your oral health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BUSINESS_CONFIG.approachPhases.map((phase, idx) => (
            <div
              key={phase.title}
              className="bg-[#f8f3e9] rounded-2xl p-8 hover:bg-[#f2ede3] transition-all duration-300 shadow-sm border border-[#30392f]/5 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl ${getIconBg(
                    idx
                  )} flex items-center justify-center mb-6 shadow-xs`}
                  aria-hidden="true"
                >
                  {getIcon(phase.icon)}
                </div>
                <h3 className="font-serif text-2xl text-[#194031] mb-3">
                  {phase.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#414844] leading-relaxed">
                  {phase.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#30392f]/5 font-sans text-xs text-[#717974] font-medium tracking-wide">
                {phase.number} · {phase.phaseName}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
