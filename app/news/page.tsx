"use client";

import { motion } from "framer-motion";
import { CosmicUniverse } from "@/components/ui/cosmic-universe";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="min-h-screen w-full">
      <CosmicUniverse />
      <div className="container mx-auto max-w-7xl px-4 py-24">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start"
          >
            <h1 className="text-8xl font-light text-white opacity-80">
              Atlas
            </h1>
            <h1 className="text-8xl font-light text-gray-400 opacity-80 md:text-right">
              News
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 space-y-8"
          >
            {/* Featured article */}
            <Link href="/newchapter" className="block group">
              <article className="relative rounded-xl border border-zinc-700/60 bg-zinc-900/40 p-8 md:p-10 overflow-hidden transition-all duration-300 hover:border-zinc-500/60 hover:bg-zinc-900/60">
                {/* Subtle top-left glow */}
                <div className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full bg-white/[0.03] blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-widest text-white uppercase">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                      </span>
                      Latest
                    </span>
                    <span className="text-sm text-zinc-500">17th May 2026</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                    Atlas Intelligence V2
                  </h2>
                  <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-2xl">
                    Atlas Intelligence V1 has been retired from service. V2, a fully rebuilt platform,
                    has been in development for several months and will be released in stages, beginning
                    with our ambassador network.
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all duration-200">
                    Read the announcement
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>

            <article className="rounded-lg border bg-card p-6">
              <div className="mb-4 text-sm text-muted-foreground">
                Published: May 16, 2026
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Announcing: The Atlas Intelligence Student Ambassador Programme
              </h2>
              <p className="text-muted-foreground mb-6">
                We are building Atlas with the students we are building it for. The Ambassador Programme brings
                students into the development of the platform from the start, through paid, project-based work,
                direct access to the founding team, and connections across the AI and education space.
              </p>
              <Link href="/ambassadorprogramme">
                <Button variant="outline" className="group">
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </article>

            <article className="rounded-lg border bg-card p-6">
              <div className="mb-4 text-sm text-muted-foreground">
                Published: May 15, 2025
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Atlas Intelligence Web Platform Goes Live
              </h2>
              <p className="text-muted-foreground mb-6">
                Our web platform officially launches today, providing students with immediate access to AI-powered 
                educational tools. Plus, Atlas Intelligence reaches the regional finals of the Peter Jones Foundation's 
                National Entrepreneur of the Year 2025 competition, with our iOS app expected to launch soon.
              </p>
              <Link href="/newswebrelease">
                <Button variant="outline" className="group">
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </article>

            <article className="rounded-lg border bg-card p-6">
              <div className="mb-4 text-sm text-muted-foreground">
                Announced: April 27, 2025
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Atlas Intelligence Release Date Confirmed
              </h2>
              <p className="text-muted-foreground mb-6">
                We're excited to announce that Atlas Intelligence will officially launch on May 15, 2025. 
                Our AI-powered educational platform will revolutionize how students learn, 
                providing personalized support across GCSE and A-Level subjects with advanced 
                features including Deep Research, Essay Support, and our innovative Q&A Engine.
              </p>
              <Link href="/newsrelease">
                <Button variant="outline" className="group">
                  Explore Release Details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </article>
          </motion.div>
        </div>
      </div>
    </div>
  );
}