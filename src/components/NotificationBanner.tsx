"use client";
import { useState } from "react";
import { Bell, X, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const notificationsData = {
  en: [
    { id: 1, text: "Admissions Open 2024-25 — Apply now for B.Sc. Film & Television Production", type: "urgent", link: "#admissions" },
    { id: 2, text: "National Film Awards Ceremony — Join us on 12th June 2024 at the Main Auditorium", type: "event", link: "#events" },
    { id: 3, text: "Workshop: Documentary Filmmaking by renowned director Jahnu Barua — Register by 30th May", type: "workshop", link: "#events" },
    { id: 4, text: "Result Declaration: Semester IV Examinations — Check your results in the student portal", type: "result", link: "#results" },
    { id: 5, text: "New Scholarship Scheme for SC/ST/OBC students — Last date to apply: 15th June 2024", type: "scholarship", link: "#scholarships" },
  ],
  as: [
    { id: 1, text: "ভৰ্তি মুকলি ২০২৪-২৫ — বি.এছচি. চলচ্চিত্ৰ আৰু দূৰদৰ্শন প্ৰযোজনাৰ বাবে এতিয়াই আবেদন কৰক", type: "urgent", link: "#admissions" },
    { id: 2, text: "ৰাষ্ট্ৰীয় চলচ্চিত্ৰ বঁটা অনুষ্ঠান — ১২ জুন ২০২৪ তাৰিখে মূল মিলনায়তনত আমাৰ সৈতে যোগ দিয়ক", type: "event", link: "#events" },
    { id: 3, text: "কৰ্মশালা: বিখ্যাত পৰিচালক জাহ্নু বৰুৱাৰ দ্বাৰা ডকুমেন্টাৰি চলচ্চিত্ৰ নিৰ্মাণ — ৩০ মে'ৰ ভিতৰত পঞ্জীয়ন কৰক", type: "workshop", link: "#events" },
    { id: 4, text: "ফলাফল ঘোষণা: চতুৰ্থ ছেমিষ্টাৰ পৰীক্ষা — শিক্ষাৰ্থী পোৰ্টেলত আপোনাৰ ফলাফল পৰীক্ষা কৰক", type: "result", link: "#results" },
    { id: 5, text: "অজা/জনজাতি/অন্যান্য পিছপৰা শ্ৰেণীৰ শিক্ষাৰ্থীৰ বাবে নতুন বৃত্তি আঁচনি — আবেদনৰ অন্তিম তাৰিখ: ১৫ জুন ২০২৪", type: "scholarship", link: "#scholarships" },
  ],
};

const typeColors: Record<string, string> = {
  urgent: "bg-red-600",
  event: "bg-blue-600",
  workshop: "bg-purple-600",
  result: "bg-green-600",
  scholarship: "bg-yellow-600",
};

const typeLabels = {
  en: { urgent: "URGENT", event: "EVENT", workshop: "WORKSHOP", result: "RESULT", scholarship: "SCHOLARSHIP" },
  as: { urgent: "জৰুৰী", event: "অনুষ্ঠান", workshop: "কৰ্মশালা", result: "ফলাফল", scholarship: "বৃত্তি" },
};

export default function NotificationBanner() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [dismissed, setDismissed] = useState<number[]>([]);
  const { lang, tr } = useLanguage();

  const notifications = notificationsData[lang];
  const labels = typeLabels[lang];
  const visible = notifications.filter((n) => !dismissed.includes(n.id));

  return (
    <>
      <div className="bg-[#0f3460] text-white py-2 flex items-center overflow-hidden relative z-50">
        <div className="flex-shrink-0 bg-[#f5a623] text-[#1a1a2e] font-bold text-sm px-4 py-1 flex items-center gap-2 z-10 relative">
          <Bell size={14} className="animate-pulse" />
          {tr.notice}
        </div>
        <div className="ticker-wrap flex-1 mx-3">
          <span className="ticker-content text-sm">
            {notifications.map((n, i) => (
              <span key={n.id}>
                <span className={`inline-block px-2 py-0.5 rounded text-xs mr-2 ${typeColors[n.type]}`}>
                  {labels[n.type as keyof typeof labels]}
                </span>
                {n.text}
                {i < notifications.length - 1 && (
                  <span className="mx-6 text-yellow-400">•</span>
                )}
              </span>
            ))}
          </span>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-shrink-0 bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold px-3 py-1 mr-2 rounded transition-colors"
        >
          {isExpanded ? tr.close : tr.allNotices}
        </button>
      </div>

      {isExpanded && (
        <div className="bg-white border-b-2 border-yellow-500 shadow-lg z-40 relative">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Bell size={16} className="text-yellow-600" />
              {lang === "en" ? "All Notifications & Announcements" : "সকলো জাননী আৰু ঘোষণা"}
            </h3>
            <div className="space-y-2">
              {visible.map((n) => (
                <div
                  key={n.id}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 group hover:border-yellow-400 transition-colors"
                >
                  <span className={`mt-0.5 flex-shrink-0 px-2 py-0.5 rounded text-xs text-white font-semibold ${typeColors[n.type]}`}>
                    {labels[n.type as keyof typeof labels]}
                  </span>
                  <p className="text-sm text-gray-700 flex-1">{n.text}</p>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <a
                      href={n.link}
                      className="text-blue-600 hover:text-blue-800 text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {tr.viewMore} <ChevronRight size={12} />
                    </a>
                    <button
                      onClick={() => setDismissed([...dismissed, n.id])}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>
              ))}
              {visible.length === 0 && (
                <p className="text-gray-500 text-sm text-center py-4">
                  {lang === "en" ? "All notifications dismissed." : "সকলো জাননী বাতিল কৰা হৈছে।"}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
