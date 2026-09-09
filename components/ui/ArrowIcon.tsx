import { cn } from "@/lib/utils";

type ArrowIconProps = {
  direction?: "up-right" | "down" | "right";
  className?: string;
};

export function ArrowIcon({ direction = "up-right", className }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("arrow-icon", `arrow-icon--${direction}`, className)}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}
