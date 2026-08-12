"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const update = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActive(hash);
        return;
      }

      if (pathname === "/about") setActive("about");
      else if (pathname === "/services") setActive("services");
      else if (pathname === "/contact") setActive("contact");
      else setActive("home");
    };

    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [pathname]);

  const links = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About Me", href: "/about" },
    { id: "services", label: "Services", href: "/services" },
    { id: "skills", label: "Skills", href: "/#tools-home" },
    { id: "portfolio", label: "Portfolio", href: "/" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex items-center justify-between bg-light-bg px-20 py-4 text-dark">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-allura text-secondary">April Rose Alpha</h1>
        <h2 className="text-sm font-bold text-accent">Virtual Assistant</h2>
      </div>
      <nav>
        <ul className="flex space-x-10">
          {links.map((link) => {
            const isActive = active === link.id;
            const base = "transition-colors hover:text-primary hover:underline font-poppins text-dark";
            const activeCls = "text-primary underline decoration-primary decoration-2 underline-offset-4";
            return (
              <li key={link.id}>
                <Link href={link.href} className={`${base} ${isActive ? activeCls : ""}`}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}