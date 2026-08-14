import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cx } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  showArrow?: boolean;
};

const variants = {
  primary: "bg-ink text-white shadow-soft hover:bg-indigoElectric",
  secondary: "border border-ink/10 bg-white text-ink hover:border-indigoElectric/30 hover:text-indigoElectric",
  dark: "bg-white text-ink hover:bg-limeSignal",
  ghost: "text-ink hover:bg-ink/5"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cx(
        "focus-ring group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
      {showArrow ? (
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
      ) : null}
    </Link>
  );
}
