"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TechSection = () => {
  return (
    <section id="ecosystem" className="bg-gradient-to-b from-background to-primary/5 px-4 py-24">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Atlas. Everywhere You Are.
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Wherever you go, knowledge follows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl"
        >
          <Image
            src="https://i.imgur.com/2KQ5LoE.png"
            alt="Atlas Intelligence Platform Preview"
            width={1200}
            height={675}
            className="w-full h-auto rounded-2xl shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;