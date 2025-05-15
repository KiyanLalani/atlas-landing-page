"use client";

import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import {
  BrainCircuit,
  FileQuestion,
  ScrollText,
  GraduationCap,
  Search,
  Sparkles,
  Zap,
  FlaskConical,
  Apple,
  Calendar,
} from "lucide-react";

const features: BentoItem[] = [
  {
    title: "AI Q&A Engine",
    description: "Natural language questions with curriculum-aligned answers tailored to your learning needs. Perfect for homework help and exam prep.",
    icon: <BrainCircuit className="w-4 h-4 text-blue-500" />,
    status: "Live",
    tags: ["AI", "Learning", "Personalisation"],
    colSpan: 2,
    hasPersistentHover: true,
    link: "/QAengine"
  },
  {
    title: "Smart Quiz Generator",
    description: "AI-generated quizzes customised to specific topics to test your knowledge effectively. Learn faster with personalized assessment.",
    icon: <FileQuestion className="w-4 h-4 text-emerald-500" />,
    status: "In Progress",
    tags: ["Assessment", "AI"],
    link: "/smartquizgenerator"
  },
  {
    title: "Flashcard Maker",
    description: "Automatic creation of revision flashcards to help you memorise important concepts. Create, organize, and study flashcards on any subject.",
    icon: <ScrollText className="w-4 h-4 text-purple-500" />,
    status: "Live",
    tags: ["Study", "Memory"],
    colSpan: 2,
    link: "/flashcardmaker"
  },
  {
    title: "Essay Support",
    description: "AI-powered essay feedback and grading to improve your writing skills. Get instant feedback on structure, grammar, and content.",
    icon: <GraduationCap className="w-4 h-4 text-rose-500" />,
    status: "In Progress",
    tags: ["Writing", "Feedback"],
    link: "/essaysupport"
  },
  {
    title: "Past Paper Locator",
    description: "Intelligent search for past papers and mark schemes from whitelisted educational sources. Practice with real exam questions.",
    icon: <Search className="w-4 h-4 text-sky-500" />,
    status: "In Progress",
    tags: ["Resources", "Practice"],
    link: "/pastpaperlocator"
  },
  {
    title: "Enhanced Thinking",
    description: "Integration with GPT o4-Mini's reasoning models for complex problem-solving scenarios. Tackle difficult concepts with AI assistance.",
    icon: <Sparkles className="w-4 h-4 text-amber-500" />,
    status: "Live",
    tags: ["AI", "Problem Solving"],
    link: "/enhancedthinking"
  },
  {
    title: "Deep Research",
    description: "Deep research capabilities for large notes and dissertations with proper web citations. Perfect for projects and research papers.",
    icon: <Zap className="w-4 h-4 text-indigo-500" />,
    status: "Delayed",
    tags: ["Research", "Citations"],
    link: "/deepresearch",
  },
  {
    title: "Curriculum Alignment",
    description: "Built-in support for GCSE and A-Level specifications across all subjects. Get help that matches your exact syllabus requirements.",
    icon: <FlaskConical className="w-4 h-4 text-teal-500" />,
    status: "In Progress",
    tags: ["Education", "Standards"],
    link: "/curriculumalignment"
  },
  {
    title: "MacOS App",
    description: "Native macOS application for seamless desktop learning experience with local storage support. Study seamlessly across all your devices.",
    icon: <Apple className="w-4 h-4 text-gray-500" />,
    status: "In Progress",
    tags: ["Desktop", "Native"],
    link: "/macosapp"
  },
  {
    title: "Calendar and Email Integrations",
    description: "Sync your study schedule with popular calendar apps and receive smart email notifications. Stay organized and on track with your studies.",
    icon: <Calendar className="w-4 h-4 text-violet-500" />,
    status: "In Progress",
    tags: ["Integration", "Productivity"],
    link: "/workspaceintegrations"
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-gradient-to-b from-background to-secondary/10 px-4 py-24" aria-labelledby="features-heading">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 id="features-heading" className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Intelligent Learning Features
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Atlas Intelligence combines cutting-edge AI models with educational expertise to create
            a comprehensive learning environment for iOS users. Our app helps students study smarter with flashcards, 
            web search, and AI-powered learning tools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <BentoGrid items={features} />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;