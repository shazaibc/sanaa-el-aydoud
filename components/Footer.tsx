import React from "react";
import { Language, TranslationData } from "@/lib/translations";
import { Scale, ShieldCheck } from "lucide-react";

interface FooterProps {
  t: TranslationData;
  currentLang: Language;
}

export default function Footer({ t, currentLang }: FooterProps) {
  const isArabic = currentLang === "ar";

  return (
    <footer className="bg-[#0A101A] text-[#9CA3AF] border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1E293B]">
          {/* Brand & Credential Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3.5 rtl:space-x-reverse">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border border-[#9A7B46]/50 bg-white p-0.5">
                <img
                  src="/images/cabinet-sanaa-logo.png"
                  alt="Cabinet Sanaa Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white tracking-wide font-editorial">
                  {currentLang === "ar" ? "مكتب سناء للمحاماة" : "Cabinet Sanaa"}
                </h3>
                <p className="text-xs text-[#D4B47C] tracking-wider uppercase">
                  {currentLang === "ar"
                    ? "الأستاذة سناء العيدود • هيئة الدار البيضاء"
                    : "Me. Sanaa El Aydoud • Barreau de Casablanca"}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#9CA3AF] leading-relaxed font-light pr-4 rtl:pr-0 rtl:pl-4">
              {t.footer.disclaimer}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              {isArabic ? "الملاحة السريعة" : "Navigation"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#D4B47C] transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-[#D4B47C] transition-colors">
                  {t.nav.practiceAreas}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4B47C] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-[#D4B47C] transition-colors">
                  {t.nav.approach}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4B47C] transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Ethics */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              {t.footer.ethicsNotice}
            </h4>
            <div className="p-4 bg-[#111A29] border border-[#1E2C40] space-y-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-[#D4B47C]">
                <Scale className="w-4 h-4 shrink-0" />
                <span className="font-semibold">{t.footer.barAssociation}</span>
              </div>
              <p className="text-[11px] text-[#9CA3AF] leading-relaxed">
                {isArabic
                  ? "ممارسة مهنة المحاماة مؤطرة بأحكام القانون رقم 28-08 والتقاليد العريقة لهيئة الدار البيضاء ومحاكم المملكة المغربية."
                  : "L'exercice de la profession d'avocat est rigoureusement régi par la loi n° 28-08 et les traditions d'honneur et d'indépendance de l'Ordre."}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] space-y-4 sm:space-y-0">
          <p>
            © {new Date().getFullYear()} Cabinet Maître Sanaa El Aydoud. {t.footer.allRightsReserved}
          </p>
          <div className="flex items-center space-x-6 rtl:space-x-reverse text-[11px]">
            <span>Casablanca, Maroc</span>
            <span>•</span>
            <span>Barreau de Casablanca</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
