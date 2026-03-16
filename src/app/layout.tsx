import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroBackground } from "@/components/hero-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhanush Kumar | Portfolio",
  description: "Personal portfolio of Dhanush Kumar, showcasing projects and skills in computer science.",
  keywords: ["Dhanush Kumar", "Portfolio", "Computer Science", "Web Development", "AI", "React", "Next.js"],
  authors: [{ name: "Dhanush Kumar" }],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhanushkumar.com",
    title: "Dhanush Kumar | Portfolio",
    description: "Personal portfolio of Dhanush Kumar, showcasing projects and skills in computer science.",
    siteName: "Dhanush Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanush Kumar | Portfolio",
    description: "Personal portfolio of Dhanush Kumar",
  },
  manifest: "/manifest.json",
  themeColor: "#06b6d4",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dhanush Kumar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground text-[17px]`}
      >
        {/* Global animated star background */}
        <HeroBackground />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
