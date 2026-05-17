"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const expandLine = {
  hidden: { scaleX: 0, originX: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const changes = [
  {
    label: "Model layer",
    body: "Retrained against exam board specifications rather than general internet text.",
  },
  {
    label: "Content engine",
    body: "Restructured around accuracy at the level of individual exam board requirements.",
  },
  {
    label: "Distribution",
    body: "Built for access across schools, regardless of income or geography.",
  },
];

export default function NewChapterPage() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] px-4 py-28">
      <div className="mx-auto max-w-2xl">

        {/* Label */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500 mb-10"
        >
          Atlas Intelligence &nbsp;·&nbsp; 17th May 2026
        </motion.p>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl font-bold text-white tracking-tight leading-none mb-12"
          style={{ letterSpacing: "-0.03em" }}
        >
          Atlas Intelligence V2
        </motion.h1>

        {/* Animated rule */}
        <motion.div
          custom={2}
          variants={expandLine}
          initial="hidden"
          animate="visible"
          className="h-px bg-zinc-800 mb-12"
        />

        {/* Opening body */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="space-y-5 mb-16"
        >
          <p className="text-zinc-300 text-[17px] leading-relaxed">
            As of today, Atlas Intelligence V1 has been retired from service. It will be replaced
            by V2, a rebuilt platform that has been in development for several months.
          </p>
          <p className="text-zinc-400 text-[17px] leading-relaxed">
            V2 is not an iteration of V1. The model, the content engine, the interface, and the
            underlying infrastructure have all been built again from the foundations up, against a
            set of requirements V1 was not designed to meet. Continuing to maintain V1 in parallel
            was no longer a sensible use of resources.
          </p>
        </motion.div>

        {/* Release Approach */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-500 mb-5">
            Release Approach
          </h2>
          <motion.div custom={4} variants={expandLine} initial="hidden" animate="visible" className="h-px bg-zinc-800 mb-7" />
          <div className="space-y-5">
            <p className="text-zinc-300 text-[17px] leading-relaxed">
              V2 will be released in stages rather than on a single date. The first stage covers
              our ambassador network and a small group of early users. Subsequent stages will
              widen access over time.
            </p>
            <p className="text-zinc-400 text-[17px] leading-relaxed">
              We have not set a fixed timeline for full release. Each stage will be assessed
              against an internal standard before the next is opened.
            </p>
          </div>
        </motion.div>

        {/* What Has Changed */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-500 mb-5">
            What Has Changed
          </h2>
          <motion.div custom={5} variants={expandLine} initial="hidden" animate="visible" className="h-px bg-zinc-800 mb-2" />

          <div className="divide-y divide-zinc-800/60">
            {changes.map((item, i) => (
              <motion.div
                key={item.label}
                custom={6 + i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="py-6 flex flex-col sm:flex-row sm:gap-12"
              >
                <span className="text-white font-semibold text-[15px] w-40 shrink-0 mb-2 sm:mb-0">
                  {item.label}
                </span>
                <span className="text-zinc-400 text-[15px] leading-relaxed">{item.body}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Further Updates */}
        <motion.div
          custom={9}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h2 className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-500 mb-5">
            Further Updates
          </h2>
          <motion.div custom={9} variants={expandLine} initial="hidden" animate="visible" className="h-px bg-zinc-800 mb-7" />
          <p className="text-zinc-400 text-[17px] leading-relaxed">
            We will issue further communication as each stage of the rollout opens.
          </p>
        </motion.div>

        {/* Sign-off */}
        <motion.div
          custom={10}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="h-px bg-zinc-800 mb-8" />
          <p className="text-zinc-600 text-sm tracking-widest uppercase">Atlas Intelligence</p>
        </motion.div>

      </div>
    </div>
  );
}
