import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';

export const PatientJourney: React.FC = () => {
  return (
    <section id="patient-journey-section" className="w-full bg-[#f8f3e9] py-20 border-b border-[#30392f]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-wider text-[#8d4d34] font-semibold">
            Simple Progression
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#194031] tracking-tight mt-2 mb-3">
            A More Comfortable Way to Get Started.
          </h2>
          <p className="font-sans text-base text-[#414844]">
            We prioritize low-stress communication from the moment you connect with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {BUSINESS_CONFIG.journeySteps.map((step) => {
            const isSecondary = step.color === 'secondary';
            return (
              <div
                key={step.number}
                className="flex flex-col items-center text-center p-8 bg-[#f2ede3] rounded-3xl relative shadow-sm border border-[#30392f]/5 hover:bg-white transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-full ${
                    isSecondary ? 'bg-[#8d4d34] text-white' : 'bg-[#194031] text-white'
                  } font-serif text-2xl flex items-center justify-center mb-5 shadow-xs`}
                >
                  {step.number}
                </div>
                <h3 className="font-serif text-2xl text-[#194031] mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#414844] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
