import "@/styles/globals.css";
import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

import { LoadingSpinner } from "@/components/LoadingSpinner";
import { SideNavigation } from "@/components/SideNavigation";

export const metadata = {
  title: "Kanban Board - Next13",
  description: "Kanban Board app using Next.js 13 app directory.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="">
          <div className="flex h-screen max-h-screen">
            <div className="w-full max-w-[18.75rem]  bg-black text-white">
              <Suspense fallback={<LoadingSpinner />}>
                {/* @ts-expect-error Async Server Component */}
                <SideNavigation />
              </Suspense>
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
