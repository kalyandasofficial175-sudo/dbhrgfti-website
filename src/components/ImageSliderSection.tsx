"use client";

/*
  CARD SLIDER — pixel-perfect layout
  Each card = (containerWidth - gap × (visible-1)) / visible
  Step       = cardWidth + gap
  maxIndex   = CARDS.length - visible  → last card always flush-right, no blank space

  Add real photos to public/images/gallery/:
    studio-a.jpg  ← already exists
    slide-2.jpg … slide-7.jpg
  Recommended: 800 × 600 px, JPG/WebP, < 200 KB each
*/

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GAP = 20; // px between cards

const CARDS = [
  { image: "/images/gallery/studio-a.jpg", fallback: "from-[#1a1a2e] to-[#0f3460]",  label: "Production Studio",  caption: "State-of-the-art studio where students bring their visions to life."           },
  { image: "/images/gallery/slide-2.jpg",  fallback: "from-[#451a03] to-[#92400e]",  label: "Campus",             caption: "Our serene campus in the heart of Kahilipara, Guwahati."                       },

  { image: "/images/gallery/studio-a.jpg", fallback: "from-[#1a1a2e] to-[#0f3460]",  label: "Production Studio",  caption: "State-of-the-art studio where students bring their visions to life."           },
  { image: "/images/gallery/studio-a.jpg", fallback: "from-[#1a1a2e] to-[#0f3460]",  label: "Production Studio",  caption: "State-of-the-art studio where students bring their visions to life."           },
  { image: "/images/gallery/studio-a.jpg", fallback: "from-[#1a1a2e] to-[#0f3460]",  label: "Production Studio",  caption: "State-of-the-art studio where students bring their visions to life."           },
  { image: "/images/gallery/studio-a.jpg", fallback: "from-[#1a1a2e] to-[#0f3460]",  label: "Production Studio",  caption: "State-of-the-art studio where students bring their visions to life."           },
  { image: "/images/gallery/studio-a.jpg", fallback: "from-[#1a1a2e] to-[#0f3460]",  label: "Production Studio",  caption: "State-of-the-art studio where students bring their visions to life."           },
  { image: "/images/gallery/studio-a.jpg", fallback: "from-[#1a1a2e] to-[#0f3460]",  label: "Production Studio",  caption: "State-of-the-art studio where students bring their visions to life."           },
  { image: "/images/gallery/studio-a.jpg", fallback: "from-[#1a1a2e] to-[#0f3460]",  label: "Production Studio",  caption: "State-of-the-art studio where students bring their visions to life."           },
  { image: "/images/gallery/studio-a.jpg", fallback: "from-[#1a1a2e] to-[#0f3460]",  label: "Production Studio",  caption: "State-of-the-art studio where students bring their visions to life."           },
  // { image: "/images/gallery/slide-a.jpg",  fallback: "from-[#064e3b] to-[#065f46]",  label: "Students on Set",    caption: "Hands-on production training from the very first semester."                    },
  // { image: "/images/gallery/slide-4.jpg",  fallback: "from-[#1e1b4b] to-[#3730a3]",  label: "Edit Suites",        caption: "Industry-standard NLE workstations and colour-grading suites."               },
  // { image: "/images/gallery/slide-a.jpg",  fallback: "from-[#4a044e] to-[#86198f]",  label: "Annual Festival",    caption: "Our flagship film festival celebrating the best of student cinema."            },
  // { image: "/images/gallery/slide-6.jpg",  fallback: "from-[#1c1917] to-[#44403c]",  label: "Equipment Room",     caption: "Professional cameras, lenses, lighting rigs and grip gear."                  },
  // { image: "/images/gallery/slide-a.jpg",  fallback: "from-[#0c4a6e] to-[#0369a1]",  label: "Sound Studio",       caption: "Dedicated sound recording and Foley studio for audio production."             },
];

