import React, { useState, useEffect } from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import {
  submitAppointment,
  validateAppointmentForm,
  AppointmentRequest,
  ValidationErrors,
  SubmissionResponse
} from '../services/appointmentService';
import {
  Calendar,
  PhoneCall,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Clock,
  Sparkles
} from 'lucide-react';

interface AppointmentFormProps {
  selectedService?: string;
  onServiceReset?: () => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  selectedService = '',
}) => {
  // Today's date string in YYYY-MM-DD for min date attribute
  const todayString = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<AppointmentRequest>({
    fullName: '',
    mobileNumber: '',
    serviceInterest: selectedService || 'Dental Check-up',
    preferredDate: '',
    preferredTime: 'Morning',
    notes: '',
    privacyConsent: false
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResponse | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  // Sync selectedService prop if passed from TreatmentGrid
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceInterest: selectedService
      }));
    }
  }, [selectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear specific field error once corrected
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
    setServerError(null);
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const currentErrors = validateAppointmentForm(formData);
    if (currentErrors[field as keyof ValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: currentErrors[field as keyof ValidationErrors]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Mark all as touched
    setTouched({
      fullName: true,
      mobileNumber: true,
      serviceInterest: true,
      preferredDate: true,
      preferredTime: true,
      privacyConsent: true
    });

    // Run validation
    const validationErrors = validateAppointmentForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error element
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitAppointment(formData);
      setSubmissionResult(response);
    } catch (err: any) {
      setServerError(
        err?.message ||
          'Unable to submit request at this time. Please call the clinic directly at 074330 53737.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setServerError(null);
    setErrors({});
    setTouched({});
    setFormData({
      fullName: '',
      mobileNumber: '',
      serviceInterest: 'Dental Check-up',
      preferredDate: '',
      preferredTime: 'Morning',
      notes: '',
      privacyConsent: false
    });
  };

  return (
    <section id="appointment-section" className="w-full bg-[#f8f3e9] py-20 border-b border-[#30392f]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Form Context / Informational Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-sans text-xs uppercase tracking-wider text-[#8d4d34] font-semibold">
              Planning Your Visit
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#194031] tracking-tight mt-2 mb-4 leading-tight">
              Let's Plan Your Dental Visit.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#414844] mb-6 leading-relaxed">
              Tell us how to reach you and when you would prefer to visit. The clinic team will contact you to discuss availability.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-[#414844] font-sans text-sm sm:text-base">
                <Calendar className="w-5 h-5 text-[#194031] shrink-0" />
                <span>Flexible scheduling Monday to Saturday</span>
              </div>
              <div className="flex items-center gap-3 text-[#414844] font-sans text-sm sm:text-base">
                <PhoneCall className="w-5 h-5 text-[#194031] shrink-0" />
                <span>Prompt callback to confirm opening slot</span>
              </div>
              <div className="flex items-center gap-3 text-[#414844] font-sans text-sm sm:text-base">
                <ShieldCheck className="w-5 h-5 text-[#194031] shrink-0" />
                <span>Your personal contact details stay confidential</span>
              </div>
            </div>

            {/* Direct Phone Call Alternative */}
            <div className="mt-8 p-5 bg-[#f2ede3] rounded-2xl border border-[#30392f]/5">
              <span className="font-sans text-xs uppercase tracking-wider text-[#717974] font-medium block mb-1">
                Prefer to speak immediately?
              </span>
              <a
                href={BUSINESS_CONFIG.phone.telHref}
                className="font-serif text-xl sm:text-2xl text-[#8d4d34] hover:text-[#194031] font-semibold transition-colors inline-flex items-center gap-2"
              >
                <span>{BUSINESS_CONFIG.phone.display}</span>
              </a>
              <p className="font-sans text-xs text-[#717974] mt-1">
                {BUSINESS_CONFIG.hours.detailText}
              </p>
            </div>
          </div>

          {/* Appointment Form Card Right Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg border border-[#30392f]/6 relative">
              {submissionResult ? (
                /* Success State Screen */
                <div className="py-8 flex flex-col items-center text-center animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-[#c2ecd7] flex items-center justify-center text-[#194031] mb-5 shadow-xs">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <span className="font-sans text-xs uppercase tracking-wider text-[#8d4d34] font-semibold">
                    Request Received
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#194031] mt-1 mb-3">
                    Thank You, {submissionResult.appointmentDetails?.fullName}.
                  </h3>

                  <div className="p-4 rounded-xl bg-[#c2ecd7]/40 text-[#194031] font-sans text-sm sm:text-base text-center max-w-lg mb-6 border border-[#194031]/10">
                    {submissionResult.message}
                  </div>

                  <div className="w-full max-w-md bg-[#f8f3e9] rounded-2xl p-5 mb-6 text-left border border-[#30392f]/5 text-sm space-y-2">
                    <div className="flex justify-between text-xs text-[#717974] pb-2 border-b border-[#30392f]/5">
                      <span>Reference Identifier:</span>
                      <span className="font-mono font-medium text-[#194031]">{submissionResult.referenceId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#414844]">Service Requested:</span>
                      <span className="font-medium text-[#194031]">{submissionResult.appointmentDetails?.serviceInterest}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#414844]">Contact Phone:</span>
                      <span className="font-medium text-[#194031]">{submissionResult.appointmentDetails?.mobileNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#414844]">Preferred Timeframe:</span>
                      <span className="font-medium text-[#194031]">
                        {submissionResult.appointmentDetails?.preferredDate} ({submissionResult.appointmentDetails?.preferredTime})
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-[#717974] max-w-md mb-6 italic">
                    *Please note: Submitting this form expresses your timing preference. An appointment is only confirmed after our staff speaks with you directly.
                  </p>

                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-[#ece8de] text-[#194031] font-sans text-sm font-medium rounded-full hover:bg-[#dedad0] transition-colors"
                  >
                    Submit Another Consultation Request
                  </button>
                </div>
              ) : (
                /* Interactive Form Screen */
                <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Appointment Request Form">
                  {serverError && (
                    <div className="p-4 rounded-xl bg-[#ffdad6] text-[#93000a] text-sm flex items-start gap-3 border border-[#ba1a1a]/20">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Unable to submit request</div>
                        <div className="text-xs sm:text-sm mt-0.5">{serverError}</div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block font-sans text-sm text-[#1d1c16] mb-1.5 font-medium">
                        Full Name <span className="text-[#8d4d34]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={() => handleBlur('fullName')}
                        placeholder="e.g. Aarti Patel"
                        required
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-white text-[#1d1c16] placeholder:text-[#717974] font-sans text-sm sm:text-base border ${
                          errors.fullName && touched.fullName
                            ? 'border-[#ba1a1a] focus:ring-2 focus:ring-[#ba1a1a]/20'
                            : 'border-[#30392f]/20 focus:border-[#315747] focus:ring-2 focus:ring-[#315747]/15'
                        } outline-none transition-all`}
                      />
                      {errors.fullName && touched.fullName && (
                        <p id="fullName-error" className="mt-1 text-xs text-[#ba1a1a]">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label htmlFor="mobileNumber" className="block font-sans text-sm text-[#1d1c16] mb-1.5 font-medium">
                        Mobile Number <span className="text-[#8d4d34]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        onBlur={() => handleBlur('mobileNumber')}
                        placeholder="e.g. 074330 53737 or 98765 43210"
                        required
                        aria-invalid={!!errors.mobileNumber}
                        aria-describedby={errors.mobileNumber ? 'mobileNumber-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-white text-[#1d1c16] placeholder:text-[#717974] font-sans text-sm sm:text-base border ${
                          errors.mobileNumber && touched.mobileNumber
                            ? 'border-[#ba1a1a] focus:ring-2 focus:ring-[#ba1a1a]/20'
                            : 'border-[#30392f]/20 focus:border-[#315747] focus:ring-2 focus:ring-[#315747]/15'
                        } outline-none transition-all`}
                      />
                      {errors.mobileNumber && touched.mobileNumber && (
                        <p id="mobileNumber-error" className="mt-1 text-xs text-[#ba1a1a]">
                          {errors.mobileNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service of Interest */}
                  <div>
                    <label htmlFor="serviceInterest" className="block font-sans text-sm text-[#1d1c16] mb-1.5 font-medium">
                      Service of Interest <span className="text-[#8d4d34]">*</span>
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      onBlur={() => handleBlur('serviceInterest')}
                      className="w-full px-4 py-3 rounded-xl bg-white text-[#1d1c16] font-sans text-sm sm:text-base border border-[#30392f]/20 focus:border-[#315747] focus:ring-2 focus:ring-[#315747]/15 outline-none transition-all"
                    >
                      <option value="Dental Check-up">Dental Check-up &amp; Comprehensive Examination</option>
                      <option value="Teeth Whitening">Teeth Whitening</option>
                      <option value="Dental Bonding">Dental Bonding</option>
                      <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="Crowns and Restorative Care">Crowns and Restorative Care</option>
                      <option value="Other / Not Sure">Other / Consultation for General Concerns</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Preferred Date */}
                    <div>
                      <label htmlFor="preferredDate" className="block font-sans text-sm text-[#1d1c16] mb-1.5 font-medium">
                        Preferred Date <span className="text-[#8d4d34]">*</span>
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        min={todayString}
                        value={formData.preferredDate}
                        onChange={handleChange}
                        onBlur={() => handleBlur('preferredDate')}
                        required
                        aria-invalid={!!errors.preferredDate}
                        aria-describedby={errors.preferredDate ? 'preferredDate-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-white text-[#1d1c16] font-sans text-sm sm:text-base border ${
                          errors.preferredDate && touched.preferredDate
                            ? 'border-[#ba1a1a] focus:ring-2 focus:ring-[#ba1a1a]/20'
                            : 'border-[#30392f]/20 focus:border-[#315747] focus:ring-2 focus:ring-[#315747]/15'
                        } outline-none transition-all`}
                      />
                      {errors.preferredDate && touched.preferredDate && (
                        <p id="preferredDate-error" className="mt-1 text-xs text-[#ba1a1a]">
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label htmlFor="preferredTime" className="block font-sans text-sm text-[#1d1c16] mb-1.5 font-medium">
                        Preferred Time <span className="text-[#8d4d34]">*</span>
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        onBlur={() => handleBlur('preferredTime')}
                        className="w-full px-4 py-3 rounded-xl bg-white text-[#1d1c16] font-sans text-sm sm:text-base border border-[#30392f]/20 focus:border-[#315747] focus:ring-2 focus:ring-[#315747]/15 outline-none transition-all"
                      >
                        <option value="Morning">Morning (10:00 AM – 1:00 PM)</option>
                        <option value="Mid-day">Mid-day (1:00 PM – 4:00 PM)</option>
                        <option value="Afternoon">Afternoon (4:00 PM – 6:00 PM)</option>
                        <option value="Evening">Evening (6:00 PM – 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label htmlFor="notes" className="block font-sans text-sm text-[#1d1c16] mb-1.5 font-medium">
                      Optional Message or Concerns
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Share any specific requests, tooth sensitivity, or previous experiences..."
                      className="w-full px-4 py-3 rounded-xl bg-white text-[#1d1c16] placeholder:text-[#717974] font-sans text-sm sm:text-base border border-[#30392f]/20 focus:border-[#315747] focus:ring-2 focus:ring-[#315747]/15 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div>
                    <div className="flex items-start gap-3 pt-1">
                      <input
                        type="checkbox"
                        id="privacyConsent"
                        name="privacyConsent"
                        checked={formData.privacyConsent}
                        onChange={handleChange}
                        onBlur={() => handleBlur('privacyConsent')}
                        required
                        className="mt-1 h-4 w-4 rounded text-[#194031] border-[#30392f]/30 focus:ring-[#194031] accent-[#194031]"
                      />
                      <label htmlFor="privacyConsent" className="font-sans text-xs sm:text-sm text-[#414844] leading-normal select-none">
                        I consent to being contacted by Holistic Dental Care team members to discuss and confirm appointment availability.
                      </label>
                    </div>
                    {errors.privacyConsent && touched.privacyConsent && (
                      <p className="mt-1 text-xs text-[#ba1a1a]">
                        {errors.privacyConsent}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-[#194031] text-white font-sans text-base font-medium rounded-xl hover:bg-[#315747] active:bg-[#002115] transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#194031] disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Transmitting Request...</span>
                        </>
                      ) : (
                        <span>Request a Consultation</span>
                      )}
                    </button>
                  </div>

                  <div className="text-center pt-1">
                    <span className="font-sans text-xs text-[#717974]">
                      Appointments are subject to clinical confirmation by phone. No payment required today.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
