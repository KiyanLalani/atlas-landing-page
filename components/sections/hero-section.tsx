"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
export default function HeroSection() {

  return (
    <section className="relative min-h-screen w-full flex items-end justify-center bg-[#0d0d0d] overflow-hidden pb-32" aria-label="Hero Section">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://x.ai/images/news/funding.webp"
          alt="Atlas Intelligence background"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90" />
      </div>

      {/* Large semi-transparent Atlas text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[30vw] font-bold bg-gradient-to-r from-zinc-300 to-transparent bg-clip-text text-transparent leading-none" aria-hidden="true">
          ATLAS
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center md:mt-[100px]"
        >
          <h1 className="sr-only">Atlas Intelligence - AI-Powered Educational App for iOS</h1>

          {/* V2 announcement banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link href="/newchapter">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-zinc-700/60 bg-zinc-900/70 backdrop-blur-sm hover:border-zinc-500/60 hover:bg-zinc-800/70 transition-all duration-300 cursor-pointer group">
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <span className="text-xs font-semibold tracking-[0.12em] uppercase text-zinc-400">New</span>
                </span>
                <span className="w-px h-3 bg-zinc-700" />
                <AnimatedShinyText className="text-sm text-zinc-300">
                  Atlas Intelligence V2 — read the announcement
                </AnimatedShinyText>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all duration-200" />
              </div>
            </Link>
          </motion.div>

          {/* Description text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-zinc-300 text-sm max-w-md text-center"
          >
            V2 is in development. An AI tutor built specifically for GCSE and A Level students, rebuilt from the ground up. Join the waitlist for early access.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/90 to-transparent" />
    </section>
  );
}