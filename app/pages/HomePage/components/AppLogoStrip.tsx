"use client";

import { Stagger, StaggerItem } from "@/app/components/Motion";

type AppLogo = {
  src: string;
  alt: string;
};

export default function AppLogoStrip({ appLogos }: { appLogos: AppLogo[] }) {
  if (appLogos.length === 0) {
    return null;
  }

  return (
    <div className="mt-10">
      <div className="flex items-center gap-4 text-sm font-playfair text-dark">
        <span>Tools I use</span>
        <div className="h-px flex-1 bg-dark"></div>
      </div>
      <Stagger className="mt-4 flex flex-wrap items-center gap-3">
        {appLogos.map((logo) => (
          <StaggerItem
            key={logo.src}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm"
          >
            <img src={logo.src} alt={logo.alt} className="h-6 w-6 object-contain" />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
