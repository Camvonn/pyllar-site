import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// NOTE: pyllar.com is an assumed/aspirational domain for this pre-launch
// marketing site. Confirm the real production domain before deploying and
// update `metadataBase` (and any absolute URLs) accordingly.
export const metadata: Metadata = {
  metadataBase: new URL("https://www.pyllar.com"),
  title: "Pyllar | Group Home & Youth Facility Management Software",
  description:
    "Pyllar is all-in-one software for group homes and residential youth facilities — youth profiles, incidents, medications, scheduling, staff, and CARF-oriented reporting in one place.",
  keywords: [
    "group home software",
    "residential treatment software",
    "youth facility management",
    "incident reporting software",
    "CARF reporting",
    "group home scheduling",
    "per diem tracking",
  ],
  openGraph: {
    title: "Pyllar | Group Home & Youth Facility Management Software",
    description:
      "One secure portal for youth, staff, incidents, medications, scheduling, and CARF-oriented reporting.",
    siteName: "Pyllar",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
