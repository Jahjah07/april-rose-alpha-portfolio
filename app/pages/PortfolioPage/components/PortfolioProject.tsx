"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { PortfolioProject as PortfolioProjectType } from "@/app/lib/portfolio/portfolio-data";

type PortfolioProjectProps = {
  project: PortfolioProjectType;
  projectIndex: number;
  onImageClick: (item: PortfolioProjectType["items"][number]) => void;
};

export default function PortfolioProject({
  project,
  projectIndex,
  onImageClick,
}: PortfolioProjectProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.55,
        delay: projectIndex * 0.08,
      }}
      className="border-t border-dark/10 pt-12"
    >
      <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
        {/* Project information */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {String(projectIndex + 1).padStart(2, "0")}
          </p>

          <h2 className="font-playfair text-3xl leading-tight text-dark sm:text-4xl">
            {project.title}
          </h2>

          <p className="mt-3 font-poppins text-sm font-medium text-primary">
            {project.category}
          </p>

          <p className="mt-5 font-poppins text-sm leading-7 text-dark/65">
            {project.description}
          </p>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {project.items.map((item, itemIndex) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => onImageClick(item)}
              layout
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: itemIndex * 0.06,
              }}
              whileHover={{
                y: -5,
              }}
              className={`
                group relative overflow-hidden
                rounded-2xl bg-white text-left
                shadow-sm ring-1 ring-dark/5
                ${
                  project.items.length === 1
                    ? "sm:col-span-2"
                    : ""
                }
              `}
            >
              <div
                className={`
                  relative overflow-hidden
                  ${
                    project.items.length === 1
                      ? "aspect-[16/9]"
                      : "aspect-square"
                  }
                `}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    40vw
                  "
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark/0 transition duration-500 group-hover:bg-dark/35" />

                <div className="absolute inset-x-0 bottom-0 translate-y-full p-5 transition duration-500 group-hover:translate-y-0">
                  <div className="rounded-xl bg-white/95 p-4 backdrop-blur-sm">
                    <p className="font-poppins text-xs font-semibold uppercase tracking-wider text-primary">
                      {item.category}
                    </p>

                    <h3 className="mt-1 font-playfair text-xl text-dark">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.article>
  );
}