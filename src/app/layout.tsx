import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/shared/ui/utils";
import { AppProvider } from "./_providers/app-provider";

export const metadata: Metadata = {
  title: "Ales embroidery",
  description: "Ales embroidery",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <main>
          <AppProvider>{children}</AppProvider>
        </main>
      </body>
    </html>
  );
}
