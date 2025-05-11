"use client";

import { motion } from "framer-motion";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, FileText, Link as LinkIcon } from "lucide-react";

export default function DeepResearchPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-primary/5 px-4 py-24">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Deep Research Mode
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Advanced research capabilities powered by contextual AI understanding
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-4 text-2xl font-semibold text-center">How It Works</h2>
            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-4 text-center">
                <h3 className="mb-2 font-medium">1. Initial Prompt</h3>
                <p className="text-sm text-muted-foreground">
                  Start with your research question or topic. Our AI analyzes your prompt to understand the scope and context.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-4 text-center">
                <h3 className="mb-2 font-medium">2. Contextual Research</h3>
                <p className="text-sm text-muted-foreground">
                  The system performs 5 rounds of deep research, with each round building upon previous findings for comprehensive understanding.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-4 text-center">
                <h3 className="mb-2 font-medium">3. Detailed Report</h3>
                <p className="text-sm text-muted-foreground">
                  Receive a structured report with citations, key findings, and interconnected insights from multiple sources.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <DatabaseWithRestApi
              title="Deep Research Processing"
              circleText="AI"
              badgeTexts={{
                first: "PROMPT",
                second: "RESEARCH",
                third: "ANALYZE",
                fourth: "REPORT"
              }}
              buttonTexts={{
                first: "Context",
                second: "Citations"
              }}
              lightColor="#6366f1"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24 hidden md:block"
        >
          <h2 className="mb-8 text-3xl font-bold text-center">Advanced Features</h2>
          <div className="grid grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Smart Search</h3>
              <p className="text-muted-foreground">
                Intelligent search algorithms that understand context and semantic meaning, going beyond simple keyword matching.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Source Verification</h3>
              <p className="text-muted-foreground">
                Automatic verification of sources with credibility scoring and academic reference checking.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Citation Generation</h3>
              <p className="text-muted-foreground">
                Automatic generation of citations in multiple formats (APA, MLA, Chicago) with proper attribution.
              </p>
            </Card>
          </div>

          <div className="mt-12 rounded-lg border bg-card p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Research Process Visualization</h3>
              <Button variant="outline" size="sm">
                <LinkIcon className="mr-2 h-4 w-4" />
                View Documentation
              </Button>
            </div>
            <div className="relative h-64 rounded-lg bg-black/5 dark:bg-white/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">Interactive visualization coming soon</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}