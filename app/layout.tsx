import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Agentic Development Lab",
    template: "%s · Agentic Development Lab",
  },
  description:
    "Living documentation of a journey into agentic software development, written in the project we use to practice it.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
