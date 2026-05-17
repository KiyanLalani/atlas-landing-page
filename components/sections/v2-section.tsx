"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const changes = [
  {
    index: "01",
    label: "Model layer",
    body: "Retrained against exam board specifications rather than general internet text.",
  },
  {
    index: "02",
    label: "Content engine",
    body: "Restructured around accuracy at the level of individual exam board requirements.",
  },
  {
    index: "03",
    label: "Distribution",
    body: "Built for access across schools, regardless of income or geography.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function V2Section() {
  return (
    <section className="bg-black px-8 md:px-16 py-28 md:py-36 border-t border-zinc-900">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-20 md:mb-28"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 mb-6 font-medium">
          What changed
        </p>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight"
          style={{ letterSpacing: "-0.03em" }}
        >
          Built again.<br />From nothing.
        </h2>
      </motion.div>

      {/* Changes list */}
      <div className="border-t border-zinc-900">
        {changes.map((item, i) => (
          <motion.div
            key={item.index}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-16 py-10 border-b border-zinc-900"
          >
            <span className="text-[10px] tracking-[0.3em] text-zinc-700 font-medium shrink-0 mt-1">
              {item.index}
            </span>
            <span className="text-white font-semibold text-xl w-48 shrink-0">
              {item.label}
            </span>
            <span className="text-zinc-500 text-base leading-relaxed max-w-xl">
              {item.body}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Release approach */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-28 flex flex-col md:flex-row md:items-end md:justify-between gap-12"
      >
        <div className="max-w-xl">
          <p className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 mb-6 font-medium">
            Release approach
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed font-light">
            V2 opens to ambassadors first. Then early users. Then wider access.
            No fixed date. Each stage releases when it meets our standard.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link href="/waitlist">
            <button className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-white text-black text-xs tracking-[0.2em] uppercase font-semibold hover:bg-zinc-200 transition-all duration-300">
              Join the waitlist
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </Link>
          <Link href="/newchapter">
            <button className="inline-flex items-center justify-center px-7 py-3.5 border border-zinc-800 text-zinc-400 text-xs tracking-[0.2em] uppercase font-medium hover:border-zinc-600 hover:text-zinc-200 transition-all duration-300">
              Full announcement
            </button>
          </Link>
        </div>
      </motion.div>

    </section>
  );
}
