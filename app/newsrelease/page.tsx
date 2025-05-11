"use client";

import { motion } from "framer-motion";
import { Calendar, Sparkles, Brain, Search, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function NewsReleasePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-primary/5 px-4 py-24">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="mb-6 flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time>27th April 2025</time>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Atlas Intelligence Launch Announcement
          </h1>
          <p className="text-lg text-muted-foreground">
            Revolutionising education with AI-powered learning assistance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-gray dark:prose-invert max-w-none"
        >
          <div className="space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Launch Details</h2>
              <p className="text-muted-foreground mb-4">
                Atlas Intelligence will officially launch on 15th May 2025, making its debut on the iOS & iPadOS App Store, 
                alongside a comprehensive web platform for UK students. This release marks a significant milestone in our 
                journey as part of the National Entrepreneur of the Year (NEOY) competition.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Key Features at Launch</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Brain className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Advanced AI Models</h3>
                      <p className="text-sm text-muted-foreground">
                        Integration of sophisticated AI models for enhanced learning assistance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Reasoning Engine</h3>
                      <p className="text-sm text-muted-foreground">
                        Enhanced problem-solving capabilities for complex academic challenges
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Search className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Smart Search</h3>
                      <p className="text-sm text-muted-foreground">
                        Exam board and qualification-aware search system
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Learning Tools</h3>
                      <p className="text-sm text-muted-foreground">
                        Generative flashcards and intelligent quiz generation, with more features planned
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Future Development</h2>
              <p className="text-muted-foreground">
                The launch marks just the beginning of our journey. We have an extensive roadmap of features 
                and improvements planned, with regular updates scheduled to enhance the learning experience 
                further. Stay tuned for more exciting developments in the Atlas Intelligence ecosystem.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}