interface Props {
  heading?:   string;
  tag?:       string;
  sectionBg?: string;
  accent?:    string;
  accentHex?: string;
}

export default function ImageSliderSection({
  heading   = "Campus Gallery",
  tag       = "Our Institute",
  sectionBg = "bg-gray-50",
  accent    = "text-yellow-600",
  accentHex = "#eab308",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  // ── responsive card count ───────────────────────────────────
  const [visible, setVisible] = useState(3);
  useEffect(() => {
    const calc = () =>
      setVisible(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // ── container width via ResizeObserver ──────────────────────
  const [containerWidth, setContainerWidth] = useState(0);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) =>
      setContainerWidth(entry.contentRect.width)
    );
    ro.observe(el);
    setContainerWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  // card dimensions derived from actual container px
  const cardWidth = containerWidth > 0
    ? (containerWidth - GAP * (visible - 1)) / visible
    : 0;
  const step     = cardWidth + GAP;
  const maxIndex = Math.max(0, CARDS.length - visible);

  // ── index ───────────────────────────────────────────────────
  const [index,  setIndex]  = useState(0);
  const [paused, setPaused] = useState(false);

  // clamp when visible count changes
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, CARDS.length - visible)));
  }, [visible]);

  const goNext = useCallback(() =>
    setIndex((i) => (i >= maxIndex ? 0 : i + 1)), [maxIndex]);

  const goPrev = useCallback(() =>
    setIndex((i) => (i <= 0 ? maxIndex : i - 1)), [maxIndex]);

  // auto-advance
  useEffect(() => {
    if (paused) return;
    const t = setInterval(goNext, 3500);
    return () => clearInterval(t);
  }, [paused, goNext]);

  // keyboard
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { setPaused(true); goNext(); }
      if (e.key === "ArrowLeft")  { setPaused(true); goPrev(); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [goNext, goPrev]);

  // dot pages
  const pages     = Math.ceil(CARDS.length / visible);
  const activeDot = Math.min(Math.round(index / visible), pages - 1);

  return (
    <section className={`py-16 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-4">

        {/* Header + arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className={`font-bold text-sm tracking-widest uppercase ${accent}`}>{tag}</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-1">{heading}</h2>
            <div className="w-12 h-1 rounded-full mt-3" style={{ background: accentHex }} />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setPaused(true); goPrev(); }}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-gray-500 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-all shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => { setPaused(true); goNext(); }}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-gray-500 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-all shadow-sm"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Track — width is exactly all cards + all gaps */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap:       `${GAP}px`,
              transform: `translateX(-${index * step}px)`,
            }}
          >
            {CARDS.map((card, i) => (
              <div
                key={i}
                className="flex-shrink-0 group cursor-pointer"
                style={{ width: `${cardWidth}px` }}
              >
                {/* Image card */}
                <div
                  className="relative rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300"
                  style={{ aspectRatio: "4/3" }}
                >
                  {/* Fallback gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.fallback}`} />

                  {/* Photo */}
                  {cardWidth > 0 && (
                    <Image
                      src={card.image}
                      alt={card.label}
                      fill
                      sizes={`${Math.round(cardWidth)}px`}
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Label pill */}
                  <span
                    className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
                    style={{ background: accentHex }}
                  >
                    {card.label}
                  </span>

                  {/* Caption — slides up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs leading-relaxed">{card.caption}</p>
                  </div>
                </div>

                {/* Title below card */}
                <p className="mt-3 px-1 font-bold text-gray-800 text-sm truncate group-hover:text-gray-950 transition-colors">
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: pages }).map((_, p) => (
            <button
              key={p}
              onClick={() => {
                setPaused(true);
                setIndex(Math.min(p * visible, maxIndex));
              }}
              aria-label={`Go to group ${p + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width:      p === activeDot ? "28px" : "8px",
                height:     "8px",
                background: p === activeDot ? accentHex : "#d1d5db",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
