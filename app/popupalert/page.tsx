"use client";

import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PopupAlertPage() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(true);

  const handleRedirect = () => {
    router.push("https://atlas-site-navy.vercel.app");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleRedirect();
    }
  };

  const handleClose = () => {
    router.push("/");
  };

  const handleExplore = () => {
    router.push("/newsrelease");
  };

  return (
    <section className="relative min-h-screen w-full flex items-end justify-center bg-[#0d0d0d] overflow-hidden pb-32">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://x.ai/images/news/funding.webp"
          alt="Atlas Background"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90" />
      </div>

      {/* Launch date button - hidden on mobile, visible on desktop */}
      <Link href="/newsrelease">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-[25%] left-[48%] -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="group rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-2 text-white/90 transition ease-out">
              <span>15/05/25</span>
              <ArrowRight className="ml-2 h-4 w-4 text-white/70 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </motion.div>
      </Link>

      {/* Large semi-transparent Atlas text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[30vw] font-bold bg-gradient-to-r from-zinc-300 to-transparent bg-clip-text text-transparent leading-none">
          ATLAS
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center md:mt-[100px]"
        >
          {/* Search input */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="relative group">
              <input
                type="text"
                placeholder="Ask Atlas anything..."
                className="w-full px-6 py-4 bg-zinc-900/80 border border-zinc-800 rounded-full text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all group-hover:bg-zinc-900/90"
                onKeyPress={handleKeyPress}
              />
              <button 
                onClick={handleRedirect}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors group-hover:bg-zinc-700"
              >
                <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-300" />
              </button>
            </div>
          </div>

          {/* Description text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-zinc-300 text-sm max-w-md text-center"
          >
            The Future of Learning is here. Your AI-powered educational companion. Ask questions, get explanations, and explore topics across your curriculum.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/90 to-transparent" />

      {/* Launch Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-full max-w-lg mx-4 p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">Atlas is Launching Soon!</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-muted-foreground mb-6">
                Get ready for the future of education. Atlas Intelligence will be launching on May 15th, 2025. Join us as we revolutionize the way students learn and engage with their studies.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1"
                >
                  Close
                </Button>
                <Button
                  onClick={handleExplore}
                  className="flex-1"
                >
                  Explore More
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      )}
    </section>
  );
}