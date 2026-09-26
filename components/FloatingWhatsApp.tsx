"use client";

import React, { useState } from "react";
import { Language, TranslationData } from "@/lib/translations";
import { MessageSquare } from "lucide-react";

interface FloatingWhatsAppProps {
  currentLang: Language;
  t: TranslationData;
  onOpenBooking: () => void;
}

export default function FloatingWhatsApp({
  currentLang,
  t,
  onOpenBooking,
}: FloatingWhatsAppProps) {
  const [hovered, setHovered] = useState(false);
  const isArabic = currentLang === "ar";

  return (
    <div
      className={`fixed bottom-6 z-40 flex items-center gap-3 ${
        isArabic ? "left-6 flex-row-reverse" : "right-6"
      }`}
    >
      {/* Label Tooltip */}
      {hovered && (
        <div className="hidden sm:block bg-[#0E1726] text-white text-xs px-3.5 py-2 shadow-lg border border-[#9A7B46]/40 animate-in fade-in duration-150">
          <span className="font-medium tracking-wide">
            {isArabic ? "استشارة مباشرة عبر واتساب" : "Consultation WhatsApp Direct"}
          </span>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={onOpenBooking}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Contacter via WhatsApp"
        className="w-14 h-14 bg-[#0E1726] hover:bg-[#1A263A] text-white flex items-center justify-center shadow-xl border-2 border-[#9A7B46] transition-transform hover:scale-105 cursor-pointer relative group"
      >
        <MessageSquare className="w-6 h-6 text-[#25D366]" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#25D366] rounded-full border-2 border-[#0E1726]"></span>
      </button>
    </div>
  );
}
