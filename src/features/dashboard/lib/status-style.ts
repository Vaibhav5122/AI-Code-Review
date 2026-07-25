import { cn } from "@/lib/utils";

export const statusBadgeClass = {
  success:
    "border-green-500/40 bg-green-500/15 text-green-700 dark:text-green-400",
  warning:
    "border-yellow-500/40 bg-yellow-500/15 text-yellow-700 dark:text-yellow-400",
  danger: "border-red-500/40 bg-red-500/15 text-red-700 dark:text-red-400",
  info: "border-blue-500/40 bg-blue-500/15 text-blue-700 dark:text-blue-400",
  neutral: "border-border bg-muted text-muted-foreground",
} as const;

export const statusButtonClass = {
  success:
    "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500/50 dark:border dark:border-green-500/50 dark:bg-green-500/10 dark:text-green-400 dark:hover:bg-green-500/20",
  warning:
    "border border-yellow-500/50 bg-yellow-500/10 text-yellow-800 hover:bg-yellow-500/20 dark:text-yellow-400 dark:hover:bg-yellow-500/20",
  danger:
    "border border-red-500/50 bg-red-500/10 text-red-700 hover:bg-red-500/20 dark:text-red-400 dark:hover:bg-red-500/20",
} as const;

export function statusBadge(
  tone: keyof typeof statusBadgeClass,
  className?: string,
) {
  return cn(
    "inline-flex items-center rounded-none border px-2 py-1 text-xs font-medium capitalize",
    statusBadgeClass[tone],
    className,
  );
}
