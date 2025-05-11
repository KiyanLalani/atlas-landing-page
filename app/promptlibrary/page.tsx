"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Search, 
  ThumbsUp,
  Tags,
  Filter,
  Users,
  Star,
  Sparkles 
} from "lucide-react";

export default function PromptLibraryPage() {
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
            Prompt Library
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover and share educational prompts curated by the Atlas community
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
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Smart Search</h3>
              <p className="text-muted-foreground">
                Advanced search capabilities with filters for subject, exam board,
                difficulty level, and more. Find the perfect prompts for your needs.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Tags className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Categorization</h3>
              <p className="text-muted-foreground">
                Comprehensive tagging system with subject hierarchies, topics,
                and learning objectives for easy navigation and discovery.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <ThumbsUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Community Ratings</h3>
              <p className="text-muted-foreground">
                Vote and review prompts to help others find the most effective
                learning resources. Share your experiences and feedback.
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
              <h2 className="mb-6 text-2xl font-semibold">Browse Categories</h2>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Sciences
                </Button>
                <Button variant="outline" className="justify-start">
                  <Filter className="mr-2 h-4 w-4" />
                  Mathematics
                </Button>
                <Button variant="outline" className="justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Languages
                </Button>
                <Button variant="outline" className="justify-start">
                  <Star className="mr-2 h-4 w-4" />
                  Humanities
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold">Contribute</h3>
                <Button>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Share Prompt
                </Button>
              </div>
              <p className="text-muted-foreground">
                Share your successful prompts with the community. Help others learn
                more effectively by contributing to our growing library.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}