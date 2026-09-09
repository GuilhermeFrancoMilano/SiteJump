import Image from "next/image";
import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
  variant?: "horizontal" | "emblem";
};

export function Wordmark({ className, variant = "horizontal" }: WordmarkProps) {
  return (
    <span
      className={cn("wordmark", variant === "emblem" && "wordmark--emblem", className)}
      role="img"
      aria-label="Jump Performance"
    >
      <Image
        className="wordmark__image"
        src="/brand/jump-performance-logo.jpeg"
        alt=""
        width={1254}
        height={1254}
        priority
        unoptimized
        aria-hidden="true"
      />
    </span>
  );
}
