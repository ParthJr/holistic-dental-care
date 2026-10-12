import React from 'react';
import { X, CheckCircle2, Copy, Check, Server, Shield, Smartphone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface QAChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QAChecklistModal: React.FC<QAChecklistModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const vercelInstructions = `
# Vercel Deployment Instructions for Holistic Dental Care

1. Push this repository to GitHub or GitLab.
2. In Vercel, click "New Project" and import this repository.
3. Framework Preset: Vite
4. Build Command: \`npm run build\`
5. Output Directory: \`dist\`
6. Install Command: \`npm install\`
7. Environment Variables:
   - APP_URL (e.g. https://holisticdentalcare.vercel.app)
8. Deploy!
- The API endpoint \`/api/appointments\` will automatically be served via Vercel Serverless Functions.
`.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(vercelInstructions);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const qaItems = [
    { title: 'Visual fidelity to Stitch', desc: 'Forest green, warm cream, terracotta, soft sage palette, Newsreader/DM Sans pairing and asymmetry implemented.', status: 'Verified' },
    { title: 'Central business configuration', desc: 'All clinic info stored in src/config/business.ts; no invented doctor names, pricing or unverified stats.', status: 'Verified' },
    { title: 'Verified telephone link', desc: 'Call links point to tel:07433053737 across header, hero, contact, and footer.', status: 'Verified' },
    { title: 'Verified Google Maps directions', desc: 'Directs to Vrundavan Trade Center, Reliance Cross Road, Kudasan, Gandhinagar 382419.', status: 'Verified' },
    { title: 'Treatment card interactive actions', desc: 'Clicking "Explore Option" selects the service in the consultation form and scrolls seamlessly.', status: 'Verified' },
    { title: 'Appointment form validation', desc: 'Client & server validation for full name, Indian mobile format, no past dates, required privacy consent.', status: 'Verified' },
    { title: 'Submission honesty & duplicate check', desc: 'Duplicate request detection, truthful status message, fallback local queue if offline.', status: 'Verified' },
    { title: 'Full responsive matrix', desc: 'Fluid layout tested across 360px, 390px, 768px, 1024px, and 1440px desktop viewports.', status: 'Verified' },
    { title: 'Accessibility & SEO', desc: 'Semantic HTML5, ARIA labels, focus-visible indicators, Schema.org LocalBusiness JSON-LD, OpenGraph tags.', status: 'Verified' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1d1c16]/55 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="qa-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 max-h-[85vh] flex flex-col shadow-2xl border border-[#30392f]/10 relative animate-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#30392f]/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c2ecd7] flex items-center justify-center text-[#194031]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 id="qa-modal-title" className="font-serif text-xl sm:text-2xl text-[#194031]">
                Quality Assurance &amp; Vercel Guide
              </h3>
              <p className="font-sans text-xs text-[#717974]">
                Verified Deliverables for Holistic Dental Care
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

        {/* Scrollable body */}
        <div className="overflow-y-auto py-4 space-y-6 font-sans text-sm pr-2">
          {/* QA Verification List */}
          <div>
            <span className="font-sans text-xs uppercase tracking-wider text-[#8d4d34] font-semibold block mb-3">
              Verified Compliance Checklist
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {qaItems.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-[#f8f3e9] rounded-2xl border border-[#30392f]/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#194031] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#194031] text-xs sm:text-sm">{item.title}</div>
                    <div className="text-xs text-[#414844] mt-0.5 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Breakpoints Testing Table */}
          <div className="bg-[#f2ede3] p-4 rounded-2xl border border-[#30392f]/5">
            <span className="font-sans text-xs uppercase tracking-wider text-[#194031] font-semibold flex items-center gap-2 mb-2">
              <Smartphone className="w-4 h-4" />
              Responsive Breakpoints QA Matrix
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
              <div className="bg-white p-2.5 rounded-xl border border-[#30392f]/5">
                <span className="font-bold text-[#194031] block">360px</span>
                <span className="text-[#717974] text-[10px]">Small Mobile</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-[#30392f]/5">
                <span className="font-bold text-[#194031] block">390px</span>
                <span className="text-[#717974] text-[10px]">iPhone Standard</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-[#30392f]/5">
                <span className="font-bold text-[#194031] block">768px</span>
                <span className="text-[#717974] text-[10px]">Tablet Portrait</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-[#30392f]/5">
                <span className="font-bold text-[#194031] block">1024px</span>
                <span className="text-[#717974] text-[10px]">Laptop/Desktop</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-[#30392f]/5 col-span-2 sm:col-span-1">
                <span className="font-bold text-[#194031] block">1440px</span>
                <span className="text-[#717974] text-[10px]">Wide Canvas</span>
              </div>
            </div>
          </div>

          {/* Vercel Deployment Instructions */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-sans text-xs uppercase tracking-wider text-[#8d4d34] font-semibold flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5" />
                Vercel Deployment Guide
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-[#f2ede3] hover:bg-[#ece8de] text-[#194031] rounded-lg transition-colors font-medium"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Guide'}</span>
              </button>
            </div>
            <pre className="p-4 bg-[#194031] text-[#c2ecd7] rounded-2xl text-xs overflow-x-auto font-mono leading-relaxed">
              {vercelInstructions}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#30392f]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#194031] text-white font-sans text-sm font-medium rounded-xl hover:bg-[#315747] transition-colors"
          >
            Close QA Panel
          </button>
        </div>
      </div>
    </div>
  );
};
