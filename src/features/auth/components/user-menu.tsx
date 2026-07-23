"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { SIGN_IN_PATH } from "../utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronsDownIcon, LogOutIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const DEFAULT_PLAN = "Free";

export type UserMenuUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};
export type UserMenuTriggerVariant = "compact" | "profile";

type UserMenuProps = {
  user: UserMenuUser;
  variant?: UserMenuTriggerVariant;
  plan?: string | null;
  className?: string;
};

export function getDisplayName(user: UserMenuUser) {
  return user.name?.trim() || user.email?.split("@")[0] || "User";
}

export function getInitials(user: UserMenuUser) {
  const source = user.name?.trim() || user.email || "U";
  const parts = source.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return source.slice(0, 2).toUpperCase();
}

function UserAvatar({
  user,
  size = "default",
}: {
  user: UserMenuUser;
  size?: "default" | "sm" | "lg";
}) {
  return (
    <Avatar size={size} className="bg-muted text-muted-foreground">
      {user.image ? (
        <AvatarImage src={user.image} alt={getDisplayName(user)} />
      ) : (
        <AvatarFallback>{getInitials(user)}</AvatarFallback>
      )}
    </Avatar>
  );
}

export function UserMenu({
  user,
  variant = "profile",
  plan = DEFAULT_PLAN,
  className,
}: UserMenuProps) {
  const router = useRouter();
  const displayName = getDisplayName(user);

  const handleSignOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push(SIGN_IN_PATH);
          },
        },
      });
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(className)}
        render={
          variant === "compact" ? (
            <Button
              variant={"ghost"}
              size={"icon"}
              className={"rounded-full"}
              aria-label="Open account menu"
            />
          ) : (
            <Button
              variant={"ghost"}
              className={"gap-2 h-9 px-2"}
              aria-label="Open account menu"
            />
          )
        }
      >
        <UserAvatar
          user={user}
          size={variant === "compact" ? "default" : "sm"}
        />
        {variant === "profile" ? (
          <>
            <span className="font-medium max-w-32 truncate text-sm text-center">
              {displayName}
            </span>
            <ChevronsDownIcon className=" size-4 text-muted-foreground " />
          </>
        ) : null}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={"w-56"}>
        <DropdownMenuGroup>
          <DropdownMenuLabel className={"p-0 font-normal"}>
            <div className="flex items-start px-2 py-2 gap-2">
              <UserAvatar user={user} />
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="truncate text-xs font-medium">{displayName} </p>
                {user.email ? (
                  <p className="truncate text-xs  text-muted-foreground">
                    {user.email}
                  </p>
                ) : null}
                <Badge variant="secondary" className="w-fit text-xs">
                  {plan || DEFAULT_PLAN} plan
                </Badge>
              </div>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive" onClick={handleSignOut}>
            {" "}
            <LogOutIcon /> Sign out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

type UserMenuWithSessionProps = Omit<UserMenuProps, "user">;

export function UserMenuWithSession(props: UserMenuWithSessionProps) {
  // Implementation for UserMenuWithSession
  const { data: session, isPending } = authClient.useSession();
  if (isPending || !session?.user) {
    return null;
  }
  return <UserMenu user={session.user} {...props} />;
}
