"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, ArrowRight, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/*
  BANNER IMAGE SPEC
  ─────────────────────────────────────────
  Recommended size : 1920 × 680 px
  Minimum size     : 1280 × 500 px
  Format           : JPG or WebP
  Max file size    : 500 KB (use TinyPNG to compress)
  Aspect ratio     : ~2.8 : 1  (landscape, wide)

  Place images in:
    /public/images/banner-1.jpg
    /public/images/banner-2.jpg
    /public/images/banner-3.jpg

  Then set the `image` field on each slide below.
  While no image is set, a gradient placeholder is shown.
  ─────────────────────────────────────────
*/

const SLIDES_CONFIG = [
  {
    image: "",          // ← set to "/images/banner-1.jpg"
    fallbackBg: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
    overlayOpacity: "bg-black/55",
    accent: "bg-yellow-500",
    accentText: "text-yellow-400",
    keys: { badge: "hero1Badge", title: "hero1Title", sub: "hero1Sub", cta1: "hero1Cta1", cta2: "hero1Cta2" },
    stats: [
      { value: "37+",   labelKey: "stat1" },
      { value: "5000+", labelKey: "stat2" },
      { value: "12",    labelKey: "stat3" },
    ],
    cta1Href: "#admissions",
    cta2Href: "#gallery",
  },
  {
    image: "",          // ← set to "/images/banner-2.jpg"
    fallbackBg: "from-[#0f3460] via-[#16213e] to-[#1a1a2e]",
    overlayOpacity: "bg-black/60",
    accent: "bg-red-500",
    accentText: "text-red-400",
    keys: { badge: "hero2Badge", title: "hero2Title", sub: "hero2Sub", cta1: "hero2Cta1", cta2: "hero2Cta2" },
    stats: [
      { value: "B.Sc.", labelKey: "undergraduate" },
      { value: "P.G.",  labelKey: "postGraduate" },
      { value: "Cert.", labelKey: "certificate" },
    ],
    cta1Href: "#courses",
    cta2Href: "#gallery",
  },
  {
    image: "",          // ← set to "/images/banner-3.jpg"
    fallbackBg: "from-[#451a03] via-[#78350f] to-[#92400e]",
    overlayOpacity: "bg-black/50",
    accent: "bg-yellow-400",
    accentText: "text-yellow-300",
    keys: { badge: "hero3Badge", title: "hero3Title", sub: "hero3Sub", cta1: "hero3Cta1", cta2: "hero3Cta2" },
    stats: [
      { value: "🏆",   labelKey: "statNA" },
      { value: "20+",  labelKey: "stat20" },
      { value: "100%", labelKey: "stat100" },
    ],
    cta1Href: "#about",
    cta2Href: "#events",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const { tr } = useLanguage();

  const goTo = useCallback(
    (next: number) => {
      if (animating || next === current) return;
      setPrev(current);
      setCurrent(next);
      setAnimating(true);
      setTimeout(() => { setPrev(null); setAnimating(false); }, 700);
    },
    [animating, current]
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => goTo((current + 1) % SLIDES_CONFIG.length), 5500);
    return () => clearInterval(t);
  }, [paused, current, goTo]);

  const slide = SLIDES_CONFIG[current];

  // helper to get translation value by string key
  const get = (key: string) => (tr as unknown as Record<string, string>)[key] ?? key;

  return (
    <section
      className="relative h-[500px] md:h-[640px] lg:h-[680px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── SLIDES ── */}
      {SLIDES_CONFIG.map((s, i) => {
        const isActive = i === current;
        const isPrev   = i === prev;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              isActive ? "opacity-100 z-10" : isPrev ? "opacity-0 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background — image or gradient */}
            {s.image ? (
              <Image
                src={s.image}
                alt={`Banner ${i + 1}`}
                fill
                priority={i === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${s.fallbackBg}`}>
                {/* decorative circles when no image */}
                <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white/10"></div>
                <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full border border-white/10"></div>
              </div>
            )}

            {/* Dark overlay for text readability */}
            <div className={`absolute inset-0 ${s.overlayOpacity}`}></div>
          </div>
        );
      })}

      {/* ── FILM STRIP decorations ── */}
      <div className="absolute top-0 left-0 w-full h-4 flex z-20 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="flex-1 border-r border-yellow-900/60 bg-black/50" />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-4 flex z-20 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="flex-1 border-r border-yellow-900/60 bg-black/50" />
        ))}
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="grid md:grid-cols-2 gap-10 w-full items-center py-10">
          {/* Left — text */}
          <div
            key={current}
            className="animate-slide-up"
          >
            <span className={`inline-block ${slide.accent} text-black text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider`}>
              {get(slide.keys.badge)}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-white leading-tight mb-5 font-heading whitespace-pre-line drop-shadow-lg">
              {get(slide.keys.title)}
            </h1>

            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 max-w-lg drop-shadow">
              {get(slide.keys.sub)}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={slide.cta1Href}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-xl"
              >
                {get(slide.keys.cta1)} <ArrowRight size={16} />
              </a>
              <a
                href={slide.cta2Href}
                className="border-2 border-white/80 text-white hover:bg-white hover:text-[#1a1a2e] font-bold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 backdrop-blur-sm bg-white/10"
              >
                <Play size={16} /> {get(slide.keys.cta2)}
              </a>
            </div>

            {/* Hotline strip */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="tel:+919957360672"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
              >
                <Phone size={12} className="text-yellow-400 flex-shrink-0" />
                Helpline: +91-9957360672
              </a>
              <a
                href="mailto:rgftiassam@gmail.com"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
              >
                <Mail size={12} className="text-yellow-400 flex-shrink-0" />
                rgftiassam@gmail.com
              </a>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="hidden md:flex flex-col gap-3">
            {slide.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-colors"
              >
                <div className={`w-12 h-12 ${slide.accent} rounded-lg flex items-center justify-center flex-shrink-0 shadow`}>
                  <span className="text-black font-black text-sm text-center leading-tight">{stat.value}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-xl leading-none">{stat.value}</p>
                  <p className={`text-sm mt-0.5 ${slide.accentText}`}>{get(stat.labelKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PREV / NEXT arrows ── */}
      <button
        onClick={() => goTo((current - 1 + SLIDES_CONFIG.length) % SLIDES_CONFIG.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/60 text-white rounded-full p-3 transition-all backdrop-blur-sm border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => goTo((current + 1) % SLIDES_CONFIG.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/60 text-white rounded-full p-3 transition-all backdrop-blur-sm border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* ── DOT indicators + image hint ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <div className="flex gap-2">
          {SLIDES_CONFIG.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-yellow-400 w-8 h-3"
                  : "bg-white/40 hover:bg-white/70 w-3 h-3"
              }`}
            />
          ))}
        </div>

      </div>

      {/* ── Progress bar ── */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10 z-30">
        <div
          key={current}
          className="h-full bg-yellow-400"
          style={{ animation: paused ? "none" : "progress 5.5s linear forwards" }}
        />
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}
