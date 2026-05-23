"use client";
import { BookOpen, FileText, Award, Calendar, Download, Users, Camera, Film } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const linksData = {
  en: [
    { icon: BookOpen, label: "Admission\nPortal", href: "#admissions", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: FileText, label: "Results\n& Grades", href: "#results", color: "bg-green-600 hover:bg-green-700" },
    { icon: Award, label: "Scholarships\n& Aid", href: "#scholarships", color: "bg-yellow-600 hover:bg-yellow-700" },
    { icon: Calendar, label: "Academic\nCalendar", href: "#calendar", color: "bg-purple-600 hover:bg-purple-700" },
    { icon: Download, label: "Download\nForms", href: "#forms", color: "bg-red-600 hover:bg-red-700" },
    { icon: Users, label: "Alumni\nNetwork", href: "#alumni", color: "bg-indigo-600 hover:bg-indigo-700" },
    { icon: Camera, label: "Photo\nGallery", href: "#gallery", color: "bg-pink-600 hover:bg-pink-700" },
    { icon: Film, label: "Student\nFilms", href: "#films", color: "bg-orange-600 hover:bg-orange-700" },
  ],
  as: [
    { icon: BookOpen, label: "ভৰ্তি\nপোৰ্টেল", href: "#admissions", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: FileText, label: "ফলাফল\nআৰু গ্ৰেড", href: "#results", color: "bg-green-600 hover:bg-green-700" },
    { icon: Award, label: "বৃত্তি\nআৰু সাহায্য", href: "#scholarships", color: "bg-yellow-600 hover:bg-yellow-700" },
    { icon: Calendar, label: "শৈক্ষিক\nকেলেণ্ডাৰ", href: "#calendar", color: "bg-purple-600 hover:bg-purple-700" },
    { icon: Download, label: "ফৰ্ম\nডাউনলোড", href: "#forms", color: "bg-red-600 hover:bg-red-700" },
    { icon: Users, label: "প্ৰাক্তন\nনেটৱৰ্ক", href: "#alumni", color: "bg-indigo-600 hover:bg-indigo-700" },
    { icon: Camera, label: "ফটো\nগেলেৰী", href: "#gallery", color: "bg-pink-600 hover:bg-pink-700" },
    { icon: Film, label: "শিক্ষাৰ্থী\nচলচ্চিত্ৰ", href: "#films", color: "bg-orange-600 hover:bg-orange-700" },
  ],
};

export default function QuickLinks() {
  const { lang } = useLanguage();
  const links = linksData[lang];

  return (
    <section className="bg-gray-100 py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {links.map(({ icon: Icon, label, href, color }) => (
            <a
              key={label}
              href={href}
              className={`${color} text-white rounded-xl p-3 flex flex-col items-center gap-2 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group`}
            >
              <Icon size={24} className="group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold leading-tight whitespace-pre-line">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
