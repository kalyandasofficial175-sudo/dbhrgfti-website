"use client";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const milestones = [
  { year: "1999", label: "Founded as JCFTI" },
  { year: "2011", label: "Became RGFTI" },
  { year: "2016", label: "Renamed DBHRGFTI" },
];

export default function AboutSection() {
  const { tr } = useLanguage();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left visual panel */}
        <div className="relative">
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] rounded-2xl h-80 md:h-96 flex flex-col items-center justify-center relative overflow-hidden px-8">
            <div className="text-center text-white">
              <div className="text-6xl font-black text-yellow-400 font-heading mb-1">1999</div>
              <div className="text-sm font-semibold text-gray-300 tracking-wide">{tr.yearEstd}</div>
              <div className="mt-4 w-16 h-0.5 bg-yellow-400 mx-auto"></div>
            </div>

            {/* Mini timeline */}
            <div className="mt-6 space-y-2 w-full max-w-xs">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-center gap-3">
                  <span className="text-yellow-400 font-black text-xs w-10 flex-shrink-0">{m.year}</span>
                  <div className="flex-1 h-px bg-white/20"></div>
                  <span className="text-gray-300 text-xs">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full border-4 border-yellow-500/20 pointer-events-none"></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border-4 border-yellow-500/20 pointer-events-none"></div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black rounded-xl p-4 shadow-xl">
            <div className="text-2xl font-black">5000+</div>
            <div className="text-xs font-bold">{tr.alumniWorld}</div>
          </div>
        </div>

        {/* Right content */}
        <div>
          <span className="text-yellow-600 font-bold text-sm tracking-widest uppercase">{tr.aboutTag}</span>
          <h2 className="section-title mt-2 whitespace-pre-line">{tr.aboutTitle}</h2>
          <div className="w-12 h-1 bg-yellow-500 mb-6"></div>
          <p className="text-gray-600 leading-relaxed mb-4">{tr.aboutP1}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{tr.aboutP2}</p>

          <ul className="space-y-2 mb-8">
            {tr.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/history"
              className="inline-flex items-center gap-2 bg-[#0f3460] hover:bg-[#1a1a2e] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {tr.learnMore} <ArrowRight size={16} />
            </Link>
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 border border-[#0f3460] text-[#0f3460] hover:bg-[#0f3460] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
