"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, BookOpen, FileText, Sparkles, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // MOBILE PILL: to re-enable the pill animation on mobile, delete the MobileHeader
  // component below and remove the `hidden lg:block` / `lg:hidden` wrappers,
  // so only the single motion.header renders on all screen sizes.

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'News', url: '/news', icon: Newspaper },
    { name: 'Pricing', url: '/pricing', icon: BookOpen },
    // { name: 'Features', url: '/#features', icon: Sparkles },   // hidden — re-enable when ready
    // { name: 'Roadmap', url: '/#roadmap', icon: FileText },     // hidden — re-enable when ready
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const headerVariants = {
    full: {
      width: "100%",
      x: "0%",
      left: "0",
      borderRadius: "0px",
      backgroundColor: "rgba(0, 0, 0, 0)",
      backdropFilter: "blur(0px)",
      boxShadow: "none",
      borderColor: "rgba(255, 255, 255, 0)",
    },
    pill: {
      width: "80%",
      x: "-50%",
      left: "50%",
      borderRadius: "9999px",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      borderColor: "rgba(255, 255, 255, 0.1)",
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <>
      {/* ── Mobile header — fades out on scroll, returns when back at top ── */}
      <motion.header
        animate={{ opacity: scrolled ? 0 : 1, pointerEvents: scrolled ? "none" : "auto" }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 w-full z-50 border-b border-transparent lg:hidden"
        style={{ transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)' }}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <Link href="/">
            <Image
              src="https://i.postimg.cc/6QnyBL8X/Atlas-Intelligence-Gold.png"
              alt="Atlas Intelligence App Logo"
              width={36}
              height={36}
            />
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileMenuOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && !scrolled && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="border-b bg-background/95 px-4 py-6 backdrop-blur-md overflow-hidden"
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.url}
                    className="py-2 text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <a
                    href="https://chat.atlasintel.co.uk/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <InteractiveHoverButton text="Try Atlas" className="w-full" />
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── Desktop header — animated pill on scroll ── */}
      <motion.header
        initial="full"
        animate={scrolled ? "pill" : "full"}
        variants={headerVariants}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1], layout: true }}
        layoutRoot
        className="fixed top-4 z-50 will-change-transform border hidden lg:block"
      >
        <div className="container mx-auto flex h-20 max-w-full items-center justify-between px-8">
          <motion.div layout="position" className="flex items-center" transition={{ duration: 0.25 }}>
            <Link href="/">
              <Image
                src="https://i.postimg.cc/6QnyBL8X/Atlas-Intelligence-Gold.png"
                alt="Atlas Intelligence App Logo"
                width={48}
                height={48}
                className="transition-transform duration-200"
              />
            </Link>
          </motion.div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <NavBar items={navItems} className="relative !fixed:none" />
          </div>

          <motion.div layout="position" className="flex items-center gap-6" transition={{ duration: 0.25 }}>
            <a
              href="https://chat.atlasintel.co.uk/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InteractiveHoverButton text="Try Atlas" />
            </a>
          </motion.div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
