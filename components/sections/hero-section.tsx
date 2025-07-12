"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { useState } from "react";

export default function HeroSection() {
  // State to store the prompt input
  const [prompt, setPrompt] = useState("");
  
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