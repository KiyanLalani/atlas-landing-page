"use client";

import { motion } from "framer-motion";
import { Calendar, Globe, Smartphone, Trophy, Sparkles, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function NewsWebReleasePage() {
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
            <time>15th May 2025</time>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Atlas Intelligence Web Platform Goes Live
          </h1>
          <p className="text-lg text-muted-foreground">
            Web platform launches as Atlas reaches regional finals of prestigious entrepreneurship competition
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
              <h2 className="text-2xl font-semibold mb-4">Web Platform Launch</h2>
              <p className="text-muted-foreground mb-4">
                Today marks a significant milestone for Atlas Intelligence as our web platform officially goes live at 
                chat.atlasintel.co.uk. Students can now access our AI-powered educational tools directly through their 
                web browsers, providing immediate access to our comprehensive learning assistance platform.
              </p>
              <p className="text-muted-foreground">
                The web platform features our core AI Q&A engine, smart search capabilities, and curriculum-aligned 
                content, making Atlas Intelligence accessible to students across all devices with internet connectivity.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">iOS App Coming Soon</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Smartphone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Native iOS Experience</h3>
                      <p className="text-sm text-muted-foreground">
                        Enhanced mobile experience with offline capabilities and native integrations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Advanced Features</h3>
                      <p className="text-sm text-muted-foreground">
                        Flashcard generation, quiz creation, and enhanced AI reasoning capabilities
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Seamless Sync</h3>
                      <p className="text-sm text-muted-foreground">
                        Perfect synchronization between web and mobile platforms
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Student-Focused Design</h3>
                      <p className="text-sm text-muted-foreground">
                        Intuitive interface designed specifically for GCSE and A-Level students
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mt-4">
                Our iOS application is currently in final development stages and is expected to launch in the coming weeks. 
                The app will provide a native mobile experience with enhanced features including offline study modes, 
                push notifications for study reminders, and seamless integration with iOS ecosystem features.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Trophy className="h-6 w-6 text-primary mt-1" />
                <h2 className="text-2xl font-semibold">Regional Finals Achievement</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                We're thrilled to announce that Atlas Intelligence has successfully reached the regional finals of the 
                Peter Jones Foundation's National Entrepreneur of the Year 2025 competition. This prestigious recognition 
                validates our mission to revolutionize education through artificial intelligence.
              </p>
              <p className="text-muted-foreground mb-4">
                The Peter Jones Foundation's National Entrepreneur of the Year competition recognizes outstanding young 
                entrepreneurs who demonstrate innovation, business acumen, and potential for significant impact. Reaching 
                the regional finals places Atlas Intelligence among the top entrepreneurial ventures in our region.
              </p>
              <p className="text-muted-foreground">
                This achievement reflects our team's dedication to creating meaningful educational technology that addresses 
                real challenges faced by students in their academic journey. We're honored to represent the future of 
                AI-powered education in this competition.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">What's Next</h2>
              <p className="text-muted-foreground mb-4">
                With our web platform now live and iOS app launching soon, we're focused on expanding our feature set 
                and reaching more students across the UK. Our roadmap includes enhanced curriculum alignment, advanced 
                research capabilities, and expanded subject coverage.
              </p>
              <p className="text-muted-foreground">
                We invite students, educators, and parents to experience Atlas Intelligence today at chat.atlasintel.co.uk 
                and join us in shaping the future of education. Stay tuned for updates on our iOS app launch and our 
                progress in the National Entrepreneur of the Year competition.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}