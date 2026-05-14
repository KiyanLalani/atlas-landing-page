"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Wrench } from "lucide-react";
import Link from "next/link";

const ghostTiers = [
  { name: "Free", highlight: false },
  { name: "Student", highlight: true },
  { name: "Pro", highlight: false },
];

const ghostFeatures = [4, 5, 3];

export default function PricingPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0d0d0d] overflow-hidden px-4 py-24">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-zinc-800/20 blur-3xl" />
      </div>

      {/* Status pill */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-400 text-sm mb-10"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
        </span>
        Pricing is being finalised
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative z-10 text-center mb-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Plans are on their way
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="relative z-10 text-zinc-400 text-base md:text-lg max-w-md text-center mb-14"
      >
        We're putting together pricing that actually works for students. Check back soon — it'll be worth the wait.
      </motion.p>

      {/* Ghost pricing cards */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-14"
      >
        {ghostTiers.map((tier, i) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl p-6 border overflow-hidden ${
              tier.highlight
                ? "border-zinc-500 bg-zinc-800/50"
                : "border-zinc-800 bg-zinc-900/40"
            }`}
          >
            {tier.highlight && (
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-400 to-transparent" />
            )}

            {/* Tier label */}
            <p className="text-zinc-300 text-sm font-medium mb-4">{tier.name}</p>

            {/* Ghost price block */}
            <div className="h-8 w-24 rounded-lg bg-zinc-700/40 animate-pulse mb-6" />

            {/* Ghost feature lines */}
            <div className="space-y-3">
              {Array.from({ length: ghostFeatures[i] }).map((_, j) => (
                <div
                  key={j}
                  className="h-3 rounded-full bg-zinc-700/30 animate-pulse"
                  style={{ width: `${60 + ((j * 17 + i * 11) % 35)}%`, animationDelay: `${j * 0.1}s` }}
                />
              ))}
            </div>

            {/* Ghost button */}
            <div className="mt-8 h-9 rounded-full bg-zinc-700/30 animate-pulse" />
          </div>
        ))}
      </motion.div>

      {/* Action row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 flex flex-col sm:flex-row gap-3 items-center"
      >
        <Link href="/">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-full text-zinc-400 hover:text-white text-sm transition-all">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </Link>
        <Link href="/waitlist">
          <button className="px-5 py-2.5 bg-white hover:bg-zinc-100 text-black text-sm font-medium rounded-full transition-all">
            Join the waitlist
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
