import React from "react";
import Image from "next/image";
import { Language, TranslationData } from "@/lib/translations";
import { ShieldCheck, Target, Eye, BookOpen } from "lucide-react";

interface AboutSectionProps {
  t: TranslationData;
  currentLang: Language;
}

export default function AboutSection({ t, currentLang }: AboutSectionProps) {
  const isArabic = currentLang === "ar";
  const pillarIcons = [Target, Eye, BookOpen];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FCFBF9] border-b border-[#E8E6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Office Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border border-[#E0DCCE] pointer-events-none hidden sm:block" />
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-200 border border-[#D5CEBF] shadow-md">
                <Image
                  src="/images/casablanca-office.jpg"
                  alt="Cabinet d'Avocat Sanaa El Aydoud Casablanca"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Caption Tag */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#6B7280]">
                <span>
                  {currentLang === "ar"
                    ? "مقر المكتب وقاعة الاجتماعات بالدار البيضاء"
                    : "Salle de réunion et de consultation — Casablanca"}
                </span>
                <span className="font-mono text-[11px] text-[#9A7B46]">
                  {currentLang === "ar" ? "سرية واستقلالية" : "Barreau de Casablanca"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 bg-[#F4F2EB] border border-[#DDD8CA] text-xs font-semibold uppercase tracking-wider text-[#9A7B46]">
              <span>{t.about.badge}</span>
            </div>

            <h2
              className={`text-3xl sm:text-4xl font-normal text-[#0E1726] leading-tight ${
                isArabic ? "font-arabic-editorial" : "font-editorial"
              }`}
            >
              {t.about.title}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#4B5563] leading-relaxed font-light">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
              <p>{t.about.paragraph3}</p>
            </div>

            {/* Editorial Quote Card */}
            <div className="p-6 bg-white border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#9A7B46] shadow-xs">
              <p className="italic text-sm sm:text-base font-serif text-[#1F2937] leading-relaxed">
                “{t.about.quote}”
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#9A7B46]">
                {t.about.quoteAuthor}
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {t.about.pillars.map((pillar, pIdx) => {
                const Icon = pillarIcons[pIdx % pillarIcons.length];
                return (
                  <div
                    key={pIdx}
                    className="p-4 bg-white border border-[#EAE8E1] space-y-2"
                  >
                    <Icon className="w-5 h-5 text-[#9A7B46]" />
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0E1726]">
                      {pillar.title}
                    </h4>
                    <p className="text-[12px] text-[#6B7280] leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
