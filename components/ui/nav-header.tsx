"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const NavHeader = () => {
  return (
    <nav className="flex items-center space-x-6">
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="#features"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Features
      </Link>
      <Link
        href="/pricing"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Pricing
      </Link>
      <Link
        href="#technology"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Technology
      </Link>
      <Link
        href="#roadmap"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Roadmap
      </Link>
    </nav>
  );
};

export default NavHeader;