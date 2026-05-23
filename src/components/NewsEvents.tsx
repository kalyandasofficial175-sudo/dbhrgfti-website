"use client";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const newsData = {
  en: [
    { id: 1, type: "Event", typeColor: "bg-blue-100 text-blue-700", date: "June 12, 2024", title: "Annual Film Festival 2024 — Screening & Awards Night", excerpt: "Join us for our flagship annual film festival showcasing student short films, documentaries, and feature projects judged by industry professionals." },
    { id: 2, type: "Workshop", typeColor: "bg-purple-100 text-purple-700", date: "May 30, 2024", title: "Master Class: Documentary Filmmaking by Jahnu Barua", excerpt: "National Award-winning director Jahnu Barua conducts an exclusive masterclass on documentary storytelling and non-fiction filmmaking." },
    { id: 3, type: "Admission", typeColor: "bg-green-100 text-green-700", date: "May 15, 2024", title: "Admissions Open for 2024-25 Academic Session", excerpt: "Applications are now open for all undergraduate, postgraduate, and certificate programs. Last date for online applications is 30th June 2024." },
    { id: 4, type: "Achievement", typeColor: "bg-yellow-100 text-yellow-700", date: "April 28, 2024", title: "Our Alumnus Wins Best Director at Mumbai International Film Festival", excerpt: "Congratulations to alumnus Rohan Dutta (Batch 2018) for winning the Best Director award at MIFF 2024 for his debut feature film." },
  ],
  as: [
    { id: 1, type: "অনুষ্ঠান", typeColor: "bg-blue-100 text-blue-700", date: "জুন ১২, ২০২৪", title: "বাৰ্ষিক চলচ্চিত্ৰ উৎসৱ ২০২৪ — প্ৰদৰ্শনী আৰু বঁটা নিশা", excerpt: "উদ্যোগ পেছাদাৰসকলৰ দ্বাৰা বিচাৰ কৰা শিক্ষাৰ্থীৰ চুটি চলচ্চিত্ৰ, তথ্যচিত্ৰ আৰু বৈশিষ্ট্য প্ৰকল্প প্ৰদৰ্শন কৰা আমাৰ প্ৰধান বাৰ্ষিক চলচ্চিত্ৰ উৎসৱত যোগ দিয়ক।" },
    { id: 2, type: "কৰ্মশালা", typeColor: "bg-purple-100 text-purple-700", date: "মে' ৩০, ২০২৪", title: "মাষ্টাৰ ক্লাছ: জাহ্নু বৰুৱাৰ দ্বাৰা ডকুমেন্টাৰি চলচ্চিত্ৰ নিৰ্মাণ", excerpt: "ৰাষ্ট্ৰীয় বঁটা বিজয়ী পৰিচালক জাহ্নু বৰুৱাই ডকুমেন্টাৰি গল্প কথন আৰু অকাল্পনিক চলচ্চিত্ৰ নিৰ্মাণত এক একচেটিয়া মাষ্টাৰক্লাছ পৰিচালনা কৰিব।" },
    { id: 3, type: "ভৰ্তি", typeColor: "bg-green-100 text-green-700", date: "মে' ১৫, ২০২৪", title: "২০২৪-২৫ শৈক্ষিক অধিৱেশনৰ বাবে ভৰ্তি মুকলি", excerpt: "সকলো স্নাতক, স্নাতকোত্তৰ আৰু প্ৰমাণপত্ৰ কাৰ্যক্ৰমৰ বাবে আবেদন এতিয়া মুকলি। অনলাইন আবেদনৰ অন্তিম তাৰিখ ৩০ জুন ২০২৪।" },
    { id: 4, type: "সাফল্য", typeColor: "bg-yellow-100 text-yellow-700", date: "এপ্ৰিল ২৮, ২০২৪", title: "আমাৰ প্ৰাক্তন শিক্ষাৰ্থী মুম্বাই আন্তৰ্জাতিক চলচ্চিত্ৰ উৎসৱত সৰ্বশ্ৰেষ্ঠ পৰিচালক জিকিলে", excerpt: "MIFF 2024-ত তেওঁৰ প্ৰথম পূৰ্ণদৈৰ্ঘ্য চলচ্চিত্ৰৰ বাবে সৰ্বশ্ৰেষ্ঠ পৰিচালক বঁটা জিকা প্ৰাক্তন শিক্ষাৰ্থী ৰোহান দত্তক (বেচ ২০১৮) অভিনন্দন।" },
  ],
};

