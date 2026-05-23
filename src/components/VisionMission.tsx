"use client";
import Link from "next/link";
import { Eye, Target, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const missionsEn = [
  "Impart training in all aspects of Film & Television Programme Production and other allied subjects.",
  "Confer Diploma & Certificate to successful students who complete the prescribed courses and qualify the examinations.",
  "Provide facilities to undertake research in various fields of Film & Television Programme Production.",
  "Co-ordinate the activities of technicians of Film & Television Industry of North-Eastern Region.",
  "Develop suitable patterns of teaching in all branches of Film & Television, at both undergraduate & post graduate levels.",
  "Work constantly to raise the technical standards of regional films and television programmes.",
  "Produce trained manpower for the growing need of the film industry and television organizations in the North Eastern Region.",
  "Create a new awareness about the potentialities of film as a medium of education and artistic expression.",
  "Organize Refresher Courses, Summer Schools and invite experts from within the country and abroad.",
  "Assist and associate with other academic bodies and governments/NGOs for fulfillment of DBHRGFTI's objectives.",
];

const missionsAs = [
  "চলচ্চিত্ৰ আৰু দূৰদৰ্শন কাৰ্যক্ৰম প্ৰযোজনাৰ সকলো দিশত প্ৰশিক্ষণ প্ৰদান কৰা।",
  "নিৰ্ধাৰিত পাঠ্যক্ৰম সম্পূৰ্ণ কৰি পৰীক্ষাত উত্তীৰ্ণ সফল শিক্ষাৰ্থীসকলক ডিপ্লমা আৰু প্ৰমাণপত্ৰ প্ৰদান কৰা।",
  "চলচ্চিত্ৰ আৰু দূৰদৰ্শনৰ বিভিন্ন ক্ষেত্ৰত গৱেষণাৰ সুবিধা প্ৰদান কৰা।",
  "উত্তৰ-পূব অঞ্চলৰ চলচ্চিত্ৰ আৰু দূৰদৰ্শন উদ্যোগৰ কাৰিকৰী বিশেষজ্ঞসকলৰ কাৰ্যকলাপ সমন্বয় কৰা।",
  "স্নাতক আৰু স্নাতকোত্তৰ স্তৰত চলচ্চিত্ৰ আৰু দূৰদৰ্শনৰ সকলো শাখাত উপযুক্ত শিক্ষণ পদ্ধতি বিকশিত কৰা।",
  "আঞ্চলিক চলচ্চিত্ৰ আৰু দূৰদৰ্শন কাৰ্যক্ৰমৰ কাৰিকৰী মান উন্নত কৰিবলৈ নিৰন্তৰ কাম কৰা।",
  "উত্তৰ-পূব অঞ্চলৰ চলচ্চিত্ৰ উদ্যোগ আৰু দূৰদৰ্শন সংগঠনৰ বাবে প্ৰশিক্ষিত জনশক্তি উৎপাদন কৰা।",
  "চলচ্চিত্ৰক শিক্ষা আৰু শৈল্পিক প্ৰকাশৰ মাধ্যম হিচাপে ব্যৱহাৰৰ সম্ভাৱনা সম্পৰ্কে সচেতনতা সৃষ্টি কৰা।",
  "ৰিফ্ৰেচাৰ কোৰ্চ, গ্ৰীষ্মকালীন বিদ্যালয় আয়োজন কৰা আৰু দেশ-বিদেশৰ বিশেষজ্ঞসকলক আমন্ত্ৰণ জনোৱা।",
  "DBHRGFTI-ৰ উদ্দেশ্য পূৰণৰ বাবে অন্যান্য শৈক্ষিক সংস্থা আৰু চৰকাৰ/এনজিঅ'ৰ সৈতে সহযোগিতা কৰা।",
];

export default function VisionMission() {
  const { lang } = useLanguage();
  const missions = lang === "en" ? missionsEn : missionsAs;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-yellow-600 font-bold text-sm tracking-widest uppercase">
            {lang === "en" ? "Our Purpose" : "আমাৰ উদ্দেশ্য"}
          </span>
          <h2 className="text-3xl font-black text-gray-800 mt-2 font-heading">
            {lang === "en" ? "Vision & Mission" : "দৃষ্টিভংগী আৰু মিছন"}
          </h2>
          <div className="w-12 h-1 bg-yellow-500 mx-auto mt-3"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Vision card */}
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] rounded-2xl p-8 text-white shadow-xl h-full flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-yellow-500 rounded-xl flex items-center justify-center shadow flex-shrink-0">
                <Eye size={22} className="text-black" />
              </div>
              <h3 className="text-xl font-black">
                {lang === "en" ? "Our Vision" : "আমাৰ দৃষ্টিভংগী"}
              </h3>
            </div>
            <p className="text-gray-200 leading-relaxed text-base flex-1">
              {lang === "en"
                ? "To be the premier institution for Film & Television education in North-East India — nurturing creative talent, raising technical excellence, and establishing film not only as a means of entertainment but also as a medium of education and artistic expression."
                : "উত্তৰ-পূব ভাৰতত চলচ্চিত্ৰ আৰু দূৰদৰ্শন শিক্ষাৰ শীৰ্ষস্থানীয় প্ৰতিষ্ঠান হিচাপে পৰিগণিত হোৱা — সৃজনশীল প্ৰতিভা লালন-পালন কৰা, কাৰিকৰী শ্ৰেষ্ঠতা বৃদ্ধি কৰা আৰু চলচ্চিত্ৰক কেৱল বিনোদনৰ মাধ্যম নহয়, শিক্ষা আৰু শৈল্পিক প্ৰকাশৰ মাধ্যম হিচাপে প্ৰতিষ্ঠা কৰা।"}
            </p>
            <div className="mt-6 pt-5 border-t border-white/10">
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors"
              >
                {lang === "en" ? "Read full objectives" : "সম্পূৰ্ণ উদ্দেশ্য পঢ়ক"}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Mission list */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-[#0f3460] rounded-xl flex items-center justify-center shadow flex-shrink-0">
                <Target size={22} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-black text-gray-800">
                {lang === "en" ? "Our Mission" : "আমাৰ মিছন"}
              </h3>
            </div>

            <div className="space-y-3">
              {missions.slice(0, 6).map((m, i) => (
                <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-yellow-300 hover:shadow-md transition-all group">
                  <div className="w-7 h-7 rounded-lg bg-yellow-500 flex items-center justify-center flex-shrink-0 text-black font-black text-xs group-hover:bg-[#0f3460] group-hover:text-yellow-400 transition-colors">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{m}</p>
                </div>
              ))}
            </div>

            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 mt-5 text-[#0f3460] hover:text-yellow-600 font-semibold text-sm transition-colors"
            >
              {lang === "en" ? `+ ${missions.length - 6} more objectives` : `+ ${missions.length - 6} টা অধিক উদ্দেশ্য`}
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
