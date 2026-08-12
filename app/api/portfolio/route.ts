import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import path from "path";

import {
  portfolioFolders,
  filenameToTitle,
  type PortfolioProject,
} from "@/app/lib/portfolio/portfolio-data";

const SUPPORTED_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
];

export async function GET() {
  try {
    const portfolioPath = path.join(
      process.cwd(),
      "public",
      "portfolio"
    );

    const projects: PortfolioProject[] = [];

    let folders;

    try {
      folders = await readdir(portfolioPath, {
        withFileTypes: true,
      });
    } catch {
      return NextResponse.json([]);
    }

    let itemId = 1;

    for (const folder of folders) {
      if (!folder.isDirectory()) {
        continue;
      }

      const folderName = folder.name;

      const folderConfig =
        portfolioFolders[
          folderName as keyof typeof portfolioFolders
        ];

      /*
       * Ignore folders that don't have a configuration.
       *
       * This means you can have other folders inside
       * /public/portfolio/ without accidentally displaying them.
       */
      if (!folderConfig) {
        continue;
      }

      const folderPath = path.join(
        portfolioPath,
        folderName
      );

      const files = await readdir(folderPath, {
        withFileTypes: true,
      });

      const images = files
        .filter((file) => {
          if (!file.isFile()) {
            return false;
          }

          const extension = path.extname(file.name).toLowerCase();

          return SUPPORTED_EXTENSIONS.includes(extension);
        })
        .sort((a, b) =>
          a.name.localeCompare(b.name, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        );

      const items = images.map((file) => {
        const title = filenameToTitle(file.name);

        const item = {
          id: itemId++,
          title,
          category: folderConfig.defaultItemCategory,
          image: `/portfolio/${folderName}/${encodeURIComponent(
            file.name
          )}`,
          alt: `${title} portfolio work`,
        };

        return item;
      });

      if (items.length === 0) {
        continue;
      }

      projects.push({
        id: folderName,
        title: folderConfig.title,
        category: folderConfig.category,
        description: folderConfig.description,
        items,
      });
    }

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Portfolio API error:", error);

    return NextResponse.json(
      {
        error: "Failed to load portfolio.",
      },
      {
        status: 500,
      }
    );
  }
}