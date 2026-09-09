import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  tone?: "lime" | "outline" | "plain";
};

export function ActionLink({ children, className, tone = "outline", ...props }: ActionLinkProps) {
  return (
    <a className={cn("action-link", `action-link--${tone}`, className)} {...props}>
      <span>{children}</span>
    </a>
  );
}
