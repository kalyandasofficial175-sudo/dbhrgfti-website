"use client";

/*
  VIDEO HERO SETUP
  ─────────────────────────────────────────────────────────
  Place your background reel at:   public/videos/hero-reel.mp4
  Recommended spec:
    Resolution  : 1920 × 1080 (Full HD)
    Duration    : 15–30 seconds (looping)
    Format      : MP4 (H.264)
    Max size    : 8 MB  (compress with HandBrake / FFmpeg)
    Audio       : remove audio track entirely (muted anyway)

  While no video file is present the hero shows a dark
  gradient fallback — the page is fully functional either way.
  ─────────────────────────────────────────────────────────
*/

import Navbar from "@/components/Navbar";
import NotificationBanner from "@/components/NotificationBanner";
import Footer from "@/components/Footer";
import ImageSliderSection from "@/components/ImageSliderSection";
import SocialMedia from "@/components/SocialMedia";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowDown, Play, Pause, Volume2, VolumeX,
  GraduationCap, Users, Film, Trophy, Building,
  Clock, ChevronRight, Clapperboard, Mic, Monitor,
  Camera, Calendar, Tag, Star, Award,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// VIDEO HERO
// ─────────────────────────────────────────────────────────────
function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying]   = useState(true);
  const [muted,   setMuted]     = useState(true);
  const [loaded,  setLoaded]    = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else          { v.pause(); setPlaying(false); }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">

      {/* ── VIDEO ── */}
      <video
        ref={videoRef}
        src="/videos/hero-reel.mp4"
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      />

      {/* Fallback gradient shown until/unless video loads */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1a0505] to-[#1a0005] transition-opacity duration-1000 ${loaded ? "opacity-0" : "opacity-100"} pointer-events-none`}
      >
        {/* Decorative circles on fallback */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-red-900/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-red-800/15 blur-3xl" />
      </div>

      {/* Dark overlay on video */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Subtle red vignette */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-950/30 via-transparent to-transparent pointer-events-none" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">

          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-xs font-bold tracking-[0.25em] uppercase">
              Govt. of Assam · Est. 1999
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white font-black leading-[1.05] mb-6">
            <span className="block text-[clamp(2.8rem,7vw,5.5rem)]">
              Dr. Bhupen Hazarika
            </span>
            <span className="block text-[clamp(1.4rem,3.5vw,2.8rem)] font-light text-gray-300 mt-2 tracking-wide">
              Regional Govt. Film &amp; Television Training Institute
            </span>
          </h1>

          {/* Sub */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            The only Government Film &amp; Television institute in North-East India
            — training directors, cinematographers, journalists, and storytellers
            for over three decades.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="#courses"
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-red-900/40"
            >
              Explore Courses <ArrowRight size={18} />
            </Link>
            <Link
              href="#about"
              className="border border-white/25 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2 backdrop-blur-sm transition-all"
            >
              <Play size={16} className="text-red-400" /> Watch Our Story
            </Link>
          </div>

          {/* Quick stats row */}
          <div className="flex flex-wrap gap-6 text-sm">
            {[
              { value: "37+",   label: "Years" },
              { value: "5000+", label: "Alumni" },
              { value: "12",    label: "Programs" },
              { value: "300+",  label: "Films" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-red-400">{s.value}</div>
                <div className="text-gray-500 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── VIDEO CONTROLS — bottom right ── */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <button
          onClick={toggleMute}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-colors"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
        <button
          onClick={togglePlay}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-colors"
          aria-label={playing ? "Pause video" : "Play video"}
        >
          {playing ? <Pause size={15} /> : <Play size={15} />}
        </button>
        <span className="text-white/40 text-xs hidden md:block">hero-reel.mp4</span>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="text-white/50" />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// TICKER / MARQUEE
// ─────────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  "🏆  Admissions Open for 2024-25 Session",
  "🎬  Annual Film Festival — June 12, 2024",
  "🎓  B.Sc. Film & TV Production · 30 Seats",
  "🏅  Alumnus wins Best Director at MIFF 2024",
  "📽️  Master Class by National Award-winning Director Jahnu Barua",
  "📅  Last Date for Applications: 30 June 2024",
  "🎥  P.G. Diploma in Cinematography · 20 Seats",
  "📢  Entrance Exam: 15 July 2024",
];

function Ticker() {
  return (
    <div className="bg-red-700 text-white py-2.5 overflow-hidden relative">
      <div className="flex items-center gap-0">
        {/* BREAKING badge */}
        <div className="flex-shrink-0 bg-white text-red-700 font-black text-xs px-4 py-0.5 mr-4 z-10">
          LATEST
        </div>
        {/* Scrolling text */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex gap-12 whitespace-nowrap"
            style={{ animation: "ticker 35s linear infinite" }}
          >
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="text-sm font-medium flex-shrink-0">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes ticker {
          0%   { transform: translateX(0) }
          100% { transform: translateX(-50%) }
        }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// FEATURES GRID
// ─────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: Star,
    title: "Only Govt. Film Institute in NE India",
    body: "DBHRGFTI is the sole government-run Film & Television training institute in the entire North-Eastern region, providing subsidised, high-quality education.",
    accent: "bg-red-100 text-red-700",
  },
  {
    icon: Award,
    title: "Industry-Aligned Curriculum",
    body: "Our syllabus is designed with working professionals. Students graduate ready for the floor — camera-ready, edit-suite-ready, broadcast-ready.",
    accent: "bg-amber-100 text-amber-700",
  },
  {
    icon: Camera,
    title: "Professional-Grade Studios",
    body: "State-of-the-art production studios, edit suites, sound recording rooms, and outdoor locations in the film-rich landscape of Assam.",
    accent: "bg-green-100 text-green-700",
  },
];

function FeaturesSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-red-600 text-xs font-bold tracking-widest uppercase mb-3">
            Why DBHRGFTI
          </span>
          <h2 className="text-4xl font-black text-gray-900">
            What Sets Us Apart
          </h2>
          <div className="w-12 h-1 bg-red-600 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className={`w-12 h-12 rounded-xl ${f.accent} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-3 leading-snug">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
              </div>
            );
          })}
        </div>

        {/* About paragraph + milestones */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h3 className="text-3xl font-black text-gray-900 mb-4 leading-tight">
              A Legacy of Film Education in North-East India
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 1999 as JCFTI, the institute was later renamed in honour
              of legendary Assamese musician and filmmaker{" "}
              <strong>Dr. Bhupen Hazarika</strong>. It is the only government Film
              &amp; TV institute in the North-East, serving students from all eight
              states of the region.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Over the decades, DBHRGFTI has produced thousands of trained film
              technicians, directors, cinematographers, and broadcast journalists
              who have shaped regional and national media.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/history"
                className="bg-gray-900 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors text-sm"
              >
                Our History <ArrowRight size={15} />
              </Link>
              <Link
                href="/who-we-are"
                className="border border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-700 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Who We Are
              </Link>
            </div>
          </div>

          {/* Milestone cards */}
          <div className="space-y-3">
            {[
              { year: "1999", label: "Founded as JCFTI", sub: "Kahilipara, Guwahati, Assam" },
              { year: "2011", label: "Renamed RGFTI", sub: "Expanded course offerings" },
              { year: "2016", label: "Renamed DBHRGFTI", sub: "In honour of Dr. Bhupen Hazarika" },
              { year: "Today", label: "37+ Years of Excellence", sub: "5000+ alumni across the world" },
            ].map((m, i) => (
              <div
                key={m.year}
                className="flex items-center gap-5 bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:border-red-200 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-red-50 group-hover:bg-red-600 transition-colors flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 group-hover:text-white font-black text-sm transition-colors text-center leading-tight">
                    {m.year}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{m.label}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{m.sub}</div>
                </div>
                <ChevronRight size={16} className="text-gray-300 ml-auto group-hover:text-red-500 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// COURSES
// ─────────────────────────────────────────────────────────────
const COURSES = [
  {
    title: "B.Sc. in Film & Television Production",
    level: "Undergraduate",
    duration: "3 Years",
    seats: 30,
    icon: Film,
    featured: true,
    tags: ["Direction", "Cinematography", "Editing", "Sound"],
    desc: "A full-length undergraduate programme covering every stage of film and TV production.",
  },
  {
    title: "P.G. Diploma in Cinematography",
    level: "Post Graduate",
    duration: "1 Year",
    seats: 20,
    icon: Camera,
    featured: true,
    tags: ["Camera", "Lighting", "Color Grading", "DI"],
    desc: "Advanced training for aspiring Directors of Photography.",
  },
  {
    title: "P.G. Diploma in Film Direction",
    level: "Post Graduate",
    duration: "1 Year",
    seats: 15,
    icon: Clapperboard,
    featured: false,
    tags: ["Screenplay", "Direction", "Workshop"],
    desc: "Intensive narrative storytelling and directing program.",
  },
  {
    title: "Diploma in Television Journalism",
    level: "Diploma",
    duration: "2 Years",
    seats: 25,
    icon: Monitor,
    featured: false,
    tags: ["Reporting", "Anchoring", "News Production"],
    desc: "Broadcast journalism and digital content creation.",
  },
  {
    title: "Certificate in Short Film Making",
    level: "Certificate",
    duration: "6 Months",
    seats: 40,
    icon: Film,
    featured: false,
    tags: ["Story", "Shoot", "Edit"],
    desc: "Hands-on short film production for beginners.",
  },
  {
    title: "P.G. Diploma in Sound Design",
    level: "Post Graduate",
    duration: "1 Year",
    seats: 15,
    icon: Mic,
    featured: false,
    tags: ["Recording", "Mixing", "Foley"],
    desc: "Film sound — recording, mixing and spatial audio.",
  },
];

function CoursesSection() {
  const featured  = COURSES.filter((c) => c.featured);
  const secondary = COURSES.filter((c) => !c.featured);

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-red-600 text-xs font-bold tracking-widest uppercase">
              Academic Programs
            </span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">Our Courses</h2>
          </div>
          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-red-700 font-semibold text-sm transition-colors"
          >
            View all programs <ArrowRight size={15} />
          </Link>
        </div>

        {/* Featured — large cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="bg-gradient-to-br from-gray-900 to-[#1a0505] text-white rounded-2xl p-8 relative overflow-hidden group hover:shadow-2xl transition-shadow"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {c.level}
                    </span>
                  </div>
                  <h3 className="font-black text-xl mb-2 leading-snug group-hover:text-red-300 transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{c.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {c.tags.map((t) => (
                      <span key={t} className="bg-white/10 text-gray-300 text-xs px-2.5 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Clock size={12} /> {c.duration}</span>
                      <span className="flex items-center gap-1"><GraduationCap size={12} /> {c.seats} seats</span>
                    </div>
                    <a
                      href="#apply"
                      className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1 transition-colors"
                    >
                      Apply Now <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary — compact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondary.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-red-300 hover:shadow-md transition-all group"
              >
                <div className="w-9 h-9 bg-red-100 group-hover:bg-red-600 rounded-lg flex items-center justify-center mb-3 transition-colors">
                  <Icon size={17} className="text-red-600 group-hover:text-white transition-colors" />
                </div>
                <span className="text-red-600 text-xs font-semibold">{c.level}</span>
                <h3 className="font-bold text-gray-800 text-sm mt-1 mb-1 leading-snug group-hover:text-red-700 transition-colors">
                  {c.title}
                </h3>
                <div className="flex gap-3 text-xs text-gray-400 mt-2">
                  <span className="flex items-center gap-1"><Clock size={11} /> {c.duration}</span>
                  <span className="flex items-center gap-1"><Users size={11} /> {c.seats}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// NEWS + EVENTS (magazine style)
// ─────────────────────────────────────────────────────────────
const NEWS = [
  {
    type: "Event",
    badge: "bg-red-100 text-red-700",
    date: "Jun 12, 2024",
    title: "Annual Film Festival 2024 — Screening & Awards Night",
    excerpt: "Student short films and documentaries judged by industry professionals at our flagship annual event.",
  },
  {
    type: "Workshop",
    badge: "bg-purple-100 text-purple-700",
    date: "May 30, 2024",
    title: "Master Class: Documentary Filmmaking by Jahnu Barua",
    excerpt: "National Award-winning director conducts an exclusive masterclass on non-fiction filmmaking.",
  },
  {
    type: "Achievement",
    badge: "bg-amber-100 text-amber-700",
    date: "Apr 28, 2024",
    title: "Alumnus wins Best Director at MIFF 2024",
    excerpt: "Rohan Dutta (Batch 2018) takes the Best Director award for his debut feature at Mumbai IFF.",
  },
  {
    type: "Admission",
    badge: "bg-green-100 text-green-700",
    date: "May 15, 2024",
    title: "Admissions Open for 2024-25 Academic Session",
    excerpt: "Applications are now open for all UG, PG and Certificate programs. Last date: 30 June 2024.",
  },
];

const UPCOMING = [
  { date: "Jun 12", title: "Annual Film Festival" },
  { date: "Jun 15", title: "Entrance Examination" },
  { date: "Jun 20", title: "Orientation Day" },
  { date: "Jul 01", title: "Semester Classes Begin" },
  { date: "Jul 10", title: "Photography Exhibition" },
];

function NewsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-red-600 text-xs font-bold tracking-widest uppercase">
              News &amp; Events
            </span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">
              Latest from Campus
            </h2>
          </div>
          <a
            href="/news-events"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-red-700 font-semibold text-sm transition-colors"
          >
            View all news <ArrowRight size={15} />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* News cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {NEWS.map((n) => (
              <div
                key={n.title}
                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-red-200 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${n.badge}`}>
                    {n.type}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Calendar size={11} /> {n.date}
                  </span>
                </div>
                <h3 className="font-bold text-gray-800 text-sm leading-snug mb-2 group-hover:text-red-700 transition-colors">
                  {n.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{n.excerpt}</p>
              </div>
            ))}
          </div>

          {/* Upcoming events + notice */}
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-2xl p-5 text-white">
              <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                <Calendar size={16} className="text-red-400" /> Upcoming Events
              </h3>
              <div className="space-y-3">
                {UPCOMING.map((e) => (
                  <div
                    key={e.title}
                    className="flex items-center gap-3 pb-3 border-b border-white/10 last:border-0 group cursor-pointer"
                  >
                    <div className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded flex-shrink-0 min-w-[52px] text-center">
                      {e.date}
                    </div>
                    <p className="text-sm font-medium group-hover:text-red-400 transition-colors">
                      {e.title}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href="#calendar"
                className="mt-4 block text-center bg-red-600 hover:bg-red-500 text-white font-bold text-sm py-2.5 rounded-lg transition-colors"
              >
                Full Calendar
              </a>
            </div>

            {/* Important notice */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Tag size={13} className="text-red-600" />
                <span className="text-red-700 font-bold text-sm">Important Notice</span>
              </div>
              <p className="text-gray-700 text-xs leading-relaxed">
                Last date for applications:{" "}
                <strong className="text-red-600">30 June 2024</strong>.<br />
                Entrance exam date:{" "}
                <strong className="text-blue-600">15 July 2024</strong>.
              </p>
              <a
                href="#apply"
                className="mt-3 block text-center bg-red-600 hover:bg-red-700 text-white font-semibold text-xs py-2 rounded-lg transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────────────────────
function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1800, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target]);
  return count;
}

function StatItem({
  icon: Icon, value, suffix, label, color,
}: {
  icon: React.ElementType; value: number; suffix: string; label: string; color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(value, inView);
  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.4 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return (
    <div ref={ref} className="text-center group">
      <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
        <Icon size={26} className="text-white" />
      </div>
      <div className="text-5xl font-black text-white leading-none">
        {count}<span className="text-red-400">{suffix}</span>
      </div>
      <div className="text-gray-400 text-sm mt-2 font-medium">{label}</div>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="py-20 bg-[#0D0D0D] relative overflow-hidden">
      {/* Red side glows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-red-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-red-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-500 text-xs font-bold tracking-widest uppercase">
            By the Numbers
          </span>
          <h2 className="text-4xl font-black text-white mt-2">Decades of Impact</h2>
          <div className="w-12 h-1 bg-red-600 mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem icon={Building} value={37}   suffix="+" label="Years of Excellence" color="bg-red-700"    />
          <StatItem icon={Users}    value={5000} suffix="+" label="Alumni Worldwide"    color="bg-blue-700"   />
          <StatItem icon={Film}     value={300}  suffix="+" label="Films Produced"      color="bg-green-700"  />
          <StatItem icon={Trophy}   value={48}   suffix=""  label="Awards Won"          color="bg-amber-700"  />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// ADMISSION CTA
// ─────────────────────────────────────────────────────────────
function AdmissionCTA() {
  return (
    <section
      id="apply"
      className="py-20 bg-gradient-to-br from-red-700 via-red-800 to-red-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,.5) 40px, rgba(255,255,255,.5) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,.5) 40px, rgba(255,255,255,.5) 41px)" }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1 rounded-full mb-5 tracking-widest uppercase">
          Admissions Open 2024-25
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
          Your Story Starts Here
        </h2>
        <p className="text-red-100 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Apply now and join a community of filmmakers, journalists, and media
          professionals who are shaping the cultural landscape of North-East India.
        </p>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { step: "01", label: "Fill Online Form", sub: "Visit the admission portal" },
            { step: "02", label: "Appear for Exam", sub: "Written + practical test" },
            { step: "03", label: "Start Your Journey", sub: "Orientation in July 2024" },
          ].map((s) => (
            <div key={s.step} className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm text-left">
              <div className="text-3xl font-black text-white/30 mb-1">{s.step}</div>
              <div className="font-bold text-white text-sm">{s.label}</div>
              <div className="text-red-200 text-xs mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#courses"
            className="bg-white text-red-700 hover:bg-gray-100 font-black px-8 py-4 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-red-950/40 text-sm"
          >
            <GraduationCap size={18} /> Apply Now
          </a>
          <Link
            href="/contact"
            className="border-2 border-white/40 text-white hover:bg-white/15 font-semibold px-8 py-4 rounded-xl flex items-center gap-2 transition-all text-sm"
          >
            Contact Admissions
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export default function Home2Page() {
  return (
    <main>
      <NotificationBanner />
      <Navbar />
      <VideoHero />
      <Ticker />
      <FeaturesSection />
      <CoursesSection />
      <ImageSliderSection
        heading="Behind the Lens"
        tag="Campus Gallery"
        sectionBg="bg-white"
        accent="text-red-600"
        accentHex="#dc2626"
      />
      <NewsSection />
      <StatsSection />
      <SocialMedia />
      <AdmissionCTA />
      <Footer />
    </main>
  );
}
