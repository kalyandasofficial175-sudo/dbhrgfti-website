"use client";
import { FileText, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AdmissionCTA() {
  const { tr } = useLanguage();

  return (
    <section id="admissions" className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/30 rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-700/20 rounded-full translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 relative grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="bg-black/20 text-white text-xs font-bold px-3 py-1 rounded-full">{tr.admBadge}</span>
          <h2 className="text-4xl font-black text-black mt-4 mb-4 font-heading leading-tight whitespace-pre-line">
            {tr.admTitle}
          </h2>
          <p className="text-black/80 leading-relaxed mb-6">{tr.admSub}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="bg-[#1a1a2e] hover:bg-[#0f3460] text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
              <FileText size={16} /> {tr.admApply} <ArrowRight size={16} />
            </a>
            <a href="#courses" className="bg-white hover:bg-gray-100 text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
              {tr.admCourses}
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <h3 className="font-bold text-gray-800 text-lg mb-4">{tr.howToApply}</h3>
          <div className="space-y-3">
            {tr.steps.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-yellow-500 text-black font-black text-sm flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                <span className="text-gray-700 text-sm">{step}</span>
                <CheckCircle size={14} className="text-green-500 ml-auto flex-shrink-0" />
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              {tr.lastDate}: <strong className="text-red-600">30 June / ৩০ জুন 2024</strong>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {tr.examDate}: <strong className="text-blue-600">15 July / ১৫ জুলাই 2024</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
