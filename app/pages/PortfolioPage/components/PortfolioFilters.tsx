"use client";

import { Category } from "@/app/lib/portfolio/portfolio-data";
import { motion } from "motion/react";


type PortfolioFiltersProps = {
  activeCategory: Category;
  categories: Category[];
  onCategoryChange: (category: Category) => void;
};

export default function PortfolioFilters({
  activeCategory,
  categories,
  onCategoryChange,
}: PortfolioFiltersProps) {
  return (
    <section className="px-6 pb-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <motion.button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`
                  rounded-full border px-5 py-2.5
                  font-poppins text-sm font-medium
                  transition-all duration-300
                  ${
                    active
                      ? "border-primary bg-primary text-white shadow-md shadow-primary/20"
                      : "border-primary/30 bg-white/50 text-dark hover:border-primary hover:bg-primary/5"
                  }
                `}
              >
                {category}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}