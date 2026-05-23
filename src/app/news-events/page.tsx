"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotificationBanner from "@/components/NotificationBanner";
import {
  ChevronRight, Calendar, Clock, Tag, Search,
  Megaphone, BookOpen, Trophy, Users, ArrowRight,
  Newspaper, FileText,
} from "lucide-react";

/* ─── DATA ────────────────────────────────────────────────────── */
const allNews = [
  {
    id: 1,
    category: "Event",
    categoryColor: "bg-blue-100 text-blue-700",
    categoryIcon: Calendar,
    date: "June 12, 2024",
    title: "Annual Film Festival 2024 — Screening & Awards Night",
    excerpt:
      "Join us for our flagship annual film festival showcasing student short films, documentaries, and feature projects judged by eminent industry professionals from across the country.",
    featured: true,
  },
  {
    id: 2,
    category: "Workshop",
    categoryColor: "bg-purple-100 text-purple-700",
    categoryIcon: BookOpen,
    date: "May 30, 2024",
    title: "Master Class: Documentary Filmmaking by Jahnu Barua",
    excerpt:
      "National Award-winning director Jahnu Barua conducts an exclusive masterclass on documentary storytelling and non-fiction filmmaking techniques for students and faculty.",
    featured: true,
  },
  {
    id: 3,
    category: "Admission",
    categoryColor: "bg-green-100 text-green-700",
    categoryIcon: FileText,
    date: "May 15, 2024",
    title: "Admissions Open for 2024–25 Academic Session",
    excerpt:
      "Applications are now open for all undergraduate, postgraduate, and certificate programs. Last date for online applications is 30th June 2024. Entrance exam on 15th July 2024.",
    featured: true,
  },
  {
    id: 4,
    category: "Achievement",
    categoryColor: "bg-yellow-100 text-yellow-700",
    categoryIcon: Trophy,
    date: "April 28, 2024",
    title: "Alumnus Wins Best Director at Mumbai International Film Festival",
    excerpt:
      "Congratulations to alumnus Rohan Dutta (Batch 2018) for winning the Best Director award at MIFF 2024 for his debut feature film 'Brahmadatta'.",
    featured: false,
  },
  {
    id: 5,
    category: "Event",
    categoryColor: "bg-blue-100 text-blue-700",
    categoryIcon: Calendar,
    date: "April 10, 2024",
    title: "Photography Exhibition — 'Frames of the Northeast'",
    excerpt:
      "A curated exhibition of 60+ photographs by final-year cinematography students, capturing the landscapes, culture, and people of Northeast India.",
    featured: false,
  },
  {
    id: 6,
    category: "Workshop",
    categoryColor: "bg-purple-100 text-purple-700",
    categoryIcon: BookOpen,
    date: "March 22, 2024",
    title: "Sound Design Workshop with Prabal Dutta",
    excerpt:
      "A two-day intensive workshop on Foley art, ambient sound design, and audio post-production for film and television, conducted by acclaimed sound designer Prabal Dutta.",
    featured: false,
  },
  {
    id: 7,
    category: "Notice",
    categoryColor: "bg-red-100 text-red-700",
    categoryIcon: Megaphone,
    date: "March 15, 2024",
    title: "Revised Examination Schedule — Semester IV & VI",
    excerpt:
      "The examination schedule for Semester IV and VI has been revised. Students are requested to download the updated timetable from the institute notice board.",
    featured: false,
  },
  {
    id: 8,
    category: "Achievement",
    categoryColor: "bg-yellow-100 text-yellow-700",
    categoryIcon: Trophy,
    date: "February 20, 2024",
    title: "DBHRGFTI Students Win at Zonal Film Competition",
    excerpt:
      "Three student films from DBHRGFTI won top honours at the North-East Zonal Film Competition 2024, including Best Short Film and Best Cinematography.",
    featured: false,
  },
  {
    id: 9,
    category: "Event",
    categoryColor: "bg-blue-100 text-blue-700",
    categoryIcon: Calendar,
    date: "February 05, 2024",
    title: "Alumni Meet 2024 — Reconnecting with Our Film Family",
    excerpt:
      "DBHRGFTI hosted its annual Alumni Meet, bringing together graduates from across different batches working in the Indian film and television industry.",
    featured: false,
  },
  {
    id: 10,
    category: "Notice",
    categoryColor: "bg-red-100 text-red-700",
    categoryIcon: Megaphone,
    date: "January 18, 2024",
    title: "Holiday Notice — Institute Closed for Magh Bihu",
    excerpt:
      "The institute will remain closed from 14th–16th January 2024 on account of Magh Bihu (Bhogali Bihu). Classes will resume on 17th January 2024.",
    featured: false,
  },
  {
    id: 11,
    category: "Admission",
    categoryColor: "bg-green-100 text-green-700",
    categoryIcon: FileText,
    date: "January 05, 2024",
    title: "Scholarship Applications Open — SC/ST/OBC Students",
    excerpt:
      "Eligible SC, ST, and OBC students are invited to apply for the Government of Assam scholarship for the academic session 2023–24. Last date: 31st January 2024.",
    featured: false,
  },
  {
    id: 12,
    category: "Workshop",
    categoryColor: "bg-purple-100 text-purple-700",
    categoryIcon: BookOpen,
    date: "December 18, 2023",
    title: "Editing Bootcamp — Non-Linear Editing & Colour Grading",
    excerpt:
      "A week-long intensive bootcamp on professional non-linear editing workflows and DaVinci Resolve colour grading, open to all enrolled students.",
    featured: false,
  },
];

