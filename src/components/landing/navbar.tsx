"use client";

import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/mode-toogle";
import { UserMenuWithSession } from "@/features/auth/components/user-menu";
import { authClient } from "@/lib/auth-client";
import { Button, buttonVariants } from "@/components/ui/button";
import { GitHubIcon } from "@/features/auth/components/github-sign-in-form";
import { ArrowRight, LayoutDashboard, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function LandingNavbar() {
  const { data: session, isPending } = authClient.useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex size-9 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shadow-sm transition-transform group-hover:scale-105">
            <Image
              src="/logo2.svg"
              alt="DiffMind"
              width={26}
              height={26}
              className="size-6 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-foreground text-sm sm:text-base flex items-center gap-1.5">
              DiffMind
              <span className="text-[10px] font-medium tracking-wide uppercase px-1.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                v1.0
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <a
            href="#features"
            className="transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="transition-colors hover:text-foreground"
          >
            How It Works
          </a>
          <a
            href="#architecture"
            className="transition-colors hover:text-foreground"
          >
            Architecture
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            FAQ
          </a>
        </nav>

        {/* Right CTA / Session */}
        <div className="hidden sm:flex items-center gap-3">
          <ModeToggle />

          {!isPending && session?.user ? (
            <div className="flex items-center gap-2">
              <Link
                href="/dashboard"
                className={cn(
                  buttonVariants({ size: "sm", variant: "default" }),
                  "gap-1.5",
                )}
              >
                <LayoutDashboard className="size-4" />
                Dashboard
              </Link>
              <UserMenuWithSession variant="compact" />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/sign-in"
                className={buttonVariants({ size: "sm", variant: "ghost" })}
              >
                Sign In
              </Link>
              <Link
                href="/sign-in"
                className={cn(
                  buttonVariants({ size: "sm", variant: "default" }),
                  "gap-1.5 shadow-sm",
                )}
              >
                <GitHubIcon />
                Get Started
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-border bg-background/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-4">
          <nav className="flex flex-col gap-3 text-sm font-medium text-muted-foreground pt-2">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-foreground"
            >
              How It Works
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-foreground"
            >
              Architecture
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-foreground"
            >
              FAQ
            </a>
          </nav>
          <div className="pt-2 border-t border-border/60 flex flex-col gap-2">
            {!isPending && session?.user ? (
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full justify-center gap-2",
                )}
              >
                <LayoutDashboard className="size-4" /> Go to Dashboard
              </Link>
            ) : (
              <Link
                href="/sign-in"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full justify-center gap-2",
                )}
              >
                <GitHubIcon /> Connect with GitHub
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
