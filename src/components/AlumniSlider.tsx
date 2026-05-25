"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const GAP = 24;

const ALUMNI = [
  {
    name: "Arup Hazarika",
    batch: "Batch 2005",
    role: "Director",
    org: "Doordarshan Kendra, Guwahati",
    quote: "DBHRGFTI gave me the technical foundation and creative freedom to tell authentic Assamese stories. Every frame I shoot today carries the lessons from this institute.",
    initials: "AH",
    color: "from-red-500 to-rose-700",
  },
  {
    name: "Priyanka Borah",
    batch: "Batch 2010",
    role: "Cinematographer",
    org: "ETV Assam",
    quote: "The hands-on training with professional equipment was unmatched. Within six months of graduating I was shooting live broadcasts for a national channel.",
    initials: "PB",
    color: "from-indigo-500 to-blue-700",
  },
  {
    name: "Manash Kalita",
    batch: "Batch 2008",
    role: "Award-winning Film Editor",
    org: "Freelance — Mumbai",
    quote: "I learned to respect every cut, every frame. The editing suites here were where I discovered my true passion for post-production.",
    initials: "MK",
    color: "from-emerald-500 to-teal-700",
  },
  {
    name: "Rimpi Das",
    batch: "Batch 2013",
    role: "Broadcast Journalist",
    org: "News18 Assam/NE",
    quote: "The journalism track prepared me for the chaos and pressure of live news like nothing else could. I owe my career entirely to the training here.",
    initials: "RD",
    color: "from-amber-500 to-orange-700",
  },
  {
    name: "Bikash Nath",
    batch: "Batch 2007",
    role: "Sound Designer",
    org: "Jio Studios, Mumbai",
    quote: "DBHRGFTI's sound studio was where I fell in love with audio. From Foley to mixing — every skill I use professionally was built here.",
    initials: "BN",
    color: "from-purple-500 to-violet-700",
  },
  {
    name: "Susmita Gogoi",
    batch: "Batch 2015",
    role: "Documentary Filmmaker",
    org: "National Film Development Corporation",
    quote: "The faculty encouraged me to find my own voice as a storyteller. My debut documentary screened at MIFF — a dream I never imagined would come true.",
    initials: "SG",
    color: "from-pink-500 to-rose-700",
  },
  {
    name: "Debajit Saikia",
    batch: "Batch 2011",
    role: "Production Designer",
    org: "Rang Mahal Films",
    quote: "Understanding every department — from lighting to direction — gave me an edge as a production designer. DBHRGFTI teaches you the whole craft.",
    initials: "DS",
    color: "from-cyan-500 to-sky-700",
  },
];

export default function AlumniSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const maxIndex = ALUMNI.length - visible;

  const measure = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const w = el.offsetWidth;
    const v = w >= 1024 ? 3 : w >= 640 ? 2 : 1;
    setVisible(v);
    setCardWidth((w - GAP * (v - 1)) / v);
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [measure]);

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, ALUMNI.length - visible)));
  }, [visible]);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);

  useEffect(() => {
    if (paused || maxIndex <= 0) return;
    const t = setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), 4000);
    return () => clearInterval(t);
  }, [paused, maxIndex]);

  const step = cardWidth + GAP;

  return (
    <section className="py-20 bg-[#0f172a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">
            Our Alumni
          </span>
          <h2 className="text-4xl font-black text-white">
            Stories From Our Graduates
          </h2>
          <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4" />
          <p className="text-gray-400 mt-4 text-sm max-w-xl mx-auto leading-relaxed">
            Over 5,000 alumni working across India and beyond — in broadcast,
            cinema, OTT, and documentary filmmaking.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: GAP,
              transform: `translateX(-${index * step}px)`,
            }}
          >
            {ALUMNI.map((a) => (
              <div
                key={a.name}
                className="flex-shrink-0 bg-[#1e293b] rounded-2xl p-6 flex flex-col border border-white/5 hover:border-yellow-500/30 transition-colors"
                style={{ width: cardWidth || "auto" }}
              >
                {/* Quote icon */}
                <Quote size={28} className="text-yellow-500/40 mb-4 flex-shrink-0" />

                {/* Testimonial */}
                <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{a.quote}&rdquo;
                </p>

                {/* Alumni info */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${a.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-black text-sm">{a.initials}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">{a.name}</p>
                    <p className="text-yellow-400 text-xs font-medium">{a.role}</p>
                    <p className="text-gray-500 text-xs">{a.org} · {a.batch}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            disabled={index === 0}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-yellow-500 hover:border-yellow-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 h-2 bg-yellow-500"
                    : "w-2 h-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={index >= maxIndex}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-yellow-500 hover:border-yellow-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
