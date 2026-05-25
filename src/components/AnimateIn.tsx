"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

type Variant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleUp" | "fadeIn";

const HIDDEN: Record<Variant, string> = {
  fadeUp:    "opacity-0 translate-y-10",
  fadeDown:  "opacity-0 -translate-y-6",
  fadeLeft:  "opacity-0 -translate-x-10",
  fadeRight: "opacity-0 translate-x-10",
  scaleUp:   "opacity-0 scale-95",
  fadeIn:    "opacity-0",
};

const VISIBLE = "opacity-100 translate-y-0 translate-x-0 scale-100";

export default function AnimateIn({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 650,
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${inView ? VISIBLE : HIDDEN[variant]} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: inView ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
