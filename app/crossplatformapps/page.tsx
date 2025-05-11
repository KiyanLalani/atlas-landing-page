"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Monitor, Smartphone, Globe, Cloud, Laptop, Lock } from "lucide-react";

export default function CrossPlatformAppsPage() {
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
            Cross-Platform Applications
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Access Atlas Intelligence seamlessly across all your devices
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
                <Monitor className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Desktop Apps</h3>
              <p className="text-muted-foreground">
                Native applications for Windows and Linux with optimized performance
                and system-level integration. Coming Q3 2025.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Android App</h3>
              <p className="text-muted-foreground">
                Full-featured Android application with Material You design and
                deep Android integration. Launch planned for Q4 2025.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Cloud Sync</h3>
              <p className="text-muted-foreground">
                Seamless synchronization of prompts, settings, and learning progress
                across all your devices with real-time updates.
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
              <h2 className="mb-6 text-2xl font-semibold">Key Features</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Universal Access</h3>
                    <p className="text-sm text-muted-foreground">
                      Use Atlas from any device with consistent experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Offline Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Continue learning even without internet connection
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Laptop className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Native Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      Platform-specific optimizations and integrations
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Development Timeline</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Windows App</span>
                  <span className="text-sm text-muted-foreground">Q3 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Linux App</span>
                  <span className="text-sm text-muted-foreground">Q3 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Android App</span>
                  <span className="text-sm text-muted-foreground">Q4 2025</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}