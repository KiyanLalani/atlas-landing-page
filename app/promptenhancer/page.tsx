"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Wand2, Sparkles, MessageSquare, Settings, Brain } from "lucide-react";

export default function PromptEnhancerPage() {
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
            AI Prompt Enhancer
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Optimize your prompts with advanced AI analysis and improvement suggestions
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Before Enhancement</h2>
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <p className="text-muted-foreground">
                    "explain photosynthesis"
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <p className="text-muted-foreground">
                    "help with math problem"
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <p className="text-muted-foreground">
                    "write essay about ww2"
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">After Enhancement</h2>
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <p className="text-muted-foreground">
                    "Explain the process of photosynthesis in plants, including the role of chlorophyll, 
                    light energy, and the production of glucose. Please include a step-by-step breakdown 
                    suitable for GCSE Biology."
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <p className="text-muted-foreground">
                    "Could you help me solve and understand this mathematics problem? 
                    I'm specifically looking for step-by-step guidance and explanations 
                    of the key concepts involved."
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <p className="text-muted-foreground">
                    "Help me write a well-structured essay about World War II, focusing on its major 
                    causes, key events, and global impact. Please include relevant historical sources 
                    and follow proper essay structure."
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <div className="grid gap-6 md:grid-cols-4">
              <Card className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Advanced AI algorithms analyze your prompts for clarity, specificity, and educational value.
                </p>
              </Card>

              <Card className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Smart Adjustments</h3>
                <p className="text-muted-foreground">
                  Automatic refinements to improve prompt effectiveness and learning outcomes.
                </p>
              </Card>

              <Card className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Tone Optimization</h3>
                <p className="text-muted-foreground">
                  Adjusts language and tone to match your learning style and subject requirements.
                </p>
              </Card>

              <Card className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Context Awareness</h3>
                <p className="text-muted-foreground">
                  Understands subject context and exam board requirements for better results.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}