export type Category =
  | "All"
  | "Social Media"
  | "Advertising"
  | "Branding"
  | "Campaigns";

export type PortfolioItem = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  alt: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  items: PortfolioItem[];
};

/*
|--------------------------------------------------------------------------
| Portfolio Folder Configuration
|--------------------------------------------------------------------------
|
| The folder names here must match folders inside:
|
| public/portfolio/
|
| Images themselves do NOT need to be listed here.
|
*/

export const portfolioFolders = {
  food: {
    title: "Food & Beverage",
    category: "Promotional Advertising",
    description:
      "Eye-catching promotional designs created for food and beverage brands to highlight their products and encourage customer engagement.",
    defaultItemCategory: "Advertising",
  },

  kalipto: {
    title: "Kalipto Construction",
    category: "Social Media & Brand Content",
    description:
      "A collection of branded social media graphics created to educate audiences, communicate renovation ideas, and strengthen brand presence.",
    defaultItemCategory: "Social Media",
  },

  TshirtDesigns: {
    title: "T-Shirt Designs",
    category: "Custom Design",
    description:
      "A collection of custom apparel designs created for different concepts, styles, and audiences.",
    defaultItemCategory: "Branding",
  },

  linkedinPhoto: {
    title: "LinkedIn Photography",
    category: "Professional Photography",
    description:
      "Professional profile photography and visual content designed for personal branding and professional presentation.",
    defaultItemCategory: "Branding",
  },
} satisfies Record<
  string,
  {
    title: string;
    category: string;
    description: string;
    defaultItemCategory: Exclude<Category, "All">;
  }
>;

export const categories: Category[] = [
  "All",
  "Social Media",
  "Advertising",
  "Branding",
  "Campaigns",
];

/*
|--------------------------------------------------------------------------
| Filename → Display Title
|--------------------------------------------------------------------------
|
| Example:
|
| "coffee-cove.webp"
| → "Coffee Cove"
|
| "my-new-shirt-design.jpg"
| → "My New Shirt Design"
|
*/

export function filenameToTitle(filename: string) {
  return filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (character) => character.toUpperCase());
}