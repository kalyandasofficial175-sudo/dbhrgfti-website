"use client";
import { Phone, Mail, MapPin, Globe, Facebook, Youtube, Instagram, Twitter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang, tr } = useLanguage();

  const quickLinks = [
    { en: "About the Institute", as: "প্ৰতিষ্ঠানৰ বিষয়ে", href: "#about" },
    { en: "Courses Offered", as: "প্ৰদান কৰা পাঠ্যক্ৰম", href: "#courses" },
    { en: "Admission Process", as: "ভৰ্তি প্ৰক্ৰিয়া", href: "#admissions" },
    { en: "Scholarship Schemes", as: "বৃত্তি আঁচনি", href: "#scholarships" },
    { en: "Examination Results", as: "পৰীক্ষাৰ ফলাফল", href: "#results" },
    { en: "Academic Calendar", as: "শৈক্ষিক কেলেণ্ডাৰ", href: "#calendar" },
    { en: "Contact Us", as: "যোগাযোগ কৰক", href: "#contact" },
  ];

  const programs = [
    { en: "B.Sc. Film & TV Production", as: "বি.এছচি. চলচ্চিত্ৰ আৰু দূৰদৰ্শন" },
    { en: "PG Diploma Cinematography", as: "স্নাতকোত্তৰ ডিপ্লমা চিনেমেটোগ্ৰাফী" },
    { en: "PG Diploma Direction", as: "স্নাতকোত্তৰ ডিপ্লমা পৰিচালনা" },
    { en: "Diploma TV Journalism", as: "ডিপ্লমা দূৰদৰ্শন সাংবাদিকতা" },
    { en: "Certificate Short Film", as: "প্ৰমাণপত্ৰ চুটি চলচ্চিত্ৰ" },
    { en: "PG Diploma Sound Design", as: "স্নাতকোত্তৰ ডিপ্লমা শব্দ ডিজাইন" },
  ];

  return (
    <footer id="contact" className="bg-[#1a1a2e] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
              <span className="text-black font-black text-sm">BH</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-snug">
                {lang === "en" ? "Dr. Bhupen Hazarika RGFTI" : "ড° ভূপেন হাজৰিকা আৰজিএফটিআই"}
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            {lang === "en"
              ? "Premier government institute for film and television education in Northeast India, under the Government of Assam."
              : "অসম চৰকাৰৰ অধীনত উত্তৰ-পূব ভাৰতত চলচ্চিত্ৰ আৰু দূৰদৰ্শন শিক্ষাৰ বাবে শীৰ্ষস্থানীয় চৰকাৰী প্ৰতিষ্ঠান।"}
          </p>
          <div className="flex gap-3">
            {[Facebook, Youtube, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 bg-white/10 hover:bg-yellow-500 hover:text-black rounded-full flex items-center justify-center transition-colors text-gray-400">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm tracking-wide uppercase">{tr.quickLinks}</h4>
          <ul className="space-y-2">
            {quickLinks.map((item) => (
              <li key={item.en}>
                <a href={item.href} className="text-sm hover:text-yellow-400 transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-yellow-500 rounded-full group-hover:w-2 transition-all"></span>
                  {lang === "en" ? item.en : item.as}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm tracking-wide uppercase">{tr.programs}</h4>
          <ul className="space-y-2">
            {programs.map((item) => (
              <li key={item.en}>
                <a href="#courses" className="text-sm hover:text-yellow-400 transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-yellow-500 rounded-full group-hover:w-2 transition-all"></span>
                  {lang === "en" ? item.en : item.as}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm tracking-wide uppercase">{tr.contactUs}</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm">
              <MapPin size={14} className="text-yellow-400 flex-shrink-0 mt-0.5" />
              {lang === "en"
                ? "DBHRGFTI, Sila, Changsari, Kamrup, Assam – 781101"
                : "DBHRGFTI, ছিলা, চাংছাৰি, কামৰূপ, অসম – ৭৮১১০১"}
            </li>
            <li>
              <a href="tel:+919957360672" className="flex items-center gap-2 text-sm hover:text-yellow-400 transition-colors">
                <Phone size={14} className="text-yellow-400 flex-shrink-0" /> +91-9957360672
              </a>
            </li>
            <li>
              <a href="mailto:rgftiassam@gmail.com" className="flex items-center gap-2 text-sm hover:text-yellow-400 transition-colors">
                <Mail size={14} className="text-yellow-400 flex-shrink-0" /> rgftiassam@gmail.com
              </a>
            </li>
            <li>
              <a href="https://dbhrgfti.assam.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-yellow-400 transition-colors">
                <Globe size={14} className="text-yellow-400 flex-shrink-0" /> dbhrgfti.assam.gov.in
              </a>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
            <p className="text-xs text-gray-400 mb-1">{tr.officeHours}</p>
            <p className="text-xs text-white">{tr.monFri}</p>
            <p className="text-xs text-gray-400">{tr.saturday}</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Dr. Bhupen Hazarika Regional Government Film &amp; Television Institute.{" "}
            {tr.allRights} | {tr.govtAssam}
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-400 transition-colors">{tr.privacyPolicy}</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">{tr.termsOfUse}</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">RTI</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
