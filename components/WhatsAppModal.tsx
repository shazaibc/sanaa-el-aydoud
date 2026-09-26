"use client";

import React, { useState, useEffect } from "react";
import { Language, TranslationData } from "@/lib/translations";
import { X, MessageSquare, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  t: TranslationData;
  initialService?: string;
  initialArea?: string;
}

export default function WhatsAppModal({
  isOpen,
  onClose,
  currentLang,
  t,
  initialService = "",
  initialArea = "",
}: WhatsAppModalProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedArea, setSelectedArea] = useState(initialArea);
  const [consultationMode, setConsultationMode] = useState<string>("cabinet");
  const [summary, setSummary] = useState("");

  const isArabic = currentLang === "ar";
  const whatsappNumber = "212661489210"; // Official direct firm line

  useEffect(() => {
    if (initialService) setSelectedService(initialService);
    if (initialArea) setSelectedArea(initialArea);
  }, [initialService, initialArea]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mode labels in target language
    let modeText = t.bookingModal.modeCabinet;
    if (consultationMode === "phone") modeText = t.bookingModal.modePhone;
    if (consultationMode === "written") modeText = t.bookingModal.modeWritten;
    if (consultationMode === "urgent") modeText = t.bookingModal.modeUrgent;

    // Structured message generation based on active language
    let message = "";
    if (currentLang === "ar") {
      message = `السلام عليكم ورحمة الله، الأستاذة سناء العيدود.\n\nأرغب في حجز استشارة قانونية لدى مكتبكم بالدار البيضاء.\n\n• الاسم الكامل: ${fullName || "غير محدد"}\n• الهاتف: ${phone || "غير محدد"}\n• الخدمة المطلوبة: ${selectedService || selectedArea || "استشارة عامة"}\n• صيغة الاستشارة: ${modeText}\n${summary ? `• ملخص الموضوع: ${summary}\n` : ""}\nوشكراً جزيلاً.`;
    } else if (currentLang === "en") {
      message = `Dear Maître Sanaa El Aydoud,\n\nI would like to schedule a legal consultation with your law firm in Casablanca.\n\n• Full Name: ${fullName || "Not specified"}\n• Phone: ${phone || "Not specified"}\n• Practice Area / Service: ${selectedService || selectedArea || "General Consultation"}\n• Consultation Format: ${modeText}\n${summary ? `• Case Summary: ${summary}\n` : ""}\nThank you.`;
    } else {
      // Default French
      message = `Bonjour Maître Sanaa El Aydoud,\n\nJe souhaite solliciter une consultation juridique auprès de votre cabinet à Casablanca.\n\n• Nom & Prénom : ${fullName || "Non précisé"}\n• Téléphone : ${phone || "Non précisé"}\n• Domaine / Prestation : ${selectedService || selectedArea || "Consultation générale"}\n• Modalité souhaitée : ${modeText}\n${summary ? `• Résumé succinct : ${summary}\n` : ""}\nEn vous remerciant par avance.`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0E1726]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white border border-[#D5CEBF] shadow-2xl overflow-hidden my-8"
        dir={isArabic ? "rtl" : "ltr"}
      >
        {/* Top Header */}
        <div className="bg-[#0E1726] text-white p-6 sm:p-7 flex items-start justify-between border-b border-[#2D3748]">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4B47C]">
              {isArabic ? "مكتب الأستاذة سناء العيدود" : "Cabinet Me. Sanaa El Aydoud"}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-normal text-white">
              {t.bookingModal.title}
            </h3>
            <p className="text-xs text-[#9CA3AF] font-light">
              {t.bookingModal.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4 sm:space-y-5 bg-[#FCFBF9]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#374151] mb-1.5">
                {t.bookingModal.fullName} <span className="text-amber-700">*</span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t.bookingModal.fullNamePlaceholder}
                className="w-full bg-white border border-[#D5CEBF] px-3.5 py-2.5 text-xs text-[#1F2937] focus:outline-none focus:border-[#0E1726] transition-colors"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#374151] mb-1.5">
                {t.bookingModal.phone} <span className="text-amber-700">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.bookingModal.phonePlaceholder}
                dir="ltr"
                className="w-full bg-white border border-[#D5CEBF] px-3.5 py-2.5 text-xs text-[#1F2937] focus:outline-none focus:border-[#0E1726] transition-colors"
              />
            </div>
          </div>

          {/* Practice Area Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#374151] mb-1.5">
              {t.bookingModal.practiceArea}
            </label>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full bg-white border border-[#D5CEBF] px-3.5 py-2.5 text-xs text-[#1F2937] focus:outline-none focus:border-[#0E1726] transition-colors"
            >
              <option value="">{isArabic ? "-- اختر مجال الاختصاص --" : "-- Sélectionner un domaine --"}</option>
              {t.practiceAreas.items.map((area) => (
                <option key={area.id} value={area.title}>
                  {area.title}
                </option>
              ))}
            </select>
          </div>

          {/* Consultation Format */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#374151] mb-2">
              {t.bookingModal.consultationMode}
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: "cabinet", label: t.bookingModal.modeCabinet },
                { id: "phone", label: t.bookingModal.modePhone },
                { id: "written", label: t.bookingModal.modeWritten },
                { id: "urgent", label: t.bookingModal.modeUrgent },
              ].map((mode) => (
                <button
                  type="button"
                  key={mode.id}
                  onClick={() => setConsultationMode(mode.id)}
                  className={`p-2.5 text-left rtl:text-right border transition-all cursor-pointer flex items-center justify-between ${
                    consultationMode === mode.id
                      ? "bg-[#0E1726] text-white border-[#0E1726]"
                      : "bg-white text-[#4B5563] border-[#D5CEBF] hover:border-[#9A7B46]"
                  }`}
                >
                  <span className="truncate">{mode.label}</span>
                  {consultationMode === mode.id && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4B47C] shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Brief Summary */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#374151] mb-1.5">
              {t.bookingModal.briefSummary}
            </label>
            <textarea
              rows={3}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder={t.bookingModal.briefSummaryPlaceholder}
              className="w-full bg-white border border-[#D5CEBF] px-3.5 py-2 text-xs text-[#1F2937] focus:outline-none focus:border-[#0E1726] transition-colors resize-none"
            />
          </div>

          {/* Professional Secrecy Notice */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-[11px] text-[#6B7280]">
            <ShieldCheck className="w-4 h-4 text-[#9A7B46] shrink-0" />
            <span>{t.bookingModal.confidentialityNotice}</span>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 inline-flex items-center justify-center space-x-2.5 rtl:space-x-reverse bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-4 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>{t.bookingModal.submitWhatsApp}</span>
            </button>

            <a
              href="tel:+212522204580"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rtl:space-x-reverse bg-white hover:bg-[#F3F2ED] text-[#0E1726] border border-[#0E1726] py-3.5 px-4 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#9A7B46]" />
              <span>{t.bookingModal.directCall}</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
