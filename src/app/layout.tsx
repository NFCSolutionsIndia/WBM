import type { Metadata } from "next";
import { Amatic_SC, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const amaticSC = Amatic_SC({
  variable: "--font-amatic",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Waste BE Minerals | Trash to Treasure",
  description: "The only company on Earth extracting 11 critical minerals from batteries, magnets, AND PCBs—under one AI-native roof.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${amaticSC.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
