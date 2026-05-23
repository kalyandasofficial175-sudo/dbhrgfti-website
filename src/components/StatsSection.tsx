"use client";
import { useEffect, useRef, useState } from "react";
import { Trophy, Users, Film, Building } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ icon: Icon, value, suffix, label, color }: {
  icon: React.ElementType; value: number; suffix: string; label: string; color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(value, 2000, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center group">
      <div className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors">
        <Icon size={36} className={`${color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
        <div className={`text-4xl font-black ${color} mb-1`}>{count}{suffix}</div>
        <div className="text-gray-300 text-sm font-medium">{label}</div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const { tr } = useLanguage();

  const stats = [
    { icon: Building, value: 37, suffix: "+", label: tr.yearsExcellence, color: "text-yellow-400" },
    { icon: Users, value: 5000, suffix: "+", label: tr.alumniWorldwide, color: "text-blue-400" },
    { icon: Film, value: 300, suffix: "+", label: tr.filmsProduced, color: "text-green-400" },
    { icon: Trophy, value: 48, suffix: "", label: tr.awardsWon, color: "text-red-400" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#1a1a2e] to-[#0f3460]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white font-heading">{tr.statsTitle}</h2>
          <p className="text-gray-400 mt-2">{tr.statsSub}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
        </div>
      </div>
    </section>
  );
}
