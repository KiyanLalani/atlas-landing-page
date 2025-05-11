"use client";

import { motion } from "framer-motion";
import { BentoGrid } from "@/components/ui/bento-grid";

const FutureSection = () => {
  return (
    <section id="roadmap" className="bg-[#0d0d0d] px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center pt-24"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Future Development
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our roadmap for expanding Atlas Intelligence with innovative features and capabilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <BentoGrid />
        </motion.div>
      </div>
    </section>
  );
};

export default FutureSection;