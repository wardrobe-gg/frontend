"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeaderLinkProps {
  targetURL: string;
  children: React.ReactNode;
  vanityURLs?: string[];
  className?: string;
}

export default function HeaderLink({
  targetURL,
  children,
  className = "",
  vanityURLs = [],
}: HeaderLinkProps) {
  const path = usePathname();

  const boolToStyle =
    vanityURLs.length > 0 ? vanityURLs.includes(path) : path === targetURL;

  return (
    <Link
      href={targetURL}
      className={`${boolToStyle ? "text-white" : "text-custom-gray-light"} ${className}`}
    >
      {children}
    </Link>
  );
}
