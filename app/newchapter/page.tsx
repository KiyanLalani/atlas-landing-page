"use client";

import { motion } from "framer-motion";
import { Calendar, RefreshCw, Star, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function NewChapterPage() {
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
            <time>10th May 2026</time>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            A New Chapter for Atlas Intelligence
          </h1>
          <p className="text-lg text-muted-foreground">
            Atlas is going offline, and we couldn't be more excited about it
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
              <h2 className="text-2xl font-semibold mb-4">Big Changes Are Coming</h2>
              <p className="text-muted-foreground mb-4">
                Today we're announcing something bold: Atlas Intelligence is going offline temporarily as we undertake
                the most significant transformation in our platform's history. We're rebuilding from the ground up to
                deliver the highest quality education to every student, everywhere.
              </p>
              <p className="text-muted-foreground">
                This isn't a step back. It's the biggest leap forward we've ever made.
              </p>
            </Card>

            <Card className="p-6">
              <p className="text-muted-foreground mb-4">
                Over the past months, our team has been working behind the scenes on fundamental changes to how Atlas
                works. From the core AI engine to the way students interact with content, everything has been rethought
                and redesigned with one goal in mind: making truly exceptional education accessible to everyone.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">What This Means For You</h2>
              <p className="text-muted-foreground">
                While Atlas is temporarily offline, we'll be rolling out these changes across every part of the platform.
                We know any downtime is an inconvenience, and we don't take that lightly, but what's coming is worth
                the wait.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">What We've Been Building</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <RefreshCw className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Rebuilt From the Ground Up</h3>
                      <p className="text-sm text-muted-foreground">
                        Fundamental improvements to our AI engine, content delivery, and learning experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Quality Without Compromise</h3>
                      <p className="text-sm text-muted-foreground">
                        The highest standard of educational content, designed to help every student succeed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Built for Everyone</h3>
                      <p className="text-sm text-muted-foreground">
                        A platform that makes world-class education available to all, regardless of background or location.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Zap className="h-6 w-6 text-primary mt-1" />
                <h2 className="text-2xl font-semibold">We Can't Wait to Show You</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                We've never been more excited about the future of Atlas Intelligence. The changes we're making represent
                a complete step change in what AI-powered education can look like, and we can't wait for you to see it.
              </p>
              <p className="text-muted-foreground">
                Stay tuned for updates as we prepare to relaunch. The best is yet to come.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
