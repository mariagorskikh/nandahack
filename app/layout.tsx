import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NandaHack: Agentic AI Hackathon · HCLTech and MIT Media Lab",
  description:
    "NandaHack: Agentic AI Hackathon by HCLTech and MIT Media Lab. Build systems, tools, and layers that fix real bottlenecks in how AI agents are deployed, coordinated, and scaled.",
  openGraph: {
    title: "NandaHack: Agentic AI Hackathon",
    description:
      "HCLTech and MIT Media Lab. Build what the AI agent ecosystem is missing.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NandaHack: Agentic AI Hackathon",
    description:
      "HCLTech and MIT Media Lab. Build what the AI agent ecosystem is missing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
