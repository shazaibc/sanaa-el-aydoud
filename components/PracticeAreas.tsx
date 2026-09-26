"use client";

import React, { useState } from "react";
import { Language, TranslationData } from "@/lib/translations";
import {
  FileEdit,
  Users,
  Briefcase,
  Building2,
  ShieldAlert,
  Landmark,
  Receipt,
  Coins,
  Scale,
  Handshake,
  ChevronDown,
  ChevronUp,
  MessageSquare,
} from "lucide-react";

interface PracticeAreasProps {
  t: TranslationData;
  currentLang: Language;
  onOpenBooking: (service?: string, area?: string) => void;
}

export default function PracticeAreas({
  t,
  currentLang,
  onOpenBooking,
}: PracticeAreasProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  const isArabic = currentLang === "ar";

  const areaIcons: Record<string, React.ElementType> = {
    "written-consultations": FileEdit,
    "family-law": Users,
    "labor-law": Briefcase,
    "civil-commercial": Building2,
    "criminal-law": ShieldAlert,
    "administrative-tax": Landmark,
    "tax-litigation": Receipt,
    "financial-banking": Coins,
    "banking-finance": Coins,
    "corporate-disputes": Scale,
    "arbitration-mediation": Handshake,
  };

  const filteredItems =
    activeFilter === "all"
      ? t.practiceAreas.items
      : t.practiceAreas.items.filter((item) => item.category === activeFilter);

  const toggleExpand = (id: string) => {
    setExpandedArea(expandedArea === id ? null : id);
  };

  return (
    <section id="practice-areas" className="py-20 sm:py-28 bg-white border-b border-[#E8E6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 bg-[#F4F2EB] border border-[#DDD8CA] text-xs font-semibold uppercase tracking-wider text-[#9A7B46]">
            <span>{t.practiceAreas.badge}</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E1726] ${
              isArabic ? "font-arabic-editorial" : "font-editorial"
            }`}
          >
            {t.practiceAreas.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-light">
            {t.practiceAreas.subtitle}
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-12 border-b border-[#E8E6DF] pb-5">
          {[
            { id: "all", label: t.practiceAreas.allTab },
            { id: "corporate", label: t.practiceAreas.corporateTab },
            { id: "personal", label: t.practiceAreas.personalTab },
            { id: "litigation", label: t.practiceAreas.litigationTab },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 sm:px-5 py-2.5 text-xs sm:text-[13px] font-medium tracking-wide transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-[#0E1726] text-white border border-[#0E1726]"
                  : "bg-[#F9F8F5] text-[#4B5563] hover:text-[#0E1726] border border-[#E5E3DC] hover:border-[#9A7B46]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((area) => {
            const Icon = areaIcons[area.id] || Scale;
            const isExpanded = expandedArea === area.id;

            return (
              <div
                key={area.id}
                className="bg-[#FCFBF9] border border-[#E5E3DC] p-6 sm:p-8 flex flex-col justify-between hover:border-[#9A7B46]/60 transition-all duration-200"
              >
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 border border-[#9A7B46]/30 bg-white flex items-center justify-center text-[#9A7B46]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#F2EFE9] text-[#6B7280]">
                      {area.category}
                    </span>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-normal text-[#0E1726] mb-3 ${
                      isArabic ? "font-arabic-editorial" : "font-editorial"
                    }`}
                  >
                    {area.title}
                  </h3>

                  <p className="text-sm text-[#4B5563] leading-relaxed mb-5 font-light">
                    {area.summary}
                  </p>

                  {/* Expandable Key Diligences */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#EAE8E1] space-y-2 animate-in fade-in duration-200">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#9A7B46] mb-3">
                        {isArabic ? "مجالات التدخل التفصيلية:" : "Diligences & Interventions :"}
                      </p>
                      <ul className="space-y-2">
                        {area.details.map((detail, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start space-x-2 rtl:space-x-reverse text-xs text-[#374151]"
                          >
                            <span className="text-[#9A7B46] font-bold">•</span>
                            <span className="leading-snug">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-6 mt-6 border-t border-[#EAE8E1] flex items-center justify-between gap-4">
                  <button
                    onClick={() => toggleExpand(area.id)}
                    className="inline-flex items-center space-x-1.5 rtl:space-x-reverse text-xs font-semibold text-[#4B5563] hover:text-[#0E1726] transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? (isArabic ? "إخفاء التفاصيل" : "Masquer les détails") : (isArabic ? "عرض التفاصيل" : "En savoir plus")}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5 text-[#9A7B46]" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-[#9A7B46]" />
                    )}
                  </button>

                  <button
                    onClick={() => onOpenBooking(undefined, area.title)}
                    className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-[#0E1726] hover:bg-[#1A263A] text-white px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>{isArabic ? "حجز استشارة" : "Consulter"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
