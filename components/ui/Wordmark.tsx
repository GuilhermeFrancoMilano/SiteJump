import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={cn("wordmark", className)} aria-label="Jump Performance">
      <span>JUMP</span>
      <span>PERFORMANCE</span>
    </span>
  );
}
