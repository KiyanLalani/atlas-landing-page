"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Network, Cpu, Lightbulb, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function EnhancedThinkingPage() {
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
            Enhanced Thinking with GPT o4-Mini
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Experience advanced reasoning capabilities powered by state-of-the-art AI models
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Neural Processing</h3>
              <p className="text-muted-foreground">
                Advanced neural networks analyze complex problems and break them down into manageable components for better understanding.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Knowledge Integration</h3>
              <p className="text-muted-foreground">
                Seamlessly combines information from multiple sources to provide comprehensive and accurate solutions.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Parallel Processing</h3>
              <p className="text-muted-foreground">
                Handles multiple aspects of problem-solving simultaneously for faster and more efficient solutions.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Intuitive Learning</h3>
              <p className="text-muted-foreground">
                Adapts to your learning style and provides personalized explanations that match your understanding level.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Creative Solutions</h3>
              <p className="text-muted-foreground">
                Generates innovative approaches to problems by exploring multiple perspectives and solution paths.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Real-time Processing</h3>
              <p className="text-muted-foreground">
                Instant analysis and feedback for immediate learning reinforcement and understanding.
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="p-8">
            <h2 className="mb-4 text-2xl font-semibold">How It Works</h2>
            <p className="text-muted-foreground">
              Our Enhanced Thinking system leverages GPT o4-Mini's advanced AI models to analyze problems from multiple angles. 
              It breaks down complex concepts into digestible pieces, provides step-by-step explanations, and helps you 
              develop a deeper understanding of the subject matter. The system continuously learns from your interactions 
              to provide increasingly personalized and effective learning experiences.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}