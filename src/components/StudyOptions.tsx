"use client";
import { useState } from "react";

const courses = [
  {
    num: "01",
    level: "Undergraduate",
    title: "B.Sc. in Film & Television Production",
    desc: "A full-length undergraduate program covering every aspect of film and TV production — from pre-production to direction, cinematography, editing, and sound design.",
    tags: ["Cinema", "Cinematography", "Editing", "Sound"],
    duration: "3 Years",
    seats: "20 seats",
    icon: "🎬",
    color: "#cc2222",
    lightColor: "#fff0f0",
  },
  {
    num: "02",
    level: "Post Graduate",
    title: "P.G. Diploma in Cinematography",
    desc: "Advanced training for aspiring Directors of Photography covering camera operation, lighting design, color grading, and DI workflows used in professional productions.",
    tags: ["Camera", "Lighting", "Color Grading", "DI"],
    duration: "1 Year",
    seats: "20 seats",
    icon: "📷",
    color: "#1877f2",
    lightColor: "#f0f5ff",
  },
  {
    num: "03",
    level: "Post Graduate",
    title: "P.G. Diploma in Film Direction",
    desc: "Master the art of directing for film and digital media. Covers visual storytelling, screenplay analysis, actor direction, and the full pipeline from script to screen.",
    tags: ["Direction", "Screenplay", "Production", "Editing"],
    duration: "1 Year",
    seats: "15 seats",
    icon: "🎭",
    color: "#7b2d8b",
    lightColor: "#f8f0ff",
  },
  {
    num: "04",
    level: "Diploma",
    title: "Diploma in Television Journalism",
    desc: "Broadcast journalism skills for regional and national TV channels. Covers news reporting, studio anchoring, field production, and post-production editing.",
    tags: ["Reporting", "Anchoring", "Editing", "Studio"],
    duration: "1 Year",
    seats: "20 seats",
    icon: "📺",
    color: "#2d6a4f",
    lightColor: "#f0faf4",
  },
  {
    num: "05",
    level: "Certificate",
    title: "Certificate in Short Film Making",
    desc: "An intensive short-form filmmaking course for beginners and enthusiasts. Covers the complete process of writing, shooting, and editing a short film.",
    tags: ["Direction", "Camera", "Sound", "Post"],
    duration: "6 Months",
    seats: "25 seats",
    icon: "🎞️",
    color: "#e8a42a",
    lightColor: "#fffbf0",
  },
  {
    num: "06",
    level: "Post Graduate",
    title: "P.G. Diploma in Sound Design",
    desc: "Professional audio production for film, TV, and digital media. Covers dialogue editing, Foley recording, music scoring, mixing, and broadcast delivery standards.",
    tags: ["Recording", "Mixing", "Foley", "Post Audio"],
    duration: "1 Year",
    seats: "15 seats",
    icon: "🎧",
    color: "#0097a7",
    lightColor: "#f0fbfc",
  },
];

const CARD_HEIGHT = 340;

