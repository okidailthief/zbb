import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zachbedell.com"),
  title: {
    default: "Zach Bedell | Charleston SC Wedding Band & Live Music",
    template: "%s | Zach Bedell",
  },
  description:
    "Zach Bedell is a multi-instrumentalist based in Charleston, SC specializing in weddings, private events, and live music. Berklee College of Music graduate with over a decade of experience.",
  keywords: [
    "charleston wedding band",
    "charleston live music",
    "charleston wedding musician",
    "charleston sc private event band",
    "live band for hire charleston",
    "zach bedell",
    "zach bedell band",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zachbedell.com",
    siteName: "Zach Bedell",
    title: "Zach Bedell | Charleston SC Wedding Band & Live Music",
    description:
      "Multi-instrumentalist based in Charleston, SC specializing in weddings, private events, and live music.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zach Bedell | Charleston SC Wedding Band & Live Music",
    description:
      "Multi-instrumentalist based in Charleston, SC specializing in weddings, private events, and live music.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-[#1c1917] text-[#fafaf9] antialiased">
        <Nav />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
