import React from "react";
import { TranslationData } from "@/lib/translations";
import { Scale, Landmark, Lock, Clock } from "lucide-react";

interface CredentialsBarProps {
  t: TranslationData;
}

export default function CredentialsBar({ t }: CredentialsBarProps) {
  const items = [
    {
      icon: Scale,
      title: t.credentials.barTitle,
      desc: t.credentials.barDesc,
    },
    {
      icon: Landmark,
      title: t.credentials.jurisdictionTitle,
      desc: t.credentials.jurisdictionDesc,
    },
    {
      icon: Lock,
      title: t.credentials.ethicsTitle,
      desc: t.credentials.ethicsDesc,
    },
    {
      icon: Clock,
      title: t.credentials.availabilityTitle,
      desc: t.credentials.availabilityDesc,
    },
  ];

  return (
    <section className="bg-white border-b border-[#E8E6DF] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col space-y-3 p-6 bg-[#FCFBF9] border border-[#ECE9E0] transition-colors hover:border-[#9A7B46]/40"
              >
                <div className="w-10 h-10 border border-[#9A7B46]/30 bg-[#F4F2EB] flex items-center justify-center text-[#9A7B46]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#0E1726] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
