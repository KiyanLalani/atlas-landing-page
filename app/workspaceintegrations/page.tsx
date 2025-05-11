"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, Mail, FolderGit2, Shield, Lock, Settings, Bell, UserCheck, Brain, ArrowRight } from "lucide-react";

export default function WorkspaceIntegrationsPage() {
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
            Workspace Integrations
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Atlas AI seamlessly connects with your Google Workspace to enhance your learning experience while maintaining your privacy and security
          </p>
        </motion.div>

        {/* Integration Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
            <div className="relative">
              <div className="grid grid-cols-3 gap-8">
                {/* Input Sources */}
                <div className="space-y-4 relative">
                  <div className="p-4 rounded-lg border bg-card">
                    <Mail className="h-6 w-6 text-primary mb-2" />
                    <h3 className="font-medium">Email Analysis</h3>
                    <p className="text-sm text-muted-foreground">Reads academic emails and schedules</p>
                  </div>
                  <div className="p-4 rounded-lg border bg-card">
                    <Calendar className="h-6 w-6 text-primary mb-2" />
                    <h3 className="font-medium">Calendar Events</h3>
                    <p className="text-sm text-muted-foreground">Existing commitments and schedule</p>
                  </div>
                </div>

                {/* AI Processing */}
                <div className="flex items-center justify-center">
                  <div className="p-6 rounded-full bg-primary/10 relative">
                    <Brain className="h-12 w-12 text-primary" />
                    <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 text-primary" />
                  </div>
                </div>

                {/* Output Actions */}
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border bg-card">
                    <Calendar className="h-6 w-6 text-primary mb-2" />
                    <h3 className="font-medium">Study Schedule</h3>
                    <p className="text-sm text-muted-foreground">Creates optimized study plans</p>
                  </div>
                  <div className="p-4 rounded-lg border bg-card">
                    <FolderGit2 className="h-6 w-6 text-primary mb-2" />
                    <h3 className="font-medium">Drive Storage</h3>
                    <p className="text-sm text-muted-foreground">Organizes study materials</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 h-full">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Calendar Integration</h3>
              <details className="text-muted-foreground">
                <summary className="cursor-pointer mb-2 font-medium">How it works</summary>
                <ul className="pl-4 space-y-2 text-sm">
                  <li>• Analyzes your existing schedule and commitments</li>
                  <li>• Creates optimized study blocks around your free time</li>
                  <li>• Automatically schedules revision sessions</li>
                  <li>• Sends smart reminders for upcoming deadlines</li>
                  <li>• Adapts schedule based on your learning progress</li>
                </ul>
              </details>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 h-full">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Integration</h3>
              <details className="text-muted-foreground">
                <summary className="cursor-pointer mb-2 font-medium">How it works</summary>
                <ul className="pl-4 space-y-2 text-sm">
                  <li>• Scans academic emails for important information</li>
                  <li>• Extracts assignment details and deadlines</li>
                  <li>• Drafts study-related emails with AI assistance</li>
                  <li>• Creates email summaries for quick review</li>
                  <li>• Organizes educational correspondence</li>
                </ul>
              </details>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 h-full">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FolderGit2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Drive Integration</h3>
              <details className="text-muted-foreground">
                <summary className="cursor-pointer mb-2 font-medium">How it works</summary>
                <ul className="pl-4 space-y-2 text-sm">
                  <li>• Automatically organizes study materials</li>
                  <li>• Creates subject-specific folders</li>
                  <li>• Stores generated flashcards and notes</li>
                  <li>• Maintains revision history</li>
                  <li>• Enables easy access across devices</li>
                </ul>
              </details>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Privacy & Security</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Data Protection</h3>
                    <p className="text-sm text-muted-foreground">
                      Your data is encrypted and protected according to GDPR standards
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Secure Authentication</h3>
                    <p className="text-sm text-muted-foreground">
                      OAuth 2.0 authentication ensures secure access to your Google Workspace
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Settings className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Granular Permissions</h3>
                    <p className="text-sm text-muted-foreground">
                      Control exactly what Atlas can access in your Google Workspace
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Bell className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Notification Control</h3>
                    <p className="text-sm text-muted-foreground">
                      Customize how and when you receive notifications
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <UserCheck className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">User Consent</h3>
                    <p className="text-sm text-muted-foreground">
                      Clear consent processes for data access and usage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}