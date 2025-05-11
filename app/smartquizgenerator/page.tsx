"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileQuestion, 
  BookOpen, 
  Brain,
  Target,
  CheckCircle,
  Settings,
  BarChart,
  Sparkles
} from "lucide-react";

export default function SmartQuizGeneratorPage() {
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
            Smart Quiz Generator
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            AI-powered quiz generation tailored to your exam board, subject, and learning progress
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
              <h3 className="mb-2 text-xl font-semibold">Exam Board Integration</h3>
              <p className="text-muted-foreground">
                Direct integration with major exam boards including AQA, Edexcel, and OCR to ensure
                questions align perfectly with your curriculum.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Adaptive Difficulty</h3>
              <p className="text-muted-foreground">
                Questions automatically adjust in difficulty based on your performance,
                ensuring optimal learning progression.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Detailed analytics and progress tracking to identify strengths and areas
                for improvement across different topics.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center space-y-6"
          >
            <Card className="p-8">
              <h2 className="mb-6 text-2xl font-semibold">How It Works</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Select Your Subject</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose your subject and exam board for personalized content
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium">AI Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Our AI analyzes the curriculum and your progress to generate relevant questions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Practice & Learn</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete quizzes and receive instant feedback with detailed explanations
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold">Ready to Start?</h3>
                <Button>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Quiz
                </Button>
              </div>
              <p className="text-muted-foreground">
                Start creating personalized quizzes tailored to your learning needs
                with our AI-powered system.
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Features</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Exam board specific questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Topic-focused quizzes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Performance analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Adaptive difficulty levels</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Detailed explanations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Progress tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Custom quiz creation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Mobile synchronization</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}