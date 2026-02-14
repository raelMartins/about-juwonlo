import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Juwonlo | Creative Strategist | Cinematographer | Visual Storyteller",
  description: "Nigerian-born visual creative bridging cinematography, photography, and creative strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="antialiased bg-[#0a0a0a] text-[#f5f5f5] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
