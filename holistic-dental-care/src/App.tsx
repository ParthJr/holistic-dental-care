/**
 * Holistic Dental Care
 * Kudasan, Gandhinagar, Gujarat
 * 
 * Production-ready website based on the approved Google Stitch design.
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ApproachSection } from './components/ApproachSection';
import { TreatmentGrid } from './components/TreatmentGrid';
import { SmileWellbeingSection } from './components/SmileWellbeingSection';
import { CosmeticCareSection } from './components/CosmeticCareSection';
import { PatientJourney } from './components/PatientJourney';
import { ReviewsSection } from './components/ReviewsSection';
import { AppointmentForm } from './components/AppointmentForm';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { PrivacyNoticeModal } from './components/PrivacyNoticeModal';
import { QAChecklistModal } from './components/QAChecklistModal';

export default function App() {
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string>('Dental Check-up');
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<'privacy' | 'terms' | 'safety'>('privacy');
  const [qaModalOpen, setQaModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Smooth scroll helper with header offset
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll spy to update activeSection as user scrolls
  React.useEffect(() => {
    const navSectionIds = [
      'home',
      'approach-section',
      'treatments-section',
      'smile-care-section',
      'patient-journey-section',
      'contact-section'
    ];

    const handleScroll = () => {
      // Bottom of the page check
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150) {
        setActiveSection('contact-section');
        return;
      }

      const scrollPosition = window.scrollY + 120; // offset for fixed header
      for (let i = navSectionIds.length - 1; i >= 0; i--) {
        const id = navSectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookClick = () => {
    scrollToSection('appointment-section');
  };

  const handleSelectServiceFromGrid = (serviceName: string) => {
    setSelectedTreatmentForBooking(serviceName);
    scrollToSection('appointment-section');
  };

  const handleOpenLegalModal = (tab: 'privacy' | 'terms' | 'safety') => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fef9ef] text-[#1d1c16] flex flex-col font-sans selection:bg-[#c2ecd7] selection:text-[#002115]">
      {/* 1. Header & Navigation */}
      <Header
        onBookClick={handleBookClick}
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Content Sections in exact required order */}
      <main className="flex-1 w-full pt-20">
        {/* 2. Hero Section */}
        <HeroSection
          onRequestConsultation={handleBookClick}
          onExploreTreatments={() => scrollToSection('treatments-section')}
        />

        {/* 3. Our Approach */}
        <ApproachSection />

        {/* 4. Dental Treatments Grid */}
        <TreatmentGrid
          onSelectService={handleSelectServiceFromGrid}
        />

        {/* 5. Smile and Well-being Feature */}
        <SmileWellbeingSection />

        {/* 6. Cosmetic and Restorative Care */}
        <CosmeticCareSection
          onDiscussGoals={handleBookClick}
        />

        {/* 7. Patient Journey */}
        <PatientJourney />

        {/* 8. Reviews and Trust */}
        <ReviewsSection />

        {/* 9. Appointment Form */}
        <AppointmentForm
          selectedService={selectedTreatmentForBooking}
        />

        {/* 10. Contact and Location */}
        <LocationSection />
      </main>

      {/* 11. Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenLegal={handleOpenLegalModal}
        onOpenQA={() => setQaModalOpen(true)}
      />

      {/* Privacy, Terms, and Safety Modal */}
      <PrivacyNoticeModal
        isOpen={legalModalOpen}
        tab={legalModalTab}
        onClose={() => setLegalModalOpen(false)}
      />

      {/* QA & Vercel Checklist Modal */}
      <QAChecklistModal
        isOpen={qaModalOpen}
        onClose={() => setQaModalOpen(false)}
      />
    </div>
  );
}
