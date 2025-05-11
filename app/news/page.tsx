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
            className="mt-12"
          >
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