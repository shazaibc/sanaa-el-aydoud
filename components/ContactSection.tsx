"use client";

import React, { useState } from "react";
import { Language, TranslationData } from "@/lib/translations";
import { MapPin, Phone, MessageSquare, Mail, Clock, ShieldCheck, Send } from "lucide-react";

interface ContactSectionProps {
  t: TranslationData;
  currentLang: Language;
}

export default function ContactSection({ t, currentLang }: ContactSectionProps) {
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const isArabic = currentLang === "ar";
  const whatsappNumber = "212661489210";

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();

    let text = "";
    if (currentLang === "ar") {
      text = `السلام عليكم الأستاذة سناء العيدود،\nرسالة من موقع المكتب:\n• الاسم: ${formName}\n• الهاتف: ${formPhone}\n• الموضوع: ${formSubject}\n• التفاصيل: ${formMessage}`;
    } else if (currentLang === "en") {
      text = `Dear Me. Sanaa El Aydoud,\nInquiry via official website:\n• Name: ${formName}\n• Phone: ${formPhone}\n• Subject: ${formSubject}\n• Details: ${formMessage}`;
    } else {
      text = `Bonjour Maître Sanaa El Aydoud,\nMessage via le site officiel du cabinet :\n• Nom : ${formName}\n• Téléphone : ${formPhone}\n• Objet : ${formSubject}\n• Message : ${formMessage}`;
    }

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FCFBF9] border-b border-[#E8E6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 bg-[#F4F2EB] border border-[#DDD8CA] text-xs font-semibold uppercase tracking-wider text-[#9A7B46]">
            <span>{t.contact.badge}</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E1726] ${
              isArabic ? "font-arabic-editorial" : "font-editorial"
            }`}
          >
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-light">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Coordinates Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse p-5 bg-white border border-[#E5E3DC]">
                <div className="w-10 h-10 border border-[#9A7B46]/30 bg-[#FAF9F5] flex items-center justify-center text-[#9A7B46] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9A7B46]">
                    {t.contact.officeAddress}
                  </h4>
                  <p className="text-sm font-medium text-[#0E1726] mt-1 leading-snug">
                    {t.contact.officeAddressValue}
                  </p>
                </div>
              </div>

              {/* Phone Standard */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse p-5 bg-white border border-[#E5E3DC]">
                <div className="w-10 h-10 border border-[#9A7B46]/30 bg-[#FAF9F5] flex items-center justify-center text-[#9A7B46] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9A7B46]">
                    {t.contact.phoneLabel}
                  </h4>
                  <a
                    href="tel:+212522204580"
                    dir="ltr"
                    className="block text-sm font-semibold text-[#0E1726] mt-1 hover:text-[#9A7B46] transition-colors"
                  >
                    {t.contact.phoneValue}
                  </a>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse p-5 bg-white border border-[#E5E3DC]">
                <div className="w-10 h-10 border border-[#25D366]/40 bg-[#F0FDF4] flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageSquare className="w-5 h-5 fill-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#16A34A]">
                    {t.contact.whatsappLabel}
                  </h4>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="block text-sm font-semibold text-[#0E1726] mt-1 hover:text-[#16A34A] transition-colors"
                  >
                    {t.contact.whatsappValue}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse p-5 bg-white border border-[#E5E3DC]">
                <div className="w-10 h-10 border border-[#9A7B46]/30 bg-[#FAF9F5] flex items-center justify-center text-[#9A7B46] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9A7B46]">
                    {t.contact.emailLabel}
                  </h4>
                  <a
                    href="mailto:contact@elaydoud-avocat.ma"
                    className="block text-sm font-medium text-[#0E1726] mt-1 hover:text-[#9A7B46] transition-colors"
                  >
                    {t.contact.emailValue}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse p-5 bg-white border border-[#E5E3DC]">
                <div className="w-10 h-10 border border-[#9A7B46]/30 bg-[#FAF9F5] flex items-center justify-center text-[#9A7B46] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9A7B46]">
                    {t.contact.hoursLabel}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B5563] mt-1 leading-snug">
                    {t.contact.hoursValue}
                  </p>
                  <p className="text-[11px] text-[#9A7B46] font-medium mt-1">
                    {t.contact.appointmentOnly}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form Column */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-[#D5CEBF] p-8 sm:p-10 shadow-sm">
              <div className="space-y-2 mb-6">
                <h3
                  className={`text-2xl font-normal text-[#0E1726] ${
                    isArabic ? "font-arabic-editorial" : "font-editorial"
                  }`}
                >
                  {t.contact.formTitle}
                </h3>
                <p className="text-xs text-[#6B7280]">
                  {t.bookingModal.confidentialityNotice}
                </p>
              </div>

              <form onSubmit={handleQuickSend} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#374151] mb-1.5">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-[#FCFBF9] border border-[#D5CEBF] px-3.5 py-2.5 text-xs text-[#1F2937] focus:outline-none focus:border-[#0E1726] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#374151] mb-1.5">
                      {t.contact.phone}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="+212 6 XX XX XX XX"
                      dir="ltr"
                      className="w-full bg-[#FCFBF9] border border-[#D5CEBF] px-3.5 py-2.5 text-xs text-[#1F2937] focus:outline-none focus:border-[#0E1726] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#374151] mb-1.5">
                      {t.contact.subject}
                    </label>
                    <input
                      type="text"
                      required
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      className="w-full bg-[#FCFBF9] border border-[#D5CEBF] px-3.5 py-2.5 text-xs text-[#1F2937] focus:outline-none focus:border-[#0E1726] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#374151] mb-1.5">
                    {t.contact.message}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full bg-[#FCFBF9] border border-[#D5CEBF] px-3.5 py-2.5 text-xs text-[#1F2937] focus:outline-none focus:border-[#0E1726] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2.5 rtl:space-x-reverse bg-[#0E1726] hover:bg-[#1A263A] text-white py-3.5 px-6 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#D4B47C]" />
                  <span>{t.contact.sendViaWhatsApp}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
