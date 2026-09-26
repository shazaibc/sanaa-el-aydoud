import React from "react";
import Image from "next/image";
import { Language, TranslationData } from "@/lib/translations";
import { FileText, FolderSearch, Landmark, Check, ArrowRight, Scale, ShieldCheck } from "lucide-react";

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 mb-16">
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

        {/* Feature Institutional Banner: Cour d'Appel de Casablanca */}
        <div className="relative overflow-hidden bg-white border border-[#E0DCCE] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            <div className="lg:col-span-7 relative aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <Image
                src="/images/casablanca-court.jpg"
                alt="Cour d'Appel de Casablanca - Palais de Justice"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto bg-[#0E1726]/90 backdrop-blur-xs text-white text-[11px] px-3.5 py-1.5 border border-[#9A7B46]/40 flex items-center space-x-2 rtl:space-x-reverse">
                <Landmark className="w-3.5 h-3.5 text-[#D4B47C]" />
                <span>
                  {isArabic
                    ? "محكمة الاستئناف وقصر العدالة بالدار البيضاء"
                    : "Cour d'Appel de Casablanca • Palais de Justice"}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 space-y-5">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-2.5 py-1 bg-[#F4F2EB] border border-[#DDD8CA] text-xs font-semibold uppercase tracking-wider text-[#9A7B46]">
                <Scale className="w-3.5 h-3.5 text-[#9A7B46]" />
                <span>
                  {isArabic ? "الاختصاص القضائي" : "Juridictions du Royaume"}
                </span>
              </div>

              <h3
                className={`text-2xl sm:text-3xl font-normal text-[#0E1726] leading-snug ${
                  isArabic ? "font-arabic-editorial" : "font-editorial"
                }`}
              >
                {isArabic
                  ? "حضور قوي وترافع صارم أمام سائر محاكم المملكة"
                  : "Une défense rigoureuse et une plaidoirie stratégique"}
              </h3>

              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-light">
                {isArabic
                  ? "من المحاكم الابتدائية والتجارية والإدارية إلى محكمة الاستئناف بالدار البيضاء ومحكمة النقض بالرباط، يضمن مكتب سناء تمثيلاً حازماً لحماية حقوقكم ومصالحكم المشروعة."
                  : "Du Tribunal de Première Instance et de Commerce à la Cour d'Appel de Casablanca et la Cour de Cassation, le Cabinet Sanaa assure une présence ferme et continue pour faire triompher vos prétentions légitimes."}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking(isArabic ? "التمثيل القضائي" : "Représentation Judiciaire")}
                  className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-[#0E1726] hover:bg-[#1A263A] text-white px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-[#D4B47C]" />
                  <span>
                    {isArabic ? "حجز استشارة قضائية" : "Confier votre dossier"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
