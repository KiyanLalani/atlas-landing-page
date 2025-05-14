"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TARGET_DATE = new Date("2025-05-15T16:30:00+01:00");

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +TARGET_DATE - +new Date();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const digitVariants = {
    initial: { y: 0 },
    exit: { y: 20, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
    enter: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.2, ease: "easeOut" } }
  };

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2">
      <div className="relative h-16 w-20 bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={value}
            variants={digitVariants}
            initial="enter"
            animate="animate"
            exit="exit"
            className="absolute inset-0 flex items-center justify-center text-3xl font-bold"
          >
            {String(value).padStart(2, '0')}
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="mt-2 text-sm text-white/60">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center items-center">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}