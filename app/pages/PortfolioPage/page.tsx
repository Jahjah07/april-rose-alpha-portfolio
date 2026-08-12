"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "motion/react";

import PortfolioHero from "./components/PortfolioHero";
import PortfolioFilters from "./components/PortfolioFilters";
import PortfolioProject from "./components/PortfolioProject";
import PortfolioCTA from "./components/PortfolioCTA";
import PortfolioLightbox from "./components/PortfolioLightbox";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import {
  categories,
  type Category,
  type PortfolioItem,
  type PortfolioProject as PortfolioProjectType,
} from "@/app/lib/portfolio/portfolio-data";

export default function PortfolioPage() {
  const [projects, setProjects] = useState<
    PortfolioProjectType[]
  >([]);

  const [loading, setLoading] = useState(true);

  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [selectedImage, setSelectedImage] =
    useState<PortfolioItem | null>(null);

  useEffect(() => {
    async function loadPortfolio() {
      try {
        const response = await fetch("/api/portfolio");

        if (!response.ok) {
          throw new Error("Failed to load portfolio");
        }

        const data: PortfolioProjectType[] =
          await response.json();

        setProjects(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadPortfolio();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects
      .map((project) => ({
        ...project,
        items: project.items.filter(
          (item) => item.category === activeCategory
        ),
      }))
      .filter((project) => project.items.length > 0);
  }, [activeCategory, projects]);

  return (
    <main className="min-h-screen bg-light-bg text-dark">
      <Header />
      <PortfolioHero />

      <PortfolioFilters
        activeCategory={activeCategory}
        categories={categories}
        onCategoryChange={setActiveCategory}
      />

      <section className="px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-24">
          {loading ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="aspect-square animate-pulse rounded-2xl bg-white"
                />
              ))}
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(
                (project, projectIndex) => (
                  <PortfolioProject
                    key={project.id}
                    project={project}
                    projectIndex={projectIndex}
                    onImageClick={setSelectedImage}
                  />
                )
              )}
            </AnimatePresence>
          )}
        </div>
      </section>

      {!loading && filteredProjects.length === 0 && (
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-xl rounded-3xl border border-dark/10 bg-white p-12 text-center">
            <h2 className="font-playfair text-3xl">
              More work coming soon
            </h2>

            <p className="mt-4 font-poppins text-sm leading-7 text-dark/60">
              More creative projects will be added to the
              portfolio soon.
            </p>
          </div>
        </section>
      )}

      <PortfolioCTA />

      <PortfolioLightbox
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
      <Footer />
    </main>
  );
}