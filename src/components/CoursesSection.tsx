"use client";
import { Clock, GraduationCap, Users, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const coursesData = {
  en: [
    {
      title: "B.Sc. in Film & Television Production",
      duration: "3 Years",
      seats: 30,
      description: "A comprehensive program covering all aspects of film and television production, from pre-production to post-production.",
      tags: ["Direction", "Cinematography", "Editing", "Sound"],
      level: "undergraduate",
      color: "border-blue-500",
      badge: "bg-blue-100 text-blue-700",
    },
    {
      title: "P.G. Diploma in Cinematography",
      duration: "1 Year",
      seats: 20,
      description: "Advanced training in the art and science of cinematography for aspiring directors of photography.",
      tags: ["Camera", "Lighting", "Digital Imaging", "Color Grading"],
      level: "postGraduate",
      color: "border-yellow-500",
      badge: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "P.G. Diploma in Film Direction",
      duration: "1 Year",
      seats: 15,
      description: "Intensive program in narrative storytelling, mise-en-scène, actor direction, and film language.",
      tags: ["Screenplay", "Direction", "Film Studies", "Workshop"],
      level: "postGraduate",
      color: "border-red-500",
      badge: "bg-red-100 text-red-700",
    },
    {
      title: "Diploma in Television Journalism",
      duration: "2 Years",
      seats: 25,
      description: "Training in broadcast journalism, news production, anchoring, and digital content creation.",
      tags: ["Reporting", "Anchoring", "News Production", "Editing"],
      level: "diploma",
      color: "border-green-500",
      badge: "bg-green-100 text-green-700",
    },
    {
      title: "Certificate in Short Film Making",
      duration: "6 Months",
      seats: 40,
      description: "A hands-on certificate course focused on the craft of short film storytelling using digital cameras.",
      tags: ["Story", "Shoot", "Edit", "Screen"],
      level: "certificate",
      color: "border-purple-500",
      badge: "bg-purple-100 text-purple-700",
    },
    {
      title: "P.G. Diploma in Sound Design",
      duration: "1 Year",
      seats: 15,
      description: "Specialized training in film sound — recording, mixing, Foley, and spatial audio for cinema.",
      tags: ["Recording", "Mixing", "Foley", "Spatial Audio"],
      level: "postGraduate",
      color: "border-orange-500",
      badge: "bg-orange-100 text-orange-700",
    },
  ],
  as: [
    {
      title: "বি.এছচি. চলচ্চিত্ৰ আৰু দূৰদৰ্শন প্ৰযোজনা",
      duration: "৩ বছৰ",
      seats: 30,
      description: "প্ৰি-প্ৰডাকচনৰ পৰা পোষ্ট-প্ৰডাকচনলৈ চলচ্চিত্ৰ আৰু দূৰদৰ্শন প্ৰযোজনাৰ সকলো দিশ সামৰি লোৱা এক সামগ্ৰিক কাৰ্যক্ৰম।",
      tags: ["পৰিচালনা", "চিনেমেটোগ্ৰাফী", "সম্পাদনা", "শব্দ"],
      level: "undergraduate",
      color: "border-blue-500",
      badge: "bg-blue-100 text-blue-700",
    },
    {
      title: "চিনেমেটোগ্ৰাফীত স্নাতকোত্তৰ ডিপ্লমা",
      duration: "১ বছৰ",
      seats: 20,
      description: "উচ্চাকাংক্ষী পৰিচালকসকলৰ বাবে চিনেমেটোগ্ৰাফীৰ শিল্প আৰু বিজ্ঞানত উন্নত প্ৰশিক্ষণ।",
      tags: ["কেমেৰা", "পোহৰ", "ডিজিটেল ইমেজিং", "কালাৰ গ্ৰেডিং"],
      level: "postGraduate",
      color: "border-yellow-500",
      badge: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "চলচ্চিত্ৰ পৰিচালনাত স্নাতকোত্তৰ ডিপ্লমা",
      duration: "১ বছৰ",
      seats: 15,
      description: "আখ্যান গল্প কথন, মিজান্‌-এন-চেন, অভিনেতা পৰিচালনা আৰু চলচ্চিত্ৰ ভাষাত নিবিড় কাৰ্যক্ৰম।",
      tags: ["চিত্ৰনাট্য", "পৰিচালনা", "চলচ্চিত্ৰ অধ্যয়ন", "কৰ্মশালা"],
      level: "postGraduate",
      color: "border-red-500",
      badge: "bg-red-100 text-red-700",
    },
    {
      title: "দূৰদৰ্শন সাংবাদিকতাত ডিপ্লমা",
      duration: "২ বছৰ",
      seats: 25,
      description: "সম্প্ৰচাৰ সাংবাদিকতা, বাতৰি প্ৰযোজনা, উপস্থাপনা আৰু ডিজিটেল বিষয়বস্তু সৃষ্টিত প্ৰশিক্ষণ।",
      tags: ["প্ৰতিবেদন", "উপস্থাপনা", "বাতৰি প্ৰযোজনা", "সম্পাদনা"],
      level: "diploma",
      color: "border-green-500",
      badge: "bg-green-100 text-green-700",
    },
    {
      title: "চুটি চলচ্চিত্ৰ নিৰ্মাণত প্ৰমাণপত্ৰ",
      duration: "৬ মাহ",
      seats: 40,
      description: "ডিজিটেল কেমেৰা ব্যৱহাৰ কৰি চুটি চলচ্চিত্ৰ গল্প কথনৰ শিল্পত মনোনিৱেশ কৰা এক ব্যৱহাৰিক প্ৰমাণপত্ৰ পাঠ্যক্ৰম।",
      tags: ["কাহিনী", "চিত্ৰগ্ৰহণ", "সম্পাদনা", "প্ৰদৰ্শন"],
      level: "certificate",
      color: "border-purple-500",
      badge: "bg-purple-100 text-purple-700",
    },
    {
      title: "শব্দ ডিজাইনত স্নাতকোত্তৰ ডিপ্লমা",
      duration: "১ বছৰ",
      seats: 15,
      description: "চলচ্চিত্ৰ শব্দত বিশেষ প্ৰশিক্ষণ — ৰেকৰ্ডিং, মিক্সিং, ফলি আৰু চিনেমাৰ বাবে স্থানিক অডিঅ'।",
      tags: ["ৰেকৰ্ডিং", "মিক্সিং", "ফলি", "স্থানিক অডিঅ'"],
      level: "postGraduate",
      color: "border-orange-500",
      badge: "bg-orange-100 text-orange-700",
    },
  ],
};

export default function CoursesSection() {
  const { lang, tr } = useLanguage();
  const courses = coursesData[lang];

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-yellow-600 font-bold text-sm tracking-widest uppercase">{tr.coursesTag}</span>
          <h2 className="section-title mt-2">{tr.coursesTitle}</h2>
          <div className="w-12 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="section-subtitle max-w-2xl mx-auto">{tr.coursesSub}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className={`bg-white rounded-2xl border-t-4 ${course.color} shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col group`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${course.badge}`}>
                  {tr[course.level as keyof typeof tr] as string}
                </span>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  <Clock size={12} /> {course.duration}
                </div>
              </div>

              <h3 className="font-bold text-gray-800 text-base mb-3 leading-snug group-hover:text-[#0f3460] transition-colors">
                {course.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{course.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {course.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  <Users size={12} /> {course.seats} {tr.seats}
                </div>
                <a
                  href="#admissions"
                  className="text-[#0f3460] hover:text-yellow-600 text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  {tr.applyNowCourse} <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#courses"
            className="inline-flex items-center gap-2 bg-[#0f3460] hover:bg-[#1a1a2e] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            <GraduationCap size={18} /> {tr.viewAllCourses}
          </a>
        </div>
      </div>
    </section>
  );
}
