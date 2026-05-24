"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { lang, toggleLang, tr } = useLanguage();

  const navLinks = [
    { label: tr.home, href: "/" },
    { label: tr.home, href: "/home1" },
    { label: tr.home, href: "/home2" },

    {
      label: tr.about,
      href: "/who-we-are",
      children: [
        { label: tr.whoWeAre, href: "/who-we-are" },
        { label: tr.whatWeDo, href: "/what-we-do" },
        { label: tr.history, href: "/history" },
      ],
    },
    // {
    //   label: tr.academics,
    //   href: "#academics",
    //   children: [
    //     { label: tr.coursesOffered, href: "#courses" },
    //     { label: tr.syllabus, href: "#syllabus" },
    //     { label: tr.academicCalendar, href: "#calendar" },
    //     { label: tr.departments, href: "#departments" },
    //   ],
    // },
    // {
    //   label: tr.admissions,
    //   href: "#admissions",
    //   children: [
    //     { label: tr.admissionProcedure, href: "#admissions" },
    //     { label: tr.eligibilityCriteria, href: "#eligibility" },
    //     { label: tr.feeStructure, href: "#fees" },
    //     { label: tr.scholarships, href: "#scholarships" },
    //   ],
    // },
    // { label: tr.gallery, href: "#gallery" },
    // { label: tr.newsEvents, href: "/news-events" },
    { label: tr.contact, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-[#1a1a2e] text-gray-300 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919000000000" className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
              <Phone size={11} /> {tr.phone}
            </a>
            <a href="mailto:info@bhfti.gov.in" className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
              <Mail size={11} /> info@bhfti.gov.in
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/40 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold transition-all"
            >
              <Globe size={11} />
              {lang === "en" ? "অসমীয়া" : "English"}
            </button>
          </div>
        </div>
      </div>

      {/* Logo Bar */}
      <div className="bg-[#16213e] py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">

          {/* India Emblem */}
          {/* ← Place the emblem image at: public/images/india-emblem.png */}
          <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/images/india-emblem.png"
              alt="Emblem of India"
              width={56}
              height={56}
              className="object-contain drop-shadow-md"
              style={{ height: 'auto' }}
            />
          </div>

          {/* Divider */}
          <div className="w-px h-12 bg-white/20 flex-shrink-0 hidden sm:block"></div>

          {/* BH Badge */}
          <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 border-2 border-yellow-300">
            <span className="text-[#1a1a2e] font-black text-xl">BH</span>
          </div>

          <div>
            <h1 className="text-white font-bold text-base md:text-xl leading-tight font-heading">
              {lang === "en"
                ? "Dr. Bhupen Hazarika Regional Government"
                : "ড° ভূপেন হাজৰিকা আঞ্চলিক চৰকাৰী"}
            </h1>
            <h2 className="text-yellow-400 font-semibold text-sm md:text-lg leading-tight">
              {lang === "en"
                ? "Film & Television Institute"
                : "চলচ্চিত্ৰ আৰু দূৰদৰ্শন প্ৰতিষ্ঠান"}
            </h2>
            <p className="text-gray-400 text-xs mt-0.5">
              {lang === "en"
                ? "Government of Assam | Ministry of Cultural Affairs"
                : "অসম চৰকাৰ | সাংস্কৃতিক বিষয়ক মন্ত্ৰালয়"}
            </p>
          </div>

          {/* Mobile lang toggle */}
          <button
            onClick={toggleLang}
            className="ml-auto md:hidden flex items-center gap-1.5 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 px-2.5 py-1 rounded-full text-xs font-semibold"
          >
            <Globe size={10} />
            {lang === "en" ? "অসম" : "EN"}
          </button>
        </div>
      </div>

      {/* Nav Bar */}
      <nav className="bg-[#0f3460]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-white hover:text-yellow-400 hover:bg-[#1a1a2e] px-4 py-4 text-sm font-medium transition-colors"
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} />}
                </a>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-2 border-yellow-500 z-50">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 border-b border-gray-100 last:border-0 transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <a
            href="#admissions"
            className="hidden md:inline-flex bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-sm px-5 py-2 my-2 rounded transition-colors"
          >
            {tr.applyNow}
          </a>

          <button
            className="md:hidden text-white p-3"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#16213e] border-t border-[#0f3460]">
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-white hover:text-yellow-400 hover:bg-[#1a1a2e] text-sm font-medium border-b border-[#0f3460] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
                {link.children && (
                  <div className="bg-[#1a1a2e]">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-8 py-2.5 text-gray-300 hover:text-yellow-400 text-xs border-b border-[#0f3460] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        — {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#admissions"
              className="block bg-yellow-500 text-black font-bold text-center py-3 text-sm"
            >
              {tr.applyNow}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
