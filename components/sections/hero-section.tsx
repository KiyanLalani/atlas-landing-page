"use client";

import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  // State to store the prompt input
  const [prompt, setPrompt] = useState("");
  const [showNewsPopup, setShowNewsPopup] = useState(true);
  
  const handleRedirect = () => {
    if (!prompt.trim()) {
      // If prompt is empty, just redirect to login page
      window.location.href = "https://chat.atlasintel.co.uk/login";
      return;
    }

    // URL encode the prompt
    const encodedPrompt = encodeURIComponent(prompt.trim());
    
    // Always include the prompt in the URL, even when redirecting to login
    // The chat application can handle retrieving this prompt after login
    window.location.href = `https://chat.atlasintel.co.uk/login?prompt=${encodedPrompt}`;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleRedirect();
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-end justify-center bg-[#0d0d0d] overflow-hidden pb-32" aria-label="Hero Section">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://x.ai/images/news/funding.webp"
          alt="Atlas Intelligence background image showing students learning with AI"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90" />
      </div>

      {/* Large semi-transparent Atlas text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[30vw] font-bold bg-gradient-to-r from-zinc-300 to-transparent bg-clip-text text-transparent leading-none" aria-hidden="true">
          ATLAS
        </span>
      </div>

      {/* News Popup */}
      {showNewsPopup && (
        <div className="fixed top-24 right-4 z-50 max-w-sm">
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Card className="p-4 bg-card/95 backdrop-blur-sm border-primary/20 shadow-lg">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-green-500">LIVE NOW</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowNewsPopup(false)}
                  className="h-6 w-6 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
              
              <h3 className="font-semibold text-sm mb-2">
                🎉 Atlas Web Platform is Live!
              </h3>
              
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                We've reached the regional finals of Peter Jones Foundation's National Entrepreneur of the Year 2025!
              </p>
              
              <Link href="/newswebrelease">
                <Button 
                  size="sm" 
                  className="w-full text-xs group"
                  onClick={() => setShowNewsPopup(false)}
                >
                  Read Full Story
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center md:mt-[100px]"
        >
          <h1 className="sr-only">Atlas Intelligence - AI-Powered Educational App for iOS</h1>
          
          {/* Search input */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="relative group">
              <label htmlFor="search-atlas" className="sr-only">Ask Atlas anything</label>
              <input
                id="search-atlas"
                type="text"
                placeholder="Ask Atlas anything..."
                className="w-full px-6 py-4 bg-zinc-900/80 border border-zinc-800 rounded-full text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all group-hover:bg-zinc-900/90"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={handleKeyPress}
                aria-label="Search Atlas Intelligence"
              />
              <button 
                onClick={handleRedirect}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors group-hover:bg-zinc-700"
                aria-label="Submit search"
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
            The Future of Learning is here. Your AI-powered educational companion for iOS. Ask questions, generate flashcards, search the web, get explanations, and explore topics across your curriculum.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/90 to-transparent" />
    </section>
  );
}