const eventsData = {
  en: [
    { date: "Jun 12", title: "Annual Film Festival", type: "Event" },
    { date: "Jun 15", title: "Entrance Examination", type: "Exam" },
    { date: "Jun 20", title: "Orientation Day", type: "Academic" },
    { date: "Jul 01", title: "Semester Classes Begin", type: "Academic" },
    { date: "Jul 10", title: "Photography Exhibition", type: "Exhibition" },
  ],
  as: [
    { date: "জুন ১২", title: "বাৰ্ষিক চলচ্চিত্ৰ উৎসৱ", type: "অনুষ্ঠান" },
    { date: "জুন ১৫", title: "প্ৰৱেশ পৰীক্ষা", type: "পৰীক্ষা" },
    { date: "জুন ২০", title: "অভিমুখীকৰণ দিৱস", type: "শৈক্ষিক" },
    { date: "জুল ০১", title: "ছেমিষ্টাৰ শ্ৰেণী আৰম্ভ", type: "শৈক্ষিক" },
    { date: "জুল ১০", title: "ফটোগ্ৰাফী প্ৰদৰ্শনী", type: "প্ৰদৰ্শনী" },
  ],
};

export default function NewsEvents() {
  const { lang, tr } = useLanguage();
  const news = newsData[lang];
  const events = eventsData[lang];

  return (
    <section id="events" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-yellow-600 font-bold text-sm tracking-widest uppercase">{tr.newsTag}</span>
          <h2 className="section-title mt-2">{tr.newsTitle}</h2>
          <div className="w-12 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-5">
            {news.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-md transition-all duration-300 group">
                <div className="flex-shrink-0 w-14 h-14 bg-[#0f3460] rounded-lg flex flex-col items-center justify-center text-white">
                  <span className="text-xs font-semibold leading-none">{item.date.split(" ")[0]}</span>
                  <span className="text-lg font-black leading-none">{item.date.split(" ")[1]?.replace(",", "")}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.typeColor}`}>{item.type}</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1"><Calendar size={11} /> {item.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-[#0f3460] transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{item.excerpt}</p>
                </div>
                <ArrowRight size={16} className="text-gray-400 flex-shrink-0 mt-1 group-hover:text-yellow-500 transition-colors" />
              </div>
            ))}
            <a href="/news-events" className="inline-flex items-center gap-2 text-[#0f3460] hover:text-yellow-600 font-semibold text-sm transition-colors">
              {tr.viewAllNews} <ArrowRight size={14} />
            </a>
          </div>

          <div>
            <div className="bg-[#1a1a2e] rounded-2xl p-5 text-white">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Calendar size={18} className="text-yellow-400" /> {tr.upcomingEvents}
              </h3>
              <div className="space-y-3">
                {events.map((event, i) => (
                  <div key={i} className="flex items-start gap-3 pb-3 border-b border-white/10 last:border-0 group cursor-pointer">
                    <div className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded flex-shrink-0 text-center min-w-[52px]">
                      {event.date}
                    </div>
                    <div>
                      <p className="text-sm font-medium group-hover:text-yellow-400 transition-colors">{event.title}</p>
                      <span className="text-xs text-gray-400">{event.type}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#calendar" className="mt-4 flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-sm py-2.5 rounded-lg transition-colors w-full">
                <Clock size={14} /> {tr.fullCalendar}
              </a>
            </div>

            <div className="mt-4 bg-red-50 border border-red-200 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Tag size={14} className="text-red-600" />
                <span className="text-red-700 font-bold text-sm">{tr.importantNotice}</span>
              </div>
              <p className="text-gray-700 text-xs leading-relaxed">
                {tr.lastDate}:{" "}
                <strong className="text-red-600">{lang === "en" ? "30th June 2024" : "৩০ জুন ২০২৪"}</strong>.{" "}
                {tr.examDate}:{" "}
                <strong className="text-blue-600">{lang === "en" ? "15th July 2024" : "১৫ জুলাই ২০২৪"}</strong>.
              </p>
              <a href="#admissions" className="mt-3 block text-center bg-red-600 hover:bg-red-700 text-white font-semibold text-xs py-2 rounded-lg transition-colors">
                {tr.applyButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
