import React, { useState } from 'react';
import { BUSINESS_CONFIG, TreatmentService } from '../config/business';
import {
  ArrowRight,
  Sparkles,
  Wand2,
  ShieldCheck,
  Smile,
  Cpu,
  Shield,
  Info,
  X
} from 'lucide-react';

interface TreatmentGridProps {
  onSelectService: (serviceName: string) => void;
}

export const TreatmentGrid: React.FC<TreatmentGridProps> = ({ onSelectService }) => {
  const [selectedModalTreatment, setSelectedModalTreatment] = useState<TreatmentService | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#194031]" />;
      case 'Wand2':
        return <Wand2 className="w-5 h-5 text-[#194031]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#194031]" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-[#8d4d34]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#194031]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#194031]" />;
      default:
        return <Shield className="w-5 h-5 text-[#194031]" />;
    }
  };

  const getSurfaceClass = (style: 'white' | 'cream' | 'sage') => {
    switch (style) {
      case 'white':
        return 'bg-white';
      case 'cream':
        return 'bg-[#f2ede3]';
      case 'sage':
        return 'bg-[#dce5d8]/40';
      default:
        return 'bg-white';
    }
  };

  const handleCardAction = (serviceName: string) => {
    onSelectService(serviceName);
  };

  return (
    <section id="treatments-section" className="w-full bg-[#f8f3e9] py-20 border-b border-[#30392f]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-sans text-xs uppercase tracking-wider text-[#8d4d34] font-semibold">
              Services &amp; Consultations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#194031] tracking-tight mt-2 mb-3">
              Care for Your Everyday Smile.
            </h2>
            <p className="font-sans text-base text-[#414844] max-w-xl">
              Explore the dental services listed by the clinic and discuss the options relevant to your individual needs.
            </p>
          </div>

          <button
            onClick={() => handleCardAction('Dental Check-up')}
            className="inline-flex items-center gap-2 font-sans text-sm sm:text-base font-semibold text-[#194031] hover:text-[#8d4d34] transition-colors group self-start md:self-end"
          >
            <span>Book tailored evaluation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6-Card Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BUSINESS_CONFIG.services.map((service) => {
            const surfaceClass = getSurfaceClass(service.surfaceStyle);
            return (
              <div
                key={service.id}
                className={`${surfaceClass} rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#30392f]/6 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[#f2ede3] flex items-center justify-center text-[#194031]">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedModalTreatment(service)}
                      className="p-1.5 text-[#717974] hover:text-[#194031] hover:bg-[#ece8de]/60 rounded-md transition-colors"
                      title={`Clinical info for ${service.name}`}
                      aria-label={`Learn more about ${service.name}`}
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="font-serif text-2xl text-[#194031] mb-3 group-hover:text-[#315747] transition-colors">
                    {service.name}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#414844] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleCardAction(service.name)}
                    className="inline-flex items-center text-[#194031] font-sans text-sm font-semibold group-hover:text-[#8d4d34] transition-colors gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#194031] rounded"
                  >
                    <span>Explore Option</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <span className="font-sans text-xs text-[#717974]/80 uppercase tracking-wider">
                    {service.surfaceStyle === 'white' ? 'In-Office' : service.surfaceStyle === 'cream' ? 'Tailored' : 'Preventive'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Clinical Info Modal for Treatment Details */}
      {selectedModalTreatment && (
        <div
          className="fixed inset-0 z-50 bg-[#1d1c16]/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-treatment-title"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-[#30392f]/10 relative animate-in zoom-in-95">
            <button
              onClick={() => setSelectedModalTreatment(null)}
              className="absolute top-5 right-5 p-2 text-[#717974] hover:text-[#194031] hover:bg-[#f2ede3] rounded-full transition-colors"
              aria-label="Close treatment details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-[#c2ecd7] flex items-center justify-center text-[#194031] mb-4">
              {getServiceIcon(selectedModalTreatment.iconName)}
            </div>

            <span className="font-sans text-xs uppercase tracking-wider text-[#8d4d34] font-semibold">
              Clinical Context
            </span>
            <h3 id="modal-treatment-title" className="font-serif text-2xl sm:text-3xl text-[#194031] mt-1 mb-4">
              {selectedModalTreatment.name}
            </h3>

            <p className="font-sans text-base text-[#414844] leading-relaxed mb-6">
              {selectedModalTreatment.fullDescription}
            </p>

            <div className="bg-[#f8f3e9] p-4 rounded-xl mb-6 text-xs text-[#717974] leading-relaxed">
              *All dental recommendations are provided during clinical consultation following an in-person assessment of enamel thickness, gum health, and anatomical factors.
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const serviceName = selectedModalTreatment.name;
                  setSelectedModalTreatment(null);
                  handleCardAction(serviceName);
                }}
                className="w-full py-3 bg-[#194031] text-white font-sans text-sm font-medium rounded-xl hover:bg-[#315747] transition-colors"
              >
                Request Consultation for this Service
              </button>
              <button
                onClick={() => setSelectedModalTreatment(null)}
                className="w-full sm:w-auto px-5 py-3 bg-[#f2ede3] text-[#194031] font-sans text-sm font-medium rounded-xl hover:bg-[#ece8de] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
