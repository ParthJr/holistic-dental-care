import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { Sparkles, MessageCircle, HeartHandshake } from 'lucide-react';

export const SmileWellbeingSection: React.FC = () => {
  return (
    <section id="smile-care-section" className="w-full bg-[#194031] py-20 text-white relative overflow-hidden">
      {/* Subtle Botanical Vector Line Motif background overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-end -mr-20" aria-hidden="true">
        <svg className="w-[600px] h-[600px] text-[#fef9ef]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 200 200">
          <path d="M100 180 C80 140, 40 120, 20 100 C60 100, 80 80, 100 20 C120 80, 140 100, 180 100 C160 120, 120 140, 100 180 Z" />
          <path d="M100 150 C85 120, 55 105, 40 90 C70 90, 85 75, 100 45 C115 75, 130 90, 160 90 C145 105, 115 120, 100 150 Z" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text & Pillars Column */}
          <div className="lg:col-span-7">
            <span className="font-sans text-xs uppercase tracking-wider text-[#fdaa8b] font-semibold">
              Daily Oral Health
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#fef9ef] tracking-tight mt-2 mb-4 leading-tight">
              Healthy Habits. Informed Choices.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#a6d0bb] mb-8 max-w-xl leading-relaxed">
              Understanding your oral health and maintaining appropriate daily care can help you make more informed decisions about your smile.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#315747]/80 backdrop-blur-sm p-5 rounded-2xl border border-white/5 shadow-xs">
                <Sparkles className="w-5 h-5 text-[#fdaa8b] mb-2" />
                <h4 className="font-sans text-sm sm:text-base font-semibold text-[#fef9ef] mb-1">
                  Preventive oral care
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#a6d0bb]/90 leading-relaxed">
                  Support your natural teeth through regular clinical hygiene reviews.
                </p>
              </div>

              <div className="bg-[#315747]/80 backdrop-blur-sm p-5 rounded-2xl border border-white/5 shadow-xs">
                <MessageCircle className="w-5 h-5 text-[#fdaa8b] mb-2" />
                <h4 className="font-sans text-sm sm:text-base font-semibold text-[#fef9ef] mb-1">
                  Personalized discussions
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#a6d0bb]/90 leading-relaxed">
                  Collaborative assessments that prioritize your comfort and timeline.
                </p>
              </div>

              <div className="bg-[#315747]/80 backdrop-blur-sm p-5 rounded-2xl border border-white/5 shadow-xs">
                <HeartHandshake className="w-5 h-5 text-[#fdaa8b] mb-2" />
                <h4 className="font-sans text-sm sm:text-base font-semibold text-[#fef9ef] mb-1">
                  Hygiene guidance
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#a6d0bb]/90 leading-relaxed">
                  Clear everyday brushing and flossing routines matched to your mouth.
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-[#315747] border border-white/10">
              <img
                src="/images/patient-portrait.jpg"
                alt="Authentic portrait of a smiling woman in Kudasan, Gandhinagar"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('googleusercontent')) {
                    target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuC1lk_3ftsoF_QbiMQLEjwXnk-ne-7ZWj2bpinkLT2V7_xYKQKTxw3-BJhSRs2ip8DE6JgEARBTkC0lfnVTuXTO5mWJuPKN7piJceeQCac5Ph9nLoTfUKqpxzfOORlumickI0kJ_Xts8IOA0HnZIIYZDEhyNA4aYCpEdjvzuCZeihY6uqvj3878K7Xjc8Ik6EG7sER5pFjgCb5X1OWtI-kqPfQVkI8H0IuLOx-ALd67Gm6hciWakPox";
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#194031]/85 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-[#fef9ef]">
                <p className="font-serif text-xl sm:text-2xl italic">“Comfort in every consultation.”</p>
                <p className="font-sans text-xs text-[#a6d0bb] mt-1 font-medium">
                  {BUSINESS_CONFIG.clinicName} · Gandhinagar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
