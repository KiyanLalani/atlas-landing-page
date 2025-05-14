"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CountdownTimer } from "@/components/ui/countdown-timer";

export default function HeroSection() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("https://atlas-site-navy.vercel.app");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleRedirect();
    }
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
          className="flex flex-col items-center justify-center md:mt-0"
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

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <CountdownTimer />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/90 to-transparent" />
    </section>
  );
}