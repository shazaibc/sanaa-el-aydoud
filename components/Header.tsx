"use client";

import React, { useState } from "react";
import { Language, TranslationData } from "@/lib/translations";
import { Phone, Calendar, Menu, X, Shield, Globe } from "lucide-react";

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationData;
  onOpenBooking: (service?: string, area?: string) => void;
}

export default function Header({
  currentLang,
  onLanguageChange,
  t,
  onOpenBooking,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isRTL = currentLang === "ar";

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "fr", label: "Français", flag: "FR" },
    { code: "ar", label: "العربية", flag: "عر" },
    { code: "en", label: "English", flag: "EN" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FCFBF9]/95 backdrop-blur-md border-b border-[#E8E6DF] transition-all">
      {/* Top Bar for Bar Affiliation and Direct Line */}
      <div className="bg-[#0E1726] text-[#F3F4F6] text-xs py-2 px-4 sm:px-8 border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4B47C]"></span>
            <span className="font-medium tracking-wide">
              {t.hero.badge}
            </span>
          </div>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:+212522204580"
              className="hidden sm:flex items-center space-x-1.5 rtl:space-x-reverse text-[#D1D5DB] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4B47C]" />
              <span dir="ltr">+212 5 22 20 45 80</span>
            </a>
            <span className="hidden sm:inline text-stone-500">|</span>
            <span className="text-[#9CA3AF] text-[11px]">
              {t.contact.hoursValue.split("|")[0]}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
        {/* Monogram / Brand Signature */}
        <a
          href="#"
          className="flex items-center space-x-3.5 rtl:space-x-reverse group"
        >
          <div className="w-11 h-11 border border-[#9A7B46]/40 bg-[#0E1726] flex items-center justify-center text-[#D4B47C] font-serif text-lg font-bold tracking-tighter group-hover:border-[#9A7B46] transition-colors">
            SA
          </div>
          <div>
            <span className="block text-base sm:text-lg font-semibold tracking-tight text-[#0E1726] font-editorial uppercase">
              {currentLang === "ar" ? "الأستاذة سناء العيدود" : "Me. Sanaa El Aydoud"}
            </span>
            <span className="block text-[11px] sm:text-xs text-[#6B7280] uppercase tracking-wider font-medium">
              {currentLang === "ar"
                ? "محامية بهيئة الدار البيضاء"
                : "Avocate au Barreau de Casablanca"}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse text-[13px] font-medium tracking-wide uppercase text-[#374151]">
          <button
            onClick={() => handleNavClick("#services")}
            className="hover:text-[#9A7B46] transition-colors py-1 cursor-pointer"
          >
            {t.nav.services}
          </button>
          <button
            onClick={() => handleNavClick("#practice-areas")}
            className="hover:text-[#9A7B46] transition-colors py-1 cursor-pointer"
          >
            {t.nav.practiceAreas}
          </button>
          <button
            onClick={() => handleNavClick("#about")}
            className="hover:text-[#9A7B46] transition-colors py-1 cursor-pointer"
          >
            {t.nav.about}
          </button>
          <button
            onClick={() => handleNavClick("#approach")}
            className="hover:text-[#9A7B46] transition-colors py-1 cursor-pointer"
          >
            {t.nav.approach}
          </button>
          <button
            onClick={() => handleNavClick("#contact")}
            className="hover:text-[#9A7B46] transition-colors py-1 cursor-pointer"
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Right Section: Language Toggle & Booking Button */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {/* Language Switcher */}
          <div className="flex items-center bg-[#F3F2ED] p-1 border border-[#E5E3DB]">
            <Globe className="w-3.5 h-3.5 text-stone-500 mx-1.5 hidden sm:inline" />
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => onLanguageChange(l.code)}
                className={`px-2.5 py-1 text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  currentLang === l.code
                    ? "bg-[#0E1726] text-[#F3F4F6] shadow-xs"
                    : "text-[#4B5563] hover:text-[#0E1726]"
                }`}
                title={l.label}
              >
                {l.flag}
              </button>
            ))}
          </div>

          {/* Direct CTA */}
          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center space-x-2 rtl:space-x-reverse bg-[#0E1726] hover:bg-[#1A263A] text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 transition-all border border-[#0E1726] cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D4B47C]" />
            <span>{t.nav.bookConsultation}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0E1726] border border-[#E5E3DB] bg-[#F7F6F2]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFBF9] border-t border-[#E8E6DF] px-6 py-6 space-y-4 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3 text-sm font-medium tracking-wide uppercase text-[#1F2937]">
            <button
              onClick={() => handleNavClick("#services")}
              className="text-left rtl:text-right py-2 border-b border-stone-200/60"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => handleNavClick("#practice-areas")}
              className="text-left rtl:text-right py-2 border-b border-stone-200/60"
            >
              {t.nav.practiceAreas}
            </button>
            <button
              onClick={() => handleNavClick("#about")}
              className="text-left rtl:text-right py-2 border-b border-stone-200/60"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNavClick("#approach")}
              className="text-left rtl:text-right py-2 border-b border-stone-200/60"
            >
              {t.nav.approach}
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="text-left rtl:text-right py-2 border-b border-stone-200/60"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center space-x-2 rtl:space-x-reverse bg-[#0E1726] text-white py-3 text-xs font-semibold uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4 text-[#D4B47C]" />
              <span>{t.nav.bookConsultation}</span>
            </button>

            <a
              href="tel:+212522204580"
              className="mt-2.5 w-full flex items-center justify-center space-x-2 rtl:space-x-reverse border border-[#0E1726] text-[#0E1726] py-3 text-xs font-semibold uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-[#9A7B46]" />
              <span>{t.nav.callNow}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
