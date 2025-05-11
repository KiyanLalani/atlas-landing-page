"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Monitor,
  ChevronRight,
  Star,
  Smartphone,
  Sparkles,
  BookOpen,
  Wand2,
  Brain,
} from "lucide-react";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
  link?: string;
}

interface BentoGridProps {
  items: BentoItem[];
}

const timelineData: BentoItem[] = [
  {
    title: "Project Darkfold",
    description: "Interactive canvas mode for document-style editing with real-time collaborative features and direct AI prompting.",
    icon: <ChevronRight className="h-4 w-4 text-blue-500" />,
    status: "in-progress",
    tags: ["Development", "AI"],
    colSpan: 2,
    hasPersistentHover: true,
    link: "/darkfold"
  },
  {
    title: "Cross-Platform Apps",
    description: "Native applications for Windows, Linux, and Android platforms with seamless sync and offline support.",
    icon: <Monitor className="h-4 w-4 text-emerald-500" />,
    status: "Pending",
    tags: ["Development"],
    link: "/crossplatformapps"
  },
  {
    title: "Prompt Library",
    description: "Extensive collection of curated, education-focused prompts optimized for different learning styles and subjects.",
    icon: <BookOpen className="h-4 w-4 text-purple-500" />,
    status: "Pending",
    tags: ["AI", "Education"],
    colSpan: 2,
    link: "/promptlibrary"
  },
  {
    title: "Mobile First Design",
    description: "Complete redesign of our mobile experience with offline support and native app features.",
    icon: <Smartphone className="h-4 w-4 text-sky-500" />,
    status: "in-progress",
    tags: ["Design", "Mobile"],
    link: "/mobilefirstdesign"
  },
  {
    title: "Prompt Enhancer",
    description: "AI-powered tool that automatically refines and optimizes your prompts for better learning outcomes.",
    icon: <Wand2 className="h-4 w-4 text-amber-500" />,
    status: "Pending",
    tags: ["AI", "Tools"],
    link: "/promptenhancer"
  },
  {
    title: "International Curriculum",
    description: "Expanding beyond UK education to support international curricula and standards from around the world.",
    icon: <Star className="h-4 w-4 text-indigo-500" />,
    status: "Pending",
    tags: ["Education", "Global"],
    link: "/internationalcurriculum"
  },
  {
    title: "AI-Powered Learning V2",
    description: "Advanced machine learning algorithms that adapt to your learning style and pace, providing personalized education paths.",
    icon: <Brain className="h-4 w-4 text-violet-500" />,
    status: "Pending",
    tags: ["AI", "Learning"],
    link: "/AIPoweredLearningV2"
  }
];

function BentoGrid({ items = timelineData }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.link || "#"}
          className={cn(
            "group relative p-4 rounded-xl overflow-hidden transition-all duration-300",
            "border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black",
            "hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
            "hover:-translate-y-0.5 will-change-transform",
            item.colSpan || "col-span-1",
            item.colSpan === 2 ? "md:col-span-2" : "",
            {
              "shadow-[0_2px_12px_rgba(0,0,0,0.03)] -translate-y-0.5":
                item.hasPersistentHover,
              "dark:shadow-[0_2px_12px_rgba(255,255,255,0.03)]":
                item.hasPersistentHover,
            }
          )}
        >
          <div
            className={`absolute inset-0 ${
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            } transition-opacity duration-300`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <div className="relative flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br transition-all duration-300">
                {item.icon}
              </div>
              <span
                className={cn(
                  "text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm",
                  "bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300",
                  "transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20"
                )}
              >
                {item.status || "Active"}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-gray-900 dark:text-gray-100 tracking-tight text-[15px]">
                {item.title}
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal">
                  {item.meta}
                </span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug font-[425]">
                {item.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.cta || "Explore →"}
              </span>
            </div>
          </div>

          <div
            className={`absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 ${
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            } transition-opacity duration-300`}
          />
        </Link>
      ))}
    </div>
  );
}

export { BentoGrid };