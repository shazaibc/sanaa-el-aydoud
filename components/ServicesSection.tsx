"use client";

import React from "react";
import { Language, TranslationData } from "@/lib/translations";
import { FileText, FolderSearch, Landmark, Check, ArrowRight } from "lucide-react";

interface ServicesSectionProps {
  t: TranslationData;
  currentLang: Language;
  onOpenBooking: (serviceTitle?: string) => void;
}

export default function ServicesSection({
  t,
  currentLang,
  onOpenBooking,
}: ServicesSectionProps) {
  const isArabic = currentLang === "ar";

  const serviceIcons = [FileText, FolderSearch, Landmark];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FCFBF9] border-b border-[#E8E6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 bg-[#F4F2EB] border border-[#DDD8CA] text-xs font-semibold uppercase tracking-wider text-[#9A7B46]">
            <span>{t.services.badge}</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E1726] ${
              isArabic ? "font-arabic-editorial" : "font-editorial"
            }`}
          >
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 3 Core Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <div
                key={service.id}
                className="bg-white border border-[#E5E3DC] p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg hover:border-[#9A7B46]/60 transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 border border-[#9A7B46]/30 bg-[#FAF9F5] flex items-center justify-center text-[#9A7B46] mb-8 group-hover:bg-[#0E1726] group-hover:text-[#D4B47C] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono font-medium text-[#9CA3AF] tracking-widest block mb-2">
                    0{index + 1}
                  </span>

                  <h3
                    className={`text-2xl font-normal text-[#0E1726] mb-4 ${
                      isArabic ? "font-arabic-editorial" : "font-editorial"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#4B5563] leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  <div className="border-t border-[#F0EEE9] pt-6 mb-8">
                    <ul className="space-y-3">
                      {service.points.map((point, ptIdx) => (
                        <li
                          key={ptIdx}
                          className="flex items-start space-x-2.5 rtl:space-x-reverse text-xs sm:text-[13px] text-[#374151]"
                        >
                          <Check className="w-4 h-4 text-[#9A7B46] shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="w-full mt-4 inline-flex items-center justify-center space-x-2 rtl:space-x-reverse bg-[#FAF9F5] group-hover:bg-[#0E1726] text-[#0E1726] group-hover:text-white border border-[#E0DCCE] group-hover:border-[#0E1726] py-3.5 px-4 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>{service.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9A7B46] group-hover:text-[#D4B47C] transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
