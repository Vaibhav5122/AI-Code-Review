import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldSet } from "@/components/ui/field";
import { GitHubSignInForm } from "@/features/auth/components/github-sign-in-form";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your account",
};

type SignInPageProps = Readonly<{
  searchParams: Promise<{ callbackUrl?: string }>;
}>;

const SignInPage = async ({ searchParams }: SignInPageProps) => {
  const { callbackUrl } = await searchParams;
  return (
    <Card className="border-border/80 shadow-sm">
      <CardHeader className="items-center text-center">
        <div className="mb-6 justify-center flex pt-2">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 shadow-sm">
            <Image
              src={"/logo2.svg"}
              alt="DiffMind"
              width={38}
              height={38}
              priority
              className="size-9 object-contain"
            />
          </div>
        </div>
        <CardTitle className="text-base">Welcome back</CardTitle>
        <CardDescription>
          Sign in with github to review and manage your code
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldSet>
          <Field>
            <GitHubSignInForm callbackUrl={callbackUrl} />
            <FieldDescription className="text-center">
              We only request the permissions needed to identity your
              account.You can revoke access at any time in your GitHub settings.
            </FieldDescription>
          </Field>
        </FieldSet>
      </CardContent>
    </Card>
  );
};

export default SignInPage;
