import Link from "next/link";
import { cx } from "@/lib/utils";

type MinersLogoVariant = "symbol" | "horizontal" | "white" | "monochrome" | "indigo";

const colors = {
  default: {
    symbol: "#5B3DF5",
    wordmark: "#11111A"
  },
  white: {
    symbol: "#FFFFFF",
    wordmark: "#FFFFFF"
  },
  monochrome: {
    symbol: "#11111A",
    wordmark: "#11111A"
  },
  indigo: {
    symbol: "#5B3DF5",
    wordmark: "#5B3DF5"
  }
};

export function MinersSymbol({
  className,
  color = "#5B3DF5",
  title = "Miners Group symbol"
}: {
  className?: string;
  color?: string;
  title?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 100 100" role="img" aria-label={title}>
      <path fill={color} d="M14 35c0-2.2 1.8-4 4-4h5.2c1.2 0 2.4.5 3.2 1.3l13.7 13.7c1.2 1.2 1.9 2.8 1.9 4.5V88c0 2.2-1.8 4-4 4H18c-2.2 0-4-1.8-4-4V35Z" />
      <path fill={color} d="M86 35c0-2.2-1.8-4-4-4h-5.2c-1.2 0-2.4.5-3.2 1.3L59.9 46c-1.2 1.2-1.9 2.8-1.9 4.5V88c0 2.2 1.8 4 4 4h20c2.2 0 4-1.8 4-4V35Z" />
      <path fill={color} d="M18 8h20.8c1.4 0 2.8.6 3.8 1.6l22.1 22.1c1.5 1.5 1.5 4 0 5.5L53.1 48.8c-1.5 1.5-4 1.5-5.5 0L15.2 16.4C12.8 14 14.5 8 18 8Z" />
      <path fill={color} d="M82 8H61.2c-1.4 0-2.8.6-3.8 1.6L42.9 24.1c-1.5 1.5-1.5 4 0 5.5l11.6 11.6c1.5 1.5 4 1.5 5.5 0l24.8-24.8C87.2 14 85.5 8 82 8Z" />
      <path fill={color} d="M52.8 43.8c1.5-1.5 3.9-1.5 5.4 0l10.6 10.6c1.5 1.5 1.5 3.9 0 5.4L53.4 75.2c-1.9 1.9-4.9 1.9-6.8 0L31.2 59.8c-1.5-1.5-1.5-3.9 0-5.4l10.6-10.6c1.5-1.5 3.9-1.5 5.4 0L50 46.6l2.8-2.8Z" />
    </svg>
  );
}

export function MinersLogo({
  variant = "horizontal",
  className,
  compact = false
}: {
  variant?: MinersLogoVariant;
  className?: string;
  compact?: boolean;
}) {
  const palette =
    variant === "white" ? colors.white : variant === "monochrome" ? colors.monochrome : variant === "indigo" ? colors.indigo : colors.default;

  if (variant === "symbol") {
    return <MinersSymbol className={cx("h-9 w-9", className)} color={palette.symbol} />;
  }

  return (
    <span className={cx("inline-flex items-center gap-3", className)} aria-label="Miners Group">
      <MinersSymbol className="h-9 w-9 shrink-0" color={palette.symbol} title="Miners Group" />
      <span className={cx("flex items-baseline text-[1.05rem] tracking-[-0.03em]", compact && "hidden sm:flex")}>
        <span className="font-extrabold" style={{ color: palette.wordmark }}>
          Miners
        </span>
        <span className="ml-1.5 font-semibold" style={{ color: palette.wordmark }}>
          Group
        </span>
      </span>
    </span>
  );
}

export function BrandLink({
  compact = false,
  variant = "horizontal"
}: {
  compact?: boolean;
  variant?: Exclude<MinersLogoVariant, "symbol">;
}) {
  return (
    <Link href="/" className="focus-ring inline-flex items-center rounded-2xl">
      <MinersLogo variant={variant} compact={compact} />
    </Link>
  );
}
