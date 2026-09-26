"use client";

import React from "react";
import Image from "next/image";
import { Language, TranslationData } from "@/lib/translations";
import { MessageSquare, ArrowDown, ShieldCheck, Scale, Award } from "lucide-react";

interface HeroProps {
  t: TranslationData;
  currentLang: Language;
  onOpenBooking: () => void;
}

export default function Hero({ t, currentLang, onOpenBooking }: HeroProps) {
  const isArabic = currentLang === "ar";

  return (
    <section className="relative overflow-hidden pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#E8E6DF] bg-[#FCFBF9]">
      {/* Subtle fine watermark architectural line */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#9A7B46_0.75px,transparent_0.75px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column: Authority & Editorial Clarity */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Official Bar Credential Badge (Formal, No AI Shiny Pill) */}
            <div className="inline-flex items-center space-x-2.5 rtl:space-x-reverse px-3.5 py-1.5 border border-[#D5CEBF] bg-[#F4F2EB] text-[#0E1726] text-xs font-medium tracking-wide">
              <Scale className="w-4 h-4 text-[#9A7B46]" />
              <span className="font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
                {t.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#0E1726] leading-[1.15] ${
                  isArabic ? "font-arabic-editorial" : "font-editorial"
                }`}
              >
                {t.hero.headline}
              </h1>
              <p className="text-xl sm:text-2xl font-serif italic text-[#9A7B46]">
                {t.hero.subheadline}
              </p>
            </div>

            {/* Editorial Description */}
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl font-light">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 rtl:sm:space-x-reverse">
              {/* Primary WhatsApp Booking Action */}
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center space-x-2.5 rtl:space-x-reverse bg-[#0E1726] hover:bg-[#1A263A] text-white px-7 py-4 text-xs font-semibold uppercase tracking-widest transition-all shadow-sm border border-[#0E1726] group cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" />
                <span>{t.hero.ctaPrimary}</span>
              </button>

              {/* Secondary Practice Areas Action */}
              <a
                href="#practice-areas"
                className="inline-flex items-center justify-center space-x-2 rtl:space-x-reverse border border-[#D1D5DB] hover:border-[#0E1726] bg-white text-[#1F2937] hover:text-[#0E1726] px-6 py-4 text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#9A7B46]" />
              </a>
            </div>

            {/* Legal Notice / Guarantee Line */}
            <div className="pt-4 border-t border-[#EAE8E1] flex items-center space-x-3 rtl:space-x-reverse text-xs text-[#6B7280]">
              <ShieldCheck className="w-4 h-4 text-[#9A7B46] shrink-0" />
              <span>{t.hero.credentialsTag}</span>
            </div>
          </div>

          {/* Right Image Column: High-Res Editorial Lawyer Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Classical Double Frame Accents */}
              <div className="absolute -top-3 -left-3 -right-3 -bottom-3 border border-[#E0DCCE] pointer-events-none hidden sm:block" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#EBE7DC]/60 -z-10 hidden sm:block" />

              <div className="relative bg-[#0E1726] p-1.5 shadow-xl">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200">
                  <Image
                    src="/images/sanaa-el-aydoud.jpg"
                    alt="Maître Sanaa El Aydoud - Avocate au Barreau de Casablanca"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-top hover:scale-[1.01] transition-transform duration-700"
                  />
                </div>

                {/* Subtitle Card on Portrait */}
                <div className="bg-[#0E1726] text-white p-4 sm:p-5 border-t border-[#9A7B46]/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold tracking-wide font-editorial">
                        {currentLang === "ar" ? "هيئة المحامين بالدار البيضاء" : "Ordre des Avocats de Casablanca"}
                      </h4>
                      <p className="text-[11px] text-[#D4B47C] tracking-wider uppercase mt-0.5">
                        {currentLang === "ar" ? "الترافع أمام كافة محاكم المملكة" : "Courts of Appeal & Cassation"}
                      </p>
                    </div>
                    <Award className="w-6 h-6 text-[#D4B47C]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
