import { requireAuth } from "@/features/auth/actions";
import { DashboardShell } from "@/features/dashboard/components/dashboard-shell";
import { Toaster } from "sonner";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requireAuth();

  return (
    <DashboardShell user={session.user} plan="Pro">
      {children}
      <Toaster />
    </DashboardShell>
  );
}
