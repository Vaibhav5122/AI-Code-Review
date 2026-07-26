"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

type DashboardHeaderProps = {
  title: string;
  description?: string;
};
export function DashboardHeader({ title, description }: DashboardHeaderProps) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-4">
      <SidebarTrigger className={"-ml-1"} />
      <Separator orientation="vertical" className="h-4 mr-2" />
      <div className="flex min-w-0 flex-col">
        <h1 className="text-sm truncate font-medium">{title}</h1>
        {description ? (
          <p className="text-xs truncate text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
