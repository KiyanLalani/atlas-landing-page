"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { PenTool, Users, Sparkles, Brain, Code, FileText, Workflow, Layers } from "lucide-react";

export default function DarkfoldPage() {
  return (
    <>
      <HeroSection
        title="Project Darkfold"
        subtitle={{
          regular: "Envision, Forge, ",
          gradient: "Darkfold",
        }}
        description="Enhanced workspace for crafting and refining longer responses with real-time formatting and preview capabilities. Experience the next generation of collaborative document editing powered by advanced AI technology."
        ctaText="Coming Soon"
        ctaHref="#"
        gridOptions={{
          angle: 65,
          opacity: 0.4,
          cellSize: 50,
          lightLineColor: "#4a4a4a",
          darkLineColor: "#2a2a2a",
        }}
        className="min-h-[80vh] flex flex-col justify-center items-center py-32 gap-20"
      />

      <section className="relative py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Darkfold combines advanced AI capabilities with intuitive document editing to create
              a seamless writing and collaboration experience.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Canvas</h3>
                <p className="text-muted-foreground">
                  A dynamic workspace that adapts to your writing style, with real-time formatting
                  and intuitive controls for document organization.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-time Collaboration</h3>
                <p className="text-muted-foreground">
                  Work together seamlessly with team members, featuring live editing, comments,
                  and version control built right into the interface.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
                <p className="text-muted-foreground">
                  Direct AI assistance within your canvas for suggestions, refinements,
                  and intelligent content generation as you write.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="p-6 h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Workflows</h3>
                <p className="text-muted-foreground">
                  Customizable document workflows with automated formatting, templating,
                  and content organization capabilities.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="p-6 h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Formatting</h3>
                <p className="text-muted-foreground">
                  Rich text editing with support for complex layouts, media embedding,
                  and professional document styling.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="p-6 h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Code Integration</h3>
                <p className="text-muted-foreground">
                  Seamless code block support with syntax highlighting and live preview
                  capabilities for technical documentation.
                </p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16"
          >
            <Card className="p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
                  <p className="text-muted-foreground mb-6">
                    Darkfold combines powerful document editing capabilities with AI assistance
                    to create a seamless writing and collaboration experience. Start with a blank
                    canvas or template, and let our intelligent system guide you through the
                    content creation process.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <span>Intelligent content suggestions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <span>Real-time document collaboration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary" />
                      <span>AI-powered writing assistance</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-md aspect-video rounded-lg bg-primary/5 flex items-center justify-center">
                    <p className="text-muted-foreground">Interactive demo coming soon</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}