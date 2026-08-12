"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import type { PortfolioItem } from "@/app/lib/portfolio/portfolio-data";

type PortfolioLightboxProps = {
  selectedImage: PortfolioItem | null;
  onClose: () => void;
};

export default function PortfolioLightbox({
  selectedImage,
  onClose,
}: PortfolioLightboxProps) {
  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/80 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close image"
              className="
                absolute right-4 top-4 z-10
                flex h-10 w-10 items-center justify-center
                rounded-full bg-dark/70 text-xl text-white
                backdrop-blur-sm
                transition hover:bg-dark
              "
            >
              ×
            </button>

            <div className="relative max-h-[75vh] min-h-[300px] w-full">
              <Image
                src={selectedImage.image}
                alt={selectedImage.alt}
                width={1600}
                height={1600}
                className="mx-auto max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="border-t border-dark/10 px-6 py-5">
              <p className="font-poppins text-xs font-semibold uppercase tracking-wider text-primary">
                {selectedImage.category}
              </p>

              <h3 className="mt-1 font-playfair text-2xl text-dark">
                {selectedImage.title}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}