export default function StudyOptions() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="study-options" style={{ background: "#f4f6f5", padding: "64px 24px" }}>

      {/* Header */}
      <div style={{ maxWidth: "1100px", margin: "0 auto 44px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <p style={{ color: "#cc2222", fontSize: "11px", fontWeight: "700", letterSpacing: "3px", fontFamily: "Arial, sans-serif", margin: "0 0 6px" }}>
            ACADEMIC PROGRAMS
          </p>
          <h2 style={{ color: "#1b3a2d", fontSize: "2.2rem", fontWeight: "800", margin: 0, lineHeight: "1.1" }}>
            Our Courses
          </h2>
          <div style={{ width: "48px", height: "3px", background: "#cc2222", marginTop: "10px", borderRadius: "2px" }} />
        </div>
        <a href="#" style={{ color: "#2d6a4f", fontSize: "13px", textDecoration: "none", fontFamily: "Arial, sans-serif", fontWeight: "600", border: "1px solid #2d6a4f", padding: "8px 18px", borderRadius: "20px" }}>
          View all programs →
        </a>
      </div>

      {/* Card grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{ maxWidth: "1100px", margin: "0 auto", gap: "24px" }}
      >
        {courses.map((c, i) => {
          const isFlipped = flipped === i;
          return (
            <div
              key={c.num}
              style={{ height: `${CARD_HEIGHT}px`, perspective: "1000px", cursor: "pointer" }}
              onMouseEnter={() => setFlipped(i)}
              onMouseLeave={() => setFlipped(null)}
            >
              {/* Rotating wrapper */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.65s cubic-bezier(0.4,0.2,0.2,1)",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >

                {/* ── FRONT ── */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    borderRadius: "14px",
                    overflow: "hidden",
                    background: "#fff",
                    border: "1px solid #e8e8e8",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.07)",
                    display: "flex",
                    flexDirection: "column",
                  } as React.CSSProperties}
                >
                  {/* Coloured top band */}
                  <div style={{ background: c.color, padding: "28px 24px 20px", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                    {/* Watermark number */}
                    <div style={{ position: "absolute", right: "-8px", top: "-12px", fontSize: "96px", fontWeight: "900", color: "rgba(255,255,255,0.12)", lineHeight: "1", userSelect: "none", pointerEvents: "none" }}>
                      {c.num}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
                      <span style={{ background: "rgba(255,255,255,0.22)", color: "#fff", fontSize: "10px", fontWeight: "700", padding: "3px 10px", borderRadius: "20px", letterSpacing: "0.5px" }}>
                        {c.level}
                      </span>
                      <span style={{ fontSize: "36px", lineHeight: "1" }}>{c.icon}</span>
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px", fontWeight: "800", marginTop: "10px", letterSpacing: "1px" }}>
                      {c.num}
                    </div>
                  </div>

                  {/* White body */}
                  <div style={{ flex: 1, padding: "20px 22px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ color: "#1b3a2d", fontSize: "14px", fontWeight: "800", lineHeight: "1.4", margin: "0 0 12px" }}>
                        {c.title}
                      </h3>
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        {c.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{ background: c.lightColor, color: c.color, fontSize: "10px", fontWeight: "600", padding: "3px 10px", borderRadius: "20px", border: `1px solid ${c.color}33` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "14px", borderTop: "1px solid #f0f0f0" }}>
                      <span style={{ color: "#999", fontSize: "11px" }}>
                        ⏱ {c.duration} · 💺 {c.seats}
                      </span>
                      <span style={{ color: c.color, fontSize: "11px", fontWeight: "700" }}>
                        Hover →
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── BACK ── */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    borderRadius: "14px",
                    overflow: "hidden",
                    background: c.color,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "28px 26px",
                  } as React.CSSProperties}
                >
                  {/* Top row */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "36px", lineHeight: "1" }}>{c.icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "52px", fontWeight: "900", lineHeight: "1" }}>{c.num}</span>
                  </div>

                  {/* Title + desc */}
                  <div>
                    <h3 style={{ color: "#fff", fontSize: "15px", fontWeight: "800", lineHeight: "1.35", margin: "0 0 10px" }}>
                      {c.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "12px", lineHeight: "1.75", margin: 0 }}>
                      {c.desc}
                    </p>
                  </div>

                  {/* Meta + CTA */}
                  <div>
                    <div style={{ display: "flex", gap: "24px", marginBottom: "14px" }}>
                      <div>
                        <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "9px", letterSpacing: "1px", marginBottom: "2px" }}>DURATION</div>
                        <div style={{ color: "#fff", fontSize: "13px", fontWeight: "700" }}>⏱ {c.duration}</div>
                      </div>
                      <div>
                        <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "9px", letterSpacing: "1px", marginBottom: "2px" }}>INTAKE</div>
                        <div style={{ color: "#fff", fontSize: "13px", fontWeight: "700" }}>💺 {c.seats}</div>
                      </div>
                    </div>
                    <a
                      href="#admissions"
                      style={{ display: "block", textAlign: "center", background: "#fff", color: c.color, padding: "11px 0", borderRadius: "8px", fontWeight: "800", fontSize: "13px", textDecoration: "none" }}
                    >
                      Apply Now →
                    </a>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      <p style={{ textAlign: "center", color: "#aaa", fontSize: "11px", marginTop: "28px" }}>
        Hover over a card to see full program details
      </p>
    </section>
  );
}
