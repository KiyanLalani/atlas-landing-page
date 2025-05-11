"use client";

import { motion } from "framer-motion";
import { CpuArchitecture } from "@/components/ui/cpu-architecture";
import { Card } from "@/components/ui/card";
import { Brain, Search, Database, Globe, Sparkles } from "lucide-react";

export default function QAEnginePage() {
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
            AI Q&A Engine
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Powered by advanced AI models and real-time knowledge integration
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Knowledge Base</h3>
              <p className="text-muted-foreground">
                Extensive curriculum-aligned database covering GCSE and A-Level subjects,
                continuously updated with the latest educational content.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Smart Search</h3>
              <p className="text-muted-foreground">
                Advanced semantic search capabilities that understand context and
                natural language queries for more accurate results.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Real-time Updates</h3>
              <p className="text-muted-foreground">
                Integration with trusted educational sources ensures up-to-date
                information and examples for comprehensive learning.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-lg">
              <CpuArchitecture className="w-full h-auto" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24"
        >
          <h2 className="mb-8 text-3xl font-bold text-center">How It Works</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">1. Query Processing</h3>
              <p className="text-muted-foreground">
                Your question is analyzed using natural language processing to understand
                context and requirements.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">2. Knowledge Retrieval</h3>
              <p className="text-muted-foreground">
                Atlas searches its vast knowledge base for relevant information and
                educational resources.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">3. Real-time Enhancement</h3>
              <p className="text-muted-foreground">
                Additional context is gathered from trusted online sources to provide
                comprehensive answers.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">4. Response Generation</h3>
              <p className="text-muted-foreground">
                Information is synthesized into clear, educational responses tailored
                to your learning level.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}