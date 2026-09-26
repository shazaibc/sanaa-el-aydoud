import React from "react";
import Image from "next/image";
import { Language, TranslationData } from "@/lib/translations";
import { ShieldCheck, MessageSquare, ArrowRight } from "lucide-react";

interface ConsultationFlowProps {
  t: TranslationData;
  currentLang: Language;
  onOpenBooking: () => void;
}

export default function ConsultationFlow({
  t,
  currentLang,
  onOpenBooking,
}: ConsultationFlowProps) {
  const isArabic = currentLang === "ar";

  return (
    <section id="approach" className="py-20 sm:py-28 bg-white border-b border-[#E8E6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 bg-[#F4F2EB] border border-[#DDD8CA] text-xs font-semibold uppercase tracking-wider text-[#9A7B46]">
            <span>{t.consultation.badge}</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E1726] ${
              isArabic ? "font-arabic-editorial" : "font-editorial"
            }`}
          >
            {t.consultation.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-light">
            {t.consultation.subtitle}
          </p>
        </div>

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {t.consultation.steps.map((stepItem, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 bg-[#FCFBF9] border border-[#E5E3DC] flex flex-col justify-between"
            >
              <div>
                <span className="block font-mono text-2xl font-light text-[#9A7B46] mb-4">
                  {stepItem.step}
                </span>
                <h3 className="text-lg font-semibold text-[#0E1726] mb-3">
                  {stepItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-light">
                  {stepItem.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EEE9] flex items-center text-xs text-[#9CA3AF]">
                <span>{isArabic ? "المرحلة " + (idx + 1) : "Étape " + (idx + 1)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Feature Banner: Consultation in Action & Fee Notice */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#0E1726] text-white p-6 sm:p-10 border border-[#232F42]">
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden border border-[#9A7B46]/40 shadow-md">
              <Image
                src="/images/consultation-dossier.jpg"
                alt="Consultation juridique et examen de dossier au Cabinet Sanaa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#0E1726]/90 backdrop-blur-xs text-white text-[11px] px-3 py-1.5 border border-[#9A7B46]/40">
                <span>
                  {isArabic
                    ? "جلسة تشخيص قانوني ودراسة الملفات بمكتب الدار البيضاء"
                    : "Entretien d'analyse & stratégie sur-mesure — Cabinet Sanaa"}
                </span>
              </div>
            </div>

            <div className="relative aspect-[16/7] overflow-hidden border border-[#9A7B46]/30 hidden sm:block">
              <Image
                src="/images/legal-library.jpg"
                alt="Jurisprudence et droit civil marocain"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-2 right-2 bg-[#0E1726]/80 text-[#D4B47C] text-[10px] px-2.5 py-0.5 border border-[#9A7B46]/30 uppercase tracking-wider">
                {isArabic ? "القانون المدني والتجاري" : "Droit Positif Marocain"}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-2.5 py-1 bg-[#1A263A] border border-[#9A7B46]/40 text-[#D4B47C] text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#D4B47C]" />
              <span>{isArabic ? "ميثاق الشرف والأتعاب" : "Cadre Déontologique"}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-normal text-white">
              {t.consultation.feeNoticeTitle}
            </h3>

            <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed font-light">
              {t.consultation.feeNoticeDesc}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center space-x-2.5 rtl:space-x-reverse bg-[#9A7B46] hover:bg-[#836737] text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>{t.hero.ctaPrimary}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
