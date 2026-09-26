"use client";

import React, { useState, useEffect } from "react";
import { Language, translations } from "@/lib/translations";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CredentialsBar from "@/components/CredentialsBar";
import ServicesSection from "@/components/ServicesSection";
import PracticeAreas from "@/components/PracticeAreas";
import AboutSection from "@/components/AboutSection";
import ConsultationFlow from "@/components/ConsultationFlow";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppModal from "@/components/WhatsAppModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>("fr");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInitialService, setModalInitialService] = useState<string>("");
  const [modalInitialArea, setModalInitialArea] = useState<string>("");

  const t = translations[currentLang];
  const isRTL = currentLang === "ar";

  useEffect(() => {
    // Set html dir attribute dynamically for proper RTL rendering
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
  }, [currentLang, isRTL]);

  const handleOpenBooking = (service?: string, area?: string) => {
    setModalInitialService(service || "");
    setModalInitialArea(area || "");
    setModalOpen(true);
  };

  const handleCloseBooking = () => {
    setModalOpen(false);
  };

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={`min-h-screen flex flex-col bg-[#FCFBF9] text-[#111827] transition-all duration-200 ${
        isRTL ? "font-arabic" : ""
      }`}
    >
      {/* Sticky Header with Language Switcher */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        t={t}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          t={t}
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Official Casablanca Bar Credentials Bar */}
        <CredentialsBar t={t} />

        {/* 3 Core Services */}
        <ServicesSection
          t={t}
          currentLang={currentLang}
          onOpenBooking={(service) => handleOpenBooking(service)}
        />

        {/* 10 Practice Areas */}
        <PracticeAreas
          t={t}
          currentLang={currentLang}
          onOpenBooking={(service, area) => handleOpenBooking(service, area)}
        />

        {/* About Maitre Sanaa El Aydoud & Casablanca Office */}
        <AboutSection t={t} currentLang={currentLang} />

        {/* Consultation Process & Deontological Fee Notice */}
        <ConsultationFlow
          t={t}
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Contact & Casablanca Address */}
        <ContactSection t={t} currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer t={t} currentLang={currentLang} />

      {/* Interactive WhatsApp Booking Modal */}
      <WhatsAppModal
        isOpen={modalOpen}
        onClose={handleCloseBooking}
        currentLang={currentLang}
        t={t}
        initialService={modalInitialService}
        initialArea={modalInitialArea}
      />

      {/* Floating Direct WhatsApp Trigger */}
      <FloatingWhatsApp
        currentLang={currentLang}
        t={t}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
