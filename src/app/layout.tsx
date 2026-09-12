import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollPillar } from "@/components/scroll-pillar";
import { SiteBackground } from "@/components/site-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Used for headings only (via the `font-heading` utility) to give the type
// hierarchy more character than the default sans everywhere — body copy
// stays on Geist Sans for readability.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// NOTE: pyllar.com is an assumed/aspirational domain for this pre-launch
// marketing site. Confirm the real production domain before deploying and
// update `metadataBase` (and any absolute URLs) accordingly.
const SITE_DESCRIPTION =
  "Pyllar is all-in-one software for group homes and residential youth facilities — youth profiles, incidents, medications, scheduling, staff, and CARF-oriented reporting in one place.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pyllar.com"),
  title: {
    default: "Pyllar | Group Home & Youth Facility Management Software",
    template: "%s | Pyllar",
  },
  description: SITE_DESCRIPTION,
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
  twitter: {
    card: "summary_large_image",
    title: "Pyllar | Group Home & Youth Facility Management Software",
    description:
      "One secure portal for youth, staff, incidents, medications, scheduling, and CARF-oriented reporting.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-slate-200">
        <SiteBackground />
        <ScrollPillar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
