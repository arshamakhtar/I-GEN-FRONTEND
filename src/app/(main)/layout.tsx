import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "~/components/ui/sonner";
import { Providers } from "~/components/provider";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/sidebar/app-sidebar";
import { Separator } from "~/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "~/components/ui/breadcrumb";
import BreadcrumbPageClient from "~/components/sidebar/breadcrumb-client";

export const metadata: Metadata = {
  title: "I GEN",
  description: "I GEN",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className = "min-h-svh flex-col justify-center items-center">
        <Providers>
          <Toaster />
          <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <SidebarInset className="flex h-screen flex-col">
              <header className="bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900/50 dark:via-gray-800 dark:to-gray-900/50 sticky top-0 z-40 border-b border-gray-200/50 dark:border-white/10 px-4 py-3 shadow-sm backdrop-blur-sm supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-gray-800/80">
                <div className="flex shrink-0 grow items-center gap-3">
                  <SidebarTrigger className="-ml-1 h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"/>
                  <Separator orientation="vertical" className="mr-1 data-[orientation=vertical]:h-5 bg-gradient-to-b from-transparent via-gray-300 to-transparent dark:via-gray-600" />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbPageClient />
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </header>
                <main className ="flex-1 overflow-y-auto">
                  {children}
                </main>
            </SidebarInset>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
