"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function PortfolioCTA() {
  return (
    <section className="px-6 pb-20 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-secondary/30 px-8 py-12 sm:px-12 sm:py-16 lg:px-20"
      >
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Let&apos;s create something together
            </p>

            <h2 className="mt-3 max-w-2xl font-playfair text-4xl leading-tight text-dark sm:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mt-4 max-w-xl font-poppins text-sm leading-7 text-dark/65 sm:text-base">
              Whether you need creative support, social media content,
              or help keeping your business organized, I&apos;d love to
              hear about it.
            </p>
          </div>

          <Link
            href="/contact"
            className="
              inline-flex shrink-0 items-center justify-center
              rounded-full bg-primary px-7 py-3.5
              font-poppins text-sm font-semibold text-white
              shadow-lg shadow-primary/20
              transition-all duration-300
              hover:-translate-y-1 hover:bg-primary/90
            "
          >
            Let&apos;s Work Together
            <span className="ml-2 text-lg">→</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}