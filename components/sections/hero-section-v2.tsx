"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroSectionV2() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,0.055) 0%, transparent 60%)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-black flex flex-col overflow-hidden">

      {/* Noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Static glow behind V2 */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-start pl-8 md:pl-16">
        <div
          className="w-[60vw] h-[60vh]"
          style={{
            background: "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Cursor spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 z-0 transition-none"
      />


      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16">

        {/* Pre-label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 mb-6 font-medium"
        >
          Now in development
        </motion.p>

        {/* Giant V2 */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-[28vw] sm:text-[22vw] md:text-[18vw] font-black text-white leading-none select-none"
          style={{ letterSpacing: "-0.04em" }}
        >
          V2.
        </motion.h1>

        {/* Rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
          className="h-px bg-zinc-800 mt-8 mb-10"
        />

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/waitlist">
            <button className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-white text-black text-xs tracking-[0.2em] uppercase font-semibold hover:bg-zinc-200 transition-all duration-300">
              Join the waitlist
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </Link>
          <Link href="/newchapter">
            <button className="inline-flex items-center justify-center px-7 py-3.5 border border-zinc-800 text-zinc-400 text-xs tracking-[0.2em] uppercase font-medium hover:border-zinc-600 hover:text-zinc-200 transition-all duration-300">
              Read announcement
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        className="relative z-10 flex justify-between items-center px-8 pb-10 md:px-16 md:pb-14"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-800">V1 retired · 17 May 2026</span>
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-800">atlasintel.co.uk</span>
      </motion.div>

    </section>
  );
}
