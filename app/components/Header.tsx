"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Header() {
  const pathname = usePathname();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash) {
        if (hash === "tools-home") {
          setActive("skills");
        } else {
          setActive(hash);
        }
        return;
      }

      if (pathname === "/about") setActive("about");
      else if (pathname === "/services") setActive("services");
      else if (pathname === "/contact") setActive("contact");
      else setActive("home");
    };

    update();

    window.addEventListener("hashchange", update);

    return () => {
      window.removeEventListener("hashchange", update);
    };
  }, [pathname]);

  // Close mobile menu when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About Me", href: "/about" },
    { id: "services", label: "Services", href: "/services" },
    { id: "portfolio", label: "Portfolio", href: "/portfolio" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-light-bg px-6 py-4 text-dark shadow-sm md:px-12 lg:px-20">
      {/* Logo / Brand */}
      <Link
        href="/"
        className="flex flex-col items-center"
        onClick={() => setMenuOpen(false)}
      >
        <h1 className="text-xl font-allura text-secondary sm:text-2xl">
          April Rose Alpha
        </h1>

        <h2 className="text-xs font-bold text-accent sm:text-sm">
          Virtual Assistant
        </h2>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center space-x-6 lg:space-x-10">
          {links.map((link) => {
            const isActive = active === link.id;

            const base =
              "font-poppins text-dark transition-colors hover:text-primary hover:underline";

            const activeCls =
              "text-primary underline decoration-primary decoration-2 underline-offset-4";

            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={`${base} ${isActive ? activeCls : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-md text-dark transition-colors hover:bg-primary/10 md:hidden"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <div className="flex flex-col gap-1.5">
          <motion.span
            animate={
              menuOpen
                ? { rotate: 45, y: 6 }
                : { rotate: 0, y: 0 }
            }
            className="block h-0.5 w-6 bg-dark"
          />

          <motion.span
            animate={{
              opacity: menuOpen ? 0 : 1,
            }}
            className="block h-0.5 w-6 bg-dark"
          />

          <motion.span
            animate={
              menuOpen
                ? { rotate: -45, y: -6 }
                : { rotate: 0, y: 0 }
            }
            className="block h-0.5 w-6 bg-dark"
          />
        </div>
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full border-t border-dark/10 bg-light-bg px-6 py-5 shadow-md md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {links.map((link) => {
                const isActive = active === link.id;

                const base =
                  "block font-poppins text-dark transition-colors hover:text-primary";

                const activeCls =
                  "font-semibold text-primary";

                return (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`${base} ${
                        isActive ? activeCls : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}