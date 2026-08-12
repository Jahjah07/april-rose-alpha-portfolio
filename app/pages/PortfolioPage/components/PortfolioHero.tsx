"use client";

import { motion } from "motion/react";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24 lg:pt-36">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-4 font-poppins text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Portfolio
          </p>

          <h1 className="font-playfair text-5xl leading-[1.05] text-dark sm:text-6xl lg:text-8xl">
            My{" "}
            <span className="relative inline-block">
              Work
              <span className="absolute -bottom-2 left-0 h-1 w-16 rounded-full bg-primary sm:-bottom-3 sm:w-24" />
            </span>
          </h1>

          <p className="mt-8 max-w-2xl font-poppins text-base leading-8 text-dark/70 sm:text-lg">
            A collection of creative work designed to help brands
            communicate, engage, and grow. Each project reflects
            creativity, purpose, and attention to detail.
          </p>
        </motion.div>
      </div>
    </section>
  );
}