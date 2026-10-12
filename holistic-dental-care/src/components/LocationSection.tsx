import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="contact-section" className="w-full bg-[#fef9ef] py-20 border-b border-[#30392f]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="font-sans text-xs uppercase tracking-wider text-[#8d4d34] font-semibold">
            Location &amp; Access
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#194031] tracking-tight mt-2 mb-2">
            Find Us in Kudasan.
          </h2>
          <p className="font-sans text-base text-[#414844]">
            Conveniently situated at Reliance Cross Road in Gandhinagar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Exact Listing Information Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#f2ede3] rounded-3xl p-8 sm:p-10 shadow-sm border border-[#30392f]/6">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#194031] font-semibold mb-1">
                  {BUSINESS_CONFIG.clinicName}
                </h3>
                <p className="font-sans text-sm text-[#8d4d34] font-medium">
                  {BUSINESS_CONFIG.locationKicker}
                </p>
              </div>

              {/* Clinic Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#194031] shrink-0 shadow-xs mt-0.5">
                  <MapPin className="w-5 h-5 text-[#194031]" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-wider text-[#717974] font-semibold block mb-0.5">
                    Clinic Address
                  </span>
                  <p className="font-sans text-sm sm:text-base text-[#1d1c16] leading-relaxed">
                    {BUSINESS_CONFIG.address.formatted}
                  </p>
                </div>
              </div>

              {/* Phone Consultation */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#8d4d34] shrink-0 shadow-xs mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-wider text-[#717974] font-semibold block mb-0.5">
                    Phone Consultation
                  </span>
                  <a
                    href={BUSINESS_CONFIG.phone.telHref}
                    className="font-serif text-2xl text-[#8d4d34] hover:text-[#194031] transition-colors font-semibold"
                  >
                    {BUSINESS_CONFIG.phone.display}
                  </a>
                </div>
              </div>

              {/* Hours of Care */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#194031] shrink-0 shadow-xs mt-0.5">
                  <Clock className="w-5 h-5 text-[#194031]" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-wider text-[#717974] font-semibold block mb-0.5">
                    Hours of Care
                  </span>
                  <p className="font-sans text-sm sm:text-base text-[#1d1c16]">
                    {BUSINESS_CONFIG.hours.primaryText}
                  </p>
                  <span className="text-[#717974] font-sans text-xs mt-0.5 block italic">
                    {BUSINESS_CONFIG.hours.disclaimer}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-8 mt-6 border-t border-[#30392f]/10">
              <a
                href={BUSINESS_CONFIG.phone.telHref}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#194031] text-white font-sans text-sm font-medium rounded-xl hover:bg-[#315747] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#194031]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Clinic</span>
              </a>

              <a
                href={BUSINESS_CONFIG.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white text-[#194031] font-sans text-sm font-medium rounded-xl hover:bg-[#ece8de] transition-all border border-[#30392f]/10 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#194031]"
              >
                <Navigation className="w-4 h-4 text-[#8d4d34]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Styled Map Visualization Card */}
          <div className="lg:col-span-7 h-[380px] sm:h-[440px] rounded-3xl overflow-hidden shadow-sm border border-[#30392f]/8 relative bg-[#e7e2d8]">
            <img
              src="/images/map-kudasan.jpg"
              alt="Map view showing Vrundavan Trade Center at Reliance Cross Road in Kudasan, Gandhinagar"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('googleusercontent')) {
                  target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuAdyPEz4VhjsbdHuA9vADTaeW_QmTqXsYo0woqj56sK5xopYYH3EZC5YNegYPpZ4OVzOijrvDFPasd_PBdIpgCQXQbDeuStLdG1Vy4KFKAuncNxm8sIAm82MxFbMkFYG_empXgQppNJ8ZE7-PeA-QYXy4iQaaZdjrq6e-5NKoB5nGUMDNwHJN5kg9ib45vKUPXQd8tLRO2zm2hRPPFOvpuBQS-BjpEbdPXAID-LriD2e884oEoK_uRf";
                }
              }}
            />

            {/* Overlay Badge for Location Identification */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#30392f]/8 flex items-center justify-between sm:justify-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ffdbce] flex items-center justify-center text-[#8d4d34] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-sans text-sm font-semibold text-[#194031]">
                    Vrundavan Trade Center (VTC)
                  </div>
                  <div className="font-sans text-xs text-[#717974]">
                    {BUSINESS_CONFIG.maps.landmarkDescription}
                  </div>
                </div>
              </div>

              <a
                href={BUSINESS_CONFIG.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex p-2 text-[#194031] hover:text-[#8d4d34] transition-colors"
                title="Open in Google Maps"
                aria-label="Open in Google Maps"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
