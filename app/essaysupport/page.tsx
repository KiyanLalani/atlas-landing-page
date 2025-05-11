"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  FileText, 
  Search, 
  Brain,
  CheckCircle,
  AlertCircle,
  Sparkles,
  GraduationCap
} from "lucide-react";

export default function EssaySupportPage() {
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
            Essay Support System
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            AI-powered essay analysis and feedback system with deep syllabus integration
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Syllabus Analysis</h3>
              <p className="text-muted-foreground">
                Our system maintains an up-to-date database of exam board specifications,
                marking schemes, and grade boundaries to provide accurate, curriculum-aligned feedback.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Contextual Understanding</h3>
              <p className="text-muted-foreground">
                Advanced AI models analyze your essay topic in relation to your specific
                subject syllabus, ensuring feedback aligns with examination requirements.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-center space-y-6"
          >
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Source Verification</h3>
              <p className="text-muted-foreground">
                Automatically verify citations and sources against academic databases,
                ensuring your references meet scholarly standards.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Grade Analysis</h3>
              <p className="text-muted-foreground">
                Get detailed insights into potential grades based on marking schemes
                and historical grade boundaries from your exam board.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center space-y-6"
          >
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Content Analysis</h3>
              <p className="text-muted-foreground">
                Comprehensive analysis of structure, arguments, and writing style
                with specific recommendations for improvement.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Real-time Feedback</h3>
              <p className="text-muted-foreground">
                Get instant suggestions for improvements as you write, helping you
                develop stronger arguments and better structure.
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24"
        >
          <h2 className="mb-8 text-3xl font-bold text-center">How It Works</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="mb-4 text-xl font-semibold">Content Enhancement</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Structure and argument flow analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Grammar and style checking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Citation format verification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Evidence integration suggestions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Critical analysis prompts
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 text-xl font-semibold">Syllabus Alignment</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Assessment objective mapping
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Mark scheme comparison
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Grade boundary analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Exam board requirement checking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Subject-specific criteria validation
                </li>
              </ul>
            </Card>
          </div>

          <Card className="mt-8 p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Try Essay Support Now</h3>
              <Button>
                <Sparkles className="mr-2 h-4 w-4" />
                Start Writing
              </Button>
            </div>
            <p className="text-muted-foreground">
              Experience AI-powered essay support that understands your curriculum and helps you achieve better grades. 
              Our system provides real-time feedback, syllabus-aligned suggestions, and comprehensive analysis to improve your writing.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}