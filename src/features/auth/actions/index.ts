"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  DEFAULT_AUTH_CALLBACK,
  getSafeCallbackPath,
  SIGN_IN_PATH,
} from "../utils";

export async function signInWithGitHub(formData: FormData) {
  const callback = formData.get("callbackUrl")?.toString() ?? null;

  const redirectTo = getSafeCallbackPath(callback);

  const result = await auth.api.signInSocial({
    body: {
      provider: "github",
      callbackURL: redirectTo,
    },
    headers: await headers(),
  });
  if (result.url) {
    redirect(result.url);
  }
}

export async function getServerSession() {
  return await auth.api.getSession({
    headers: await headers(),
  });
}

export async function requireAuth(redirectTo: string = SIGN_IN_PATH) {
  const session = await getServerSession();
  if (!session) {
    redirect(redirectTo);
  }
  return session;
}

export async function requireUnAuth(
  redirectTo: string = DEFAULT_AUTH_CALLBACK,
) {
  const session = await getServerSession();
  if (session) {
    redirect(redirectTo);
  }
}
