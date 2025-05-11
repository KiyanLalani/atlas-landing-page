"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Apple, 
  Command, 
  Keyboard,
  Laptop,
  CheckCircle,
  Zap,
  Cloud,
  Download
} from "lucide-react";

export default function MacOSAppPage() {
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
            Atlas for macOS
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Native desktop experience with powerful shortcuts and seamless integration
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
                <Command className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Quick Commands</h3>
              <p className="text-muted-foreground">
                Access Atlas features instantly with native macOS keyboard shortcuts and
                command palette integration.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Offline Support</h3>
              <p className="text-muted-foreground">
                Continue learning even without internet connection. Your data syncs
                automatically when you're back online.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Laptop className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Native Experience</h3>
              <p className="text-muted-foreground">
                Optimized for macOS with native notifications, menu bar integration,
                and system-wide quick access.
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
              <h2 className="mb-6 text-2xl font-semibold">Keyboard Shortcuts</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex items-center gap-1">
                    <kbd className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-sm">⌘</kbd>
                    <kbd className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-sm">Space</kbd>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Open Atlas from anywhere
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center gap-1">
                    <kbd className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-sm">⌘</kbd>
                    <kbd className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-sm">K</kbd>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Quick command palette
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center gap-1">
                    <kbd className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-sm">⌘</kbd>
                    <kbd className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-sm">⇧</kbd>
                    <kbd className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-sm">A</kbd>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Start new chat
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold">Coming Soon</h3>
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Join Waitlist
                </Button>
              </div>
              <p className="text-muted-foreground">
                Sign up to be notified when Atlas for macOS launches and get early access.
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
                  <span>Native notifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Menu bar quick access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>System-wide shortcuts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Offline mode</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Cloud sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Touch Bar support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Universal app</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>iCloud integration</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}