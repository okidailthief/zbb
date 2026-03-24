import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote | Weddings & Private Events",
  description:
    "Request a quote for your wedding, corporate event, or private party in Charleston, SC. Zach Bedell offers customizable live music packages.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
