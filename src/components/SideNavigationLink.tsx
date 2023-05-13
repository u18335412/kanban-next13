"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const SideNavigationLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const isActive = usePathname().split("/").includes(href);

  return (
    <Link
      href={`board/${href}`}
      className={clsx(
        "flex items-center py-4 px-8 mr-6 font-bold rounded-r-full text-md gap-x-4 transition-all",
        {
          "bg-main-purple text-white": isActive,
          "text-medium-grey": !isActive,
        }
      )}
    >
      {children}
    </Link>
  );
};
