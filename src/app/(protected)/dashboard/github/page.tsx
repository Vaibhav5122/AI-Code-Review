import { requireAuth } from "@/features/auth/actions";
import { DashboardHeader } from "@/features/dashboard/components/dashboard-header";
import { GithubConnectCard } from "@/features/github/components/github-connect-cards";
import { getGithubInstallationStatus } from "@/features/github/server/installation";

export const metadata = {
  title: "Dashboard - GitHub App",
  description: "GitHub integration settings for your account.",
};
const DashboardGithubPage = async () => {
  const session = await requireAuth();
  const installation = await getGithubInstallationStatus(session.user.id);

  return (
    <>
      <DashboardHeader
        title="GitHub App"
        description="Manage your GitHub integration settings."
      />
      <GithubConnectCard userId={session.user.id} installation={installation} />
    </>
  );
};

export default DashboardGithubPage;
