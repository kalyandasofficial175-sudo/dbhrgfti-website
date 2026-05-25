"use client";
import Navbar from "@/components/Navbar";
import NotificationBanner from "@/components/NotificationBanner";
import Footer from "@/components/Footer";
import ImageSliderSection from "@/components/ImageSliderSection";
import SocialMedia from "@/components/SocialMedia";
import StudyOptions from "@/components/StudyOptions";
import AnimateIn from "@/components/AnimateIn";
import AlumniSlider from "@/components/AlumniSlider";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowRight, PlayCircle, Phone, Mail, MapPin,
  Eye, Target, GraduationCap, Users, Film, Trophy,
  Building, Clock, ChevronRight, Clapperboard, Mic,
  Monitor, Camera, BookOpen, Award, Download, Calendar,
  ChevronLeft,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Hero background slides
// Place images at public/images/hero1.jpg, hero2.jpg, hero3.jpg
// Recommended: 1920×1080 px, JPG/WebP, < 500 KB each
// ─────────────────────────────────────────────────────────────
const HERO_SLIDES = [
  { image: "/images/hero1.jpg", fallback: "from-[#0D1117] via-[#1a0a00] to-[#0D1117]" },
  { image: "/images/slide-2.jpg", fallback: "from-[#0a0d1a] via-[#0f1a2e] to-[#0a0d1a]" },
  { image: "/images/hero1.jpg", fallback: "from-[#1a0a05] via-[#2d1500] to-[#1a0a05]" },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev,    setPrev]    = useState<number | null>(null);
  const [paused,  setPaused]  = useState(false);
  const total = HERO_SLIDES.length;

  const goTo = useCallback(
    (next: number) => {
      if (next === current) return;
      setPrev(current);
      setCurrent(next);
      setTimeout(() => setPrev(null), 800);
    },
    [current]
  );

  const goNext = useCallback(() => goTo((current + 1) % total), [current, goTo, total]);
  const goPrev = useCallback(() => goTo((current - 1 + total) % total), [current, goTo, total]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(goNext, 5000);
    return () => clearInterval(t);
  }, [paused, goNext]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background image slides ── */}
      {HERO_SLIDES.map((s, i) => {
        const isActive = i === current;
        const isPrev   = i === prev;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out ${
              isActive ? "opacity-100 z-10" : isPrev ? "opacity-0 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Fallback gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${s.fallback}`} />
            {/* Photo */}
            <Image
              src={s.image}
              alt={`Hero slide ${i + 1}`}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Dark overlay so text stays readable */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
        );
      })}

      {/* ── Film-strip sides ── */}
      <div className="absolute left-0 top-0 h-full w-7 flex flex-col pointer-events-none z-20">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={i} className="flex-1 border-b border-white/10 bg-black/50" />
        ))}
      </div>
      <div className="absolute right-0 top-0 h-full w-7 flex flex-col pointer-events-none z-20">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={i} className="flex-1 border-b border-white/10 bg-black/50" />
        ))}
      </div>

      {/* ── Diagonal orange accent ── */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{ background: "linear-gradient(135deg, transparent 55%, rgba(234,88,12,0.12) 100%)" }}
      />

      {/* ── Content ── */}
      <div className="relative z-30 max-w-7xl mx-auto px-10 w-full py-28">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-10 bg-orange-500" />
          <span className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase">
            Est. 1999 · Kahilipara, Guwahati, Assam
          </span>
        </div>

        <h1 className="font-black leading-none text-white mb-8">
          <span className="block text-[clamp(3rem,8vw,6.5rem)] text-orange-500">
            Film &amp; TV
          </span>
          <span className="block text-[clamp(2rem,6vw,5rem)] mt-1">
            Training Institute
          </span>
          <span className="block text-[clamp(1.1rem,2.5vw,1.8rem)] font-light text-gray-400 mt-3 tracking-wide">
            Dr. Bhupen Hazarika Regional Government Film &amp; Television Institute
          </span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
          North-East India&apos;s premier institution for Film &amp; Television
          education — nurturing creative talent and raising technical excellence
          since 1999.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Link
            href="#programs"
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-orange-900/30"
          >
            Explore Programs <ArrowRight size={18} />
          </Link>
          <Link
            href="#about"
            className="border border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl flex items-center gap-2 transition-all"
          >
            <PlayCircle size={18} className="text-orange-400" /> About Us
          </Link>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-gray-500">
          <a href="tel:+919957360672" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
            <Phone size={13} className="text-orange-500" /> +91-9957360672
          </a>
          <a href="mailto:rgftiassam@gmail.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
            <Mail size={13} className="text-orange-500" /> rgftiassam@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={13} className="text-orange-500" /> Kahilipara, Guwahati
          </span>
        </div>
      </div>

      {/* ── Stat cards — right ── */}
      <div className="absolute right-14 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-30">
        {[
          { value: "37+",   label: "Years of Excellence" },
          { value: "5000+", label: "Alumni Worldwide"    },
          { value: "12",    label: "Courses Offered"     },
          { value: "300+",  label: "Films Produced"      },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white/5 border border-white/10 backdrop-blur rounded-xl px-6 py-4 text-right hover:bg-white/10 transition-colors"
          >
            <div className="text-3xl font-black text-orange-400">{s.value}</div>
            <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={goPrev}
        className="absolute left-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={goNext}
        className="absolute right-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ArrowRight size={20} />
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width:      i === current ? "28px" : "8px",
              height:     "8px",
              background: i === current ? "#ea580c" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      {/* ── Progress bar ── */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10 z-30">
        <div
          key={current}
          className="h-full bg-orange-500"
          style={{ animation: paused ? "none" : "heroProgress 5s linear forwards" }}
        />
      </div>

      {/* ── Fade into next section ── */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />

      <style jsx>{`
        @keyframes heroProgress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Quick Links Bar
// ─────────────────────────────────────────────────────────────
const quickLinks = [
  { icon: BookOpen, label: "Admission Portal", href: "#admissions", color: "bg-blue-600" },
  { icon: Award, label: "Scholarships", href: "#scholarships", color: "bg-yellow-600" },
  { icon: Download, label: "Download Forms", href: "#forms", color: "bg-red-600" },
  { icon: Calendar, label: "Academic Calendar", href: "#calendar", color: "bg-purple-600" },
  { icon: Users, label: "Alumni Network", href: "#alumni", color: "bg-indigo-600" },
  { icon: Camera, label: "Photo Gallery", href: "#gallery", color: "bg-pink-600" },
];

function QuickBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {quickLinks.map(({ icon: Icon, label, href, color }) => (
            <a
              key={label}
              href={href}
              className={`${color} text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 hover:scale-105 transition-all shadow-sm`}
            >
              <Icon size={14} /> {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// About + Vision (combined, asymmetric)
// ─────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Tag */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-10 bg-orange-500" />
          <span className="text-orange-600 text-xs font-bold tracking-widest uppercase">
            Who We Are
          </span>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left large text column */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              Shaping the Creative
              <span className="text-orange-600"> Voices</span> of
              North-East India
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Founded in 1999 as JCFTI and later renamed in honour of legendary
              Assamese musician and filmmaker Dr. Bhupen Hazarika, DBHRGFTI is
              the only government Film &amp; Television Training Institute in the
              North-Eastern region of India.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Over more than three decades, the institute has trained thousands of
              film technicians, directors, cinematographers, and broadcast
              journalists — many of whom have gone on to shape the regional and
              national film industry.
            </p>

            {/* Milestones — horizontal timeline */}
            <div className="relative flex items-start gap-0 overflow-x-auto pb-2">
              {[
                { year: "1999", event: "Founded as JCFTI" },
                { year: "2011", event: "Renamed RGFTI" },
                { year: "2016", event: "Renamed DBHRGFTI" },
                { year: "Today", event: "37+ years of service" },
              ].map((m, i, arr) => (
                <div key={m.year} className="flex items-center flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-orange-100 border-2 border-orange-500 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                    </div>
                    <div className="text-orange-600 font-black text-sm mt-2">{m.year}</div>
                    <div className="text-gray-500 text-xs text-center mt-1 max-w-[80px]">{m.event}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-16 h-0.5 bg-orange-200 -mt-8 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-10">
              <Link
                href="/history"
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors text-sm"
              >
                Our History <ArrowRight size={15} />
              </Link>
              <Link
                href="/what-we-do"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors text-sm"
              >
                What We Do
              </Link>
            </div>
          </div>

          {/* Right — Vision + Mission cards */}
          <div className="lg:col-span-2 space-y-5">
            {/* Vision */}
            <div className="bg-gradient-to-br from-[#0D1117] to-[#1a1a2e] rounded-2xl p-7 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye size={18} className="text-white" />
                </div>
                <h3 className="font-black text-lg">Our Vision</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                To be the premier institution for Film &amp; Television education in
                North-East India — nurturing creative talent, raising technical
                excellence, and establishing film as a medium of education and
                artistic expression.
              </p>
            </div>

            {/* Mission highlights */}
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target size={18} className="text-white" />
                </div>
                <h3 className="font-black text-lg text-gray-900">Our Mission</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Impart training in all aspects of Film & TV production",
                  "Confer Diplomas & Certificates to qualified students",
                  "Facilitate research in Film & Television",
                  "Coordinate activities of NE region film technicians",
                  "Raise technical standards of regional films",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <ChevronRight size={15} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-1 mt-4 text-orange-600 hover:text-orange-800 text-sm font-semibold transition-colors"
              >
                View all objectives <ArrowRight size={13} />
              </Link>
            </div>

            {/* Alumni badge */}
            <div className="bg-gray-900 rounded-2xl p-6 flex items-center gap-4">
              <div className="text-4xl font-black text-orange-400">5000+</div>
              <div className="text-gray-300 text-sm leading-snug">
                Alumni across India &amp; the world
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Programs (tabbed)
// ─────────────────────────────────────────────────────────────
const PROGRAMS = [
  {
    level: "UG",
    title: "B.Sc. in Film & Television Production",
    duration: "3 Years",
    seats: 30,
    icon: Film,
    color: "bg-blue-600",
    tags: ["Direction", "Cinematography", "Editing", "Sound"],
    desc: "A comprehensive program covering all aspects of film and television production, from pre-production to post-production.",
  },
  {
    level: "PG",
    title: "P.G. Diploma in Cinematography",
    duration: "1 Year",
    seats: 20,
    icon: Camera,
    color: "bg-orange-600",
    tags: ["Camera", "Lighting", "Digital Imaging", "Color Grading"],
    desc: "Advanced training in the art and science of cinematography for aspiring directors of photography.",
  },
  {
    level: "PG",
    title: "P.G. Diploma in Film Direction",
    duration: "1 Year",
    seats: 15,
    icon: Clapperboard,
    color: "bg-red-600",
    tags: ["Screenplay", "Direction", "Film Studies", "Workshop"],
    desc: "Intensive program in narrative storytelling, mise-en-scène, actor direction, and film language.",
  },
  {
    level: "Diploma",
    title: "Diploma in Television Journalism",
    duration: "2 Years",
    seats: 25,
    icon: Monitor,
    color: "bg-green-600",
    tags: ["Reporting", "Anchoring", "News Production", "Editing"],
    desc: "Training in broadcast journalism, news production, anchoring, and digital content creation.",
  },
  {
    level: "Certificate",
    title: "Certificate in Short Film Making",
    duration: "6 Months",
    seats: 40,
    icon: Film,
    color: "bg-purple-600",
    tags: ["Story", "Shoot", "Edit", "Screen"],
    desc: "A hands-on certificate course focused on the craft of short film storytelling using digital cameras.",
  },
  {
    level: "PG",
    title: "P.G. Diploma in Sound Design",
    duration: "1 Year",
    seats: 15,
    icon: Mic,
    color: "bg-yellow-600",
    tags: ["Recording", "Mixing", "Foley", "Spatial Audio"],
    desc: "Specialized training in film sound — recording, mixing, Foley, and spatial audio for cinema.",
  },
];

const TABS = ["All", "UG", "PG", "Diploma", "Certificate"];

function ProgramsSection() {
  const [activeTab, setActiveTab] = useState("All");
  const filtered =
    activeTab === "All"
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.level === activeTab);

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-orange-500" />
              <span className="text-orange-600 text-xs font-bold tracking-widest uppercase">
                Academic Programs
              </span>
            </div>
            <h2 className="text-4xl font-black text-gray-900">Our Courses</h2>
          </div>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === t
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-orange-400"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Program list */}
        <div className="space-y-4">
          {filtered.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-5 flex flex-col md:flex-row md:items-center gap-5 group"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 ${p.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <Icon size={22} className="text-white" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full text-white ${p.color}`}
                    >
                      {p.level}
                    </span>
                    <h3 className="font-bold text-gray-800 group-hover:text-orange-700 transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-2 max-w-2xl">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta */}
                <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-1 flex-shrink-0 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> {p.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={13} /> {p.seats} seats
                  </span>
                </div>

                {/* Arrow */}
                <a
                  href="#admissions"
                  className="flex items-center gap-1 text-orange-600 hover:text-orange-800 font-semibold text-sm flex-shrink-0 transition-colors"
                >
                  Apply <ArrowRight size={15} />
                </a>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-8 py-3 rounded-xl transition-all text-sm"
          >
            <GraduationCap size={18} /> View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Stats
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
  icon: Icon,
  value,
  suffix,
  label,
  accent,
}: {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  accent: string;
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
    <div ref={ref} className="text-center px-6 py-8 group">
      <div
        className={`w-14 h-14 ${accent} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
      >
        <Icon size={26} className="text-white" />
      </div>
      <div className="text-5xl font-black text-gray-900 leading-none">
        {count}
        <span className="text-orange-500">{suffix}</span>
      </div>
      <div className="text-gray-500 text-sm mt-2 font-medium">{label}</div>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-orange-500" />
            <span className="text-orange-600 text-xs font-bold tracking-widest uppercase">
              By the Numbers
            </span>
            <div className="h-px w-10 bg-orange-500" />
          </div>
          <h2 className="text-4xl font-black text-gray-900">
            Decades of Impact
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
          <StatItem icon={Building}  value={37}   suffix="+" label="Years of Excellence" accent="bg-orange-600" />
          <StatItem icon={Users}     value={5000} suffix="+" label="Alumni Worldwide"    accent="bg-blue-600"   />
          <StatItem icon={Film}      value={300}  suffix="+" label="Films Produced"      accent="bg-green-600"  />
          <StatItem icon={Trophy}    value={48}   suffix=""  label="Awards Won"          accent="bg-purple-600" />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Admission CTA
// ─────────────────────────────────────────────────────────────
function AdmissionCTA() {
  return (
    <section
      id="admissions"
      className="py-24 bg-[#0D1117] relative overflow-hidden"
    >
      {/* Film-strip top / bottom */}
      <div className="absolute top-0 left-0 w-full h-5 flex pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="flex-1 border-r border-orange-900/40 bg-black/60" />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-5 flex pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="flex-1 border-r border-orange-900/40 bg-black/60" />
        ))}
      </div>

      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-10 bg-orange-500" />
          <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">
            Admissions Open
          </span>
          <div className="h-px w-10 bg-orange-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
          Begin Your Journey in
          <span className="text-orange-500"> Film & Television</span>
        </h2>
        <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Apply now and join a legacy of storytellers, cinematographers, and
          media professionals who have shaped North-East India&apos;s film
          landscape.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#programs"
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-orange-900/30"
          >
            <GraduationCap size={18} /> Apply Now
          </a>
          <Link
            href="/contact"
            className="border border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl flex items-center gap-2 transition-all"
          >
            <Phone size={18} /> Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export default function Home1Page() {
  return (
    <main>
      <NotificationBanner />
      <Navbar />
      <Hero />
      <AnimateIn variant="fadeDown"><QuickBar /></AnimateIn>
      <AnimateIn variant="fadeUp"><AboutSection /></AnimateIn>
      <AnimateIn variant="fadeUp"><ProgramsSection /></AnimateIn>
      <AnimateIn variant="fadeUp"><StudyOptions /></AnimateIn>
      <AnimateIn variant="fadeUp"><StatsSection /></AnimateIn>
      <AnimateIn variant="fadeUp">
        <ImageSliderSection
          heading="Life at DBHRGFTI"
          tag="Campus Gallery"
          sectionBg="bg-gray-50"
          accent="text-orange-600"
          accentHex="#ea580c"
        />
      </AnimateIn>
      <AnimateIn variant="fadeUp"><SocialMedia /></AnimateIn>
      <AnimateIn variant="fadeUp"><AlumniSlider /></AnimateIn>
      <AnimateIn variant="scaleUp"><AdmissionCTA /></AnimateIn>
      <AnimateIn variant="fadeUp"><Footer /></AnimateIn>
    </main>
  );
}
