"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Shuffle, Mic, FileText, PenLine } from "lucide-react";

const pillars = [
  {
    icon: BrainCircuit,
    title: "Answers that understand context",
    body: "Ask anything across your curriculum and get explanations that actually make sense, not just search results. Atlas understands your level, your subject, and your exam board.",
  },
  {
    icon: Shuffle,
    title: "Learning that adapts to you",
    body: "No two students learn the same way. Atlas builds around how you think, adjusting the way it explains, quizzes, and revises based on what works for you specifically.",
  },
  {
    icon: FileText,
    title: "Flashcards & quizzes, instantly",
    body: "Turn any topic, note, or past paper into revision material in seconds. Atlas generates flashcards and quizzes so you spend your time learning, not preparing to learn.",
  },
  {
    icon: Mic,
    title: "Voice tutoring",
    body: "Sometimes reading isn't enough. Atlas can talk you through difficult concepts, like having a tutor available at any time, without the scheduling.",
  },
  {
    icon: PenLine,
    title: "Marks your work",
    body: "Submit answers and get detailed feedback on what you got right, what you missed, and how to improve, structured around real mark scheme criteria.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutSection() {
  return (
    <section className="relative bg-[#0d0d0d] px-4 py-28 overflow-hidden">
      {/* Subtle radial glow behind heading */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-500 mb-4">
            What is Atlas
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6"
            style={{ letterSpacing: "-0.02em" }}>
            Education built around the student, not the syllabus.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            The tutoring and education industry hasn't kept up with the way students actually learn. Atlas Intelligence is changing that, using AI to build a learning system that is genuinely personal, genuinely adaptive, and genuinely useful for every student, regardless of how they think.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-zinc-800 mb-20" />

        {/* Pillars grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800"
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="bg-[#0d0d0d] p-8 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-zinc-400" />
                </div>
                <h3 className="text-white font-semibold text-[16px] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </motion.div>
            );
          })}

          {/* Final CTA cell — spans remaining space */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0d0d0d] p-8 flex flex-col justify-between gap-6 md:col-span-2 lg:col-span-1"
          >
            <div>
              <p className="text-zinc-500 text-xs tracking-[0.12em] uppercase font-medium mb-3">
                Coming soon
              </p>
              <h3 className="text-white font-semibold text-[16px] leading-snug mb-3">
                V2 is on its way
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We released V1, learned a lot, and took it down. What we're building now is a completely different level. V2 is coming soon.
              </p>
            </div>
            <a
              href="/waitlist"
              className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full text-sm font-medium bg-white text-black transition-all duration-200 hover:bg-zinc-200 active:scale-95"
            >
              Join the waitlist
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center text-zinc-600 text-sm max-w-xl mx-auto leading-relaxed"
        >
          Built in the UK for GCSE and A-Level students.
        </motion.p>
      </div>
    </section>
  );
}
