import React from 'react';
import { X, Shield, Lock, FileText } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface PrivacyNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  tab?: 'privacy' | 'terms' | 'safety';
}

export const PrivacyNoticeModal: React.FC<PrivacyNoticeModalProps> = ({
  isOpen,
  onClose,
  tab = 'privacy'
}) => {
  const [activeTab, setActiveTab] = React.useState<'privacy' | 'terms' | 'safety'>(tab);

  React.useEffect(() => {
    setActiveTab(tab);
  }, [tab]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1d1c16]/55 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] flex flex-col shadow-2xl border border-[#30392f]/10 relative animate-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#30392f]/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c2ecd7] flex items-center justify-center text-[#194031]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 id="legal-modal-title" className="font-serif text-xl sm:text-2xl text-[#194031]">
                Patient Information &amp; Legal Notices
              </h3>
              <p className="font-sans text-xs text-[#717974]">
                {BUSINESS_CONFIG.clinicName} · Kudasan, Gandhinagar
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#717974] hover:text-[#194031] hover:bg-[#f2ede3] rounded-full transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 pt-4 pb-2 border-b border-[#30392f]/5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2 rounded-lg font-sans text-xs sm:text-sm font-medium transition-colors ${
              activeTab === 'privacy'
                ? 'bg-[#194031] text-white'
                : 'bg-[#f8f3e9] text-[#414844] hover:bg-[#f2ede3]'
            }`}
          >
            Privacy Notice
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2 rounded-lg font-sans text-xs sm:text-sm font-medium transition-colors ${
              activeTab === 'terms'
                ? 'bg-[#194031] text-white'
                : 'bg-[#f8f3e9] text-[#414844] hover:bg-[#f2ede3]'
            }`}
          >
            Terms of Consultation
          </button>
          <button
            onClick={() => setActiveTab('safety')}
            className={`px-4 py-2 rounded-lg font-sans text-xs sm:text-sm font-medium transition-colors ${
              activeTab === 'safety'
                ? 'bg-[#194031] text-white'
                : 'bg-[#f8f3e9] text-[#414844] hover:bg-[#f2ede3]'
            }`}
          >
            Safety &amp; Clinical Protocols
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto py-4 space-y-4 font-sans text-sm text-[#414844] leading-relaxed pr-2">
          {activeTab === 'privacy' && (
            <>
              <h4 className="font-serif text-lg text-[#194031] font-semibold">
                Patient Privacy &amp; Confidentiality Notice
              </h4>
              <p>
                At Holistic Dental Care in Kudasan, Gandhinagar, we treat your contact details and oral health records with utmost confidentiality.
              </p>
              <div className="bg-[#f8f3e9] p-4 rounded-xl space-y-2 border border-[#30392f]/5 text-xs sm:text-sm">
                <div className="font-semibold text-[#194031] flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#8d4d34]" />
                  What We Collect:
                </div>
                <ul className="list-disc pl-5 space-y-1 text-[#414844]">
                  <li>Full Name and Contact Number for appointment scheduling and callbacks.</li>
                  <li>Preferred timing and consultation service requested.</li>
                  <li>Optional notes or dental sensitivity you choose to share beforehand.</li>
                </ul>
              </div>
              <p>
                We do not sell, rent, or distribute patient contact details to any third-party marketers. Consultation requests submitted through this website are used solely by clinic reception to coordinate appointment availability.
              </p>
            </>
          )}

          {activeTab === 'terms' && (
            <>
              <h4 className="font-serif text-lg text-[#194031] font-semibold">
                Terms of Consultation Request
              </h4>
              <p>
                Submitting a request through this website expresses your interest in scheduling a dental consultation at our clinic:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Not an Automatic Confirmation:</strong> Appointment slots are tentative until confirmed verbally or via SMS/call by clinic reception.
                </li>
                <li>
                  <strong>Clinical Assessment:</strong> Specific treatment plans, duration, and suitability can only be established after in-person clinical examination.
                </li>
                <li>
                  <strong>Emergency Care:</strong> If you are experiencing severe dental pain, swelling, or acute trauma, please call our clinic directly at 074330 53737.
                </li>
              </ul>
            </>
          )}

          {activeTab === 'safety' && (
            <>
              <h4 className="font-serif text-lg text-[#194031] font-semibold">
                Safety, Sterilization &amp; Clinical Standards
              </h4>
              <p>
                Our practice adheres to strict biomedical sterilization, autoclave protocols, and gentle dentistry practices.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-[#f8f3e9] rounded-xl border border-[#30392f]/5">
                  <span className="font-semibold text-[#194031] block mb-1">Class-B Autoclave</span>
                  <span className="text-xs">Hospital-grade steam sterilization for all clinical instruments.</span>
                </div>
                <div className="p-3 bg-[#f8f3e9] rounded-xl border border-[#30392f]/5">
                  <span className="font-semibold text-[#194031] block mb-1">Gentle Dentistry</span>
                  <span className="text-xs">Conservation of natural tooth structure and biocompatible materials.</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#30392f]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#194031] text-white font-sans text-sm font-medium rounded-xl hover:bg-[#315747] transition-colors"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