const upcomingEvents = [
  { date: "Jun 12", month: "Jun", day: "12", title: "Annual Film Festival", type: "Event", color: "bg-blue-500" },
  { date: "Jun 15", month: "Jun", day: "15", title: "Entrance Examination", type: "Exam", color: "bg-red-500" },
  { date: "Jun 20", month: "Jun", day: "20", title: "Orientation Day", type: "Academic", color: "bg-green-500" },
  { date: "Jul 01", month: "Jul", day: "01", title: "Semester Classes Begin", type: "Academic", color: "bg-green-500" },
  { date: "Jul 10", month: "Jul", day: "10", title: "Photography Exhibition", type: "Exhibition", color: "bg-purple-500" },
  { date: "Jul 25", month: "Jul", day: "25", title: "Guest Lecture Series", type: "Workshop", color: "bg-yellow-500" },
];

const categories = ["All", "Event", "Workshop", "Admission", "Achievement", "Notice"];

const ITEMS_PER_PAGE = 6;

/* ─── PAGE ────────────────────────────────────────────────────── */
export default function NewsEventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = allNews.filter((n) => {
    const matchCat = activeCategory === "All" || n.category === activeCategory;
    const matchSearch =
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  const featured = allNews.filter((n) => n.featured).slice(0, 3);

  const handleCategory = (cat: string) => { setActiveCategory(cat); setPage(1); };
  const handleSearch = (v: string) => { setSearch(v); setPage(1); };

  return (
    <main>
      <NotificationBanner />
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#0f3460] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-yellow-400 text-sm mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">News &amp; Events</span>
          </div>
          <h1 className="text-4xl font-black font-heading">News &amp; Events</h1>
          <p className="text-gray-300 mt-2 max-w-2xl">
            Latest announcements, workshops, achievements, and upcoming events at DBHRGFTI.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* ── MAIN CONTENT ── */}
          <div className="lg:col-span-2">

            {/* Featured strip — only on first page, no filter */}
            {activeCategory === "All" && !search && page === 1 && (
              <div className="mb-10">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Newspaper size={14} className="text-yellow-500" /> Featured
                </h2>
                <div className="space-y-4">
                  {featured.map((item) => {
                    const Icon = item.categoryIcon;
                    return (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all group cursor-pointer"
                      >
                        <div className="flex-shrink-0 w-14 h-14 bg-[#0f3460] rounded-xl flex flex-col items-center justify-center text-white">
                          <span className="text-xs font-semibold leading-none">{item.date.split(" ")[0]}</span>
                          <span className="text-lg font-black leading-none">{item.date.split(" ")[1]?.replace(",", "")}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${item.categoryColor}`}>
                              <Icon size={10} /> {item.category}
                            </span>
                            <span className="text-gray-400 text-xs">{item.date}</span>
                          </div>
                          <h3 className="font-bold text-gray-800 text-sm leading-snug group-hover:text-[#0f3460] transition-colors mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{item.excerpt}</p>
                        </div>
                        <ArrowRight size={16} className="text-gray-300 flex-shrink-0 mt-1 group-hover:text-yellow-500 transition-colors" />
                      </div>
                    );
                  })}
                </div>
                <div className="h-px bg-gray-200 mt-8 mb-6"></div>
              </div>
            )}

            {/* Search + Filter */}
            <div className="mb-6 space-y-3">
              <div className="relative">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news and events…"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategory(cat)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                      activeCategory === cat
                        ? "bg-[#0f3460] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <p className="text-xs text-gray-400 mb-4">
              Showing {paginated.length} of {filtered.length} results
            </p>

            {/* News cards */}
            {paginated.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <Newspaper size={40} className="mx-auto mb-3 opacity-30" />
                <p>No results found. Try a different search or category.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {paginated.map((item) => {
                  const Icon = item.categoryIcon;
                  return (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] rounded-xl flex flex-col items-center justify-center text-white">
                        <span className="text-[10px] font-semibold leading-none opacity-80">{item.date.split(" ")[0]}</span>
                        <span className="text-lg font-black leading-none">{item.date.split(" ")[1]?.replace(",", "")}</span>
                        <span className="text-[9px] opacity-60">{item.date.split(" ")[2]}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${item.categoryColor}`}>
                            <Icon size={10} /> {item.category}
                          </span>
                          <span className="text-gray-400 text-xs flex items-center gap-1">
                            <Calendar size={10} /> {item.date}
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-800 text-sm leading-snug group-hover:text-[#0f3460] transition-colors mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{item.excerpt}</p>
                      </div>
                      <ArrowRight size={16} className="text-gray-300 flex-shrink-0 mt-1 group-hover:text-yellow-500 transition-colors self-start" />
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50 transition-colors"
                >
                  ← Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-8 h-8 text-xs font-bold rounded-lg transition-colors ${
                      p === page ? "bg-[#0f3460] text-white" : "border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50 transition-colors"
                >
                  Next →
                </button>
              </div>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <div className="space-y-6">

            {/* Upcoming Events */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] rounded-2xl p-5 text-white">
              <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                <Calendar size={16} className="text-yellow-400" /> Upcoming Events
              </h3>
              <div className="space-y-3">
                {upcomingEvents.map((ev, i) => (
                  <div key={i} className="flex items-start gap-3 pb-3 border-b border-white/10 last:border-0 group cursor-pointer">
                    <div className={`${ev.color} text-white text-xs font-black px-2.5 py-1.5 rounded-lg flex-shrink-0 text-center min-w-[44px] leading-tight`}>
                      <div className="text-[10px] font-semibold opacity-80">{ev.month}</div>
                      <div className="text-base leading-none">{ev.day}</div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-snug group-hover:text-yellow-400 transition-colors">{ev.title}</p>
                      <span className="text-xs text-gray-400">{ev.type}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-sm py-2.5 rounded-xl transition-colors">
                <Clock size={14} /> Full Academic Calendar
              </button>
            </div>

            {/* Important Notice */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Tag size={14} className="text-red-600" />
                <span className="text-red-700 font-bold text-sm">Important Notice</span>
              </div>
              <div className="space-y-2.5">
                <div className="bg-white border border-red-100 rounded-xl p-3">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong className="text-red-600">Last date for application:</strong><br />
                    30th June 2024
                  </p>
                </div>
                <div className="bg-white border border-blue-100 rounded-xl p-3">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong className="text-blue-600">Entrance Exam Date:</strong><br />
                    15th July 2024
                  </p>
                </div>
              </div>
              <a
                href="#admissions"
                className="mt-4 block text-center bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-2.5 rounded-xl transition-colors"
              >
                Apply Now
              </a>
            </div>

            {/* Category breakdown */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-800 text-sm mb-4 flex items-center gap-2">
                <Users size={14} className="text-yellow-500" /> Browse by Category
              </h3>
              <div className="space-y-2">
                {categories.filter((c) => c !== "All").map((cat) => {
                  const count = allNews.filter((n) => n.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => { handleCategory(cat); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-yellow-50 hover:border-yellow-200 border border-transparent transition-colors group text-left"
                    >
                      <span className="text-sm text-gray-700 group-hover:text-[#0f3460] font-medium">{cat}</span>
                      <span className="text-xs bg-gray-100 group-hover:bg-yellow-100 text-gray-500 font-bold px-2 py-0.5 rounded-full transition-colors">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
