"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLink } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";
import { navItems } from "@/data/site";
import { cx } from "@/lib/utils";

export function FloatingNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary"
        className={cx(
          "mx-auto max-w-7xl rounded-[1.6rem] border border-ink/10 bg-white/72 px-4 py-3 shadow-[0_18px_60px_rgba(17,17,26,0.08)] backdrop-blur-xl transition-all",
          scrolled && "max-w-6xl bg-white/92 py-2"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <BrandLink compact />
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-ink/5 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/for-companies"
              className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-ink transition hover:bg-ink/5"
            >
              For Companies
            </Link>
            <ButtonLink href="/join" showArrow={false} className="px-4 py-2">
              Join Miners
            </ButtonLink>
          </div>
          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open ? (
          <div className="mt-4 grid gap-2 border-t border-ink/10 pt-4 lg:hidden">
            {[...navItems, { label: "For Companies", href: "/for-companies" }, { label: "Contact", href: "/contact" }].map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-2xl px-4 py-3 text-sm font-semibold text-ink hover:bg-lilacSoft/60"
                >
                  {item.label}
                </Link>
              )
            )}
            <ButtonLink href="/join" showArrow={false} className="mt-2 w-full" onClick={() => setOpen(false)}>
              Join Miners Group
            </ButtonLink>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
