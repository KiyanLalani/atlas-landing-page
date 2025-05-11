"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Smartphone } from "lucide-react";

export default function MobileFirstDesignPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-primary/5 px-4 py-24">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Card className="p-8">
            <div className="mb-6 flex justify-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-bold">Mobile Experience Redesign</h1>
            <p className="text-muted-foreground">
              We're excited to announce a complete redesign of our mobile and tablet applications. 
              Built from the ground up with a focus on performance, usability, and seamless learning experiences. 
              Coming soon to iOS and iPadOS devices.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}